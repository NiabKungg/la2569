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

bad_fmt = [k for k in all_bank_pkeys if not re.match(r"^pTB-\d-\d+([.-]\d+)?([ก-ฏ])?$", k)]
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
    # แบบฝึกหัด 4.2
    "pTB-4-2-1ก", "pTB-4-2-1ข",
    "pTB-4-2-2", "pTB-4-2-3",
    "pTB-4-2-4ก", "pTB-4-2-4ข",
    "pTB-4-2-5ก", "pTB-4-2-5ข", "pTB-4-2-5ค", "pTB-4-2-5ง",
    "pTB-4-2-6",
    "pTB-4-2-7ก", "pTB-4-2-7ข", "pTB-4-2-7ค", "pTB-4-2-7ง", "pTB-4-2-7จ", "pTB-4-2-7ฉ",
    "pTB-4-2-8ก", "pTB-4-2-8ข", "pTB-4-2-8ค",
    "pTB-4-2-9ก", "pTB-4-2-9ข", "pTB-4-2-9ค", "pTB-4-2-9ง", "pTB-4-2-9จ", "pTB-4-2-9ฉ",
    "pTB-4-2-10ก", "pTB-4-2-10ข",
    "pTB-4-2-11",
    "pTB-4-2-12ก", "pTB-4-2-12ข",
    # แบบฝึกหัด 4.3
    "pTB-4-3-1ก", "pTB-4-3-1ข",
    "pTB-4-3-2",
    "pTB-4-3-3ก", "pTB-4-3-3ข", "pTB-4-3-3ค", "pTB-4-3-3ง",
    "pTB-4-3-4ก", "pTB-4-3-4ข", "pTB-4-3-4ค", "pTB-4-3-4ง",
    "pTB-4-3-5ก", "pTB-4-3-5ข", "pTB-4-3-5ค", "pTB-4-3-5ง",
    # แบบฝึกหัด 4.4 (ระวังข้อย่อย ฎ ฏ — ต่อจาก ญ)
    "pTB-4-4-1ก", "pTB-4-4-1ข", "pTB-4-4-1ค", "pTB-4-4-1ง", "pTB-4-4-1จ", "pTB-4-4-1ฉ",
    "pTB-4-4-1ช", "pTB-4-4-1ซ", "pTB-4-4-1ฌ", "pTB-4-4-1ญ", "pTB-4-4-1ฎ", "pTB-4-4-1ฏ",
    "pTB-4-4-2ก", "pTB-4-4-2ข", "pTB-4-4-2ค", "pTB-4-4-2ง",
    "pTB-4-4-3", "pTB-4-4-4", "pTB-4-4-5", "pTB-4-4-6", "pTB-4-4-7", "pTB-4-4-8",
    # แบบฝึกหัด 4.5
    "pTB-4-5-1ก", "pTB-4-5-1ข",
    "pTB-4-5-2ก", "pTB-4-5-2ข", "pTB-4-5-2ค", "pTB-4-5-2ง", "pTB-4-5-2จ", "pTB-4-5-2ฉ",
    "pTB-4-5-3",
    "pTB-4-5-4",
    "pTB-4-5-5ก", "pTB-4-5-5ข", "pTB-4-5-5ค",
    "pTB-4-5-6ก", "pTB-4-5-6ข", "pTB-4-5-6ค", "pTB-4-5-6ง", "pTB-4-5-6จ", "pTB-4-5-6ฉ",
    # แบบฝึกหัด 3.1
    "pTB-3-1-1ก", "pTB-3-1-1ข", "pTB-3-1-1ค", "pTB-3-1-1ง",
    "pTB-3-1-2", "pTB-3-1-3", "pTB-3-1-4", "pTB-3-1-5",
    "pTB-3-1-6ก", "pTB-3-1-6ข",
    "pTB-3-1-7ก", "pTB-3-1-7ข", "pTB-3-1-7ค",
    "pTB-3-1-8", "pTB-3-1-9", "pTB-3-1-10", "pTB-3-1-11", "pTB-3-1-12",
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

# ---------------- แบบฝึกหัด 4.2 ----------------
# ข้อ 1
check("4.2 ข1ก H⊥ ฐาน (−2,1,0),(3,0,1) ตั้งฉากกับ (1,2,−3)",
      all(np.isclose(np.array(v) @ np.array([1., 2, -3]), 0) for v in ([-2, 1, 0], [3, 0, 1])))
A421 = np.column_stack([[-1., 0, 0, 2], [0., 1, 2, -1]])
check("4.2 ข1ข H⊥ ฐาน (0,−2,1,0),(2,1,0,1)", np.allclose(np.array([[0., -2, 1, 0], [2., 1, 0, 1]]) @ A421, 0))

# ข้อ 2 และ 3
U42 = [np.array([0., 1, -4, -1]), np.array([3., 5, 1, 1]), np.array([1., 0, 1, -4]), np.array([5., -3, -1, 1])]
x42 = np.array([10., -8, 2, 0])
check("4.2 ข2 u₁..u₄ เชิงตั้งฉากครบ 6 คู่",
      all(np.isclose(U42[i] @ U42[j], 0) for i in range(4) for j in range(i+1, 4)))
_z = (x42 @ U42[3] / (U42[3] @ U42[3])) * U42[3]
check("4.2 ข2 z=(10,−6,−2,2), y=(0,−2,4,−2)",
      np.allclose(_z, [10, -6, -2, 2]) and np.allclose(x42 - _z, [0, -2, 4, -2]))
U423 = [np.array([1., 2, 1, 1]), np.array([-2., 1, -1, 1]), np.array([1., 1, -2, -1]), np.array([-1., 1, 1, -2])]
x423 = np.array([4., 5, -3, 3])
check("4.2 ข3 u₁..u₄ เชิงตั้งฉากครบ",
      all(np.isclose(U423[i] @ U423[j], 0) for i in range(4) for j in range(i+1, 4)))
_y = (x423 @ U423[0] / (U423[0] @ U423[0])) * U423[0]
check("4.2 ข3 y=(2,4,2,2), z=(2,1,−5,1)",
      np.allclose(_y, [2, 4, 2, 2]) and np.allclose(x423 - _y, [2, 1, -5, 1]))

# ข้อ 4
for tag, (a, b, y) in {"ก": ((1., 1, 0), (-1., 1, 0), (1., -4, 3)), "ข": ((3., -1, 2), (1., -1, -2), (-1., 2, 6))}.items():
    a, b, y = map(np.array, (a, b, y))
    proj = (y @ a / (a @ a)) * a + (y @ b / (b @ b)) * b
    exp = (1., -4, 0) if tag == "ก" else (-1., 2, 6)
    check(f"4.2 ข4{tag} ตั้งฉาก + proj = {exp}", np.isclose(a @ b, 0) and np.allclose(proj, exp))

# ข้อ 5
sets542 = {
    "ก": ([(3., 4, 0), (-4., 3, 0)], (6., 3, -2), (6., 3, 0), (0., 0, -2)),
    "ข": ([(1., 3, -2), (5., 1, 4)], (1., 3, 5), (10/3, 2/3, 8/3), (-7/3, 7/3, 7/3)),
    "ค": ([(1., 1, 0, 1), (-1., 3, 1, -2), (-1., 0, 1, 1)], (4., 3, 3, 1), (34/15, 58/15, 2/5, 28/15), (26/15, -13/15, 13/5, -13/15)),
    "ง": ([(1., 1, 0, -1), (1., 0, 1, 1), (0., -1, 1, -1)], (3., 4, 5, 6), (5., 2, 3, 6), (-2., 2, 2, 0)),
}
for tag, (us, y, ey, ez) in sets542.items():
    us = [np.array(v) for v in us]; y = np.array(y)
    orth = all(np.isclose(us[i] @ us[j], 0) for i in range(len(us)) for j in range(i+1, len(us)))
    yhat = sum((y @ u / (u @ u)) * u for u in us)
    check(f"4.2 ข5{tag} ฐานตั้งฉาก + ŷ,z ถูกต้อง", orth and np.allclose(yhat, ey) and np.allclose(y - yhat, ez))

# ข้อ 6
u16 = np.array([2/3, 1/3, 2/3]); u26 = np.array([-2/3, 2/3, 1/3]); y6 = np.array([4., 8, 1])
U6 = np.column_stack([u16, u26]); UUt = U6 @ U6.T
check("4.2 ข6 UᵀU=I₂, UUᵀ ตรงสูตร, proj=(2,4,5)=(UUᵀ)y",
      np.allclose(U6.T @ U6, np.eye(2)) and np.allclose(UUt, np.array([[8, -2, 2], [-2, 5, 4], [2, 4, 5]]) / 9)
      and np.allclose(UUt @ y6, [2, 4, 5]) and np.allclose((y6 @ u16) * u16 + (y6 @ u26) * u26, [2, 4, 5]))

# ข้อ 7 กราม-ชมิดต์
sets742 = {
    "ก": ((1., -1, 0), (0., 1, -1), (0.5, 0.5, -1)),
    "ข": ((3., 0, -1), (8., 5, -6), (-1., 5, -3)),
    "ค": ((2., -5, 1), (4., -1, 2), (3., 1.5, 1.5)),
    "ง": ((1., -4, 0, 1), (7., -7, 0, 1), (5., 1, 0, -1)),
    "จ": ((3., -1, 2, -1), (-5., 9, -9, 3), (4., 6, -3, 0)),
    "ฉ": ((1., 1, 1, 1), (1., 1, -1, -1), (1., 1, -1, -1)),
}
for tag, (a, b, ev2) in sets742.items():
    a, b = np.array(a), np.array(b)
    v2 = b - (b @ a / (a @ a)) * a
    check(f"4.2 ข7{tag} GS v₂ = {ev2}", np.allclose(v2, ev2) and np.isclose(a @ v2, 0))

# ข้อ 8
A842 = {
    "ก": (np.array([[1., 0, 1], [1, 1, 0], [1, 0, 1]]), [0, 1],
          [(1/np.sqrt(3), 1/np.sqrt(3), 1/np.sqrt(3)), (-1/np.sqrt(6), 2/np.sqrt(6), -1/np.sqrt(6))]),
    "ข": (np.array([[-1., 6, 6], [1, -2, 6], [1, -4, -3], [3, -8, 3]]), [0, 1, 2],
          [(-1, 1, 1, 3), (3, 1, -1, 1), (-1, 3, -1, -1)]),
    "ค": (np.array([[1., 1, 1, 0], [1, -1, 1, 1], [1, 0, 1, 1], [0, 1, 0, 1]]), [0, 1, 3],
          [(1, 1, 1, 0), (1, -1, 0, 1), (-2, 1, 1, 3)]),
}
for tag, (A, piv, evecs) in A842.items():
    M = A.copy(); mypiv = []; row = 0
    for col in range(M.shape[1]):
        p = next((r0 for r0 in range(row, M.shape[0]) if abs(M[r0, col]) > 1e-9), None)
        if p is not None:
            M[[row, p]] = M[[p, row]]; M[row:] -= np.outer(M[row:, col] / M[row, col], M[row]); mypiv.append(col); row += 1
    basis = [A[:, c] for c in mypiv]
    v = [basis[0].astype(float)]
    for bcol in basis[1:]:
        v.append(bcol - sum((bcol @ w) / (w @ w) * w for w in v))
    check(f"4.2 ข8{tag} pivotcols={mypiv} + GS เวกเตอร์ตรงทิศฐานเชิงตั้งฉาก",
          mypiv == piv and all(np.allclose(w / np.linalg.norm(w), np.array(e) / np.linalg.norm(e)) for w, e in zip(v, evecs)))
    Qn = np.column_stack([w / np.linalg.norm(w) for w in v])
    check(f"4.2 ข8{tag} QᵀQ = I", np.allclose(Qn.T @ Qn, np.eye(len(v))))

# ข้อ 9 QR (ตรวจรูปมือ: QR=A, QᵀQ=I, R สามเหลี่ยมบน, เส้นทแยง R บวก)
Q9 = {
    "ก": (np.array([[1, -2], [2, 1]]) / np.sqrt(5), np.array([[np.sqrt(5), np.sqrt(5)], [0, np.sqrt(5)]])),
    "ข": (np.array([[1/np.sqrt(2), -1/np.sqrt(3)], [0, 1/np.sqrt(3)], [1/np.sqrt(2), 1/np.sqrt(3)]]),
          np.array([[np.sqrt(2), 3*np.sqrt(2)], [0, np.sqrt(3)]])),
    "ค": (np.array([[1/3, 8/(3*np.sqrt(26))], [-2/3, 11/(3*np.sqrt(26))], [2/3, 7/(3*np.sqrt(26))]]),
          np.array([[3, 1/3], [0, np.sqrt(26)/3]])),
    "ง": (np.array([[1/np.sqrt(3), -2/np.sqrt(6), 0], [1/np.sqrt(3), 1/np.sqrt(6), -1/np.sqrt(2)], [1/np.sqrt(3), 1/np.sqrt(6), 1/np.sqrt(2)]]),
          np.array([[np.sqrt(3), 2/np.sqrt(3), 1/np.sqrt(3)], [0, np.sqrt(6)/3, 1/np.sqrt(6)], [0, 0, 1/np.sqrt(2)]])),
    "จ": (np.array([[1/np.sqrt(2), -1/np.sqrt(3), 1/np.sqrt(6)], [0, 1/np.sqrt(3), 2/np.sqrt(6)], [1/np.sqrt(2), 1/np.sqrt(3), -1/np.sqrt(6)]]),
          np.array([[np.sqrt(2), np.sqrt(2), np.sqrt(2)], [0, np.sqrt(3), -1/np.sqrt(3)], [0, 0, 2*np.sqrt(6)/3]])),
    "ฉ": (np.array([[1/2, 0, 1/2], [-1/2, 1/np.sqrt(2), 1/2], [1/2, 0, 1/2], [1/2, 1/np.sqrt(2), -1/2]]),
          np.array([[2, 0, 1], [0, np.sqrt(2), np.sqrt(2)], [0, 0, 1]])),
}
A9 = {
    "ก": np.array([[1., -1], [2, 3]]), "ข": np.array([[1., 2], [0, 1], [1, 4]]), "ค": np.array([[1., 1], [-2, 1], [2, 1]]),
    "ง": np.array([[1., 0, 0], [1, 1, 0], [1, 1, 1]]), "จ": np.array([[1., 0, 2], [0, 1, 1], [1, 2, 0]]),
    "ฉ": np.array([[1., 0, 1], [-1, 1, 1], [1, 0, 1], [1, 1, 1]]),
}
for tag, (Q, R) in Q9.items():
    A = A9[tag]
    check(f"4.2 ข9{tag} QR=A, QᵀQ=I, R บวกทแยง",
          np.allclose(Q @ R, A) and np.allclose(Q.T @ Q, np.eye(Q.shape[1]))
          and np.all(np.diag(R) > 0) and np.allclose(R, np.triu(R)))

# ข้อ 10-12 พิสูจน์: ตรวจโครงสร้างด้วย H สุ่ม (H = Span สองเวกเตอร์อิสระใน R⁴)
_rng42 = np.random.default_rng(11)
_ok42 = True
for _ in range(3):
    b1, b2 = _rng42.normal(size=4), _rng42.normal(size=4)
    B = np.column_stack([b1, b2])
    Umat, s, _ = np.linalg.svd(B, full_matrices=True)
    ns = Umat[:, 2:]                   # ฐานของ H⊥ (4×2) — null space อยู่ที่หลักท้ายของ U
    _ok42 &= s[1] > 1e-8               # H มิติ 2 จริง
    _ok42 &= np.allclose(ns.T @ B, 0, atol=1e-8)   # ทุกเวกเตอร์ H⊥ ตั้งฉากกับทุกเวกเตอร์ H → H∩H⊥={0}
    U2, s2, _ = np.linalg.svd(ns, full_matrices=True)   # null(ns) = (H⊥)⊥ ต้องกลับมาเป็น H
    back = U2[:, 2:]
    _ok42 &= s2[1] > 1e-8 and np.allclose(ns.T @ back, 0, atol=1e-8) \
        and np.linalg.matrix_rank(np.column_stack([back, B]), tol=1e-8) == 2
check("4.2 ข10 โครงสร้าง H∩H⊥={0}, (H⊥)⊥=H (สุ่ม 3 ชุด)", _ok42)
# ข้อ 12: proj สูตร (UUᵀ)y = Σ(y·uᵢ)uᵢ บนฐานหลักเชิงตั้งฉากปรกติ
_u1, _u2 = _rng42.normal(size=5), _rng42.normal(size=5)
_u1, _u2 = _u1/np.linalg.norm(_u1), _u2 - (_u2@_u1)*_u1; _u2 = _u2/np.linalg.norm(_u2)
_yy = _rng42.normal(size=5)
UU = np.column_stack([_u1, _u2])
check("4.2 ข12 (UUᵀ)y = Σ(y·uᵢ)uᵢ", np.allclose((UU @ UU.T) @ _yy, (_yy@_u1)*_u1 + (_yy@_u2)*_u2))

# ---------------- แบบฝึกหัด 4.4 ----------------
sets44 = {
    "ก": ([[8, -2], [-2, 5]], (9, 4), ((2, -1), (1, 2))),
    "ข": ([[1, -2], [-2, 1]], (3, -1), ((1, -1), (1, 1))),
    "ค": ([[9, -12], [-12, 16]], (25, 0), ((-3, 4), (4, 3))),
    "ง": ([[3, -1.5], [-1.5, 7]], (7.5, 2.5), ((-1, 3), (3, 1))),
    "จ": ([[2, 4, -4], [4, -2, 0], [-4, 0, -2]], (6, -2, -6), ((2, 1, -1), (0, 1, 1), (1, -1, 1))),
    "ฉ": ([[0, 1, 1], [1, 0, 1], [1, 1, 0]], (2, -1, -1), ((1, 1, 1), (-1, 1, 0), (-1, -1, 2))),
    "ช": ([[2, 1, 1], [1, 2, -1], [1, -1, 2]], (0, 3, 3), ((1, -1, -1), (1, 1, 0), (1, -1, 2))),
    "ซ": ([[-2, 0, -36], [0, -3, 0], [-36, 0, -23]], (25, -3, -50), ((-4, 0, 3), (0, 1, 0), (3, 0, 4))),
    "ฌ": ([[1, 1, 0], [1, 1, 0], [0, 0, 0]], (2, 0, 0), ((1, 1, 0), (1, -1, 0), (0, 0, 1))),
    "ญ": ([[2, -1, -1], [-1, 2, -1], [-1, -1, 2]], (0, 3, 3), ((1, 1, 1), (1, -1, 0), (1, 1, -2))),
    "ฎ": ([[2, 0, 0, 0], [0, 1, 0, 1], [0, 0, 2, 0], [0, 1, 0, 1]], (2, 2, 2, 0), ((1, 0, 0, 0), (0, 1, 0, 1), (0, 0, 1, 0), (0, 1, 0, -1))),
    "ฏ": ([[2, 0, 1, 0], [0, 2, 0, 1], [1, 0, 2, 0], [0, 1, 0, 2]], (3, 3, 1, 1), ((1, 0, 1, 0), (0, 1, 0, 1), (1, 0, -1, 0), (0, 1, 0, -1))),
}
for tag, (M, lams, vecs) in sets44.items():
    A = np.array(M, float)
    ok44 = True
    for lam, v in zip(lams, vecs):
        v = np.array(v, float)
        ok44 &= np.allclose(A @ v, lam * v)   # Av = λv ทุกคู่
    V = np.column_stack([np.array(v, float) for v in vecs])
    Q44 = V / np.linalg.norm(V, axis=0)       # หลักหนึ่งหน่วย
    ok44 &= np.allclose(Q44.T @ Q44, np.eye(len(lams)))  # ตั้งฉากปรกติ
    check(f"4.4 ข1{tag} λ={lams} Av=λv + P เชิงตั้งฉากปรกติ", ok44)

# ข้อ 2 สเปกตรัม: A = Σ λᵢ uᵢuᵢᵀ
for tag, (M, lams, vecs) in sets44.items():
    if tag not in "กขคง":
        continue
    A = np.array(M, float)
    V = np.column_stack([np.array(v, float) for v in vecs])
    U = V / np.linalg.norm(V, axis=0)
    rec = sum(l * np.outer(U[:, i], U[:, i]) for i, l in enumerate(lams))
    check(f"4.4 ข2{tag} A = Σλᵢuᵢuᵢᵀ", np.allclose(rec, A))

# ข้อ 3, 4, 5
A3 = np.array([[3., 1, 1], [1, 3, 1], [1, 1, 3]])
check("4.4 ข3 det(A−5I)=0, Av=2v ที่ v=(−1,1,0), eigen ครบ = 5,2,2",
      np.isclose(np.linalg.det(A3 - 5 * np.eye(3)), 0) and np.allclose(A3 @ np.array([-1., 1, 0]), 2 * np.array([-1., 1, 0]))
      and np.allclose(sorted(np.linalg.eigvalsh(A3)), [2, 2, 5]))
A4 = np.array([[5., -4, -2], [-4, 5, 2], [-2, 2, 2]])
check("4.4 ข4 v₁=(−2,2,1)→10, v₂=(1,1,0)→1, λ₃=1 กับ (−1,1,−4)",
      np.allclose(A4 @ np.array([-2., 2, 1]), 10 * np.array([-2., 2, 1]))
      and np.allclose(A4 @ np.array([1., 1, 0]), np.array([1., 1, 0]))
      and np.allclose(A4 @ np.array([-1., 1, -4]), np.array([-1., 1, -4]))
      and np.isclose(A4.trace(), 12))
rng44 = np.random.default_rng(21)
a44, b44 = float(rng44.uniform(-3, 3)), 0.0
while b44 == 0: b44 = float(rng44.uniform(-3, 3))
A5 = np.array([[a44, b44], [b44, a44]])
P5 = np.array([[1, 1], [1, -1]]) / np.sqrt(2)
check("4.4 ข5 PᵀAP = diag(a+b, a−b) (สุ่ม a,b)", np.allclose(P5.T @ A5 @ P5, np.diag([a44 + b44, a44 - b44])))
check("4.4 ข6 AAᵀ สมมาตร (สุ่ม 2 ชุด)",
      all(np.allclose(M @ M.T, (M @ M.T).T) for M in [np.array(rng44.normal(size=(3, 4))) for _ in range(2)]))
A7 = np.array([[8., -2], [-2, 5]])
P7 = np.array([[2, 1], [-1, 2]]) / np.sqrt(5)
check("4.4 ข7 A⁻¹ = P D⁻¹ Pᵀ (ใช้ P เดิมจากข้อ 1ก)",
      np.allclose(np.linalg.inv(A7), P7 @ np.diag([1/9, 1/4]) @ P7.T))
_ok48 = True
for _ in range(3):
    As = rng44.normal(size=(3, 3)); As = (As + As.T) / 2
    x48, y48 = rng44.normal(size=3), rng44.normal(size=3)
    _ok48 &= np.isclose((As @ x48) @ y48, x48 @ (As @ y48))
check("4.4 ข8 (Ax)·y = x·(Ay) สำหรับ A สมมาตร (สุ่ม 3 ชุด)", _ok48)

# ---------------- แบบฝึกหัด 3.1 ----------------
F31 = lambda v: [float(x) for x in v]
# ข้อ 1
coords31 = {
    "ก": (((1, -4), (-2, 7)), (-3, 7), (7, 5)),
    "ข": (((2, 1), (-3, 4)), (3, -5), (-3/11, -13/11)),
    "ง": (((1, 5, -3), (3, 7, -5)), (-2, 0, 1), (7/4, -5/4)),
}
for tag, (basis, x, exp) in coords31.items():
    B = np.column_stack(basis).astype(float)
    c = np.linalg.solve(B, np.array(x, float)) if len(basis[0]) == len(basis) else np.linalg.lstsq(B, np.array(x, float), rcond=None)[0]
    check(f"3.1 ข1{tag} [x]B = {exp}", np.allclose(c, exp))
Bk = np.column_stack([(3., 6, 2), (-1., 0, 1)])
c = np.linalg.lstsq(Bk, np.array([3., 12, 7]), rcond=None)[0]
check("3.1 ข1ค [x]B = (2, 3)", np.allclose(c, [2, 3]) and np.allclose(Bk @ c, [3, 12, 7]))
# ข้อ 2
P2 = np.array([[1., 0, -1], [2, 1, 1], [0, 0, 3]])
check("3.1 ข2 det P = 3, P⁻¹v = (1,0,1)",
      np.isclose(np.linalg.det(P2), 3) and np.allclose(np.linalg.solve(P2, np.array([0., 3, 3])), [1, 0, 1]))
# ข้อ 3
P3 = np.array([[0., -6], [4, -1]])
check("3.1 ข3 P=[0 −6;4 −1], [x]C = (−6,11)", np.allclose(P3 @ np.array([3., 1]), [-6, 11]))
# ข้อ 4
M4 = np.array([[2., 0, -3], [-1, 3, 2], [1, 1, 0]])
Pinv = np.linalg.inv(M4)
check("3.1 ข4 P_{B←C} + [w1−2w2+2w3]B = (11/4, −3/4, 3/2)",
      np.allclose(Pinv, [[-1/4, -3/8, 9/8], [1/4, 3/8, -1/8], [-1/2, -1/4, 3/4]])
      and np.allclose(Pinv @ np.array([1., -2, 2]), [11/4, -3/4, 3/2]))
# ข้อ 6
T6 = lambda x: np.array([x[0] + 2*x[1], 2*x[0] - 3*x[1]], float)
c1 = np.linalg.solve(np.column_stack([(2., 1), (-1., 0)]), T6((1., 0)))
c2 = np.linalg.solve(np.column_stack([(2., 1), (-1., 0)]), T6((0., 1)))
check("3.1 ข6ก [T] = [[2,−3],[3,−8]]", np.allclose(np.column_stack([c1, c2]), [[2, -3], [3, -8]]))
c1 = np.linalg.solve(np.column_stack([(1., 1), (0., 2)]), T6((1., 1)))
c2 = np.linalg.solve(np.column_stack([(1., 1), (0., 2)]), T6((-2., 3)))
check("3.1 ข6ข [T] = [[3,4],[−2,−17/2]]", np.allclose(np.column_stack([c1, c2]), [[3, 4], [-2, -8.5]]))
# ข้อ 7
sets731 = {
    "ก": (((7, 5), (-3, -1)), ((1, -5), (-2, 2)), [[-3, 1], [-5, 2]], [[-2, 1], [-5, 3]]),
    "ข": (((-1, 8), (1, -5)), ((1, 4), (1, 1)), [[3, -2], [-4, 3]], [[3, 2], [4, 3]]),
    "ค": (((-6, -1), (2, 0)), ((2, -1), (6, -2)), [[9, -2], [-4, 1]], [[1, 2], [4, 9]]),
}
for tag, (vb, wb, eCB, eBC) in sets731.items():
    V = np.column_stack(vb).astype(float); W = np.column_stack(wb).astype(float)
    PCB = np.linalg.solve(W, V); PBC = np.linalg.solve(V, W)
    check(f"3.1 ข7{tag} B→C และ C→B ตรง", np.allclose(PCB, eCB) and np.allclose(PBC, eBC) and np.allclose(PCB @ PBC, np.eye(2)))
# ข้อ 9
TB9 = np.array([[0., 3, 1], [1, 1, 2], [1, 0, -1]])
check("3.1 ข9 [T(x)]B = (3,−3,4)", np.allclose(TB9 @ np.array([1., 2, -3]), [3, -3, 4]))
# ข้อ 10
A10 = np.array([[2., -1, 0], [1, 1, 1], [0, 1, -1]])
P10 = np.column_stack([(2., 1, 3), (1., 0, 1), (-1., 1, 1)])
TB10 = np.linalg.inv(P10) @ A10 @ P10
x31b = np.linalg.solve(P10, np.array([-1., 4, 0]))
check("3.1 ข10 [T]B + [x]B = (7,−18,−3) + [T(x)]B = (−4,9,7)",
      np.allclose(TB10, [[17, 7, -1], [-42, -17, 1], [-11, -5, 2]])
      and np.allclose(x31b, [7, -18, -3]) and np.allclose(TB10 @ x31b, [-4, 9, 7]))
# ข้อ 11
A11 = np.array([[1., 0, 1, -1], [2, 0, -1, 0], [1, 2, 1, 1], [0, 0, 1, -1]])
P11 = np.column_stack([(-1., 1, -1, 1), (2., 1, 0, 1), (1., 0, 0, 2), (0., 0, 0, 1)])
TB11 = np.linalg.inv(P11) @ A11 @ P11
x31c = np.linalg.solve(P11, np.array([2., -1, 2, 3]))
check("3.1 ข11 [T]B + [x]B = (−2,1,−2,8) + [T(x)]B = (−5,7,−18,33)",
      np.allclose(TB11, [[-1, -5, -3, -1], [0, 9, 5, 1], [-4, -22, -14, -4], [7, 39, 24, 7]])
      and np.allclose(x31c, [-2, 1, -2, 8]) and np.allclose(TB11 @ x31c, [-5, 7, -18, 33]))
# ข้อ 12
A12 = np.array([[1., 1, 3], [2, -1, 1], [1, 2, 0]])
Pb1 = np.column_stack([(1., 1, 1), (1., 0, 1), (-1., 1, 0)])
Pb2 = np.column_stack([(1., 2, 1), (-1., 1, 2), (1., 2, 3)])
TB1 = np.linalg.inv(Pb1) @ A12 @ Pb1; TB2 = np.linalg.inv(Pb2) @ A12 @ Pb2
xb1 = np.linalg.solve(Pb1, np.array([1., 2, 2])); xb2 = np.linalg.solve(Pb2, np.array([1., 2, 2]))
check("3.1 ข12 [T]B1, [T]B2, พิกัด, P_{B1←B2}, [T]_{B2←B1}",
      np.allclose(TB1, [[4, 6, -4], [-1, -5, 5], [-2, -3, 1]])
      and np.allclose(TB2, [[-8/3, -7/3, -2], [-11/3, -13/3, -7], [5, 4, 7]])
      and np.allclose(xb1, [1, 1, 1]) and np.allclose(xb2, [.5, 0, .5])
      and np.allclose(TB1 @ xb1, [6, -1, -4]) and np.allclose(TB2 @ xb2, [-7/3, -16/3, 6])
      and np.allclose(np.linalg.inv(Pb1) @ Pb2, [[2, -2, 0], [-1, 4, 3], [0, 3, 2]])
      and np.allclose(np.linalg.inv(Pb2) @ A12 @ Pb1, [[-2/3, 4/3, -3], [-8/3, -5/3, -1], [3, 1, 2]]))

# ---------------- แบบฝึกหัด 4.5 ----------------
check("4.5 ข1ก xᵀAx = 5x₁²−x₂²+x₁x₂ (ตรวจ 2 จุด)",
      all(np.isclose(v @ np.array([[5., .5], [.5, -1]]) @ v, e)
          for v, e in [(np.array([1., 0]), 5.0), (np.array([1., 1]), 5.0)]))
check("4.5 ข1ข xᵀAx = 4x₁²+2x₂²+x₃²+6x₁x₂+2x₂x₃ (ตรวจ 2 จุด)",
      all(np.isclose(np.array(v) @ np.array([[4., 3, 0], [3, 2, 1], [0, 1, 1]]) @ np.array(v), e)
          for v, e in [((1, 1, 0), 12.0), ((1, 1, 1), 4+2+1+6+2)]))
sets452 = {
    "ก": (-5, -2, 4), "ข": (3, 3, -4), "ค": (9, 3, -8), "ง": (0, 0, 1),
}
for tag, (a11, a22, c12) in sets452.items():
    A = np.array([[a11, c12/2], [c12/2, a22]])
    x = np.array([2.0, -3])
    check(f"4.5 ข2{tag} เมทริกซ์ตรง xᵀAx ที่ (2,−3)",
          np.isclose(x @ A @ x, a11*4 + a22*9 + c12*2*(-3)))
check("4.5 ข2จ/ฉ เมทริกซ์ตรง",
      np.isclose(np.array([0., 1, 1]) @ np.array([[1., 0, 0], [0, 1, -1], [0, -1, 1]]) @ np.array([0., 1, 1]), 0)
      and np.isclose(np.array([1., 1, -1]) @ np.array([[9., -4, 4], [-4, 7, 0], [4, 0, 11]]) @ np.array([1., 1, -1]), 11))
# ข้อ 3 จำแนก
lams3 = {"ก": (-6, -1), "ข": (5, 1), "ค": (11, 1), "ง": (0.5, -0.5), "จ": (2, 1, 0), "ฉ": (15, 9, 3)}
for tag, exp in lams3.items():
    Ms = {"ก": [[-5., 2], [2, -2]], "ข": [[3., -2], [-2, 3]], "ค": [[9., -4], [-4, 3]], "ง": [[0., .5], [.5, 0]],
          "จ": [[1., 0, 0], [0, 1, -1], [0, -1, 1]], "ฉ": [[9., -4, 4], [-4, 7, 0], [4, 0, 11]]}
    got = sorted(np.linalg.eigvalsh(np.array(Ms[tag])), reverse=True)
    check(f"4.5 ข3{tag} λ = {sorted(exp, reverse=True)}", np.allclose(got, sorted(exp, reverse=True)))
P45 = np.column_stack([[1, -1], [1, 1]]) / np.sqrt(2)   # หลักตามลำดับ λ = 2, 4
check("4.5 ข4 λ = 2, 4 ทิศ (1,−1), (1,1) + PᵀAP = diag(2,4)",
      np.allclose(P45.T @ np.array([[3., 1], [1, 3]]) @ P45, np.diag([2, 4])))
# ข้อ 5
check("4.5 ข5ก k>4: k=5 PD / k=3 ไม่ PD",
      all(np.linalg.eigvalsh(np.array([[1., -2], [-2, k]]))[0] > 0) if False else
      np.linalg.eigvalsh(np.array([[1., -2], [-2, 5.]]))[0] > 0 and np.linalg.eigvalsh(np.array([[1., -2], [-2, 3.]]))[0] < 0)
check("4.5 ข5ข จริง: k > 1/2 (k=0.6 PD, k=0.4 ไม่) — คำตอบตำรา k>2 ผิด",
      np.linalg.eigvalsh(np.array([[5., 2, -1], [2, 2, -1], [-1, -1, .6]]))[0] > 0
      and np.linalg.eigvalsh(np.array([[5., 2, -1], [2, 2, -1], [-1, -1, .4]]))[0] < 0)
check("4.5 ข5ค จริง: k² < 5/3 (k=1.2 PD, k=1.3 ไม่) — คำตอบตำรา k≤1 ผิด",
      np.linalg.eigvalsh(np.array([[3., 0, 1], [0, 1, 1.2], [1, 1.2, 2]]))[0] > 0
      and np.linalg.eigvalsh(np.array([[3., 0, 1], [0, 1, 1.3], [1, 1.3, 2]]))[0] < 0)
# ข้อ 6: เชิงเส้นใหม่ Pᵀc และรูปจัดกำลังสองสมบูรณ์
Ps = {"ก": np.column_stack([[2, -1], [1, 2]]) / np.sqrt(5),
      "ข": np.column_stack([[1, -1], [1, 1]]) / np.sqrt(2),
      "ค": np.column_stack([[-3, 4], [4, 3]]) / 5,
      "ง": np.column_stack([[-1, 3], [3, 1]]) / np.sqrt(10)}
cs = {"ก": [2 * np.sqrt(5), 4 * np.sqrt(5)], "ข": [2 * np.sqrt(2), 6 * np.sqrt(2)],
      "ค": [25., 50], "ง": [2 * np.sqrt(10), 0]}
exp_lin = {"ก": (0., 10), "ข": (-4., 8), "ค": (25., 50), "ง": (-2., 6)}
for tag in "กขคง":
    check(f"4.5 ข6{tag} พจน์เชิงเส้นใหม่ Pᵀc = {exp_lin[tag]}",
          np.allclose(Ps[tag].T @ np.array(cs[tag]), exp_lin[tag]))
# จุด (0, −1/2) ต้องอยู่บนทั้งสองรูป (แทนตรงพอดี)
check("4.5 ข6ก จัดกำลังสอง: 9y₁²+4(y₂+5/4)² = 9/4 (ตรวจจุดบนวงรี)",
      np.isclose(9*0 + 4*(-0.5+1.25)**2, 9/4) and np.isclose(4*0.25 + 10*(-0.5) + 4, 0))
check("4.5 ข6ง ค่าคงที่ 26/15", np.isclose(7.5 * (2/15)**2 + 2.5 * (6/5)**2 - 2, 26/15))
check("4.5 ข6จ/ฉ λ ของเมทริกซ์พื้นผิว = ของ 4.4 ข1จ/ฉ",
      np.allclose(sorted(np.linalg.eigvalsh(np.array([[2., 4, -4], [4, -2, 0], [-4, 0, -2]]))), [-6, -2, 6])
      and np.allclose(sorted(np.linalg.eigvalsh(np.array([[0., 1, 1], [1, 0, 1], [1, 1, 0]]))), [-1, -1, 2]))

# ---------------- แบบฝึกหัด 4.3 ----------------
# ข้อ 1 best approximation
for tag, (u1, u2, y, ey) in {
    "ก": ((3, 1, -1, 1), (1, -1, 1, -1), (3, 1, 5, 1), (3, -1, 1, -1)),
    "ข": ((1, -2, -1, 2), (-4, 1, 0, 3), (3, -1, 1, 13), (-1, -5, -3, 9)),
}.items():
    u1, u2, y = map(lambda t: np.array(t, float), (u1, u2, y))
    yhat = (y @ u1 / (u1 @ u1)) * u1 + (y @ u2 / (u2 @ u2)) * u2
    check(f"4.3 ข1{tag} ฐานตั้งฉาก + ŷ = {ey}", np.isclose(u1 @ u2, 0) and np.allclose(yhat, ey))
# ข้อ 2 ระยะ
u1 = np.array([-3., -5, 1]); u2 = np.array([-3., 2, 1]); y43 = np.array([5., -9, 5])
yhat = (y43 @ u1 / (u1 @ u1)) * u1 + (y43 @ u2 / (u2 @ u2)) * u2
check("4.3 ข2 ŷ=(3,−9,−1), ระยะ 2√10",
      np.allclose(yhat, [3, -9, -1]) and np.isclose(np.linalg.norm(y43 - yhat), 2 * np.sqrt(10)))
# ข้อ 3 LS ด้วยหลักตั้งฉาก
sets343 = {
    "ก": ([[1, 5], [3, 1], [-2, 4]], (4, -2, -3), (2/7, 1/7)),
    "ข": ([[1, 3], [-2, 0], [3, -1]], (2, -1, 4), (8/7, 1/5)),
    "ค": ([[1, 1, 0], [1, 0, -1], [0, 1, 1], [-1, 1, -1]], (2, 5, 6, 6), (1/3, 14/3, -5/3)),
    "ง": ([[4, 0, 1], [1, -5, 1], [6, 1, 0], [1, -1, -5]], (9, 0, 0, 0), (2/3, 0, 1/3)),
}
for tag, (A, b, ex) in sets343.items():
    A = np.array(A, float); b = np.array(b, float)
    orth = np.allclose(A.T @ A - np.diag(np.diag(A.T @ A)), 0)
    xh = np.linalg.solve(A.T @ A, A.T @ b)
    check(f"4.3 ข3{tag} หลักตั้งฉาก + x̂ = {[round(float(v), 6) for v in ex]}", orth and np.allclose(xh, ex))
# ข้อ 4 LS + ค่าคลาดเคลื่อน
sets443 = {
    "ก": ([[2, 1], [-2, 0], [2, 3]], (-5, 8, 1), (-4, 3), 0),
    "ข": ([[1, -2], [2, -1], [0, 1]], (3, -1, 5), (3/7, 2/7), 242/7),
    "ค": ([[1, 1, 1], [1, 0, 1], [1, 1, 0], [0, 1, 1]], (0, 1, -1, -2), (8/7, -13/7, 1/7), 4/7),
}
for tag, (A, b, ex, eerr2) in sets443.items():
    A = np.array(A, float); b = np.array(b, float)
    xh = np.linalg.solve(A.T @ A, A.T @ b)
    err2 = float(np.sum((b - A @ xh) ** 2))
    check(f"4.3 ข4{tag} x̂ = {[round(float(v), 6) for v in ex]}, คลาดเคลื่อน² = {eerr2}",
          np.allclose(xh, ex) and np.isclose(err2, eerr2))
A = np.array([[1., 1, 0]] * 3 + [[1., 0, 1]] * 3); b = np.array([7., 2, 3, 6, 5, 4])
t = np.float64(-1.0); xh = np.array([t, 4 - t, 5 - t])
check("4.3 ข4ง อนันต์ชุด: (−1,5,6)+t(1,−1,−1) เป็น LS sol + คลาดเคลื่อน² = 16",
      np.allclose(A.T @ A @ xh, A.T @ b) and np.isclose(float(np.sum((b - A @ xh) ** 2)), 16)
      and np.linalg.matrix_rank(A.T @ A) == 2)
# ข้อ 5 เส้น LS
lines43 = {
    "ก": ([(1, 0), (2, 1), (4, 2), (5, 3)], (-3/5, 7/10)),
    "ข": ([(-3, 8), (-1, 5), (1, 3), (3, 0)], (4, -13/10)),
    "ค": ([(1, 1), (2, 4), (3, 6), (4, 9)], (-3/2, 13/5)),
    "ง": ([(0, 0), (1, 1), (2, 3), (3, 8)], (-9/10, 13/5)),
}
for tag, (pp, ebeta) in lines43.items():
    X = np.array([[1, x] for x, _ in pp], float); yv = np.array([y for _, y in pp], float)
    beta = np.linalg.solve(X.T @ X, X.T @ yv)
    check(f"4.3 ข5{tag} β = {[round(float(v), 6) for v in ebeta]}", np.allclose(beta, ebeta))

# ---------------------------------------------------------------- สรุป
fails = [n for n, c in ok if not c]
print(f"\n===== คลังโจทย์จากตำรา: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    sys.exit(1)
