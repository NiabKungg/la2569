#!/usr/bin/env python3
"""ตรวจหน้า "คลังโจทย์จากตำรา" (bank-ch1..5.frag)

(ก) จำนวน pr-card ต่อหน้าต้อง = เลข practice: ของ section TB-1..TB-5 ใน assets/js/main.js เป๊ะ ๆ
(ข) คณิตคำตอบสุดท้ายของทุกการ์ดต้องถูกตรวจด้วย numpy — การ์ดทุกใบต้องมีชื่ออยู่ใน MATH_CHECKS
    (เติมรายการทีละรอบการผลิต การ์ดไหนยังไม่ถูกตรวจ = FAIL) + บล็อกการคำนวณจริงด้านล่าง
(ค) pkey ต้องไม่ซ้ำทั้งเว็บ และการ์ดคลังต้องอยู่ในรูปแบบ pTB-<บท>-<ข้อ>[-ก/ข/ค/ง]
"""
import re
import sys
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "pages"
MAIN_JS = ROOT / "assets" / "js" / "main.js"

ok = []
def check(name, cond):
    ok.append((name, bool(cond)))
    print(("PASS  " if cond else "FAIL  ") + name)

# ---------------------------------------------------------------- (ก) counts
def registry_practices():
    """ดึง {no: practice} ของ sections ทั้งเว็บจาก main.js"""
    src = MAIN_JS.read_text(encoding="utf-8")
    pat = re.compile(r"\{\s*no:\s*'([^']+)',\s*file:\s*'([^']+)'.*?practice:\s*(\d+)", re.S)
    return {no: int(n) for no, _f, n in pat.findall(src)}

def frag_cards(frag_path):
    src = frag_path.read_text(encoding="utf-8")
    return re.findall(r'<article class="pr-card" data-pkey="([^"]+)"', src)

reg = registry_practices()
tb_sections = {"TB-1": "bank-ch1.frag", "TB-2": "bank-ch2.frag", "TB-3": "bank-ch3.frag",
               "TB-4": "bank-ch4.frag", "TB-5": "bank-ch5.frag"}

total_cards = 0
all_bank_pkeys = []
for sec, frag_name in tb_sections.items():
    p = PAGES / frag_name
    if not p.exists():
        check(f"{frag_name} มีไฟล์", False)
        continue
    cards = frag_cards(p)
    total_cards += 1  # (เผื่อใช้ภายหลัง: นับชุดไฟล์)
    all_bank_pkeys += cards
    want = reg.get(sec, -1)
    check(f"{frag_name}: การ์ด {len(cards)} = registry {sec} practice {want}", len(cards) == want)

# ---------------------------------------------------------------- (ค) pkey
def all_pkeys_web():
    out = []
    for f in sorted(PAGES.glob("*.frag")):
        for k in frag_cards(f):
            out.append((k, f.name))
    return out

web = all_pkeys_web()
seen, dup = {}, []
for k, f in web:
    if k in seen:
        dup.append(f"{k} ({f} ซ้ำกับ {seen[k]})")
    seen[k] = f
check(f"pkey ไม่ซ้ำทั้งเว็บ (รวม {len(web)} ใบ)", not dup)
for d in dup:
    print("   DUP:", d)

bad_fmt = [k for k in all_bank_pkeys if not re.match(r"^pTB-\d-\d+([.-]\d+)?([ก-ญ])?$", k)]
check("pkey คลังอยู่รูปแบบ pTB-* ถูกต้องทุกใบ", not bad_fmt)
for k in bad_fmt:
    print("   FMT:", k)

# ---------------------------------------------------------------- (ข) math
# เติมการตรวจตามรอบการผลิต — ชื่อใน MATH_CHECKS ต้องตรงกับ data-pkey ของการ์ด
# (ข้อที่ไม่มีข้อย่อยครอบด้วยกลุ่ม "pTB-c-n-*" ก็ได้ เช่น pTB-4-1-1ก, pTB-4-1-1ข ครอบการ์ด pTB-4-1-1)
MATH_CHECKS = set()

def math_checks_for(pkeys):
    missing = []
    for k in pkeys:
        if k in MATH_CHECKS:
            continue
        group_prefix = k + "-"
        if any(m.startswith(group_prefix) for m in MATH_CHECKS):
            continue
        missing.append(k)
    return missing

missing_math = math_checks_for(all_bank_pkeys)
check(f"การ์ดคลังทุกใบมีการตรวจคณิต numpy ({len(all_bank_pkeys)} ใบ)", not missing_math)
for k in missing_math:
    print("   ยังไม่ตรวจ:", k)

# ================================================================ การคำนวณจริง
# (เติมบล็อก check() ของแต่ละชุดที่ผลิต — ใช้ numpy ตรวจคำตอบสุดท้ายของทุกการ์ด)

# ---------------------------------------------------------------- สรุป
fails = [n for n, c in ok if not c]
print(f"\n===== คลังโจทย์จากตำรา: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    sys.exit(1)
