const DATA_URL = './data/prompts.json';

const state = {
  items: [],
  filteredItems: [],
  allTags: [],
  selectedTags: new Set(),
  searchTerm: '',
};

const dom = {
  gallery: document.getElementById('gallery'),
  emptyState: document.getElementById('emptyState'),
  tagFilters: document.getElementById('tagFilters'),
  tagFilterContainer: document.querySelector('.tag-filter-container'),
  searchInput: document.getElementById('searchInput'),
  clearSearch: document.getElementById('clearSearch'),
  clearFilters: document.getElementById('clearFilters'),
  resultStats: document.getElementById('resultStats'),
  modal: document.getElementById('detailModal'),
  modalTitle: document.getElementById('modalTitle'),
  modalSource: document.getElementById('modalSource'),
  modalTags: document.getElementById('modalTags'),
  modalImages: document.getElementById('modalImages'),
  modalPrompts: document.getElementById('modalPrompts'),
  modalExamples: document.getElementById('modalExamples'),
  modalNotes: document.getElementById('modalNotes'),
  modalDescription: document.getElementById('modalDescription'),
  modalClose: document.getElementById('modalClose'),
  toast: document.getElementById('toast'),
};

let searchDebounceTimer = null;
let toastTimer = null;
const HEADER_TOP_HIDE_KEY = 'headerTopHiddenUntil';
let resizeDebounceTimer = null;

init();

async function init() {
  try {
    const dataset = await fetchData();
    state.items = dataset.items || [];
    state.filteredItems = [...state.items];
    state.allTags = buildAllTags(state.items);
    renderTagFilters();
    // After rendering tags, setup collapse/expand behavior
    updateTagCollapseUI();
    renderGallery();
    updateResultStats();
    bindEvents();
    // Ensure resultStats is placed immediately after clearFilters in the DOM
    ensureStatsAfterClearFilters();
    setupHeaderTopDismiss();
  } catch (error) {
    console.error('[prompts] Failed to initialise gallery', error);
    showToast('数据加载失败，请检查控制台。', true);
  }
}

function setupHeaderTopDismiss() {
  const headerTop = document.querySelector('.header-top');
  const closeBtn = document.getElementById('headerTopClose');
  if (!headerTop || !closeBtn) return;

  try {
    const stored = localStorage.getItem(HEADER_TOP_HIDE_KEY);
    const hiddenUntil = stored ? parseInt(stored, 10) : 0;
    if (Number.isFinite(hiddenUntil) && Date.now() < hiddenUntil) {
      headerTop.classList.add('hidden');
    }
  } catch (_) {
    // ignore storage errors
  }

  closeBtn.addEventListener('click', () => {
    headerTop.classList.add('hidden');
    try {
      const oneDayMs = 24 * 60 * 60 * 1000;
      const until = Date.now() + oneDayMs;
      localStorage.setItem(HEADER_TOP_HIDE_KEY, String(until));
    } catch (_) {
      // ignore storage errors; still hide for this session
    }
  });
}

async function fetchData() {
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch dataset: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function buildAllTags(items) {
  const tagSet = new Set();
  items.forEach((item) => {
    (item.tags || []).forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort((a, b) => a.localeCompare(b, 'zh-CN'));
}

function bindEvents() {
  dom.tagFilters.addEventListener('click', onTagClick);
  dom.clearFilters.addEventListener('click', clearFilters);
  dom.searchInput.addEventListener('input', handleSearchInput);
  dom.clearSearch.addEventListener('click', clearSearch);
  // toggle button is created dynamically in renderTagFilters()
  window.addEventListener('resize', () => {
    if (resizeDebounceTimer) window.clearTimeout(resizeDebounceTimer);
    resizeDebounceTimer = window.setTimeout(() => updateTagCollapseUI(), 150);
  });
  dom.modalClose.addEventListener('click', closeModal);
  dom.modal.addEventListener('click', (event) => {
    if (event.target === dom.modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !dom.modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function ensureStatsAfterClearFilters() {
  const btn = dom.clearFilters;
  const stats = dom.resultStats;
  if (!btn || !stats) return;
  if (btn.nextElementSibling !== stats) {
    btn.insertAdjacentElement('afterend', stats);
  }
}

function renderTagFilters() {
  dom.tagFilters.innerHTML = '';
  if (state.allTags.length === 0) {
    dom.tagFilters.classList.add('hidden');
    return;
  }
  dom.tagFilters.classList.remove('hidden');

  state.allTags.forEach((tag) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tag-button';
    button.textContent = tag;
    button.dataset.tag = tag;
    dom.tagFilters.appendChild(button);
  });

  // Ensure there is a toggle button inside the first row (as the last item in flow)
  const existingToggle = dom.tagFilters.querySelector('#toggleTags');
  let toggle;
  if (existingToggle) {
    toggle = existingToggle;
  } else {
    toggle = document.createElement('button');
    toggle.id = 'toggleTags';
    toggle.type = 'button';
    toggle.className = 'ghost-btn tag-toggle-btn hidden';
    toggle.setAttribute('aria-controls', 'tagFilters');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', toggleTagFilters);
    dom.tagFilters.appendChild(toggle);
  }
  dom.toggleTags = toggle;

  // After tags are placed, update collapse UI
  updateTagCollapseUI();
}

function updateTagCollapseUI() {
  const container = dom.tagFilterContainer;
  const list = dom.tagFilters;
  const toggle = dom.toggleTags || list.querySelector('#toggleTags');
  if (!container || !list || !toggle) return;

  // All tag items excluding the toggle
  let items = Array.from(list.children).filter((el) => el !== toggle);
  if (items.length === 0) {
    toggle.classList.add('hidden');
    container.classList.remove('collapsed', 'expanded');
    return;
  }

  const firstTop = items[0].offsetTop;
  let hasMoreThanOneRow = items.some((el) => el.offsetTop !== firstTop);

  // Only need to place the toggle into the first row if there is more than one row
  if (hasMoreThanOneRow) {
    // Try to put the toggle after the last element of the first row
    const firstRow = items.filter((el) => el.offsetTop === firstTop);
    const lastInFirstRow = firstRow[firstRow.length - 1];
    if (lastInFirstRow) {
      list.insertBefore(toggle, lastInFirstRow.nextSibling);
    } else {
      list.insertBefore(toggle, list.firstChild);
    }
    // If toggle still not in the first row (too tight), move it leftwards until it fits
    for (let i = firstRow.length - 1; i >= 0 && toggle.offsetTop !== firstTop; i--) {
      list.insertBefore(toggle, firstRow[i]);
    }
  } else {
    // Single row: place toggle at the end (but it will be hidden anyway)
    list.appendChild(toggle);
  }

  // Recompute first row bottom including the toggle button (if it's in first row)
  items = Array.from(list.children).filter((el) => el !== toggle);
  const firstRowAll = items.filter((el) => el.offsetTop === firstTop);
  if (toggle.offsetTop === firstTop) firstRowAll.push(toggle);
  let rowBottom = firstTop;
  for (const el of firstRowAll) {
    rowBottom = Math.max(rowBottom, el.offsetTop + el.offsetHeight);
  }
  const collapsedHeight = Math.max(0, rowBottom - firstTop);
  list.style.setProperty('--collapsed-height', `${collapsedHeight}px`);

  if (hasMoreThanOneRow) {
    toggle.classList.remove('hidden');
    // Preserve expanded state if already expanded
    if (container.classList.contains('expanded')) {
      toggle.textContent = '收起';
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      container.classList.add('collapsed');
      container.classList.remove('expanded');
      toggle.textContent = '展开';
      toggle.setAttribute('aria-expanded', 'false');
    }
  } else {
    // Only one row; no need for toggle
    toggle.classList.add('hidden');
    container.classList.remove('collapsed', 'expanded');
    toggle.setAttribute('aria-expanded', 'false');
  }
}

function toggleTagFilters() {
  const container = dom.tagFilterContainer;
  if (!container) return;
  const nowExpanded = !container.classList.contains('expanded');
  container.classList.toggle('expanded', nowExpanded);
  container.classList.toggle('collapsed', !nowExpanded);
  if (dom.toggleTags) {
    dom.toggleTags.textContent = nowExpanded ? '收起' : '展开';
    dom.toggleTags.setAttribute('aria-expanded', nowExpanded ? 'true' : 'false');
  }
  // Reposition toggle after layout change
  updateTagCollapseUI();
}

function renderGallery() {
  dom.gallery.innerHTML = '';
  if (state.filteredItems.length === 0) {
    dom.emptyState.classList.remove('hidden');
    return;
  }
  dom.emptyState.classList.add('hidden');

  state.filteredItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'prompt-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `查看案例 ${item.id}：${item.title}`);

    if (item.coverImage) {
      const img = document.createElement('img');
      img.dataset.src = item.coverImage; // Use data-src for lazy loading
      img.src = './assets/loading.png'; // Placeholder image
      img.alt = `案例 ${item.id}：${item.title}`;
      img.loading = 'lazy'; // Optional: Browser-native lazy loading
      card.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'card-placeholder';
      placeholder.textContent = 'No Image';
      card.appendChild(placeholder);
    }

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = `案例 ${item.id}：${item.title}`;
    body.appendChild(title);

    if (item.tags && item.tags.length > 0) {
      const tagContainer = document.createElement('div');
      tagContainer.className = 'card-tags';
      item.tags.slice(0, 4).forEach((tag) => {
        const chip = document.createElement('span');
        chip.className = 'tag-chip';
        chip.textContent = tag;
        tagContainer.appendChild(chip);
      });
      body.appendChild(tagContainer);
    }

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    // 仅保留“示例 ×N”，不显示“提示词 ×N”
    if (item.examples && item.examples.length > 0) {
      const exampleCount = document.createElement('span');
      exampleCount.textContent = `示例 ×${item.examples.length}`;
      meta.appendChild(exampleCount);
    }
    body.appendChild(meta);

    card.appendChild(body);
    card.addEventListener('click', () => openModal(item));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(item);
      }
    });
    dom.gallery.appendChild(card);
  });

  lazyLoadImages(); // Initialize lazy loading
}

function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Load the actual image
        img.removeAttribute('data-src'); // Remove data-src after loading
        observer.unobserve(img); // Stop observing the image
      }
    });
  });

  images.forEach((img) => observer.observe(img));
}

function onTagClick(event) {
  const button = event.target.closest('button[data-tag]');
  if (!button) return;
  const tag = button.dataset.tag;
  if (state.selectedTags.has(tag)) {
    state.selectedTags.delete(tag);
    button.classList.remove('active');
  } else {
    state.selectedTags.add(tag);
    button.classList.add('active');
  }
  applyFilters();
  // Active state may change layout; ensure toggle stays visible in first row
  updateTagCollapseUI();
}

function clearFilters() {
  if (state.selectedTags.size === 0) return;
  state.selectedTags.clear();
  dom.tagFilters.querySelectorAll('.tag-button').forEach((btn) => btn.classList.remove('active'));
  applyFilters();
  updateTagCollapseUI();
}

function handleSearchInput(event) {
  const value = event.target.value;
  state.searchTerm = value;
  dom.clearSearch.style.display = value ? 'inline-flex' : 'none';
  if (searchDebounceTimer) window.clearTimeout(searchDebounceTimer);
  searchDebounceTimer = window.setTimeout(() => {
    applyFilters();
  }, 200);
}

function clearSearch() {
  if (!state.searchTerm) return;
  state.searchTerm = '';
  dom.searchInput.value = '';
  dom.clearSearch.style.display = 'none';
  applyFilters();
}

function applyFilters() {
  const search = state.searchTerm.trim().toLowerCase();
  const selectedTags = Array.from(state.selectedTags);

  state.filteredItems = state.items.filter((item) => {
    if (selectedTags.length > 0) {
      const hasAllTags = selectedTags.every((tag) => item.tags && item.tags.includes(tag));
      if (!hasAllTags) return false;
    }

    if (!search) return true;

    const haystack = [
      `案例 ${item.id}`,
      item.title,
      item.description,
      ...(item.prompts || []),
      ...(item.examples || []),
      ...(item.notes || []),
      ...(item.tags || []),
    ]
      .join('\n')
      .toLowerCase();

    return haystack.includes(search);
  });

  renderGallery();
  updateResultStats();
}

function updateResultStats() {
  const total = state.items.length;
  const filtered = state.filteredItems.length;
  const tags = state.selectedTags.size;
  const hasSearch = Boolean(state.searchTerm.trim());
  const parts = [`共 ${filtered} / ${total} 个案例`];
  if (tags > 0) parts.push(`标签 ×${tags}`);
  if (hasSearch) parts.push('已应用搜索');
  dom.resultStats.textContent = parts.join(' · ');
  //dom.resultStats.textContent = '';
}

function openModal(item) {
  dom.modalTitle.textContent = `案例 ${item.id}：${item.title}`;
  if (item.source && item.source.url) {
    dom.modalSource.innerHTML = `来源：<a href="${item.source.url}" target="_blank" rel="noopener">${item.source.name}</a>`;
  } else {
    dom.modalSource.textContent = '';
  }

  renderModalTags(item.tags || []);
  renderModalImages(item.images || []);
  renderModalPrompts(item.prompts || []);
  renderModalExamples(item.examples || []);
  renderModalNotes(item.notes || []);
  renderModalDescription(item.description);

  dom.modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeModal() {
  dom.modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function renderModalTags(tags) {
  dom.modalTags.innerHTML = '';
  if (!tags.length) {
    dom.modalTags.classList.add('hidden');
    return;
  }
  dom.modalTags.classList.remove('hidden');
  tags.forEach((tag) => {
    const chip = document.createElement('span');
    chip.className = 'tag-chip';
    chip.textContent = tag;
    dom.modalTags.appendChild(chip);
  });
}

function renderModalImages(images) {
  dom.modalImages.innerHTML = '';
  if (!images.length) {
    dom.modalImages.classList.add('hidden');
    return;
  }
  dom.modalImages.classList.remove('hidden');
  const heading = document.createElement('h3');
  heading.textContent = '示例图片';
  dom.modalImages.appendChild(heading);

  const grid = document.createElement('div');
  grid.className = 'image-grid';

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `示例图片 ${index + 1}`;
    img.loading = 'lazy';
    grid.appendChild(img);
  });

  dom.modalImages.appendChild(grid);
}

function renderModalPrompts(prompts) {
  dom.modalPrompts.innerHTML = '';
  if (!prompts.length) {
    dom.modalPrompts.classList.add('hidden');
    return;
  }
  dom.modalPrompts.classList.remove('hidden');
  const heading = document.createElement('h3');
  heading.textContent = '提示词';
  dom.modalPrompts.appendChild(heading);

  prompts.forEach((prompt, index) => {
    dom.modalPrompts.appendChild(createPromptBlock(prompt, index + 1, '提示词'));
  });
}

function renderModalExamples(examples) {
  dom.modalExamples.innerHTML = '';
  if (!examples.length) {
    dom.modalExamples.classList.add('hidden');
    return;
  }
  dom.modalExamples.classList.remove('hidden');
  const heading = document.createElement('h3');
  heading.textContent = '示例提示';
  dom.modalExamples.appendChild(heading);

  examples.forEach((example, index) => {
    dom.modalExamples.appendChild(createPromptBlock(example, index + 1, '示例'));
  });
}

function renderModalNotes(notes) {
  dom.modalNotes.innerHTML = '';
  if (!notes.length) {
    dom.modalNotes.classList.add('hidden');
    return;
  }
  dom.modalNotes.classList.remove('hidden');
  const heading = document.createElement('h3');
  heading.textContent = '提示';
  dom.modalNotes.appendChild(heading);

  const list = document.createElement('ul');
  list.className = 'note-list';
  notes.forEach((note) => {
    const item = document.createElement('li');
    item.textContent = note;
    list.appendChild(item);
  });
  dom.modalNotes.appendChild(list);
}

function renderModalDescription(description) {
  dom.modalDescription.innerHTML = '';
  if (!description) {
    dom.modalDescription.classList.add('hidden');
    return;
  }
  dom.modalDescription.classList.remove('hidden');
  const heading = document.createElement('h3');
  heading.textContent = '补充描述';
  const paragraph = document.createElement('div');
  paragraph.className = 'description-block';
  paragraph.textContent = description;
  dom.modalDescription.appendChild(heading);
  dom.modalDescription.appendChild(paragraph);
}

function createPromptBlock(text, index, label) {
  const block = document.createElement('div');
  block.className = 'prompt-block';

  const meta = document.createElement('div');
  meta.className = 'prompt-meta';
  const left = document.createElement('span');
  left.textContent = `${label} ${index}`;
  meta.appendChild(left);

  const copy = document.createElement('button');
  copy.type = 'button';
  copy.className = 'copy-btn';
  copy.textContent = '复制';
  copy.addEventListener('click', (event) => {
    event.stopPropagation();
    copyPrompt(text, copy);
  });

  meta.appendChild(copy);
  block.appendChild(meta);

  const code = document.createElement('pre');
  code.textContent = text;
  block.appendChild(code);

  return block;
}

async function copyPrompt(text, button) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    animateCopyButton(button);
    showToast('提示词已复制 ✅');
  } catch (error) {
    console.warn('[prompts] clipboard API failed, fallback', error);
    fallbackCopy(text);
    animateCopyButton(button, true);
    showToast('已使用备用方式复制', false);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function animateCopyButton(button, withWarning = false) {
  button.textContent = withWarning ? '已复制（备用）' : '已复制';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = '复制';
    button.disabled = false;
  }, 1800);
}

function showToast(message, isError = false) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.classList.toggle('error', isError);
  dom.toast.classList.remove('hidden');
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    dom.toast.classList.add('hidden');
  }, 2200);
}
