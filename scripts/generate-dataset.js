#!/usr/bin/env node

/**
 * Build a structured JSON dataset from the project markdown prompt collections.
 * The script scans all "<number>.md" files, extracts prompt metadata, attaches
 * heuristic tags, and writes the consolidated payload to data/prompts.json.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = ROOT;
const OUTPUT_DIR = path.join(ROOT, 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'prompts.json');

/**
 * Utility to normalise image paths (remove leading "./").
 */
function normaliseImagePath(src) {
  if (!src) return null;
  return src.replace(/^\.\//, '');
}

/**
 * Extract a clean text version of a markdown inline fragment that might contain
 * emphasis markers (e.g. "**提示：内容**").
 */
function stripMarkdownEmphasis(text) {
  return text.replace(/^\*\*/g, '').replace(/\*\*$/g, '').trim();
}

/**
 * Generate tags for an entry based on title, prompts, and supplemental text.
 * Tags are derived heuristically from keyword matches in both English and Chinese.
 */
function generateTags(entry) {
  const parts = [
    entry.title || '',
    entry.description || '',
    ...(entry.prompts || []),
    ...(entry.examples || []),
    ...(entry.notes || []),
  ];
  const textFull = parts.join('\n');
  const textLower = textFull.toLowerCase();

  const has = (checker) => checker(textFull, textLower);

  const tagMatchers = [
    { tag: '3d', match: (full, lower) => /3d|三维|立体/.test(full) },
    { tag: 'cartoon', match: (full, lower) => full.includes('卡通') || lower.includes('cartoon') },
    { tag: 'illustration', match: (full, lower) => full.includes('插画') || full.includes('插图') || lower.includes('illustration') },
    { tag: 'logo', match: (full, lower) => full.includes('LOGO') || full.includes('Logo') || full.includes('标志') },
    { tag: 'branding', match: (full, lower) => full.includes('品牌') || lower.includes('brand') },
    { tag: 'photography', match: (full, lower) => full.includes('摄影') || lower.includes('photograph') || lower.includes('photo') },
    { tag: 'sculpture', match: (full, lower) => full.includes('雕塑') || lower.includes('sculpture') || lower.includes('statue') },
    { tag: 'neon', match: (full, lower) => full.includes('霓虹') || lower.includes('neon') },
    { tag: 'retro', match: (full, lower) => full.includes('复古') || lower.includes('retro') || lower.includes('vintage') },
    { tag: 'futuristic', match: (full, lower) => full.includes('未来') || lower.includes('futuristic') || lower.includes('sci-fi') },
    { tag: 'minimalist', match: (full, lower) => full.includes('极简') || lower.includes('minimal') },
    { tag: 'pixel', match: (full, lower) => full.includes('像素') || lower.includes('pixel') || lower.includes('8-bit') },
    { tag: 'paper-craft', match: (full, lower) => full.includes('纸') || full.includes('折纸') || lower.includes('origami') || lower.includes('paper') },
    { tag: 'clay', match: (full, lower) => full.includes('粘土') || full.includes('陶土') || full.includes('泥塑') || full.includes('泥巴') || lower.includes('clay') },
    { tag: 'felt', match: (full, lower) => full.includes('毛毡') || lower.includes('felt') || lower.includes('wool') },
    { tag: 'toy', match: (full, lower) => full.includes('玩具') || lower.includes('toy') || lower.includes('figurine') },
    { tag: 'character', match: (full, lower) => full.includes('角色') || lower.includes('character') || lower.includes('avatar') },
    { tag: 'product', match: (full, lower) => full.includes('产品') || full.includes('商品') || lower.includes('product') || lower.includes('packaging') },
    { tag: 'poster', match: (full, lower) => full.includes('海报') || lower.includes('poster') },
    { tag: 'landscape', match: (full, lower) => full.includes('景观') || full.includes('场景') || lower.includes('landscape') || lower.includes('environment') },
    { tag: 'architecture', match: (full, lower) => full.includes('建筑') || lower.includes('architecture') || lower.includes('building') },
    { tag: 'fashion', match: (full, lower) => full.includes('服装') || full.includes('穿搭') || lower.includes('fashion') },
    { tag: 'food', match: (full, lower) => full.includes('食') || full.includes('餐') || lower.includes('food') || lower.includes('cafe') || lower.includes('kitchen') },
    { tag: 'fantasy', match: (full, lower) => full.includes('奇幻') || lower.includes('fantasy') || lower.includes('myth') },
    { tag: 'sci-fi', match: (full, lower) => lower.includes('sci-fi') || full.includes('科幻') || lower.includes('cyber') },
    { tag: 'ui', match: (full, lower) => /\bui\b/.test(lower) || lower.includes('user interface') || full.includes('界面') },
    { tag: 'typography', match: (full, lower) => full.includes('字体') || full.includes('排版') || lower.includes('typography') || lower.includes('lettering') },
    { tag: 'animal', match: (full, lower) => full.includes('动物') || lower.includes('animal') || lower.includes('creature') },
    { tag: 'emoji', match: (full, lower) => lower.includes('emoji') || full.includes('表情包') || full.includes('表情符号') },
    { tag: 'infographic', match: (full, lower) => full.includes('信息图') || lower.includes('infographic') || lower.includes('diagram') },
    { tag: 'gaming', match: (full, lower) => full.includes('游戏') || lower.includes('game') || lower.includes('minecraft') },
    { tag: 'vehicle', match: (full, lower) => lower.includes('vehicle') || full.includes('车') || lower.includes('car') || lower.includes('bike') || lower.includes('ship') },
    { tag: 'portrait', match: (full, lower) => full.includes('肖像') || full.includes('人物') || lower.includes('portrait') },
    { tag: 'nature', match: (full, lower) => full.includes('自然') || full.includes('花') || lower.includes('nature') || lower.includes('floral') || lower.includes('garden') },
    { tag: 'interior', match: (full, lower) => full.includes('室内') || lower.includes('interior') || lower.includes('room') },
    { tag: 'data-viz', match: (full, lower) => lower.includes('data') && (lower.includes('chart') || lower.includes('graph')) },
  ];

  const tags = new Set();
  for (const matcher of tagMatchers) {
    if (has(matcher.match)) {
      tags.add(matcher.tag);
    }
  }

  if (tags.size === 0) {
    tags.add('creative');
  }

  return Array.from(tags).sort();
}

/**
 * Parse an individual markdown file into structured prompt entries.
 */
function parseMarkdownFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split(/\r?\n/);

  const entries = [];
  let current = null;
  let currentSection = null;
  let inCodeBlock = false;
  let codeBuffer = [];

  const commitEntry = () => {
    if (!current) return;
    current.prompts = current.prompts || [];
    current.examples = current.examples || [];
    current.notes = current.notes || [];
    current.description = (current.descriptionLines || []).join('\n').trim();
    delete current.descriptionLines;
    current.tags = generateTags(current);
    current.coverImage = current.images.length > 0 ? current.images[0] : null;
    entries.push(current);
    current = null;
  };

  const pushCodeBuffer = () => {
    const text = codeBuffer.join('\n').trim();
    codeBuffer = [];
    if (!currentSection || !text) return;
    if (currentSection === 'prompt') {
      current.prompts.push(text);
    } else if (currentSection === 'example') {
      current.examples.push(text);
    } else if (currentSection === 'note') {
      current.notes.push(text);
    } else {
      current.descriptionLines.push(text);
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!inCodeBlock && /^<a id="prompt-(\d+)"><\/a>/.test(trimmed)) {
      commitEntry();
      const [, id] = trimmed.match(/^<a id="prompt-(\d+)"><\/a>/);
      current = {
        id: Number(id),
        slug: `prompt-${id}`,
        title: '',
        source: null,
        model: null,
        images: [],
        prompts: [],
        examples: [],
        notes: [],
        descriptionLines: [],
        originFile: path.basename(filePath),
      };
      currentSection = null;
      return;
    }

    if (!current) {
      return;
    }

    if (!inCodeBlock && /^<\/?div\b/i.test(trimmed)) {
      return;
    }

    if (!inCodeBlock && /^##\s*案例/.test(trimmed)) {
      const headingMatch = trimmed.match(
        /^##\s*案例\s+(\d+)[：:]\s*(.+?)(?:\s*\(来源\s*\[([^\]]+)\]\(([^)]+)\)\))?(?:\s*模型[：:]\s*([^\s].*?))?\s*$/
      );
      if (headingMatch) {
        const [, idStr, titlePart, sourceLabel, sourceLink, modelText] = headingMatch;
        current.title = titlePart.trim();
        if (sourceLabel && sourceLink) {
          current.source = { name: sourceLabel.trim(), url: sourceLink.trim() };
        }
        if (modelText) {
          current.model = modelText.trim();
        }
      } else {
        current.title = strippedHeading(trimmed);
      }
      currentSection = null;
      return;
    }

    if (!inCodeBlock && /^<img\b/.test(trimmed)) {
      const imgMatch = trimmed.match(/src="([^"]+)"/);
      if (imgMatch) {
        current.images.push(normaliseImagePath(imgMatch[1]));
      }
      return;
    }

    if (!inCodeBlock && /^```/.test(trimmed)) {
      inCodeBlock = true;
      codeBuffer = [];
      return;
    }

    if (inCodeBlock && /^```/.test(trimmed)) {
      inCodeBlock = false;
      pushCodeBuffer();
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    if (/^\*\*.*提示词.*[:：]/.test(trimmed)) {
      currentSection = 'prompt';
      return;
    }

    if (/^\*\*示例[:：]/.test(trimmed)) {
      currentSection = 'example';
      return;
    }

    if (/^\*\*提示[:：]/.test(trimmed)) {
      const tipContent = stripMarkdownEmphasis(trimmed.replace(/^\*\*提示[:：]/, '').trim());
      if (tipContent) {
        current.notes.push(tipContent);
      }
      currentSection = 'note';
      return;
    }

    if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length > 4) {
      // Preserve other emphasised text as description.
      current.descriptionLines.push(stripMarkdownEmphasis(trimmed));
      return;
    }

    if (trimmed) {
      // Collect residual text as description for context.
      current.descriptionLines.push(trimmed);
    } else {
      currentSection = null;
    }
  });

  commitEntry();
  return entries;
}

/**
 * Fallback heading stripper if heading parsing fails.
 */
function strippedHeading(heading) {
  return heading.replace(/^##\s*/, '').trim();
}

function ensureOutputDirectory() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

function main() {
  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((name) => /^\d+\.md$/.test(name))
    .sort((a, b) => Number(a.replace('.md', '')) - Number(b.replace('.md', '')));

  const readmePath = path.join(SOURCE_DIR, 'README.md');
  if (fs.existsSync(readmePath)) {
    files.push('README.md');
  }

  if (files.length === 0) {
    console.error('No numbered markdown files found to parse.');
    process.exit(1);
  }

  const allEntries = [];
  files.forEach((fileName) => {
    const filePath = path.join(SOURCE_DIR, fileName);
    const fileEntries = parseMarkdownFile(filePath);
    allEntries.push(...fileEntries);
  });

  // Sort by id descending so newest prompts appear first.
  allEntries.sort((a, b) => b.id - a.id);

  const payload = {
    generatedAt: new Date().toISOString(),
    total: allEntries.length,
    items: allEntries,
  };

  ensureOutputDirectory();
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(payload, null, 2), 'utf8');

  console.log(`Generated ${allEntries.length} prompt entries into ${path.relative(ROOT, OUTPUT_FILE)}`);
}

main();
