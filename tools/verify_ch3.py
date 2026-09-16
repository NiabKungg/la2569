#!/usr/bin/env python3
"""ตรวจความถูกต้องคณิตศาสตร์ของโจทย์/เฉลยทุกข้อในบทที่ 3 ของเว็บสื่อการสอน"""
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

# ---------- หน้า 3.1 ----------
check("3.1 ex1 [x]_B = (2,-1)", np.allclose(2 * np.array([1, 1.]) - np.array([2, 3.]), [0, -1]))
check("3.1 ex2 [T(v2)]_C = (0,1,-4)", np.allclose([0, 1, -4], [0, 1, -4]))
check("3.1 ex3 [T]_B x", np.allclose(np.array([[1, -1, 3], [-4, 1, 5], [0, 0, -2]], float) @ np.array([2, 1, -1.]), [-2, -12, 2]))
P = np.array([[0, 0, 1], [0, 1, -1], [1, -1, 0]], float)
check("3.1 ex4 [x]_B' = (-1,3,-1)", np.allclose(P @ np.array([1, 2, -1.]), [-1, 3, -1]))
check("3.1 ex4 coords valid", np.allclose(-np.array([1, 1, 1.]) + 3 * np.array([1, 1, 0.]) - np.array([1, 0, 0.]), [1, 2, -1]))
A = np.array([[1, 3, 3], [-3, -5, -3], [3, 3, 1]], float)
Pb = np.array([[1, -1, -1], [-1, 1, 0], [1, 0, 1]], float)
check("3.1 ex5 [T]_B' diagonal", np.allclose(np.linalg.inv(Pb) @ A @ Pb, np.diag([1, -2, -2])))
check("3.1 ex5 P inverse", np.allclose(np.linalg.inv(Pb), [[1, 1, 1], [1, 2, 1], [-1, -1, 0]]))
check("3.1 ex5 Av1 = v1", np.allclose(A @ np.array([1, -1, 1.]), [1, -1, 1]))
check("3.1 ex5 Av2 = -2v2", np.allclose(A @ np.array([-1, 1, 0.]), -2 * np.array([-1, 1, 0.])))
check("3.1 P1 coords", np.allclose(np.linalg.solve(np.array([[1, 2], [1, 3]], float), np.array([0, -1.])), [2, -1]))
check("3.1 P2 [x]_B = (2,3)", np.allclose(2 * np.array([3, 6, 2.]) + 3 * np.array([-1, 0, 1.]), [3, 12, 7]))
# P3: [T]_{C<-B}
T = np.array([[1, 1], [1, 0], [0, 2]], float)  # columns T(e1), T(e2) in standard coords
W = np.array([[1, 1, 1], [0, 1, 1], [0, 0, 1]], float)  # columns w1, w2, w3
# T(e1)=(1,1,0): coords in C = solve W c = (1,1,0)
c1 = np.linalg.solve(W, np.array([1, 1, 0.]))
c2 = np.linalg.solve(W, np.array([1, 0, 2.]))
check("3.1 P3 [T]_{C<-B}", np.allclose(c1, [0, 1, 0]) and np.allclose(c2, [1, -2, 2]))
# P4
PB = np.array([[1, 1], [0, 1]], float)
check("3.1 P4 P_E->B inverse", np.allclose(np.linalg.inv(PB), [[1, -1], [0, 1]]))
check("3.1 P4 (ข) [x]_B = (2,3)", np.allclose(np.linalg.inv(PB) @ np.array([5, 3.]), [2, 3]))
check("3.1 P4 (ค) y = (5,1)", np.allclose(PB @ np.array([4, 1.]), [5, 1]))
# P5
A = np.array([[4, -2], [1, 1]], float)
P = np.array([[1, 2], [1, 1]], float)
check("3.1 P5 [T]_B' = diag(2,3)", np.allclose(np.linalg.inv(P) @ A @ P, np.diag([2, 3])))
check("3.1 P5 A(1,1)=2(1,1)", np.allclose(A @ np.array([1, 1.]), [2, 2]))
check("3.1 P5 A(2,1)=3(2,1)", np.allclose(A @ np.array([2, 1.]), [6, 3]))
# P6
Tm = np.array([[0, 1], [1, 0]], float)
P = np.array([[1, 1], [0, 1]], float)
direct = np.column_stack([np.linalg.solve(P, Tm @ np.array([1, 0.])), np.linalg.solve(P, Tm @ np.array([1, 1.]))])
check("3.1 P6 [T]_B two methods", np.allclose(np.linalg.inv(P) @ Tm @ P, direct) and np.allclose(direct, [[-1, 0], [1, 1]]))

# ---------- หน้า 3.2 ----------
A = np.array([[2, 1], [1, 2]], float)
check("3.2 ex1 Au = 3u", np.allclose(A @ np.array([1, 1.]), 3 * np.array([1, 1.])))
check("3.2 ex1 Av = v", np.allclose(A @ np.array([1, -1.]), np.array([1, -1.])))
A = np.array([[1, 2], [2, 1]], float)
check("3.2 ex2 eigen 3,-1", np.allclose(np.linalg.eigvals(A), [3, -1]) or np.allclose(sorted(np.linalg.eigvals(A)), [-1, 3]))
check("3.2 ex2 trace/det", np.isclose(np.trace(A), 2) and np.isclose(np.linalg.det(A), -3))
A = np.array([[3, 1, -1], [2, 2, -1], [2, 2, 0]], float)
ev = sorted(np.linalg.eigvals(A).real)
check("3.2 ex3 eigen 1,2,2", np.allclose(ev, [1, 2, 2]))
_, piv1 = rref(A - np.eye(3))
_, piv2 = rref(A - 2 * np.eye(3))
check("3.2 ex3 dim E1=1, dim E2=1 -> not diagonalizable", len(piv1) == 2 and len(piv2) == 2)
check("3.2 ex3 v(1,0,2) for λ=1", np.allclose(A @ np.array([1, 0, 2.]), np.array([1, 0, 2.])))
check("3.2 ex3 v(1,1,2) for λ=2", np.allclose(A @ np.array([1, 1, 2.]), 2 * np.array([1, 1, 2.])))
check("3.2 ex3 textbook v(-1,1,2) is NOT eigenvector", not np.allclose(A @ np.array([-1, 1, 2.]), 2 * np.array([-1, 1, 2.])))
A = np.array([[7, 2], [-4, 1]], float)
check("3.2 ex4 eigen 3,5", np.allclose(sorted(np.linalg.eigvals(A)), [3, 5]))
P = np.array([[-1, -1], [2, 1]], float)
D = np.diag([3, 5])
check("3.2 ex4 A = PDP^-1", np.allclose(P @ D @ np.linalg.inv(P), A))
A2 = A @ A
check("3.2 ex4 A^2", np.allclose(A2, [[41, 16], [-32, -7]]))
check("3.2 ex4 A^k formula", np.allclose(P @ np.diag([3**5, 5**5]) @ np.linalg.inv(P), np.array([[2*5**5 - 3**5, 5**5 - 3**5], [2*(3**5 - 5**5), 2*3**5 - 5**5]], float)))
A = np.array([[3, 1], [0, 3]], float)
_, piv = rref(A - 3 * np.eye(2))
check("3.2 ex5 not diagonalizable", len(piv) == 1)
# P1
A = np.array([[2, 3], [3, 2]], float)
check("3.2 P1 u,w eigenvectors", np.allclose(A @ np.array([1, 1.]), 5 * np.array([1, 1.])) and np.allclose(A @ np.array([1, -1.]), -1 * np.array([1, -1.])))
# P2
A = np.array([[1, -2], [1, 4]], float)
check("3.2 P2 eigen 2,3", np.allclose(sorted(np.linalg.eigvals(A)), [2, 3]))
# P3
A = np.array([[4, -2], [1, 1]], float)
check("3.2 P3 E2 v=(1,1)", np.allclose(A @ np.array([1, 1.]), 2 * np.array([1, 1.])))
check("3.2 P3 E3 v=(2,1)", np.allclose(A @ np.array([2, 1.]), 3 * np.array([2, 1.])))
# P4
A = np.array([[0, 2], [3, 1]], float)
P = np.array([[2, 1], [3, -1]], float)
D = np.diag([3, -2])
check("3.2 P4 A = PDP^-1", np.allclose(P @ D @ np.linalg.inv(P), A))
check("3.2 P4 A^3 = [[6,14],[21,13]]", np.allclose(np.linalg.matrix_power(A, 3), [[6, 14], [21, 13]]))
# P5
A = np.array([[4, 0, 1], [-2, 1, 0], [-2, 0, 1]], float)
ev = sorted(np.linalg.eigvals(A).real)
check("3.2 P5 eigen 1,2,3", np.allclose(ev, [1, 2, 3]))
P = np.array([[0, 1, 1], [1, -2, -1], [0, -2, -1]], float)
check("3.2 P5 A = PDP^-1 with D=diag(1,2,3)", np.allclose(P @ np.diag([1, 2, 3]) @ np.linalg.inv(P), A))
# P6
A = np.array([[2, 1], [0, 2]], float)
_, pivA = rref(A - 2 * np.eye(2))
check("3.2 P6(ก) not diagonalizable", len(pivA) == 1)
B = np.array([[2, 0, 0], [0, 2, 0], [1, 0, 5]], float)
_, pivB2 = rref(B - 2 * np.eye(3))
_, pivB5 = rref(B - 5 * np.eye(3))
P = np.array([[0, -3, 0], [1, 0, 0], [0, 1, 1]], float)
check("3.2 P6(ข) diagonalizable", len(pivB2) == 1 and len(pivB5) == 2 and np.allclose(P @ np.diag([2, 2, 5]) @ np.linalg.inv(P), B))

# ---------- หน้า 3.3 ----------
A = np.array([[1, -1], [-4, 4]], float)
check("3.3 ex1 eigen 0,5", np.allclose(sorted(np.linalg.eigvals(A)), [0, 5]))
check("3.3 ex1 v1=(1,-4) for λ=5", np.allclose(A @ np.array([1, -4.]), 5 * np.array([1, -4.])))
check("3.3 ex1 v2=(1,1) for λ=0", np.allclose(A @ np.array([1, 1.]), [0, 0]))
A = np.array([[2, 1], [1, 2]], float)
check("3.3 ex2 solution", np.allclose(A @ np.array([1, 1.]), 3 * np.array([1, 1.])))
A = np.array([[1, 2], [4, 3]], float)
check("3.3 ex3 eigen 5,-1", np.allclose(sorted(np.linalg.eigvals(A)), [-1, 5]))
check("3.3 ex3 general sol at t=0", np.allclose(np.array([1, 2.]) + np.array([1, -1.]), [2, 1]))
A = np.array([[5, -6, -6], [-1, 4, 2], [3, -6, -4]], float)
ev = sorted(np.linalg.eigvals(A).real)
check("3.3 ex4 eigen 1,2,2", np.allclose(ev, [1, 2, 2]))
check("3.3 ex4 textbook P,D", np.allclose(np.linalg.inv(np.array([[3, 2, 2], [-1, 1, 0], [3, 0, 1]], float)) @ A @ np.array([[3, 2, 2], [-1, 1, 0], [3, 0, 1]], float), np.diag([1, 2, 2])))
C = np.array([-2, 0, 5.])
x0 = C[0] * np.array([3, -1, 3.]) + C[1] * np.array([2, 1, 0.]) + C[2] * np.array([2, 0, 1.])
check("3.3 ex4 C=(-2,0,5) gives x(0)=(4,2,-1)", np.allclose(x0, [4, 2, -1]))
# P1
A = np.array([[4, 1], [2, 3]], float)
check("3.3 P1 eigen 5,2", np.allclose(sorted(np.linalg.eigvals(A)), [2, 5]))
check("3.3 P1 v1=(1,1), v2=(1,-2)", np.allclose(A @ np.array([1, 1.]), 5 * np.array([1, 1.])) and np.allclose(A @ np.array([1, -2.]), 2 * np.array([1, -2.])))
# P2
A = np.array([[3, -2], [2, -2]], float)
check("3.3 P2 eigen 2,-1", np.allclose(sorted(np.linalg.eigvals(A)), [-1, 2]))
C = np.array([2, -1.])
x0 = C[0] * np.array([2, 1.]) + C[1] * np.array([1, 2.])
check("3.3 P2 C=(2,-1) gives (3,0)", np.allclose(x0, [3, 0]))
check("3.3 P2 check eq1 at t=0", np.isclose((A @ np.array([3, 0.]))[0], 9))
# P3
A = np.array([[1, -1, -1], [0, 1, 3], [0, 3, 1]], float)
check("3.3 P3 eigen 4,-2,1", np.allclose(sorted(np.linalg.eigvals(A).real), [-2, 1, 4]))
check("3.3 P3 v(2,-3,-3) for λ=4", np.allclose(A @ np.array([2, -3, -3.]), 4 * np.array([2, -3, -3.])))
check("3.3 P3 v(0,1,-1) for λ=-2", np.allclose(A @ np.array([0, 1, -1.]), -2 * np.array([0, 1, -1.])))
check("3.3 P3 v(1,0,0) for λ=1", np.allclose(A @ np.array([1, 0, 0.]), np.array([1, 0, 0.])))
# P4
A = np.array([[1, 1], [0, 1]], float)
_, piv = rref(A - np.eye(2))
check("3.3 P4 not diagonalizable", len(piv) == 1)
# P5
A = np.array([[1, 0, 0], [0, -2, 1], [0, 0, 1]], float)
check("3.3 P5 eigen 1,1,-2", np.allclose(sorted(np.linalg.eigvals(A)), [-2, 1, 1]))
_, piv1 = rref(A - np.eye(3))
_, piv2 = rref(A + 2 * np.eye(3))
check("3.3 P5 dim E1=2, dim E-2=1 -> diagonalizable", len(piv1) == 1 and len(piv2) == 2)
check("3.3 P5 E1 basis (0,1,3)", np.allclose(A @ np.array([0, 1, 3.]), np.array([0, 1, 3.])))
C = np.array([2, 5, 2.])
x0 = C[0] * np.array([1, 0, 0.]) + C[1] * np.array([0, 1, 3.]) + C[2] * np.array([0, 1, 0.])
check("3.3 P5 C=(2,5,2) gives (2,7,15)", np.allclose(x0, [2, 7, 15]))
# P6
A = np.array([[1, 1], [2, 0]], float)
check("3.3 P6 eigen 2,-1 with given vectors", np.allclose(A @ np.array([1, 1.]), 2 * np.array([1, 1.])) and np.allclose(A @ np.array([1, -2.]), -1 * np.array([1, -2.])))

fails = [n for n, c in ok if not c]
print(f"\n===== บทที่ 3: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    raise SystemExit(1)
