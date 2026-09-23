/* ============================================================
   เว็บสื่อการสอน พีชคณิตเชิงเส้น 2301234 (1/2569)
   main.js — sidebar, theme, KaTeX, progress, stepwise solutions
   ============================================================ */
'use strict';

/* ---------- โครงสร้างหลักสูตร ---------- */
const SITE = {
  course: 'พีชคณิตเชิงเส้น 2301234',
  term: '1/2569',
  chapters: [
    {
      ch: 1, color: '#0ea5e9', title: 'ระบบเชิงเส้น', en: 'Linear Systems',
      sections: [
        { no: '1.1', file: 'ch1-1.html', title: 'เมทริกซ์และระบบเชิงเส้น', practice: 6 },
        { no: '1.2', file: 'ch1-2.html', title: 'เมทริกซ์ขั้นบันได', practice: 6 },
        { no: '1.3', file: 'ch1-3.html', title: 'การรวมเชิงเส้นและการแผ่ทั่ว', practice: 6 },
        { no: '1.4', file: 'ch1-4.html', title: 'เซตผลเฉลยและอิสระเชิงเส้น', practice: 6 },
      ],
    },
    {
      ch: 2, color: '#8b5cf6', title: 'การแปลงเชิงเส้นและพีชคณิตเมทริกซ์', en: 'Linear Transformations & Matrix Algebra',
      sections: [
        { no: '2.1', file: 'ch2-1.html', title: 'การแปลงเชิงเส้นและเมทริกซ์มาตรฐาน', practice: 6 },
        { no: '2.2', file: 'ch2-2.html', title: 'ปริภูมิย่อย ฐานหลัก มิติ และแรงก์', practice: 6 },
        { no: '2.3', file: 'ch2-3.html', title: 'เมทริกซ์ผกผันของเมทริกซ์จัตุรัส', practice: 6 },
        { no: '2.4', file: 'ch2-4.html', title: 'ดีเทอร์มิแนนต์', practice: 6 },
      ],
    },
    {
      ch: 3, color: '#ec4899', title: 'ค่าลักษณะเฉพาะและเวกเตอร์ลักษณะเฉพาะ', en: 'Eigenvalues & Eigenvectors',
      sections: [
        { no: '3.1', file: 'ch3-1.html', title: 'เมทริกซ์สำหรับการแปลงเชิงเส้นและการเปลี่ยนฐานหลัก', practice: 6 },
        { no: '3.2', file: 'ch3-2.html', title: 'ค่าลักษณะเฉพาะ เวกเตอร์ลักษณะเฉพาะ และการแปลงเป็นทแยงมุม', practice: 6 },
        { no: '3.3', file: 'ch3-3.html', title: 'ระบบสมการเชิงอนุพันธ์', practice: 6 },
      ],
    },
    {
      ch: 4, color: '#10b981', title: 'เรขาคณิตเชิงเส้นและฐานหลักเชิงตั้งฉาก', en: 'Orthogonality & Least Squares',
      sections: [
        { no: '4.1', file: 'ch4-1.html', title: 'ผลคูณภายในและเซตเชิงตั้งฉาก', practice: 6 },
        { no: '4.2', file: 'ch4-2.html', title: 'การฉายเชิงตั้งฉากและกระบวนการกราม-ชมิดต์', practice: 6 },
        { no: '4.3', file: 'ch4-3.html', title: 'ปัญหากำลังสองน้อยสุด', practice: 6 },
        { no: '4.4', file: 'ch4-4.html', title: 'การแปลงเป็นทแยงมุมของเมทริกซ์สมมาตร', practice: 6 },
        { no: '4.5', file: 'ch4-5.html', title: 'รูปแบบกำลังสอง', practice: 6 },
      ],
    },
    {
      ch: 5, color: '#f59e0b', title: 'แนวคิดเชิงนามธรรมของพีชคณิตเชิงเส้น', en: 'Abstract Vector Spaces',
      sections: [
        { no: '5.1', file: 'ch5-1.html', title: 'ปริภูมิเวกเตอร์และปริภูมิย่อย', practice: 6 },
        { no: '5.2', file: 'ch5-2.html', title: 'การแปลงเชิงเส้น', practice: 6 },
        { no: '5.3', file: 'ch5-3.html', title: 'ปริภูมิผลคูณภายใน', practice: 6 },
      ],
    },
    {
      ch: 6, color: '#ef4444', title: 'ติวสอบตามแนวข้อสอบจริง', en: 'Exam Prep',
      sections: [
        { no: 'M', file: 'exam-midterm.html', title: 'ติว Midterm — แนวข้อสอบกลางภาค', practice: 8, disp: '🎓 ติว Midterm' },
        { no: 'F', file: 'exam-final.html', title: 'ติว Final — แนวข้อสอบปลายภาค', practice: 8, disp: '🎓 ติว Final' },
      ],
    },
  ],
};

/* ป้ายแสดงชื่อหน้า (หน้าติวสอบมี disp เฉพาะตัว) */
function secLabel(s) { return s.disp ? s.disp : s.no + ' ' + s.title; }

const flatSections = [];
SITE.chapters.forEach((c) => c.sections.forEach((s) => flatSections.push({ ...s, ch: c.ch, color: c.color, chTitle: c.title })));

/* ---------- storage ---------- */
const PKEY = 'la269-progress';
function getProgress() {
  try { return new Set(JSON.parse(localStorage.getItem(PKEY) || '[]')); } catch { return new Set(); }
}
function saveProgress(set) {
  localStorage.setItem(PKEY, JSON.stringify([...set]));
}
function secKeyPrefix(secNo) { return 'p' + secNo.replace('.', '-') + '-'; }
function secDoneCount(secNo, total) {
  const pre = secKeyPrefix(secNo); const prog = getProgress();
  let n = 0; for (let i = 1; i <= total; i++) if (prog.has(pre + i)) n++;
  return n;
}
function chapterCounts(chIdx) {
  const c = SITE.chapters[chIdx];
  const total = c.sections.reduce((a, s) => a + s.practice, 0);
  const done = c.sections.reduce((a, s) => a + secDoneCount(s.no, s.practice), 0);
  return { done, total };
}

/* ---------- theme ---------- */
function initTheme() {
  const saved = localStorage.getItem('la269-theme');
  const theme = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon();
}
function updateThemeIcon() {
  const btn = document.getElementById('themeBtn');
  if (!btn) return;
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = dark ? '☀️' : '🌙';
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('la269-theme', next);
  updateThemeIcon();
}

/* ---------- sidebar ---------- */
function buildSidebar() {
  const nav = document.getElementById('sidebar');
  if (!nav) return;
  const curSec = document.body.dataset.section || '';
  const curPage = document.body.dataset.page || '';

  let html = `
    <div class="side-search"><input type="search" id="sideSearch" placeholder="ค้นหาหัวข้อ…" aria-label="ค้นหาหัวข้อ"></div>
    <a class="side-home ${curPage === 'index.html' ? 'active' : ''}" href="index.html">🏠 หน้าแรก</a>`;

  for (const c of SITE.chapters) {
    html += `<div class="side-ch" style="--ch-c:${c.color}">
      <div class="side-ch-head"><span class="side-ch-dot">${c.ch}</span><span>${c.title}</span></div>
      <ul class="side-ch-list">`;
    for (const s of c.sections) {
      const done = secDoneCount(s.no, s.practice) >= s.practice && s.practice > 0;
      html += `<li><a href="${s.file}" class="${curSec === s.no ? 'active' : ''} ${done ? 'done' : ''}">${secLabel(s)}</a></li>`;
    }
    html += '</ul></div>';
  }
  html += `<div class="side-extra">
      <a href="summary.html" class="${curPage === 'summary.html' ? 'active' : ''}">📋 สรุปสูตรรวมทุกบท</a>
    </div>`;
  nav.innerHTML = html;

  const inp = document.getElementById('sideSearch');
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    nav.querySelectorAll('.side-ch').forEach((div) => {
      let any = false;
      div.querySelectorAll('li').forEach((li) => {
        const hit = !q || li.textContent.toLowerCase().includes(q);
        li.style.display = hit ? '' : 'none';
        if (hit) any = true;
      });
      div.style.display = any ? '' : 'none';
    });
  });
}

/* ---------- mobile nav ---------- */
function initNav() {
  const btn = document.getElementById('menuBtn');
  const side = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');
  if (!btn) return;
  btn.addEventListener('click', () => {
    side.classList.toggle('open');
    scrim.classList.toggle('show', side.classList.contains('open'));
  });
  scrim.addEventListener('click', () => {
    side.classList.remove('open');
    scrim.classList.remove('show');
  });
}

/* ---------- pager ---------- */
function buildPager() {
  const holder = document.getElementById('pager');
  if (!holder) return;
  const curPage = document.body.dataset.page || '';
  let idx = flatSections.findIndex((s) => s.file === curPage);
  if (curPage === 'summary.html') idx = flatSections.length; // treat summary as last page
  let html = '';
  if (idx > 0) {
    const p = idx < flatSections.length ? flatSections[idx - 1] : flatSections[flatSections.length - 1];
    html = `<a class="prev" href="${p.file}"><span class="dir">◀ ก่อนหน้า</span><span class="dest">${secLabel(p)}</span></a>`;
  } else {
    html = '<a class="empty"></a>';
  }
  if (idx >= 0 && idx < flatSections.length - 1) {
    const n = flatSections[idx + 1];
    html += `<a class="next" href="${n.file}"><span class="dir">ถัดไป ▶</span><span class="dest">${secLabel(n)}</span></a>`;
  } else if (idx === flatSections.length - 1) {
    html += '<a class="next" href="summary.html"><span class="dir">ถัดไป ▶</span><span class="dest">📋 สรุปสูตรรวมทุกบท</span></a>';
  } else {
    html += '<a class="empty"></a>';
  }
  holder.innerHTML = html;
}

/* ---------- progress checkboxes ---------- */
function initProgress() {
  const prog = getProgress();
  document.querySelectorAll('.pr-card[data-pkey]').forEach((card) => {
    const key = card.dataset.pkey;
    const cb = card.querySelector('input[type="checkbox"]');
    const sync = () => {
      card.classList.toggle('done', prog.has(key));
      if (cb) cb.checked = prog.has(key);
    };
    sync();
    if (cb) cb.addEventListener('change', () => {
      const p = getProgress();
      if (cb.checked) p.add(key); else p.delete(key);
      saveProgress(p);
      card.classList.toggle('done', cb.checked);
      refreshProgressUI();
    });
  });
}

/* refresh dynamic progress numbers (index page + sidebar) */
function refreshProgressUI() {
  // index chapter progress bars
  document.querySelectorAll('[data-chprog]').forEach((el) => {
    const chIdx = SITE.chapters.findIndex((c) => c.ch === Number(el.dataset.chprog));
    if (chIdx < 0) return;
    const { done, total } = chapterCounts(chIdx);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const bar = el.querySelector('.pbar > i');
    const lbl = el.querySelector('[data-chpctlbl]');
    if (bar) bar.style.width = pct + '%';
    if (lbl) lbl.textContent = `${done}/${total} ข้อ (${pct}%)`;
  });
  // index section meta labels
  document.querySelectorAll('[data-secmeta]').forEach((el) => {
    const [chN, secNo] = el.dataset.secmeta.split('|');
    const c = SITE.chapters.find((x) => x.ch === Number(chN));
    if (!c) return;
    const s = c.sections.find((x) => x.no === secNo);
    if (!s) return;
    const done = secDoneCount(s.no, s.practice);
    el.textContent = done >= s.practice && s.practice > 0 ? `✓ ครบ ${done}/${s.practice}` : `${done}/${s.practice} ข้อ`;
    const link = el.closest('a');
    if (link) link.classList.toggle('done', done >= s.practice && s.practice > 0);
  });
  // overall
  const ov = document.querySelector('[data-overall]');
  if (ov) {
    let done = 0, total = 0;
    SITE.chapters.forEach((_, i) => { const r = chapterCounts(i); done += r.done; total += r.total; });
    const pct = total ? Math.round((done / total) * 100) : 0;
    ov.querySelector('.pbar > i').style.width = pct + '%';
    const lbl = ov.querySelector('[data-overalllbl]');
    if (lbl) lbl.textContent = `ทำโจทย์ซ้อมสำเร็จแล้ว ${done} จาก ${total} ข้อ (${pct}%)`;
  }
  // sidebar done ticks
  const nav = document.getElementById('sidebar');
  if (nav) {
    nav.querySelectorAll('.side-ch-list a').forEach((a) => {
      const m = a.getAttribute('href');
      const fs = flatSections.find((s) => s.file === m);
      if (fs) a.classList.toggle('done', secDoneCount(fs.no, fs.practice) >= fs.practice && fs.practice > 0);
    });
  }
}

/* ---------- stepwise practice solutions ---------- */
function initStepwise() {
  document.querySelectorAll('details.sol').forEach((det) => {
    const ol = det.querySelector('ol.steps');
    if (!ol || ol.children.length < 2) return;
    ol.classList.add('stepwise');
    const items = [...ol.children];
    const controls = document.createElement('div');
    controls.className = 'sol-controls';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    const allBtn = document.createElement('button');
    allBtn.className = 'btn';
    allBtn.textContent = 'แสดงทั้งหมด';
    controls.append(nextBtn, allBtn);
    ol.before(controls);

    let shown = 0;
    const render = () => {
      items.forEach((li, i) => li.classList.toggle('revealed', i < shown));
      nextBtn.style.display = shown >= items.length ? 'none' : '';
      nextBtn.textContent = shown === 0
        ? `👀 ดูเฉลยขั้นที่ 1 (มี ${items.length} ขั้น)`
        : `➡️ ขั้นถัดไป (${Math.min(shown + 1, items.length)}/${items.length})`;
    };
    nextBtn.addEventListener('click', () => { shown = Math.min(shown + 1, items.length); render(); });
    allBtn.addEventListener('click', () => { shown = items.length; render(); });
    render();
  });
}

/* ---------- KaTeX ---------- */
function renderMath() {
  if (typeof renderMathInElement !== 'function') return;
  renderMathInElement(document.body, {
    delimiters: [
      { left: '\\[', right: '\\]', display: true },
      { left: '\\(', right: '\\)', display: false },
    ],
    throwOnError: false,
    strict: false,
  });
}

/* ---------- boot ---------- */
initTheme();
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  initNav();
  buildPager();
  initStepwise();
  initProgress();
  refreshProgressUI();
  const tb = document.getElementById('themeBtn');
  if (tb) tb.addEventListener('click', toggleTheme);
  const rp = document.getElementById('resetBtn');
  if (rp) rp.addEventListener('click', () => {
    if (confirm('ล้างความคืบหน้าทั้งหมดใช่ไหม?')) {
      localStorage.removeItem(PKEY);
      refreshProgressUI();
      document.querySelectorAll('.pr-card[data-pkey]').forEach((c) => {
        c.classList.remove('done');
        const cb = c.querySelector('input[type="checkbox"]');
        if (cb) cb.checked = false;
      });
    }
  });
  renderMath();
});
