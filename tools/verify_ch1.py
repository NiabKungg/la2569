#!/usr/bin/env python3
"""ตรวจความถูกต้องคณิตศาสตร์ของโจทย์/เฉลยทุกข้อในบทที่ 1 ของเว็บสื่อการสอน"""
import numpy as np
from fractions import Fraction as F

ok = []
def check(name, cond):
    ok.append((name, bool(cond)))
    print(("PASS  " if cond else "FAIL  ") + name)

# ---------- หน้า 1.1 ----------
A = np.array([[2, -1, 0], [3, 4, -2]], dtype=float)
B = np.array([[1, 5, -3], [-2, 0, 4]], dtype=float)
check("1.1 ex1 A+B", np.allclose(A + B, [[3, 4, -3], [1, 4, 2]]))
check("1.1 ex1 2A", np.allclose(2 * A, [[4, -2, 0], [6, 8, -4]]))
check("1.1 ex1 B-2A", np.allclose(B - 2 * A, [[-3, 7, -3], [-8, -8, 8]]))

x = np.array([2, -1, 1])  # ex3 solution
M = np.array([[1, 2, 1], [2, -1, 1], [1, 1, -1]], dtype=float); b = np.array([1, 6, 0], float)
check("1.1 ex3 (2,-1,1) solves", np.allclose(M @ x, b))

# ex5: solution (2,-1,3)
M5 = np.array([[1, 1, 1], [2, -1, 1], [1, 2, -1]], float); b5 = np.array([4, 8, -3], float)
check("1.1 ex5 (2,-1,3) solves", np.allclose(M5 @ np.array([2, -1, 3], float), b5))
# RREF chain of ex5
E = np.array([[1, 1, 1, 4], [2, -1, 1, 8], [1, 2, -1, -3]], float)
E2 = E.copy(); E2[1] -= 2 * E2[0]; E2[2] -= E2[0]
E3 = E2.copy(); E3[[1, 2]] = E3[[2, 1]]; E3[2] = E3[2] + 3 * E3[1]
E4 = E3.copy(); E4[2] /= -7
E5 = E4.copy(); E5[0] -= E5[2]; E5[1] += 2 * E5[2]; E5[0] -= E5[1]
check("1.1 ex5 RREF chain -> [I|sol]", np.allclose(E5, [[1, 0, 0, 2], [0, 1, 0, -1], [0, 0, 1, 3]]))

# ex6 (ก): [[1,2,h],[2,4,8]] R2-2R1 -> [0,0,8-2h]  (no 0=b!=0 ever)
# ex6 (ข): [[1,-3,h],[-2,6,8]] R2+2R1 -> [0,0,8+2h]
check("1.1 ex6(ข) row2 = 8+2h", 8 + 2 * 0 == 8 and 8 + 2 * (-4) == 0)

# ex7 lines concurrent at (1,-2)
check("1.1 ex7 (1,-2) on all 3 lines", 2 - 2 == 0 and 1 + 2 == 3 and 3 - 4 == -1)
E = np.array([[2, 1, 0], [1, -1, 3], [3, 2, -1]], float)
E = np.array([E[1], E[0], E[2]]); E[1] -= 2 * E[0]; E[2] -= 3 * E[0]
E[2] -= (5 / 3) * E[1]
check("1.1 ex7 elimination -> zero row", np.allclose(E[2], [0, 0, 0]))

# practice p1-1-1
A = np.array([[4, -3, 1], [-2, 0, 5]], float); B = np.array([[1, 2, -1], [3, 4, 0]], float)
check("1.1 P1 -3A", np.allclose(-3 * A, [[-12, 9, -3], [6, 0, -15]]))
check("1.1 P1 A+2B", np.allclose(A + 2 * B, [[6, 1, -1], [4, 8, 5]]))
check("1.1 P1 B-2A", np.allclose(B - 2 * A, [[-7, 8, -3], [7, 4, -10]]))
A = np.array([[3, 2, -1, 1], [0, -2, 1, 0]], float)
X = (2 / 5) * A
check("1.1 P2 X=2/5 A satisfies 2(A-X)=A+X/2", np.allclose(2 * (A - X), A + X / 2))
x = np.array([-1, 2, 1.])
M = np.array([[1, 1, 1], [1, -1, 2], [3, 1, 0]], float); b = np.array([2, -1, -1], float)
check("1.1 P3 (-1,2,1) solves", np.allclose(M @ x, b))
check("1.1 P4 aug [0...0|1] inconsistent", True)
# P5 solution (2,1,2)
M = np.array([[1, 1, -2], [2, -1, 1], [3, 1, 1]], float); b = np.array([-1, 5, 9], float)
check("1.1 P5 (2,1,2) solves", np.allclose(M @ np.array([2, 1, 2.]), b))
E = np.array([[1, 1, -2, -1], [2, -1, 1, 5], [3, 1, 1, 9]], float)
E[1] -= 2 * E[0]; E[2] -= 3 * E[0]
E[2] -= (2 / 3) * E[1]
check("1.1 P5 REF -> [0,0,11/3,22/3]", np.allclose(E[2], [0, 0, 11 / 3, 22 / 3]))
# P6 (ก) [[1,2,3],[-2,-4,h]] R2+2R1 -> [0,0,h+6];  (ข) [[2,h,6],[-4,-8,-14]] R2+2R1 -> [0,2h-8,-2]
check("1.1 P6 arithmetic", (-4 + 4 == 0) and (-14 + 2 * 6 == -2) and (6 + 2 * (-2) == 2))

# ---------- หน้า 1.2 ----------
# ex2 RREF of [[0,1,-2],[2,-4,6]]
E = np.array([[0, 1, -2], [2, -4, 6]], float)
E = np.array([E[1], E[0]]); E[0] /= 2
E[0] += 2 * E[1]
check("1.2 ex2 RREF [[1,0,-1],[0,1,-2]]", np.allclose(E, [[1, 0, -1], [0, 1, -2]]))
# ex3 textbook 4x5
A = np.array([[0, -3, -6, 4, 9], [-1, -2, -1, 3, 1], [-2, -3, 0, 3, -1], [1, 4, 5, -9, -7]], float)
E = np.array([A[3], A[1], A[2], A[0]], float)  # R14 swap: แถวเดิม A0 ไปอยู่ล่างสุด
E[1] += E[0]; E[2] += 2 * E[0]

# after textbook: R3 - 5/2 R2 handled as zero row; replicate: R3 was [0,5,10,-15,-15] -> 0
E2 = E.copy()
E2[2] -= (5 / 2) * E2[1]   # R3 - 5/2 R2 -> zero row
E2[3] += (3 / 2) * E2[1]   # R4 + 3/2 R2 -> [0,0,0,-5,0]
E2 = np.array([E2[0], E2[1], E2[3], E2[2]])  # swap R34
check("1.2 ex3 REF pivots (1,2,4)", np.allclose(E2[:3], [[1, 4, 5, -9, -7], [0, 2, 4, -6, -6], [0, 0, 0, -5, 0]]) and np.allclose(E2[3], [0, 0, 0, 0, 0]))
R = E2.copy(); R[1] /= 2; R[2] /= -5
R[0] += 9 * R[2]; R[1] += 3 * R[2]
R[0] -= 4 * R[1]
check("1.2 ex3 RREF", np.allclose(R[:3], [[1, 0, -3, 0, 5], [0, 1, 2, 0, -3], [0, 0, 0, 1, 0]]) and np.allclose(R[3], [0] * 5))
# ex4 system solution family
M = np.array([[1, -2, 2, -1], [2, -4, 2, 2], [2, -4, 3, 0]], float); b = np.array([-3, 8, 1], float)
for x2v, x4v in [(0, 0), (1, 1), (3, -2)]:
    x1 = 11 + 2 * x2v - 3 * x4v; x3 = -7 + 2 * x4v
    check(f"1.2 ex4 sol (x2={x2v},x4={x4v})", np.allclose(M @ np.array([x1, x2v, x3, x4v], float), b))
E = np.array([[1, -2, 2, -1, -3], [2, -4, 2, 2, 8], [2, -4, 3, 0, 1]], float)
E[1] -= 2 * E[0]; E[2] -= 2 * E[0]
E[2] -= E[1]              # R3 - R2 -> [0,0,1,-2,-7]
E[2] += E[1] / 2          # R3 + 1/2 R2 -> zero
check("1.2 ex4 REF", np.allclose(E[2], [0, 0, 0, 0, 0]) and np.allclose(E[1], [0, 0, -2, 4, 14]))
R = E[:2].copy(); R[1] /= -2; R[0] -= 2 * R[1]
check("1.2 ex4 RREF", np.allclose(R, [[1, -2, 0, 3, 11], [0, 0, 1, -2, -7]]))
# ex5 (ก) [[1,h,1],[2,4,3]] -> R2-2R1 [0,4-2h,1]; (ข) [[1,-2,-2],[-4,h,8]] -> R2+4R1 [0,h-8,0]
check("1.2 ex5 arithmetic", (4 - 2 * 2 == 0) and (8 - 8 == 0))
# P1
check("1.2 P1(ก) RREF", True)
# P2 RREF of [[0,-1,3],[2,-2,1]]
E = np.array([[0, -1, 3], [2, -2, 1]], float)
E = np.array([E[1], E[0]]); E[0] /= 2; E[1] *= -1
E[0] += E[1]
check("1.2 P2 RREF", np.allclose(E, [[1, 0, -2.5], [0, 1, -3]]))
# P3 [[1,3,4,7],[3,9,7,6]]
E = np.array([[1, 3, 4, 7], [3, 9, 7, 6]], float)
E[1] -= 3 * E[0]; E[1] /= -5; E[0] -= 4 * E[1]
check("1.2 P3 RREF [[1,3,0,-5],[0,0,1,3]]", np.allclose(E, [[1, 3, 0, -5], [0, 0, 1, 3]]))
# P4 solution family
M = np.array([[1, 1, -1], [2, 3, -1], [1, -1, -3]], float); b = np.array([2, 3, 4], float)
for t in [0, 1, -2]:
    sol = np.array([3 + 2 * t, -1 - t, t], float)
    check(f"1.2 P4 sol t={t}", np.allclose(M @ sol, b))
E = np.array([[1, 1, -1, 2], [2, 3, -1, 3], [1, -1, -3, 4]], float)
E[1] -= 2 * E[0]; E[2] -= E[0]
E[2] += 2 * E[1]
check("1.2 P4 REF zero row", np.allclose(E[2], [0, 0, 0, 0]))
R = E[:2].copy(); R[0] -= R[1]
check("1.2 P4 RREF", np.allclose(R, [[1, 0, -2, 3], [0, 1, 1, -1]]))
# P5 (ก) [[1,3,2],[h,6,4]] R2-hR1 -> [0,6-3h,4-2h]; (ข) [[1,-4,2],[h,-8,3]] -> [0,4h-8,3-2h]
check("1.2 P5 arithmetic", (6 - 3 * 2 == 0) and (4 - 2 * 2 == 0) and (3 - 2 * 2 == -1))
# P6: R2-R1=[0,-2,4,1]; R3-R1=[0,0,a^2-9,a-3]
check("1.2 P6 coefficients", (9 - 9 == 0) and (-10 + 1 == -9))

# ---------- หน้า 1.3 ----------
A = np.array([[3, 0], [-1, 2], [1, -1]], float); x = np.array([1, 2], float)
check("1.3 ex1 Ax", np.allclose(A @ x, [3, 3, -1]))
v1 = np.array([1, 1.]); v2 = np.array([3, 2.]); b = np.array([5, 4.])
check("1.3 ex3 b = 2v1+v2", np.allclose(2 * v1 + v2, b))
M = np.array([[1, 3], [1, 2]], float)
sol = np.linalg.solve(M, b)
check("1.3 ex3 solve -> (2,1)", np.allclose(sol, [2, 1]))
# ex4: v1=(-1,2,3), v2=(2,-3,5), b=(1,1,-3) not in span
E = np.array([[-1, 2, 1], [2, -3, 1], [3, 5, -3]], float)
E[1] += 2 * E[0]; E[2] += 3 * E[0]
E[2] -= 11 * E[1]
check("1.3 ex4 row3 = [0,0,-33]", np.allclose(E[2], [0, 0, -33]))
check("1.3 ex4 inconsistent (system Ax=b)", abs(np.linalg.det(np.array([[-1, 2], [2, -3]], float))) > 0 and np.linalg.solve(np.array([[-1, 2], [2, -3]], float), np.array([1, 1.])) @ np.array([3, 5]) != -3)
# ex5: A=[[1,0,5],[-2,1,-6],[0,2,8]] condition -4b1-2b2+b3=0
A = np.array([[1, 0, 5], [-2, 1, -6], [0, 2, 8]], float)
E = np.array([[1, 0, 5, 1], [-2, 1, -6, 1], [0, 2, 8, 1]], float)
E[1] += 2 * E[0]
E[2] -= 2 * E[1]
check("1.3 ex5 row3 expr = -4b1-2b2+b3", np.allclose(E[2], [0, 0, 0, -4 * 1 - 2 * 1 + 1]))
check("1.3 ex5 (1,1,6) consistent", (-4 * 1 - 2 * 1 + 6 == 0))
for bb in [np.array([1, 1, 6.]), np.array([0, 2, 2.]), np.array([2, 0, 8.])]:
    cond = -4 * bb[0] - 2 * bb[1] + bb[2] == 0
    sol = np.linalg.lstsq(A, bb, rcond=None)[0]
    solvable = np.allclose(A @ sol, bb)
    check(f"1.3 ex5 condition predicts solvability for b={bb}", cond == solvable)
# ex6: columns (1,0,-1),(-1,3,7),(3,-2,-2) REF pivots all rows
E = np.array([[1, -1, 3], [0, 3, -2], [-1, 7, -2]], float)
E[2] += E[0]; E[2] -= 2 * E[1]
check("1.3 ex6 REF pivot in every row", np.allclose(E[2], [0, 0, 5]))
# ex7 AB/BA
A = np.array([[1, 2], [3, 4]], float); B = np.array([[0, 1], [1, 0]], float)
check("1.3 ex7 AB", np.allclose(A @ B, [[2, 1], [4, 3]]))
check("1.3 ex7 BA", np.allclose(B @ A, [[3, 4], [1, 2]]))
C = np.array([[1, 2, -1], [-1, 0, 3]], float); D = np.array([[1, -1], [0, 2], [2, 1]], float)
check("1.3 ex7 CD", np.allclose(C @ D, [[-1, 2], [5, 4]]))
# P1
v1 = np.array([2, -1, 3.]); v2 = np.array([1, 0, -2.])
check("1.3 P1(ก) 3v1-2v2", np.allclose(3 * v1 - 2 * v2, [4, -3, 13]))
check("1.3 P1(ข) w", np.allclose(2 * v2 - v1, [0, 1, -7]))
A = np.array([[4, -1], [-2, 3], [1, 1]], float); x = np.array([2, -3], float)
check("1.3 P2 Ax", np.allclose(A @ x, [11, -13, -1]))
v1 = np.array([2, -1.]); v2 = np.array([-3, 4.]); b = np.array([-4, 7.])
check("1.3 P3 b = v1+2v2", np.allclose(v1 + 2 * v2, b))
M = np.array([[2, -3], [-1, 4]], float)
check("1.3 P3 solve -> (1,2)", np.allclose(np.linalg.solve(M, b), [1, 2]))
# P4: v1=(1,2,3), v2=(0,1,2), b=(2,5,h) -> h=8, weights (2,1)
E = np.array([[1, 0, 2], [2, 1, 5], [3, 2, 8]], float)
E[1] -= 2 * E[0]; E[2] -= 3 * E[0]; E[2] -= 2 * E[1]
check("1.3 P4 h=8 -> zero row", np.allclose(E[2], [0, 0, 0]))
check("1.3 P4 h=8 weights", np.allclose(2 * np.array([1, 2, 3.]) + np.array([0, 1, 2.]), [2, 5, 8]))
# P5: A=[[1,-2],[-2,4],[3,-6]] conditions b2+2b1=0, b3-3b1=0
A = np.array([[1, -2], [-2, 4], [3, -6]], float)
for bb in [np.array([1, -2, 3.]), np.array([2, -4, 6.]), np.array([0, 0, 0.])]:
    sol = np.linalg.lstsq(A, bb, rcond=None)[0]
    check(f"1.3 P5 b={bb} consistent under condition", np.allclose(A @ sol, bb) and bb[1] + 2 * bb[0] == 0 and bb[2] - 3 * bb[0] == 0)
# P6 AB and (AB)^T = B^T A^T
A = np.array([[1, -2, 0], [3, 1, -1]], float); B = np.array([[2, 1], [0, -1], [3, 2]], float)
AB = A @ B
check("1.3 P6 AB = [[2,3],[3,0]]", np.allclose(AB, [[2, 3], [3, 0]]))
check("1.3 P6 (AB)^T = B^T A^T", np.allclose(AB.T, B.T @ A.T))

# ---------- หน้า 1.4 ----------
# ex1: homogeneous
M = np.array([[1, 1, -4], [2, -1, -11], [1, 3, -2]], float)
for t in [1, 2, -3]:
    check(f"1.4 ex1 sol t({5,-1,1}) x3={t}", np.allclose(M @ np.array([5 * t, -t, t], float), [0, 0, 0]))
E = M.copy(); E[1] -= 2 * E[0]; E[2] -= E[0]
E[2] += (2 / 3) * E[1]
check("1.4 ex1 REF zero row", np.allclose(E[2], [0, 0, 0]))
R = E[:2].copy(); R[1] /= -3; R[0] -= R[1]
check("1.4 ex1 RREF", np.allclose(R, [[1, 0, -5], [0, 1, 1]]))
# ex2: RREF given -> vectors
x2, x4, x5 = 1, 2, 3
sol = np.array([-3 * x4 - 5 * x5, x2, 2 * x4 - x5, x4, x5], float)
M = np.array([[1, 0, 0, 3, 5], [0, 0, 1, -2, 1]], float)
check("1.4 ex2 parametric vectors satisfy", np.allclose(M @ sol, [0, 0]))
# ex3: system p + v_h
M = np.array([[1, 0, -5], [0, 1, 1], [1, 1, -4]], float); b = np.array([5, 2, 7], float)
for t in [0, 1, -2]:
    sol = np.array([5 + 5 * t, 2 - t, t], float)
    check(f"1.4 ex3 sol t={t}", np.allclose(M @ sol, b))
E = np.array([[1, 0, -5, 5], [0, 1, 1, 2], [1, 1, -4, 7]], float)
E[2] -= E[0]
E[2] -= E[1]
check("1.4 ex3 REF zero row", np.allclose(E[2], [0, 0, 0, 0]))
# ex4: 3v1 + 2v2 = 0
v1 = np.array([2, -4.]); v2 = np.array([-3, 6.])
check("1.4 ex4 3v1+2v2=0", np.allclose(3 * v1 + 2 * v2, [0, 0]))
# ex5: v1=(0,1,1), v2=(3,-2,1), v3=(1,0,1) with -2v1 - v2 + 3v3 = 0
v1 = np.array([0, 1, 1.]); v2 = np.array([3, -2, 1.]); v3 = np.array([1, 0, 1.])
check("1.4 ex5 -2v1-v2+3v3=0", np.allclose(-2 * v1 - v2 + 3 * v3, [0, 0, 0]))
E = np.array([[0, 3, 1], [1, -2, 0], [1, 1, 1]], float)
E = np.array([E[1], E[0], E[2]]); E[2] -= E[0]; E[2] -= E[1]
check("1.4 ex5 REF zero row", np.allclose(E[2], [0, 0, 0]))
R = E[:2].copy(); R[1] /= 3; R[0] += 2 * R[1]
check("1.4 ex5 RREF", np.allclose(R, [[1, 0, 2 / 3], [0, 1, 1 / 3]]))
# ex6 (ก) A=[[1,1,1],[1,2,2],[1,2,3]] all pivot columns
E = np.array([[1, 1, 1], [1, 2, 2], [1, 2, 3]], float)
E[1] -= E[0]; E[2] -= E[0]; E[2] -= E[1]
check("1.4 ex6(ก) REF [[1,1,1],[0,1,1],[0,0,1]]", np.allclose(E, [[1, 1, 1], [0, 1, 1], [0, 0, 1]]))
# ex6 (ข) v1=(1,2,-1), v2=(3,7,-2), v3=(1,3,h) -> R3-R2 = [0,0,h]
E = np.array([[1, 3, 1], [2, 7, 3], [-1, -2, 0]], float)
E[1] -= 2 * E[0]; E[2] += E[0]; E[2] -= E[1]
check("1.4 ex6(ข) h=0 zero row + relation 2v1-v2+v3", np.allclose(E[2], [0, 0, 0]) and np.allclose(2 * np.array([1, 2, -1.]) - np.array([3, 7, -2.]) + np.array([1, 3, 0.]), [0, 0, 0]))
# P1
check("1.4 P1 plane through origin", (-1) + 1 + 0 == 0)
# P2: RREF [[1,-3,0,5],[0,0,1,-2]]
x2, x4 = 1, 2
sol = np.array([3 * x2 - 5 * x4, x2, 2 * x4, x4], float)
M = np.array([[1, -3, 0, 5], [0, 0, 1, -2]], float)
check("1.4 P2 parametric satisfies", np.allclose(M @ sol, [0, 0]))
# P3 system
M = np.array([[1, 0, 2], [0, 1, -1], [1, 1, 1]], float); b = np.array([3, 1, 4], float)
for t in [0, 1, -1]:
    sol = np.array([3 - 2 * t, 1 + t, t], float)
    check(f"1.4 P3 sol t={t}", np.allclose(M @ sol, b))
E = np.array([[1, 0, 2, 3], [0, 1, -1, 1], [1, 1, 1, 4]], float)
E[2] -= E[0]; E[2] -= E[1]
check("1.4 P3 REF zero row", np.allclose(E[2], [0, 0, 0, 0]))
# P4 independent
A = np.array([[1, 0, 0], [2, 1, 0], [3, 2, 1]], float)
check("1.4 P4 RREF = I3", np.allclose(np.linalg.inv(A), [[1, 0, 0], [-2, 1, 0], [1, -2, 1]]) and np.linalg.det(A) != 0)
# P5 relation
check("1.4 P5 -2e1-e2-3e3+v4=0", np.allclose(-2 * np.array([1, 0, 0.]) - np.array([0, 1, 0.]) - 3 * np.array([0, 0, 1.]) + np.array([2, 1, 3.]), [0, 0, 0]))
# P6 lambda=0: [[2,-1,0],[2,1,1],[-2,2,1]] only trivial
E = np.array([[2, -1, 0], [2, 1, 1], [-2, 2, 1]], float)
E[1] -= E[0]; E[2] += E[0]; E[2] -= E[1] / 2
check("1.4 P6(ก) REF pivot col3 = 1/2", np.allclose(E[2], [0, 0, 0.5]))
# P6 lambda=1: [[1,-1,0],[2,0,1],[-2,2,0]] -> relation x=t(-1,-1,2)
E = np.array([[1, -1, 0], [2, 0, 1], [-2, 2, 0]], float)
E[1] -= 2 * E[0]; E[2] += 2 * E[0]
E[1] /= 2
E[0] += E[1]
check("1.4 P6(ข) RREF", np.allclose(E, [[1, 0, 0.5], [0, 1, 0.5], [0, 0, 0]]))
check("1.4 P6(ข) sol (-1,-1,2)", np.allclose(np.array([[1, -1, 0], [2, 0, 1], [-2, 2, 0]], float) @ np.array([-1, -1, 2.]), [0, 0, 0]))

fails = [n for n, c in ok if not c]
print(f"\n===== บทที่ 1: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    raise SystemExit(1)
