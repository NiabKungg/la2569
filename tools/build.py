#!/usr/bin/env python3
"""Build HTML pages for the Linear Algebra 2301234 (1/2569) teaching site.

Each page body is a fragment in pages/*.frag. A fragment starts with a small
header comment block:
    <!-- meta
    title: 1.2 เมทริกซ์ขั้นบันได
    ch: 1
    section: 1.2
    page: ch1-2.html
    -->
followed by the content that goes inside <div class="inner">.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "pages"

TEMPLATE = """<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — พีชคณิตเชิงเส้น 1/2569</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22%23101a35%22/><text x=%2250%22 y=%2272%22 font-size=%2262%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22serif%22>Σ</text></svg>">
<meta name="description" content="{title} — สื่อการสอนวิชา 2301234 พีชคณิตเชิงเส้น ๑ เทอม 1/2569 พร้อมตัวอย่าง step-by-step และโจทย์ซ้อมพร้อมเฉลย">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@500;600;700&family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/katex/katex.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body{body_attrs}>
<header class="topbar">
  <button class="icon-btn menu-btn" id="menuBtn" aria-label="เปิดเมนู">☰</button>
  <a class="brand" href="index.html"><span class="brand-badge">Σ</span><span>พีชคณิตเชิงเส้น <span class="brand-sub">2301234 · 1/2569</span></span></a>
  <span class="spacer"></span>
  <button class="icon-btn theme-btn" id="themeBtn" aria-label="สลับโหมดมืด/สว่าง">🌙</button>
</header>
<div class="layout">
  <nav class="sidebar" id="sidebar"></nav>
  <div class="scrim" id="scrim"></div>

  <main class="content"><div class="inner">

{content}

  </div></main>
</div>
<nav class="pager" id="pager"></nav>
<script src="assets/katex/katex.min.js"></script>
<script src="assets/katex/auto-render.min.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
"""

META_RE = re.compile(r"\A\s*<!--\s*meta(.*?)-->", re.S)


def parse_meta(text: str):
    m = META_RE.match(text)
    if not m:
        raise SystemExit("fragment missing <!-- meta ... --> header")
    meta = {}
    for line in m.group(1).strip().splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip()
    return meta, text[m.end():].lstrip("\n")


def build() -> None:
    frags = sorted(PAGES.glob("*.frag"))
    if not frags:
        raise SystemExit("no fragments found")
    for frag in frags:
        meta, content = parse_meta(frag.read_text(encoding="utf-8"))
        body_attrs = f' data-ch="{meta["ch"]}"' if meta.get("ch") else ""
        body_attrs += f' data-section="{meta["section"]}"' if meta.get("section") else ""
        body_attrs += f' data-page="{meta["page"]}"' if meta.get("page") else ""
        out = ROOT / meta["page"]
        out.write_text(TEMPLATE.format(title=meta["title"], body_attrs=body_attrs, content=content), encoding="utf-8")
        print(f"built {out.name}  ({len(content):,} chars content)")
    print(f"done: {len(frags)} pages")


if __name__ == "__main__":
    build()
