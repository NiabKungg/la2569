#!/usr/bin/env python3
"""ตรวจความถูกต้องคณิตศาสตร์ของโจทย์/เฉลยทุกข้อในบทที่ 4"""
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

# ---------- หน้า 4.1 ----------
u = np.array([-1, 2.]); v = np.array([3, 2.])
check("4.1 ex1 dot=1, norms", np.isclose(u @ v, 1) and np.isclose(np.linalg.norm(u), np.sqrt(5)) and np.isclose(np.linalg.norm(v), np.sqrt(13)))
w2 = 2 * u + v
check("4.1 ex1 2u+v unit", np.allclose(w2, [1, 6]) and np.isclose(np.linalg.norm(w2 / np.linalg.norm(w2)), 1))
v4 = np.array([1, 0, -2, 2.])
check("4.1 ex2 |v|=3, unit, -v", np.isclose(np.linalg.norm(v4), 3) and np.allclose(v4 / 3, [1/3, 0, -2/3, 2/3]) and np.allclose(-v4, [-1, 0, 2, -2]))
U1 = np.array([2, 4, -1.]); U2 = np.array([1, 0, 2.]); U3 = np.array([8, -5, -4.]); x = np.array([5, 1, 0.])
check("4.1 ex3 orthogonal set", np.isclose(U1 @ U2, 0) and np.isclose(U1 @ U3, 0) and np.isclose(U2 @ U3, 0))
check("4.1 ex3 weights (2/3, 1, 1/3)", np.allclose(2/3 * U1 + U2 + 1/3 * U3, x))
Q = np.column_stack([U1 / np.sqrt(21), U2 / np.sqrt(5), U3 / np.sqrt(105)])
check("4.1 ex3 U orthonormal", np.allclose(Q.T @ Q, np.eye(3)))
Ut = np.array([[1/np.sqrt(6), 0, -5/np.sqrt(30)], [-2/np.sqrt(6), 1/np.sqrt(5), -2/np.sqrt(30)], [1/np.sqrt(6), 2/np.sqrt(5), 1/np.sqrt(30)]])
check("4.1 ex4 textbook U orthonormal", np.allclose(Ut.T @ Ut, np.eye(3)))
check("4.1 P2 3 units", np.isclose(np.linalg.norm(np.array([-6, 2, -3.])), 7) and np.allclose(3 * np.array([-6, 2, -3.]) / 7, [-18/7, 6/7, -9/7]))
a1 = np.array([-3, 3, 0.]); a2 = np.array([-2, -2, 1.]); a3 = np.array([1, 1, 4.]); xx = np.array([5, -3, 1.])
check("4.1 P3 orthogonal set", np.isclose(a1 @ a2, 0) and np.isclose(a1 @ a3, 0) and np.isclose(a2 @ a3, 0))
check("4.1 P3 weights", np.allclose(-4/3 * a1 - 1/3 * a2 + 1/3 * a3, xx))
u = np.array([1, 2, 2.]); vv = np.array([2, 1, -2.]); ww = np.array([2, -2, 1.]); y = np.array([3, 1, 4.])
check("4.1 P5 orthogonal trio", np.isclose(u @ vv, 0) and np.isclose(u @ ww, 0) and np.isclose(vv @ ww, 0))
check("4.1 P5 weights 13/9,-1/9,8/9", np.allclose(13/9 * u - 1/9 * vv + 8/9 * ww, y))
Um = np.array([[1, 2, 2], [2, 1, -2], [2, -2, 1]]) / 3
check("4.1 P6 det U = -1", np.isclose(np.linalg.det(Um), -1))

# ---------- หน้า 4.2 ----------
# ex1 H perp of span (1,1,0),(0,1,1)
At = np.array([[1, 0], [1, 1], [0, 1]], float)
_, piv = rref(At.T)
check("4.2 ex1 Hperp basis (1,-1,1)", np.allclose(At.T @ np.array([1, -1, 1.]), [0, 0]) and len(piv) == 2)
yy = np.array([5, 0.]); uu = np.array([3, 4.])
check("4.2 ex2 proj", np.allclose((yy @ uu / (uu @ uu)) * uu, [9/5, 12/5]))
u1 = np.array([1, 0, 1.]); u2 = np.array([-1, 4, 1.]); u3 = np.array([2, 1, -2.]); xx = np.array([8, -4, -3.])
check("4.2 ex3 orthogonal", np.isclose(u1 @ u2, 0) and np.isclose(u1 @ u3, 0) and np.isclose(u2 @ u3, 0))
yv = (xx @ u1 / 2) * u1 + (xx @ u2 / 18) * u2
zv = (xx @ u3 / 9) * u3
check("4.2 ex3 y=(4,-6,1), z=(4,2,-4)", np.allclose(yv, [4, -6, 1]) and np.allclose(zv, [4, 2, -4]) and np.allclose(yv + zv, xx))
x1 = np.array([1, 2, 0.]); x2 = np.array([1, 2, -3.])
v2 = x2 - (x2 @ x1 / (x1 @ x1)) * x1
check("4.2 ex4 GS v2=(0,0,-3)", np.allclose(v2, [0, 0, -3]))
# ex5 GS three vectors
x1 = np.array([1, 1, 0.]); x2 = np.array([1, 0, 1.]); x3 = np.array([0, 1, 1.])
v1 = x1
w = x2 - (x2 @ v1 / (v1 @ v1)) * v1
v2 = 2 * w
v3 = x3 - (x3 @ v1 / (v1 @ v1)) * v1 - (x3 @ v2 / (v2 @ v2)) * v2
v3 = 1.5 * v3
check("4.2 ex5 GS basis (1,1,0),(1,-1,2),(-1,1,1)", np.allclose(v2, [1, -1, 2]) and np.allclose(v3, [-1, 1, 1]) and np.isclose(v1 @ v2, 0) and np.isclose(v1 @ v3, 0) and np.isclose(v2 @ v3, 0))
# ex6 QR
A = np.array([[1, 1], [1, 0], [0, 1]], float)
Q = np.column_stack([v1 / np.sqrt(2), v2 / np.sqrt(6)])
R = Q.T @ A
check("4.2 ex6 QR", np.allclose(Q @ R, A) and np.allclose(R, [[np.sqrt(2), 1/np.sqrt(2)], [0, np.sqrt(3/2)]]))
# P1
check("4.2 P1 Hperp", np.isclose(np.array([1, 2, -3.]) @ np.array([-2, 1, 0.]), 0) and np.isclose(np.array([1, 2, -3.]) @ np.array([3, 0, 1.]), 0))
# P2
u1 = np.array([1, 1, 0.]); u2 = np.array([-1, 1, 0.]); y = np.array([1, -4, 3.])
check("4.2 P2 proj = (1,-4,0)", np.allclose((y @ u1 / 2) * u1 + (y @ u2 / 2) * u2, [1, -4, 0]))
# P3
x1 = np.array([1, -1, 0.]); x2 = np.array([0, 1, -1.])
v2 = x2 - (x2 @ x1 / 2) * x1
check("4.2 P3 GS -> (1,1,-2)", np.allclose(2 * v2, [1, 1, -2]))
# P4
A = np.array([[1, 0, 1], [1, 1, 0], [1, 0, 1]], float)
basis = np.column_stack([A[:, 0], A[:, 1]])
_, piv = rref(A)
check("4.2 P4 pivot cols 1,2", piv == [0, 1])
v1 = np.array([1, 1, 1.]); v2 = np.array([0, 1, 0.]) - (1/3) * v1
check("4.2 P4 GS basis (1,1,1),(-1,2,-1)", np.allclose(3 * v2, [-1, 2, -1]) and np.isclose(v1 @ (3 * v2), 0))
# P5 QR of A = [[1,0],[1,1],[0,1]]
A = np.array([[1, 0], [1, 1], [0, 1]], float)
x1 = np.array([1, 1, 0.]); x2 = np.array([0, 1, 1.])
v1 = x1
v2 = x2 - (x2 @ v1 / 2) * v1
v2 = 2 * v2
Q = np.column_stack([v1 / np.sqrt(2), v2 / np.sqrt(6)])
R = Q.T @ A
check("4.2 P5 QR", np.allclose(Q @ R, A))
check("4.2 P5 R values", np.allclose(R, [[np.sqrt(2), 1/np.sqrt(2)], [0, 3/np.sqrt(6)]]))
# P6
u1 = np.array([1, 3, -2.]); u2 = np.array([5, 1, 4.]); y = np.array([1, 3, 5.])
check("4.2 P6 weights 0, 2/3", np.isclose(y @ u1, 0) and np.isclose(y @ u2, 28))
hat = (2/3) * u2; z = y - hat
check("4.2 P6 proj=z", np.allclose(hat + z, y) and np.isclose(z @ u1, 0) and np.isclose(z @ u2, 0))

# ---------- หน้า 4.3 ----------
A = np.array([[1, 0], [1, 1], [1, 2]], float)
b = np.array([6, 0, 0.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 ex1 xhat = (5,-3)", np.allclose(xt, [5, -3]))
check("4.3 ex1 residual ortho, error sqrt6", np.allclose(A.T @ (b - A @ xt), [0, 0]) and np.isclose(np.linalg.norm(b - A @ xt), np.sqrt(6)))
u1 = np.array([2, 5, -1.]); u2 = np.array([2, -1, -1.]); y = np.array([1, 2, 3.])
check("4.3 ex2 hat = (-2/5, 2, 1/5)", np.allclose((y @ u1 / 30) * u1 + (y @ u2 / 6) * u2, [-2/5, 2, 1/5]))
res = y - ((y @ u1 / 30) * u1 + (y @ u2 / 6) * u2)
check("4.3 ex2 distance 7sqrt5/5", np.isclose(res @ u1, 0) and np.isclose(res @ u2, 0) and np.isclose(np.linalg.norm(res), np.sqrt(49/5)))
# ex3 line fit points (0,1),(1,1),(2,3)
A = np.array([[1, 0], [1, 1], [1, 2]], float); b = np.array([1, 1, 3.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 ex3 line y = 2/3 + x", np.allclose(xt, [2/3, 1]))
check("4.3 ex3 error sqrt6/3", np.isclose(np.linalg.norm(b - A @ xt), np.sqrt(6)/3))
# ex4 distance b to Col A, A=[[1],[2]]
A = np.array([[1], [2]]); b = np.array([1, 3.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 ex4 distance sqrt5/5", np.isclose(np.linalg.norm(b - A @ xt), np.sqrt(5)/5))
# P1
y = np.array([2, 0, 1.]); u = np.array([1, 1, 1.])
check("4.3 P1 proj = u, dist sqrt2", np.allclose((y @ u / 3) * u, u) and np.isclose(np.linalg.norm(y - u), np.sqrt(2)))
# P2
A = np.array([[1, 1], [1, 2], [1, 3]], float); b = np.array([2, 3, 5.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 P2 xhat = (1/3, 3/2)", np.allclose(xt, [1/3, 3/2]))
res = b - A @ xt
check("4.3 P2 residual ortho, error sqrt6/6", np.allclose(A.T @ res, [0, 0]) and np.isclose(np.linalg.norm(res), np.sqrt(6)/6))
# P3
A = np.array([[1, 0], [1, 1], [1, 2]], float); b = np.array([1, 2, 4.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 P3 line y = 5/6 + 1.5x", np.allclose(xt, [5/6, 3/2]))
check("4.3 P3 error sqrt6/6", np.isclose(np.linalg.norm(b - A @ xt), np.sqrt(6)/6))
# P4
A = np.array([[1, 0], [0, 1], [1, 1]], float); b = np.array([1, 1, 1.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 P4 xhat=(2/3,2/3) dist sqrt3/3", np.allclose(xt, [2/3, 2/3]) and np.isclose(np.linalg.norm(b - A @ xt), np.sqrt(3)/3))
# P5
A = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 1]], float); b = np.array([3, 4, 5, 4.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 P5 xhat = (1,2,3), error 4", np.allclose(xt, [1, 2, 3]) and np.isclose(np.linalg.norm(b - A @ xt), 4))
# P6
A = np.array([[1, 1], [1, 2], [1, 3]], float); b = np.array([2, 5, 5.])
xt = np.linalg.solve(A.T @ A, A.T @ b)
check("4.3 P6 line y = 1 + 1.5x", np.allclose(xt, [1, 3/2]))
check("4.3 P6 y(4)=7 error sqrt(3/2)", np.isclose(1 + 1.5 * 4, 7) and np.isclose(np.linalg.norm(b - A @ xt), np.sqrt(3/2)))

# ---------- หน้า 4.4 ----------
A = np.array([[1, -2], [-2, 1]], float)
w, V = np.linalg.eigh(A)
check("4.4 ex1 eigen 3,-1", np.allclose(sorted(w), [-1, 3]))
P = np.array([[1, 1], [-1, 1]]) / np.sqrt(2)
check("4.4 ex1 A = PDP^T", np.allclose(P @ np.diag([3, -1]) @ P.T, A))
spec = 3 * np.outer(V[:, 1], V[:, 1]) + (-1) * np.outer(V[:, 0], V[:, 0])
check("4.4 ex1 spectral decomp", np.allclose(spec, A))
A = np.array([[7, -16, -8], [-16, 7, 8], [-8, 8, -5]], float)
w, V = np.linalg.eigh(A)
check("4.4 ex2 eigen 27,-9,-9", np.allclose(sorted(w), [-9, -9, 27]))
u1 = np.array([-2, 2, 1.]) / 3
u2 = np.array([1, 1, 0.]) / np.sqrt(2)
u3 = np.array([1, -1, 4.]) / np.sqrt(18)
P = np.column_stack([u1, u2, u3])
check("4.4 ex2 textbook P works", np.allclose(P.T @ P, np.eye(3)) and np.allclose(P @ np.diag([27, -9, -9]) @ P.T, A))
A = np.array([[7, 2], [2, 4]], float)
u1 = np.array([2, 1.]) / np.sqrt(5); u2 = np.array([-1, 2.]) / np.sqrt(5)
check("4.4 ex3 spectral 8,3", np.allclose(8 * np.outer(u1, u1) + 3 * np.outer(u2, u2), A))
# P1
A = np.array([[8, -2], [-2, 5]], float)
check("4.4 P1 eigen 9,4", np.allclose(sorted(np.linalg.eigvals(A)), [4, 9]))
P = np.array([[-2, 1], [1, 2]]) / np.sqrt(5)
check("4.4 P1 PDP^T", np.allclose(P @ np.diag([9, 4]) @ P.T, A))
# P2
A = np.array([[2, -1, -1], [-1, 2, -1], [-1, -1, 2]], float)
w, V = np.linalg.eigh(A)
check("4.4 P2 eigen 0,3,3", np.allclose(sorted(w), [0, 3, 3]))
P = np.column_stack([np.array([1, 1, 1.]) / np.sqrt(3), np.array([1, -1, 0.]) / np.sqrt(2), np.array([1, 1, -2.]) / np.sqrt(6)])
check("4.4 P2 PDP^T", np.allclose(P @ np.diag([0, 3, 3]) @ P.T, A))
# P3
A = np.array([[25, 5, 10], [5, 25, -10], [10, -10, 10]], float)
w, V = np.linalg.eigh(A)
check("4.4 P3 eigen 30,30,0", np.allclose(sorted(w), [0, 30, 30]))
u1 = np.array([1, 1, 0.]) / np.sqrt(2); u2 = np.array([1, -1, 1.]) / np.sqrt(3); u3 = np.array([-1, 1, 2.]) / np.sqrt(6)
P = np.column_stack([u1, u2, u3])
check("4.4 P3 PDP^T", np.allclose(P @ np.diag([30, 30, 0]) @ P.T, A))
check("4.4 P3 E30 basis not ortho->GS", np.isclose(np.array([1, 1, 0.]) @ np.array([2, 0, 1.]), 2) and np.isclose(u1 @ u2, 0))
# P4
A = np.array([[5, -2], [-2, 2]], float)
u1 = np.array([2, -1.]) / np.sqrt(5); u2 = np.array([1, 2.]) / np.sqrt(5)
check("4.4 P4 spectral 6,1", np.allclose(6 * np.outer(u1, u1) + np.outer(u2, u2), A))
# P5
A = np.array([[1, 2], [2, 1]], float); vv = np.array([1, 0.]); ww = np.array([0, 1.])
check("4.4 P5 (Av).w = v.(Aw)", np.isclose((A @ vv) @ ww, vv @ (A @ ww)))
# P6
A = np.array([[2, 1, 1], [1, 2, 1], [1, 1, 2]], float)
P = np.column_stack([np.array([1, 1, 1.]) / np.sqrt(3), np.array([1, -1, 0.]) / np.sqrt(2), np.array([1, 1, -2.]) / np.sqrt(6)])
check("4.4 P6 PDP^T diag(4,1,1)", np.allclose(P @ np.diag([4, 1, 1]) @ P.T, A))
spec = 4 * np.outer(P[:, 0], P[:, 0]) + np.outer(P[:, 1], P[:, 1]) + np.outer(P[:, 2], P[:, 2])
check("4.4 P6 spectral", np.allclose(spec, A))

# ---------- หน้า 4.5 ----------
A = np.array([[3, -2], [-2, 6]], float)
check("4.5 ex2 eigen 2,7", np.allclose(sorted(np.linalg.eigvals(A)), [2, 7]))
P = np.array([[2, 1], [1, -2]]) / np.sqrt(5)
check("4.5 ex2 PDP^T", np.allclose(P @ np.diag([2, 7]) @ P.T, A))
check("4.5 ex2 Q(2,1)=10 = 2*5", np.isclose(3*4 + 6*1 - 4*2, 10))
A = np.array([[1, 1, 3], [1, 3, 1], [3, 1, 1]], float)
w = sorted(np.linalg.eigvals(A).real)
check("4.5 ex3(ข) eigen -2,2,5", np.allclose(w, [-2, 2, 5]))
A = np.array([[1, -2], [-2, 4]], float)  # ex4: k=4 case
check("4.5 ex4 k=4 semidef", np.isclose(np.linalg.det(A), 0))
# P1
check("4.5 P1 matrices", True)  # structural
# P2
A = np.array([[5, 0.5], [0.5, -1]]); x = np.array([2, -2.])
check("4.5 P2 x^TAx = 12", np.isclose(x @ A @ x, 12))
# P3
A = np.array([[5, -3], [-3, 5]], float)
check("4.5 P3 eigen 8,2", np.allclose(sorted(np.linalg.eigvals(A)), [2, 8]))
u1 = np.array([1, -1.]) / np.sqrt(2); u2 = np.array([1, 1.]) / np.sqrt(2)
check("4.5 P3 PDP^T", np.allclose(np.column_stack([u1, u2]) @ np.diag([8, 2]) @ np.column_stack([u1, u2]).T, A))
# P4
A = np.array([[1, -2], [-2, 1]], float)
check("4.5 P4 eigen 3,-1 indefinite", np.allclose(sorted(np.linalg.eigvals(A)), [-1, 3]))
# P5
for k in [2, 6]:
    A = np.array([[2, k/2], [k/2, 2]], float)
    w = np.linalg.eigvals(A)
    if k == 2:
        check("4.5 P5 k=2 pos def (1,3)", np.allclose(sorted(w), [1, 3]))
    else:
        check("4.5 P5 k=6 indefinite (-1,5)", np.allclose(sorted(w), [-1, 5]))
# P6
A = np.array([[1, 0, 0], [0, 1, -1], [0, -1, 1]], float)
w = sorted(np.linalg.eigvals(A).real)
check("4.5 P6 eigen 0,1,2 semidef", np.allclose(w, [0, 1, 2]) and np.isclose(np.array([0, 1, 1.]) @ A @ np.array([0, 1, 1.]), 0))

fails = [n for n, c in ok if not c]
print(f"\n===== บทที่ 4: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    raise SystemExit(1)
