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
    return re.findall(r'<article class="pr-card"[^>]*data-pkey="([^"]+)"', src)

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
MATH_CHECKS = {
    # แบบฝึกหัด 4.1
    "pTB-4-1-1", "pTB-4-1-2",
    "pTB-4-1-3ก", "pTB-4-1-3ข", "pTB-4-1-3ค", "pTB-4-1-3ง",
    "pTB-4-1-4ก", "pTB-4-1-4ข", "pTB-4-1-4ค", "pTB-4-1-4ง",
    "pTB-4-1-5ก", "pTB-4-1-5ข", "pTB-4-1-5ค",
    "pTB-4-1-6",
}

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

# ---------------- แบบฝึกหัด 4.1 ----------------
u41 = np.array([-1, 2]); v41 = np.array([3, 2])
check("4.1 ข1 u·v = 1", np.isclose(u41 @ v41, 1))
check("4.1 ข1 ‖u‖=√5, ‖v‖=√13", np.isclose(np.linalg.norm(u41)**2, 5) and np.isclose(np.linalg.norm(v41)**2, 13))
w41 = 2 * u41 + v41
check("4.1 ข1 2u+v=(1,6), หนึ่งหน่วย ±(1,6)/√37",
      np.allclose(w41, [1, 6]) and np.isclose(np.linalg.norm(w41), np.sqrt(37)))

u412 = np.array([-6, 2, -3]); x412 = np.array([-1, 0, -1])
check("4.1 ข2 เวกเตอร์ 3 หน่วย = 3u/7", np.allclose(3 * u412 / np.linalg.norm(u412), [-18/7, 6/7, -9/7]))
check("4.1 ข2 ‖u−x‖ = √33", np.isclose(np.linalg.norm(u412 - x412), np.sqrt(33)))

u413 = [np.array([2., 4, -1]), np.array([1., 0, 2]), np.array([8., -5, -4])]
x413 = np.array([5., 1, 0])
check("4.1 ข3ก เซตเชิงตั้งฉาก (3 คู่ = 0)",
      all(np.isclose(a @ b, 0) for i, a in enumerate(u413) for b in u413[i+1:]))
coefs = [x413 @ u / (u @ u) for u in u413]
check("4.1 ข3ค สัมประสิทธิ์ = 2/3, 1, 1/3", np.allclose(coefs, [2/3, 1, 1/3]))
check("4.1 ข3ค แทนกลับได้ x", np.allclose(sum(c * u for c, u in zip(coefs, u413)), x413))
U413 = np.column_stack([u / np.linalg.norm(u) for u in u413])
check("4.1 ข3ง U หลักหนึ่งหน่วย + U⁻¹=Uᵀ", np.allclose(U413.T @ U413, np.eye(3)) and np.allclose(np.linalg.inv(U413), U413.T))

u414 = [np.array([-3., 3, 0]), np.array([-2., -2, 1]), np.array([1., 1, 4])]
x414 = np.array([5., -3, 1])
check("4.1 ข4ก เซตเชิงตั้งฉาก (3 คู่ = 0)",
      all(np.isclose(a @ b, 0) for i, a in enumerate(u414) for b in u414[i+1:]))
coefs4 = [x414 @ u / (u @ u) for u in u414]
check("4.1 ข4ค สัมประสิทธิ์ = −4/3, −1/3, 1/3", np.allclose(coefs4, [-4/3, -1/3, 1/3]))
check("4.1 ข4ค แทนกลับได้ x", np.allclose(sum(c * u for c, u in zip(coefs4, u414)), x414))
U414 = np.column_stack([u / np.linalg.norm(u) for u in u414])
check("4.1 ข4ง U หลักหนึ่งหน่วย + U⁻¹=Uᵀ", np.allclose(U414.T @ U414, np.eye(3)) and np.allclose(np.linalg.inv(U414), U414.T))

_rng = np.random.default_rng(7)
_ok5 = True
for _ in range(5):
    _u, _v = _rng.normal(size=4), _rng.normal(size=4)
    _ok5 &= np.isclose(np.linalg.norm(_u+_v)**2 + np.linalg.norm(_u-_v)**2,
                       2*np.linalg.norm(_u)**2 + 2*np.linalg.norm(_v)**2)
    _ok5 &= np.isclose(4*_u@_v, np.linalg.norm(_u+_v)**2 - np.linalg.norm(_u-_v)**2)
    _ok5 &= (np.isclose(_u@_v, 0) == np.isclose(np.linalg.norm(_u+_v)**2,
                                                np.linalg.norm(_u)**2 + np.linalg.norm(_v)**2))
check("4.1 ข5 ก/ข/ค อัตลักษณ์ความยาวจริงทุกชุดสุ่ม", _ok5)
check("4.1 ข6 det(I)=1, det([[0,1],[1,0]])=−1 → ±1 สมเหตุผล",
      np.isclose(np.linalg.det(np.eye(3)), 1) and np.isclose(np.linalg.det(np.array([[0., 1], [1, 0]])), -1))

# ---------------------------------------------------------------- สรุป
fails = [n for n, c in ok if not c]
print(f"\n===== คลังโจทย์จากตำรา: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    sys.exit(1)
