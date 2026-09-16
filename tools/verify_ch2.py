#!/usr/bin/env python3
"""ตรวจความถูกต้องคณิตศาสตร์ของโจทย์/เฉลยทุกข้อในบทที่ 2 ของเว็บสื่อการสอน"""
import numpy as np

ok = []
def check(name, cond):
    ok.append((name, bool(cond)))
    print(("PASS  " if cond else "FAIL  ") + name)

def rref(M):
    M = M.astype(float).copy()
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

# ---------- หน้า 2.1 ----------
A = np.array([[3, -2], [1, 4]], float)
check("2.1 ex1 T(2,-1)", np.allclose(A @ np.array([2, -1.]), [8, -2]))
check("2.1 ex1 solve x=(1,-1)", np.allclose(A @ np.array([1, -1.]), [5, -3]))
check("2.1 ex1 RREF", np.allclose(rref(np.array([[3, -2, 5], [1, 4, -3]], float))[0], [[1, 0, 1], [0, 1, -1]]))
A = np.array([[-1, 7], [1, -3], [3, 5]], float)
check("2.1 ex(b) T(1,-2)", np.allclose(A @ np.array([1, -2.]), [-15, 7, -7]))
A = np.array([[1, 0], [0, 1], [2, 1]], float)
check("2.1 ex5 T(3,2)", np.allclose(A @ np.array([3, 2.]), [3, 2, 8]))
check("2.1 ex6 standard matrix", np.allclose(np.array([[-2, 10], [3, -11], [-2, 7]], float) @ np.array([4, 1.]), [2, 1, -1]))
check("2.1 ex6 standard matrix (3,1)", np.allclose(np.array([[-2, 10], [3, -11], [-2, 7]], float) @ np.array([3, 1.]), [4, -2, 1]))
_, piv = rref(np.array([[1, -2, 1], [2, 0, 2], [-3, 6, 3]], float))
check("2.1 ex5 pivots = 3", len(piv) == 3)
check("2.1 P1 T(3,2)", np.allclose(np.array([[2, -1], [4, 3]], float) @ np.array([3, 2.]), [4, 18]))
check("2.1 P1 x=(1,1)", np.allclose(np.array([[2, -1], [4, 3]], float) @ np.array([1, 1.]), [1, 7]))
A = np.array([[1, 1, 0], [0, 1, 2], [0, 0, 0], [0, 1, 0]], float)
_, piv = rref(A)
check("2.1 P5 pivots = 3 (1-1, not onto)", len(piv) == 3 and len(piv) < 4)
check("2.1 P4 A(2,1)=(3,-1)", np.allclose(np.array([[2, -1], [-6, 11]], float) @ np.array([2, 1.]), [3, -1]))
check("2.1 P4 A(1,1)=(1,5)", np.allclose(np.array([[2, -1], [-6, 11]], float) @ np.array([1, 1.]), [1, 5]))

# ---------- หน้า 2.2 ----------
E = np.array([[1, 0, 1], [0, 1, 1], [1, 1, 2]], float)
_, piv = rref(E)
check("2.2 ex2(ก) dependent (2 pivots)", len(piv) == 2)
E = np.array([[1, 0, 1], [0, 1, 1], [1, 1, 3]], float)
_, piv = rref(E)
check("2.2 ex2(ข) independent (3 pivots)", len(piv) == 3)
A = np.array([[1, 0, -2, 3], [0, 1, 1, -1], [1, 1, -1, 2]], float)
R, piv = rref(A)
check("2.2 ex3 RREF", np.allclose(R, [[1, 0, -2, 3], [0, 1, 1, -1], [0, 0, 0, 0]]) and piv == [0, 1])
check("2.2 ex3 Col basis", np.allclose(A[:, 0], [1, 0, 1]) and np.allclose(A[:, 1], [0, 1, 1]))
check("2.2 ex3 Nul v1", np.allclose(A @ np.array([2, -1, 1, 0.]), [0, 0, 0]))
check("2.2 ex3 Nul v2", np.allclose(A @ np.array([-3, 1, 0, 1.]), [0, 0, 0]))
A = np.array([[1, 2, 0], [0, -1, 1], [1, 1, 1]], float)
R, piv = rref(A)
check("2.2 ex4 pivots cols 1,2, dim H = 2", piv == [0, 1])
A = np.array([[1, 1, -1, -1], [1, 1, 1, 1]], float)
R, piv = rref(A)
check("2.2 ex5 RREF", np.allclose(R, [[1, 1, 0, 0], [0, 0, 1, 1]]) and piv == [0, 2])
check("2.2 ex5 Nul vectors", np.allclose(A @ np.array([-1, 1, 0, 0.]), [0, 0]) and np.allclose(A @ np.array([0, 0, -1, 1.]), [0, 0]))
check("2.2 ex6 rank 3 -> nullity 5", 8 - 3 == 5)
E = np.array([[0, 6, 5], [1, 3, -7], [-2, 5, 4]], float)
_, piv = rref(E)
check("2.2 P2(ก) basis R3 (3 pivots)", len(piv) == 3)
A = np.array([[1, 2, 0, 1], [2, 4, 1, 5], [1, 2, 1, 4]], float)
R, piv = rref(A)
check("2.2 P3 RREF pivots 1,3", piv == [0, 2] and np.allclose(R, [[1, 2, 0, 1], [0, 0, 1, 3], [0, 0, 0, 0]]))
check("2.2 P3 Nul v1", np.allclose(A @ np.array([-2, 1, 0, 0.]), [0, 0, 0]))
check("2.2 P3 Nul v2", np.allclose(A @ np.array([-1, 0, -3, 1.]), [0, 0, 0]))
check("2.2 P4 plane vectors", np.allclose(2 * 1 - 2 + 0, 0) and np.allclose(2 * 1 - 0 + (-2), 0))
A = np.array([[1, -2], [1, 1], [1, 3]], float)
_, piv = rref(A)
check("2.2 P5 dim H = 2 (2 pivots)", len(piv) == 2)

# ---------- หน้า 2.3 ----------
A = np.array([[3, 5], [1, 2]], float)
check("2.3 ex1 A^-1", np.allclose(np.linalg.inv(A), [[2, -5], [-1, 3]]))
check("2.3 ex2 x = A^-1 b", np.allclose(np.linalg.inv(A) @ np.array([11, 4.]), [2, 1]))
A = np.array([[1, 0, 3], [0, 2, 0], [2, 0, 5]], float)
check("2.3 ex3 A^-1", np.allclose(np.linalg.inv(A), [[-5, 0, 3], [0, 0.5, 0], [2, 0, -1]]))
A = np.array([[1, -2, -1], [-1, 5, 6], [5, -4, 5]], float)
_, piv = rref(A)
check("2.3 ex4(ก) singular (2 pivots)", len(piv) < 3)
A = np.array([[1, -7, 3], [2, 1, 1], [1, 3, 2]], float)
check("2.3 ex4(ข) h=3 invertible (det=5(h+4)≠0)", np.isclose(np.linalg.det(A), 35))
for h in [3.0]:
    A = np.array([[1, -7, h], [2, 1, 1], [1, 3, 2]], float)
    R, piv = rref(A)
    check(f"2.3 ex4(ข) h={h} pivots=3", len(piv) == 3)
A = np.array([[1, -7, -4], [2, 1, 1], [1, 3, 2]], float)
_, piv = rref(A)
check("2.3 ex4(ข) h=-4 singular", len(piv) < 3)
E1 = np.array([[1, 0, 0], [0, 0, 1], [0, 1, 0]], float)
E2 = np.array([[1, 0, 0], [0, 3, 0], [0, 0, 1]], float)
E3 = np.array([[1, 0, 0], [-4, 1, 0], [0, 0, 1]], float)
A = np.array([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]], dtype=object)
check("2.3 ex6 E1 swap rows", np.allclose(E1 @ np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9.]]), np.array([[1, 2, 3], [7, 8, 9], [4, 5, 6.]])))
check("2.3 ex6 E2 scale row", np.allclose(E2 @ np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9.]]), np.array([[1, 2, 3], [12, 15, 18], [7, 8, 9.]])))
check("2.3 ex6 E3 replacement", np.allclose(E3 @ np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9.]]), np.array([[1, 2, 3], [0, -3, -6], [7, 8, 9.]])))
check("2.3 ex6 inverses", np.allclose(E1 @ E1, np.eye(3)) and np.allclose(E2 @ np.diag([1, 1/3, 1]), np.eye(3)) and np.allclose(E3 @ np.array([[1, 0, 0], [4, 1, 0], [0, 0, 1.]]), np.eye(3)))
A = np.array([[1, 2], [-1, 3]], float)
check("2.3 P1(ก) A^-1", np.allclose(np.linalg.inv(A), np.array([[3, -2], [1, 1]]) / 5))
A = np.array([[2, 4], [0, -1]], float)
check("2.3 P1(ข) B^-1", np.allclose(np.linalg.inv(A), [[0.5, 2], [0, -1]]))
A = np.array([[3, 4], [5, 6]], float)
check("2.3 P1(ค) C^-1", np.allclose(np.linalg.inv(A), [[-3, 2], [2.5, -1.5]]))
A = np.array([[1, 2], [-1, 3]], float)
check("2.3 P2 x", np.allclose(np.linalg.inv(A) @ np.array([-4, 1.]), [-14/5, -3/5]))
A = np.array([[-1, 2, -5], [2, 1, 0], [4, -2, 5]], float)
check("2.3 P3 A^-1", np.allclose(np.linalg.inv(A), (1/15) * np.array([[5, 0, 5], [-10, 15, -10], [-8, 6, -5]]), atol=1e-12))
A = np.array([[1, 0, 0, 0], [2, 1, 0, 0], [4, 2, 1, 0], [-2, 3, 1, 1]], float)
check("2.3 P4 A^-1", np.allclose(np.linalg.inv(A), [[1, 0, 0, 0], [-2, 1, 0, 0], [0, -2, 1, 0], [8, -1, -1, 1]]))
A = np.array([[1, 1, 0, -1], [3, 2, 1, 1], [1, 0, 1, 3]], float)
C = np.array([[-2, 1, 0], [3, -1, 0], [2, -1, 1]], float)
R, piv = rref(A)
check("2.3 P5 CA = RREF, rank 2", np.allclose(C @ A, R) and len(piv) == 2)

# ---------- หน้า 2.4 ----------
A = np.array([[2, 1, 3], [0, -1, 2], [1, 2, 0]], float)
check("2.4 ex1 det A = -3", np.isclose(np.linalg.det(A), -3))
A = np.array([[-4, 0, 0, 0], [0, 2, 0, 0], [1, 2, -3, 0], [-2, 4, 2, -1]], float)
check("2.4 ex2 triangular det = -24", np.isclose(np.linalg.det(A), -24))
A = np.array([[1, 2, 1, 3], [2, 5, 6, 8], [-1, -2, 0, 2], [3, 6, 3, 11]], float)
check("2.4 ex3 det = 2", np.isclose(np.linalg.det(A), 2))
check("2.4 ex4 det values", 2 * (-3) == -6 and 2**3 * 2 == 16 and (-3) / 2 == -1.5 and 9 / 2 == 4.5 and (-3)**3 * 5 == -135)
A = np.array([[-1, 4, 1], [3, 0, 2], [2, 1, 0]], float)
adj = np.round(np.linalg.det(A) * np.linalg.inv(A)).astype(int)
check("2.4 ex5 det = 21", np.isclose(np.linalg.det(A), 21))
check("2.4 ex5 adj A", np.allclose(adj, [[-2, 1, 8], [4, -2, 5], [3, 9, -12]]))
check("2.4 ex6 cramer textbook", np.allclose(np.linalg.solve(np.array([[1, -1, 2], [3, -2, 4], [0, 2, -5]], float), np.array([-2, -5, 2.])), [-1, 1, 0]))
Ap = np.array([[2, 1, 3], [1, -2, 2], [0, 1, 3]], float)
cof = [[(-1)**(i+j+2) * np.linalg.det(np.delete(np.delete(Ap, i, 0), j, 1)) for j in range(3)] for i in range(3)]
check("2.4 P1 cofactors (all 9)", np.allclose(cof, [[-8, -3, 1], [0, 6, -2], [8, -1, -5]]) and np.isclose(np.linalg.det(np.array([[2, 1, 3], [1, -2, 2], [0, 1, 3]], float)), -16))
check("2.4 P2(ก) det = 1", np.isclose(np.linalg.det(np.array([[1, -1, 2], [3, 1, 1], [2, -1, 3]], float)), 1))
check("2.4 P3 det = -1", np.isclose(np.linalg.det(np.array([[1, 2, 3], [2, 5, 3], [1, 0, 8]], float)), -1))
# P4: base matrix with base det = 4 to mirror the problem
Abase = np.array([[2, 1, 1], [3, 5, 2], [1, 0, 4.]])
d0 = np.linalg.det(Abase)
# (ก) rows: r1, -r3, 3r2  ->  det = 3 * (+1) * (+1)?  = -1(scale -r3) then swap => 3*(-1)*(-1)*d0 = 3*d0
M1 = np.array([[2, 1, 1], [-1, 0, -4], [9, 15, 6.]])
check("2.4 P4(ก) det = 3*d0", np.isclose(np.linalg.det(M1), 3 * d0))
# (ข) rows: 2r1+r2, r3, -2r1 -> after R3+R1: [r3, r2]; scale 2 from r1; R1-1/2 R3; swap R2,R3 => -2*d0
r1v, r2v, r3v = Abase[0], Abase[1], Abase[2]
M2 = np.array([2*r1v + r2v, r3v, -2*r1v])
check("2.4 P4(ข) det = -2*d0", np.isclose(np.linalg.det(M2), -2 * d0))
A = np.array([[0, 7, 5, 4], [3, 8, 6, 0], [1, -7, -5, 0], [2, 0, 0, 8]], float)
check("2.4 P5 det A = 0 (singular)", np.isclose(np.linalg.det(A), 0))
A = np.array([[1, -7, 3], [2, 1, 1], [1, 3, 2]], float)
check("2.4 P5 h=3 invertible", np.linalg.det(A) != 0)
A = np.array([[1, 1, 1], [2, -1, 1], [1, 2, -1]], float)
b = np.array([6, 3, 2.])
check("2.4 P6 det A = 7", np.isclose(np.linalg.det(A), 7))
A1 = A.copy(); A1[:, 0] = b; A2 = A.copy(); A2[:, 1] = b; A3 = A.copy(); A3[:, 2] = b
check("2.4 P6 dets (7,14,21)", np.allclose([np.linalg.det(A1), np.linalg.det(A2), np.linalg.det(A3)], [7, 14, 21]))
check("2.4 P6 solution (1,2,3)", np.allclose(np.linalg.solve(A, b), [1, 2, 3]))

fails = [n for n, c in ok if not c]
print(f"\n===== บทที่ 2: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    raise SystemExit(1)
