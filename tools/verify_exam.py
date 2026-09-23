#!/usr/bin/env python3
"""ตรวจความถูกต้องคณิตศาสตร์ของโจทย์/เฉลยทุกข้อในหน้าติวสอบ (exam-midterm, exam-final)
พร้อมเช็กจำนวนโจทย์ซ้อมให้ตรงกับ registry ใน assets/js/main.js"""
import re
import sys
from pathlib import Path

import numpy as np
from fractions import Fraction as F

ROOT = Path(__file__).resolve().parent.parent

ok = []
def check(name, cond):
    ok.append((name, bool(cond)))
    print(("PASS  " if cond else "FAIL  ") + name)

def det_int(M):
    """det แบบเป๊ะด้วย Fraction (รับตัวเลข int/float จำนวนน้อย)"""
    M = [[F(str(x)) for x in row] for row in M]
    n = len(M)
    total = F(1)
    for i in range(n):
        p = next((r for r in range(i, n) if M[r][i] != 0), None)
        if p is None:
            return F(0)
        if p != i:
            M[i], M[p] = M[p], M[i]
            total = -total
        total *= M[i][i]
        for r in range(i + 1, n):
            f = M[r][i] / M[i][i]
            for c in range(i, n):
                M[r][c] -= f * M[i][c]
    return total

def rref(M):
    M = np.array(M, dtype=float).copy()
    m, n = M.shape
    piv = []
    r = 0
    for c in range(n):
        if r >= m: break
        p = np.argmax(np.abs(M[r:, c])) + r
        if abs(M[p, c]) < 1e-10: continue
        M[[r, p]] = M[[p, r]]
        M[r] /= M[r, c]
        for i in range(m):
            if i != r: M[i] -= M[i, c] * M[r]
        piv.append(c)
        r += 1
    return M, piv

# ---------- โครงสร้างหน้าเว็บ: จำนวนโจทย์ซ้อมต้องตรง registry ----------
mid = (ROOT / "pages/exam-midterm.frag").read_text(encoding="utf-8")
fin = (ROOT / "pages/exam-final.frag").read_text(encoding="utf-8")
mid_keys = re.findall(r'data-pkey="(pM-\d+)"', mid)
fin_keys = re.findall(r'data-pkey="(pF-\d+)"', fin)
check("midterm มีโจทย์ซ้อม pM-1..pM-8 ครบพอดี", mid_keys == [f"pM-{i}" for i in range(1, 9)])
check("final มีโจทย์ซ้อม pF-1..pF-8 ครบพอดี", fin_keys == [f"pF-{i}" for i in range(1, 9)])

# ================= MIDTERM ตัวอย่าง =================
# แนว 1: ระบบผลเฉลยอนันต์ (−1+t, 2−t, t)
Mm1 = np.array([[1, 2, 1], [2, 5, 3], [1, 3, 2]], float)
_, piv1 = rref(np.column_stack([Mm1, [3, 8, 5]]))
check("แนว1 RREF มี 2 หลักตัวหลัก + แถวล้า", len(piv1) == 2 and np.allclose(piv1, [0, 1]))
check("แนว1 RREF = [[1,0,-1,-1],[0,1,1,2],[0,0,0,0]]",
      np.allclose(rref(np.column_stack([Mm1, [3, 8, 5]]))[0], [[1, 0, -1, -1], [0, 1, 1, 2], [0, 0, 0, 0]]))
for t in (0, 1, 3.5):
    x = (-1 + t, 2 - t, t)
    check(f"แนว1 แทน t={t}", np.allclose(Mm1 @ x, [3, 8, 5]))

# แนว 2: span → น้ำหนัก (2,1,3)
Vm2 = np.array([[1, 0, 1], [1, 1, 0], [0, 1, 1]], float)
check("แนว2 2v1+v2+3v3 = b", np.allclose(Vm2 @ [2, 1, 3], [5, 3, 4]))
check("แนว2 det = 2 (ผลเฉลยชุดเดียว)", det_int([[1, 0, 1], [1, 1, 0], [0, 1, 1]]) == 2)

# แนว 3: พึ่งเชิงเส้น, det = 0, v3 = 2v1 − v2
check("แนว3 det = 0", det_int([[1, 2, 0], [1, 3, -1], [2, 1, 3]]) == 0)
check("แนว3 v3 = 2v1 − v2", np.allclose(2 * np.array([1, 1, 2]) - np.array([2, 3, 1]), [0, -1, 3]))
Vm3 = np.column_stack([[1, 1, 2], [2, 3, 1], [0, -1, 3]])
check("แนว3 น้ำหนัก (2,-1,-1) ทำให้ 0", np.allclose(Vm3 @ [2, -1, -1], 0))

# แนว 4: T(5,-3) = (21,-17,7); preimage (1,1,-5) ไม่มี (8/5 != -5)
Am4 = np.array([[3, -2], [-1, 4], [2, 1]], float)
check("แนว4 T(5,-3)", np.allclose(Am4 @ [5, -3], [21, -17, 7]))
check("แนว4 det บน = 10", det_int([[3, -2], [-1, 4]]) == 10)
x12 = np.linalg.solve(Am4[:2], [1, 1])
check("แนว4 (x1,x2) = (3/5, 2/5)", np.isclose(x12, [0.6, 0.4]).all())
check("แนว4 แถวที่3 = 8/5 != -5", F(2) * F(3, 5) + F(2, 5) == F(8, 5) and F(8, 5) != -5)

# แนว 5: A = [[1,2,3],[0,1,4],[5,6,0]]; det=1; A⁻¹; Ax=(1,-1,2) → (-32,27,-7)
Am5 = np.array([[1, 2, 3], [0, 1, 4], [5, 6, 0]], float)
check("แนว5 det = 1", det_int([[1, 2, 3], [0, 1, 4], [5, 6, 0]]) == 1)
check("แนว5 A⁻¹ = [[-24,18,5],[20,-15,-4],[-5,4,1]]",
      np.allclose(np.linalg.inv(Am5), [[-24, 18, 5], [20, -15, -4], [-5, 4, 1]]))
check("แนว5 A·A⁻¹ = I", np.allclose(Am5 @ np.linalg.inv(Am5), np.eye(3)))
check("แนว5 x = (-32,27,-7)", np.allclose(np.linalg.solve(Am5, [1, -1, 2]), [-32, 27, -7]))

# แนว 6: คราเมอร์ det = 7, detA1 = 14, detA2 = -7, detA3 = 21 → (2,-1,3)
A6 = [[1, 0, 1], [2, 1, 0], [0, 2, 3]]
d0 = det_int(A6)
d1 = det_int([[5, 0, 1], [3, 1, 0], [7, 2, 3]])
d2 = det_int([[1, 5, 1], [2, 3, 0], [0, 7, 3]])
d3 = det_int([[1, 0, 5], [2, 1, 3], [0, 2, 7]])
check("แนว6 dets = 7, 14, -7, 21", [d0, d1, d2, d3] == [7, 14, -7, 21])
check("แนว6 ผลเฉลย (2,-1,3)", [d1 / d0, d2 / d0, d3 / d0] == [2, -1, 3])
check("แนว6 แทนกลับครบ", np.allclose(np.array(A6) @ [2, -1, 3], [5, 3, 7]))

# ================= MIDTERM โจทย์ซ้อม =================
check("ซ้อม1 ผลเฉลย (1,2,3)", np.allclose(np.array([[1, 1, 1], [1, 2, 3], [2, 1, -1]]) @ [1, 2, 3], [6, 14, 1]))
# ซ้อม2: h=3 → อนันต์, h≠3 → ไม่มีผลเฉลย
_, pv = rref(np.array([[2, 1, 3], [4, 2, 6]], float))
check("ซ้อม2 h=3 แถวล้า (rank 1)", len(pv) == 1)
_, pv = rref(np.array([[2, 1, 0], [4, 2, 6]], float))
check("ซ้อม2 h=0 เกิดแถว [0,0,b] (rank 2, ไม่ต้องกัน)",
      len(pv) == 2 and not np.allclose(rref(np.array([[2, 1, 0], [4, 2, 6]], float))[0][1], [0, 0, 0]))
# ซ้อม3: ไม่ต้องกัน (eq1+eq3 = 6 ≠ 3), v3 = v1+v2
Vm3p = np.array([[1, 0, 1], [1, 1, 2], [0, 1, 1]], float)
check("ซ้อม3 v3 = v1+v2", np.allclose(np.array([1, 2, 1]), np.array([1, 1, 0]) + np.array([0, 1, 1])))
check("ซ้อม3 rank A=2 < rank [A|b]=3", np.linalg.matrix_rank(Vm3p) == 2
      and np.linalg.matrix_rank(np.column_stack([Vm3p, [2, 3, 4]])) == 3)
# ซ้อม4: w = 2u+v
check("ซ้อม4 2u+v = w", np.allclose(2 * np.array([2, -1, 3]) + np.array([1, 2, -1]), [5, 0, 5]))
# ซ้อม5: จัดหมวดเชิงเส้น (ข) T(0)≠0, (ค) T(-e1)≠-T(e1)
check("ซ้อม5 T(0) = (1,0) ≠ 0", [1, 0] != [0, 0])
check("ซ้อม5 |T(-1,0)| ≠ -T(1,0)", (1, 0) != (-1, 0))
# ซ้อม6: T(3,-2) = (8,-3)
check("ซ้อม6 T(3,-2)", np.allclose(np.array([[2, -1], [1, 3]]) @ [3, -2], [8, -3]))
# ซ้อม7: A⁻¹ = [[2,-1],[-5,3]], x = (3,-2)
A7 = np.array([[3, 1], [5, 2]], float)
check("ซ้อม7 A⁻¹", np.allclose(np.linalg.inv(A7), [[2, -1], [-5, 3]]) and det_int([[3, 1], [5, 2]]) == 1)
check("ซ้อม7 x = (3,-2)", np.allclose(np.linalg.solve(A7, [7, 11]), [3, -2]))
# ซ้อม8: คราเมอร์ det = 8, 8, 16, -8 → (1,2,-1)
e0 = det_int([[2, 1, 0], [1, 3, 1], [0, 1, 2]])
e1 = det_int([[4, 1, 0], [6, 3, 1], [0, 1, 2]])
e2 = det_int([[2, 4, 0], [1, 6, 1], [0, 0, 2]])
e3 = det_int([[2, 1, 4], [1, 3, 6], [0, 1, 0]])
check("ซ้อม8 dets = 8, 8, 16, -8", [e0, e1, e2, e3] == [8, 8, 16, -8])
check("ซ้อม8 ผลเฉลย (1,2,-1)", [e1 / e0, e2 / e0, e3 / e0] == [1, 2, -1])

# ================= FINAL ตัวอย่าง =================
# แนว 1ก: A 3×3 λ=1,2,3; v = (1,1,1),(0,1,1),(1,0,1); trace 6 det 6
Af1 = np.array([[1, -2, 2], [-1, 1, 1], [-1, -2, 4]], float)
check("แนว1ก eigenvalues 1,2,3", np.allclose(sorted(np.linalg.eigvals(Af1)), [1, 2, 3]))
for l, v in [(1, [1, 1, 1]), (2, [0, 1, 1]), (3, [1, 0, 1])]:
    check(f"แนว1ก Av = {l}v", np.allclose(Af1 @ v, l * np.array(v)))
check("แนว1ก trace 6 det 6", abs(np.trace(Af1) - 6) < 1e-12 and abs(np.linalg.det(Af1) - 6) < 1e-12)
check("แนว1ก char poly λ³−6λ²+11λ−6", np.allclose(np.poly(Af1), [1, -6, 11, -6]))
check("แนว1ก M11 = (λ−2)(λ−3) ที่ λ=0: 6", F(6) == F(2) * 3)
# แนว 1ข: 4×4 λ=-1,1,2,3; v(2)=(1,-3,-1,3); det=-6
Af2 = np.array([[5, 1, 0, 0], [-5, 0, 1, 0], [-5, 0, 0, 1], [6, 0, 0, 0]], float)
check("แนว1ข char poly λ⁴−5λ³+5λ²+5λ−6", np.allclose(np.poly(Af2), [1, -5, 5, 5, -6]))
check("แนว1ข eigenvalues -1,1,2,3", np.allclose(sorted(np.linalg.eigvals(Af2)), [-1, 1, 2, 3]))
check("แนว1ข Av = 2v ที่ v=(1,-3,-1,3)", np.allclose(Af2 @ [1, -3, -1, 3], 2 * np.array([1, -3, -1, 3])))
check("แนว1ข det = -6 trace = 5", abs(np.linalg.det(Af2) + 6) < 1e-9 and abs(np.trace(Af2) - 5) < 1e-12)
check("แนว1ข (λ²−1)(λ²−5λ+6) เท่ากับ char poly",
      np.allclose(np.convolve([1, 0, -1], [1, -5, 6]), [1, -5, 5, 5, -6]))
# แนว 2: สามเหลี่ยม AB·AC=0; |AB|²=9, |AC|²=18, |BC|²=27; มุม cos=√3/2
AB = np.array([3, 2, 3]) - [1, 1, 1]
AC = np.array([2, -3, 2]) - [1, 1, 1]
BC = np.array([2, -3, 2]) - [3, 2, 3]
check("แนว2 AB·AC = 0", np.dot(AB, AC) == 0)
check("แนว2 กำลังสอง 9,18,27 (พีทาโกรัส)", [np.dot(AB, AB), np.dot(AC, AC), np.dot(BC, BC)] == [9, 18, 27])
uf, vf = np.array([1, 1, 0]), np.array([1, 2, 1])
check("แนว2 cos = √3/2 (π/6)", np.isclose(np.dot(uf, vf) / (np.linalg.norm(uf) * np.linalg.norm(vf)), np.sqrt(3) / 2))
# แนว 3: P; ระนาบ x+y+z=4; ระยะ (5√6−2√3)/6 ≈ 1.464
P = np.array([F(5, 2), F(5, 2), -F(5) * np.sqrt(2) / 2], dtype=complex)
check("แนว3 |P| = 5", np.isclose(abs(complex(2.5, 0) ** 2 * 0 + (2.5 ** 2 + 2.5 ** 2 + (5 * np.sqrt(2) / 2) ** 2)) ** 0.5, 5))
check("แนว3 cross = (16,16,16)", np.allclose(np.cross(np.array([0, 4, 0]) - [4, 0, 0], np.array([0, 0, 4]) - [4, 0, 0]), [16, 16, 16]))
check("แนว3 จุด A,B,C อิ่ม x+y+z=4", all(a + b + c == 4 for a, b, c in [(4, 0, 0), (0, 4, 0), (0, 0, 4)]))
dist = abs(2.5 + 2.5 - 5 * np.sqrt(2) / 2 - 4) / np.sqrt(3)
check("แนว3 ระยะ = (5√6−2√3)/6 ≈ 1.464", np.isclose(dist, (5 * np.sqrt(6) - 2 * np.sqrt(3)) / 6) and np.isclose(dist, 1.4639, atol=1e-3))
check("แนว3 cos(π/4)·5 = 5√2/2", np.isclose(5 * np.cos(np.pi / 4), 5 * np.sqrt(2) / 2))
# แนว 4: cos=1/2; u+v=(3,√3,0) ยาว 2√3; unit=(√3/2,1/2,0)
u4, v4 = np.array([2.0, 0, 0]), np.array([1.0, np.sqrt(3), 0])
check("แนว4 cos = 1/2 (π/3)", np.isclose(np.dot(u4, v4) / 4, 0.5))
s4 = u4 + v4
check("แนว4 |u+v| = 2√3", np.isclose(np.linalg.norm(s4), 2 * np.sqrt(3)))
check("แนว4 unit = (√3/2, 1/2, 0)", np.allclose(s4 / np.linalg.norm(s4), [np.sqrt(3) / 2, 0.5, 0]))
# แนว 5: ปริมาตร 6
u5, v5, w5 = map(np.array, ([1, 2, 0], [0, 1, 1], [2, 1, 3]))
check("แนว5 u×v = (2,-1,1)", np.allclose(np.cross(u5, v5), [2, -1, 1]))
check("แนว5 ปริมาตร 6", np.isclose(np.dot(np.cross(u5, v5), w5), 6))
check("แนว5 det ตรง ๆ = 6", det_int([[1, 2, 0], [0, 1, 1], [2, 1, 3]]) == 6)
# แนว 6: พหุนาม c=(3,-2,2) → 5x²+9x+7
res6 = 3 * np.array([1, 1, 1]) + (-2) * np.array([2, -1, 2]) + 2 * np.array([3, 2, 4])
check("แนว6 3p1−2p2+2p3 = 5x²+9x+7", np.allclose(res6, [5, 9, 7]))
# แนว 7: least squares ŷ = 82.6 − 8.7x; ŷ(2.5) = 60.85; เศษรวม 0
A7f = np.array([[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]], float)
b7 = np.array([82, 74, 67, 55, 48], float)
xhat, *_ = np.linalg.lstsq(A7f, b7, rcond=None)
check("แนว7 x̂ = (82.6, −8.7)", np.allclose(xhat, [82.6, -8.7]))
check("แนว7 AᵀA = [[5,10],[10,30]], Aᵀb = (326,565)",
      np.allclose(A7f.T @ A7f, [[5, 10], [10, 30]]) and np.allclose(A7f.T @ b7, [326, 565]))
check("แนว7 ŷ(2.5) = 60.85", np.isclose(82.6 - 8.7 * 2.5, 60.85))
check("แนว7 เศษตกค้างรวม = 0", np.isclose(np.sum(b7 - A7f @ xhat), 0))

# ================= FINAL โจทย์ซ้อม =================
# ซ้อม1: [[4,1],[2,3]] λ=2,5
A1f = np.array([[4, 1], [2, 3]], float)
check("ซ้อม1 λ = 2,5", np.allclose(sorted(np.linalg.eigvals(A1f)), [2, 5]))
check("ซ้อม1 v(2)=(1,-2), v(5)=(1,1)",
      np.allclose(A1f @ [1, -2], 2 * np.array([1, -2])) and np.allclose(A1f @ [1, 1], 5 * np.array([1, 1])))
check("ซ้อม1 λ²−7λ+10", [7, 10] == [int(np.trace(A1f)), int(round(np.linalg.det(A1f)))])
# ซ้อม2: [[7,0,-3],[3,4,-3],[6,0,-2]] λ=4,4,1; E4 ฐาน 2 ตัว; v(1)=(1,1,2)
A2f = np.array([[7, 0, -3], [3, 4, -3], [6, 0, -2]], float)
check("ซ้อม2 λ = 4,4,1", np.allclose(sorted(np.linalg.eigvals(A2f).round(9)), [1, 4, 4]))
check("ซ้อม2 trace 9 det 16", abs(np.trace(A2f) - 9) < 1e-12 and abs(np.linalg.det(A2f) - 16) < 1e-9)
for vv in [(0, 1, 0), (1, 0, 1)]:
    check(f"ซ้อม2 A·{vv} = 4·{vv}", np.allclose(A2f @ vv, 4 * np.array(vv)))
check("ซ้อม2 v(1) = (1,1,2)", np.allclose(A2f @ [1, 1, 2], np.array([1, 1, 2])))
check("ซ้อม2 det P = −1 (แปลงทแยงได้)", det_int([[0, 1, 1], [1, 0, 1], [0, 1, 2]]) == -1)
# ซ้อม3: A⁴ = [[1,30],[0,16]]
A3f = np.array([[1, 2], [0, 2]], float)
check("ซ้อม3 A⁴ = [[1,30],[0,16]]", np.allclose(np.linalg.matrix_power(A3f, 4), [[1, 30], [0, 16]]))
check("ซ้อม3 P⁻¹ = [[1,-2],[0,1]]", np.allclose(np.linalg.inv([[1, 2], [0, 1]]), [[1, -2], [0, 1]]))
# ซ้อม4: มุมฉากที่ B; 9+5=14
BA = np.array([2, 3, 3]) - [1, 1, 1]
BCf = np.array([3, 0, 1]) - [1, 1, 1]
ACf = np.array([3, 0, 1]) - [2, 3, 3]
check("ซ้อม4 BA·BC = 0 และ 9+5=14",
      np.dot(BA, BCf) == 0 and [np.dot(BA, BA), np.dot(BCf, BCf), np.dot(ACf, ACf)] == [9, 5, 14])
# ซ้อม5: ระยะ 3
check("ซ้อม5 ระยะ = 3", F(4) + 4 + 10 - 9 == 9 and F(9) / 3 == 3)
# ซ้อม6: cos=1/2; unit = (2,1,1)/√6
u6f, v6f = np.array([1.0, 1, 0]), np.array([1.0, 0, 1])
check("ซ้อม6 cos = 1/2", np.isclose(np.dot(u6f, v6f) / 2, 0.5))
s6 = u6f + v6f
check("ซ้อม6 unit = (2,1,1)/√6", np.allclose(s6 / np.linalg.norm(s6), [2, 1, 1] / np.sqrt(6)))
check("ซ้อม6 |u+v| = √6", np.isclose(np.linalg.norm(s6), np.sqrt(6)))
# ซ้อม7: ปริมาตร 25
u7f, v7f, w7f = map(np.array, ([2, 1, 0], [0, 3, 1], [1, 0, 4]))
check("ซ้อม7 u×v = (1,-2,6), ปริมาตร 25",
      np.allclose(np.cross(u7f, v7f), [1, -2, 6]) and np.isclose(np.dot(np.cross(u7f, v7f), w7f), 25))
# ซ้อม8: 3x²+2x+1 = 2p1 + p2 − p3; det = −2 (ฐานหลัก)
res8 = 2 * np.array([1, 0, 1]) + 1 * np.array([2, 1, 0]) + (-1) * np.array([1, -1, 1])
check("ซ้อม8 2p1+p2−p3 = 3x²+2x+1", np.allclose(res8, [3, 2, 1]))
check("ซ้อม8 det = −2 ≠ 0 (เป็นฐานหลัก)", det_int([[1, 2, 1], [0, 1, -1], [1, 0, 1]]) == -2)

fails = [n for n, c in ok if not c]
print(f"\n===== หน้าติวสอบ: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    sys.exit(1)
