#!/usr/bin/env node
/**
 * Lightweight local server to append new prompt entries into README.md.
 * No external dependencies. Start with: `node scripts/submit-server.js`
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = process.env.PORT ? Number(process.env.PORT) : 8787;
const ALLOWED_EXTS = ['jpeg', 'jpg', 'png', 'webp', 'gif'];

function send(res, status, body, headers = {}) {
  const defaultHeaders = {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store',
  };
  res.writeHead(status, { ...defaultHeaders, ...headers });
  res.end(body);
}

function sendJson(res, status, obj) {
  send(res, status, JSON.stringify(obj), { 'Content-Type': 'application/json; charset=utf-8' });
}

function serveFile(res, filePath, contentType = 'text/html; charset=utf-8') {
  try {
    const data = fs.readFileSync(filePath);
    send(res, 200, data, { 'Content-Type': contentType });
  } catch (err) {
    send(res, 404, 'Not Found');
  }
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      const ct = req.headers['content-type'] || '';
      try {
        if (ct.includes('application/json')) {
          resolve(JSON.parse(raw || '{}'));
        } else if (ct.includes('application/x-www-form-urlencoded')) {
          const params = new URLSearchParams(raw);
          const obj = {};
          for (const [k, v] of params.entries()) obj[k] = v;
          resolve(obj);
        } else {
          resolve({ raw });
        }
      } catch (e) {
        reject(e);
      }
    });
  });
}

function sanitizeId(id) {
  const n = Number(String(id).trim());
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.floor(n);
}

function escapeHtmlAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function findImageExtension(id) {
  for (const ext of ALLOWED_EXTS) {
    const p = path.join(ROOT, 'images', `${id}.${ext}`);
    if (fs.existsSync(p)) return ext;
  }
  // Not found
  return null;
}

function collectImagesForId(id) {
  const results = [];
  // base image
  for (const ext of ALLOWED_EXTS) {
    const p = path.join(ROOT, 'images', `${id}.${ext}`);
    if (fs.existsSync(p)) { results.push(`images/${id}.${ext}`); break; }
  }
  // suffixed images id-2, id-3, ... up to 20
  for (let n = 2; n <= 20; n++) {
    let found = false;
    for (const ext of ALLOWED_EXTS) {
      const p = path.join(ROOT, 'images', `${id}-${n}.${ext}`);
      if (fs.existsSync(p)) { results.push(`images/${id}-${n}.${ext}`); found = true; break; }
    }
    if (!found) break;
  }
  return results;
}

function buildEntry({ id, title, prompt_en, prompt_zh, source_name, source_url, model, images }) {
  const lines = [];
  lines.push(`<a id="prompt-${id}"></a>`);
  const sourcePart = source_name && source_url
    ? ` (来源 [${source_name}](${source_url}))`
    : '';
  const modelPart = model && String(model).trim() ? ` 模型：${String(model).trim()}` : '';
  lines.push(`## 案例 ${id}：${title}${sourcePart}${modelPart}`);
  lines.push('');
  lines.push('<div style="display: flex; justify-content: space-between;">');
  const alt = `Awesome GPT4o/GPT-4o Image Prompts-${title}`;
  const imgs = Array.isArray(images) ? images.slice() : [];
  if (imgs.length === 0) {
    const ext = findImageExtension(id);
    if (ext) imgs.push(`images/${id}.${ext}`);
  }
  const single = imgs.length <= 1;
  for (const img of imgs) {
    const width = single ? '98%' : '48%';
    lines.push(`<img src="./${img}" style="width: ${width};" alt="${escapeHtmlAttr(alt)}">`);
  }
  lines.push('</div>');
  lines.push('');

  if (prompt_en && String(prompt_en).trim().length > 0) {
    lines.push('**提示词：**');
    lines.push('```');
    lines.push(String(prompt_en).trim());
    lines.push('```');
    lines.push('');
  }

  if (prompt_zh && String(prompt_zh).trim().length > 0) {
    lines.push('**中文提示词：**');
    lines.push('```');
    lines.push(String(prompt_zh).trim());
    lines.push('```');
    lines.push('');
  }

  return lines.join('\n');
}

function inferSourceNameFromUrl(urlStr) {
  if (!urlStr) return null;
  try {
    const u = new URL(urlStr);
    const host = (u.hostname || '').replace(/^www\./, '');
    const segs = (u.pathname || '').split('/').filter(Boolean);
    if (segs.length === 0) return null;
    const user = segs[0].replace(/^@/, '');
    if ([
      'x.com', 'twitter.com', 'instagram.com', 'weibo.com', 'bsky.app', 'tiktok.com', 'github.com'
    ].includes(host)) {
      return '@' + user;
    }
    return null;
  } catch (_) {
    return null;
  }
}

function extractIdsFromText(text) {
  const ids = new Set();
  if (!text) return ids;
  // Anchor pattern
  for (const m of text.matchAll(/<a id=\"prompt-(\d+)\"><\/a>/g)) {
    ids.add(Number(m[1]));
  }
  // Heading pattern: ## 案例 123：
  for (const m of text.matchAll(/##\s*案例\s*(\d+)\s*[：:]/g)) {
    ids.add(Number(m[1]));
  }
  return ids;
}

function collectAllExistingIds() {
  const files = [];
  const rootFiles = fs.readdirSync(ROOT);
  for (const name of rootFiles) {
    if (/^\d+\.md$/.test(name) || name === 'README.md') {
      files.push(path.join(ROOT, name));
    }
  }
  const ids = new Set();
  for (const fp of files) {
    try {
      const text = fs.readFileSync(fp, 'utf8');
      const set = extractIdsFromText(text);
      for (const id of set) ids.add(id);
    } catch (_) {}
  }
  return ids;
}

function nextId() {
  const ids = collectAllExistingIds();
  let max = 0;
  for (const n of ids) if (Number.isFinite(n) && n > max) max = n;
  return max + 1;
}

function handleSave(req, res) {
  parseBody(req)
    .then((body) => {
      const id = nextId();
      const title = (body.title || '').trim();
      const prompt_en = (body.prompt_en || '').trim();
      const prompt_zh = (body.prompt_zh || '').trim();
      let source_name = (body.source_name || '').trim();
      const source_url = (body.source_url || '').trim();
      const model = (body.model || '').trim();

      if (!title) {
        return sendJson(res, 400, { ok: false, error: '标题不能为空' });
      }
      if (!prompt_en && !prompt_zh) {
        return sendJson(res, 400, { ok: false, error: '英文提示词或中文提示词至少填写一个' });
      }

      if (!source_name && source_url) {
        const inferred = inferSourceNameFromUrl(source_url);
        if (inferred) source_name = inferred;
      }

      const images = collectImagesForId(id);
      if (images.length === 0) {
        return sendJson(res, 400, { ok: false, error: `未找到图片：images/${id}.(jpeg|jpg|png|webp|gif) 或 images/${id}-2.* 等。请先将对应编号的图片放入 images/ 目录后再提交。` });
      }

      const entry = buildEntry({ id, title, prompt_en, prompt_zh, source_name, source_url, model, images });

      const readmePath = path.join(ROOT, 'README.md');
      let content = fs.readFileSync(readmePath, 'utf8');

      // Update TOC block by inserting the new bullet at the top (newest first).
      content = updateToc(content, id, title);

      content = insertEntryAtTop(content, entry);
      fs.writeFileSync(readmePath, content, 'utf8');

      return sendJson(res, 200, { ok: true, id, title, message: '已保存到 README.md', usedImages: images });
    })
    .catch((err) => {
      console.error('Save error:', err);
      sendJson(res, 500, { ok: false, error: '服务器错误' });
    });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/submit.html')) {
    return serveFile(res, path.join(ROOT, 'submit.html'), 'text/html; charset=utf-8');
  }

  if (req.method === 'POST' && url.pathname === '/save') {
    return handleSave(req, res);
  }

  if (req.method === 'GET' && url.pathname === '/next-id') {
    return sendJson(res, 200, { ok: true, nextId: nextId() });
  }

  if (req.method === 'GET' && url.pathname === '/check-image') {
    const idParam = (new URL(req.url, `http://${req.headers.host}`)).searchParams.get('id');
    const id = sanitizeId(idParam);
    if (!id) return sendJson(res, 400, { ok: false, error: 'id 无效' });
    const ext = findImageExtension(id);
    const exists = !!ext;
    return sendJson(res, 200, { ok: true, id, exists, ext: ext || null, path: exists ? `images/${id}.${ext}` : null });
  }

  if (req.method === 'GET' && url.pathname === '/check-images') {
    const idParam = (new URL(req.url, `http://${req.headers.host}`)).searchParams.get('id');
    const id = sanitizeId(idParam);
    if (!id) return sendJson(res, 400, { ok: false, error: 'id 无效' });
    const images = collectImagesForId(id);
    return sendJson(res, 200, { ok: true, id, count: images.length, images });
  }

  // Allow serving minimal assets if needed later
  if (req.method === 'GET' && url.pathname.startsWith('/assets/')) {
    const fp = path.join(ROOT, url.pathname);
    const ext = path.extname(fp).toLowerCase();
    const type = ext === '.css' ? 'text/css; charset=utf-8' : 'application/octet-stream';
    return serveFile(res, fp, type);
  }

  send(res, 404, 'Not Found');
});

server.listen(PORT, () => {
  console.log(`Submit server running at http://localhost:${PORT}`);
});

function updateToc(content, id, title) {
  try {
    const bulletRegex = new RegExp('^\\*\\s+\\[案例\\s+' + id + '[：:]', 'm');
    if (bulletRegex.test(content)) {
      return content; // already exists
    }

    const headingRe = /^##\s*📖\s*案例目录\s*$/m;
    const match = headingRe.exec(content);
    if (!match) return content;

    const afterHeadingIdx = match.index + match[0].length;
    const rest = content.slice(afterHeadingIdx);
    const firstBulletRe = /^\*.*$/m;
    const fb = firstBulletRe.exec(rest);
    const prefixIfNeeded = (idx) => (idx > 0 && content[idx - 1] === '\n') ? '' : '\n';
    const newBulletLine = `*   [案例 ${id}：${title} ](#prompt-${id})`;
    if (fb) {
      const absIdx = afterHeadingIdx + fb.index;
      const nl = prefixIfNeeded(absIdx);
      return content.slice(0, absIdx) + nl + newBulletLine + '\n' + content.slice(absIdx);
    } else {
      // No bullet found; append right after heading
      const nl = prefixIfNeeded(afterHeadingIdx);
      return content.slice(0, afterHeadingIdx) + nl + newBulletLine + '\n' + rest;
    }
  } catch (_) {
    return content;
  }
}

function insertEntryAtTop(content, entry) {
  try {
    const reFirstAnchor = /<a id="prompt-(\d+)"><\/a>/m;
    const m = reFirstAnchor.exec(content);
    if (!m) {
      const needsLeadingNewline = content.length > 0 && !content.endsWith('\n');
      const prefix = needsLeadingNewline ? '\n\n' : '\n\n';
      return content + prefix + entry;
    }
    const idx = m.index;
    const before = content.slice(0, idx);
    const after = content.slice(idx);
    const pre = before && !before.endsWith('\n') ? '\n' : '';
    return `${before}${pre}\n${entry}\n${after}`;
  } catch (_) {
    // Fallback to append
    const needsLeadingNewline = content.length > 0 && !content.endsWith('\n');
    const prefix = needsLeadingNewline ? '\n\n' : '\n\n';
    return content + prefix + entry;
  }
}
