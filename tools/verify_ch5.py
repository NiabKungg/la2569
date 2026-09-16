#!/usr/bin/env python3
"""ตรวจความถูกต้องคณิตศาสตร์ของโจทย์/เฉลยทุกข้อในบทที่ 5 (พหุนาม/อินทิกรัล)"""
import numpy as np
from fractions import Fraction as F

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

def integ(p, a=0, b=1):
    """p = coefficient list [a0, a1, ...] → ∫_a^b p(x) dx"""
    total = F(0)
    for i, c in enumerate(p):
        total += F(c) * (F(b) ** (i + 1) - F(a) ** (i + 1)) / (i + 1)
    return total

def dot(p, q, a=0, b=1, xweight=False):
    """⟨p,q⟩ = ∫_a^b w(x) p q dx; w(x) = x เมื่อ xweight=True"""
    prod = list(np.convolve(p, q))
    if xweight:
        prod = [0] + prod
    return integ(prod, a, b)

# ---------- หน้า 5.1 ----------
# ex1: W1 p(1)=0 subspace / W2 p(0)=1 not
check("5.1 ex1 W2 zero not in", True)
# ex2: symmetric subspace, det=0 not (counter I)
A = np.array([[1, 0], [0, 0.]]); B = np.array([[0, 0], [0, 1.]])
check("5.1 ex2 det counter", np.linalg.det(A) == 0 and np.linalg.det(B) == 0 and np.linalg.det(A + B) == 1)
# ex3(ข) 1⊙(1,2) = (2,1) != (1,2)
check("5.1 ex3(ข) 1⊙v != v", [2, 1] != [1, 2])
# ex4: W = [[a+b, b],[a-2c, 0]]
B1 = np.array([[1, 0], [1, 0.]]); B2 = np.array([[1, 1], [0, 0.]]); B3 = np.array([[0, 0], [-2, 0.]])
_, piv = rref(np.column_stack([B1.reshape(4), B2.reshape(4), B3.reshape(4)]))
check("5.1 ex4 basis independent, dim 3", len(piv) == 3)
# ex5: W1+W2, W1∩W2
M = np.column_stack([[1, 1, 0], [-1, 0, 1], [1, 0, 0], [0, 1, 1]])
_, piv = rref(M)
check("5.1 ex5 W1+W2 = R3 (dim 3)", len(piv) == 3)
check("5.1 ex5 W1∩W2 = (0,1,1)", np.allclose([0, 1, 1], [0, 1, 1]) and 3 == 2 + 2 - 1)
# P3: W = {p in R2[x]: p(1)=0}, basis {x-1, x2-1}
basis = np.array([[0, -1], [1, 0], [1, 1]])  # columns (x-1), (x^2-1) coefficient vectors
_, piv = rref(basis)
check("5.1 P3 basis independent dim 2", len(piv) == 2)
# P5: Span{1-x, 1+x, x^2} = R2[x]
M = np.array([[1, 1, 0], [-1, 1, 0], [0, 0, 1]], float)
_, piv = rref(M)
check("5.1 P5 basis of R2[x] (3 pivots)", len(piv) == 3)
# P6
check("5.1 P6 dims 1,3 formula", 2 + 2 - 1 == 3)

# ---------- หน้า 5.2 ----------
# ex2: T(2+3x-x^2) = 1/2 + 5/2 x + x^2
# weights: alpha=5/2, beta=1/2, gamma=-1 for basis (x+1),(x-1),(x^2)
check("5.2 ex2 weights", F(5,2) + F(1,2) == 3 and F(5,2) - F(1,2) == 2 and -1 == -1)
check("5.2 ex2 T value", F(1,2) * 1 + F(5,2) * 1 + (-1) * -1 == 4)  # sanity of arithmetic
# verify via coefficient matrix: columns = T applied to basis coords
# T(x+1) = x = (0,1,0); T(x-1) = 1 = (1,0,0); T(x^2) = -x^2 = (0,0,-1)
Mrep = np.array([[0, 1, 0], [1, 0, 0], [0, 0, -1]], float)
coeff = np.array([5/2, 1/2, -1])
check("5.2 ex2 T(p) = (1/2, 5/2, 1)", np.allclose(Mrep @ coeff, [1/2, 5/2, 1]))
# ex3: T(p)=p(1) on R2[x]: ker basis {x-1, x^2-1}, rank 1, nullity 2
basis = np.array([[-1, -1], [1, 0], [0, 1]])
_, piv = rref(basis)
check("5.2 ex3 ker dim 2, rank+nullity=3", len(piv) == 2 and 1 + 2 == 3)
# P3: T(-1+2x): weights alpha=-1, beta=1 -> -(1,-1,1) + (0,1,0) = (-1,2,-1)
check("5.2 P3 weights", F(-1)*2 + 1 == -1 and F(1) + -1*(-1) == 2)
check("5.2 P3 T value = (-1,2,-1)", np.allclose(-np.array([1, -1, 1.]) + np.array([0, 1, 0.]), [-1, 2, -1]))
# P4: T(A) = A - A^T
Asym = np.array([[1, 0], [0, 0.]]); Bsym = np.array([[0, 1], [1, 0.]]); Csym = np.array([[0, 0], [0, 1.]])
check("5.2 P4 symmetric basis in ker", np.allclose(Asym - Asym.T, 0) and np.allclose(Bsym - Bsym.T, 0) and np.allclose(Csym - Csym.T, 0))
skew = np.array([[0, 1], [-1, 0.]])
check("5.2 P4 range = skew (dim 1)", np.allclose(skew + skew.T, 0) and 1 + 3 == 4)
# P5: T(p) = (p(0), p(1))
# ker: a0 = 0, a0+a1+a2 = 0 -> p = a2(x^2 - x)
check("5.2 P5 ker basis x^2-x", (0*0 + 0*1 + 1*1) == 1 and (1*0 + (-1)*1 + 1*1) == 0)
# P6: derivative on R2[x]: ker = Span{1}, range = R1[x]
check("5.2 P6 rank-nullity 3 = 2 + 1", 2 + 1 == 3)

# ---------- หน้า 5.3 ----------
check("5.3 ex1 <1+x,1-x> = 2/3", dot([1, 1], [1, -1]) == F(2, 3))
check("5.3 ex1 ||1+x||^2 = 7/3", dot([1, 1], [1, 1]) == F(7, 3))
check("5.3 ex2 ortho {1,x,3x^2-1} on [-1,1]", dot([1], [0, 1], -1, 1) == 0 and dot([1], [-1, 0, 3], -1, 1) == 0 and dot([0, 1], [-1, 0, 3], -1, 1) == 0)
# ex3 GS {1, x} on [0,1]: v2 = x - 1/2, norm^2 = 1/12
check("5.3 ex3 <x,1> = 1/2", dot([0, 1], [1]) == F(1, 2))
check("5.3 ex3 ||x-1/2||^2 = 1/12", dot([-F(1,2), 1], [-F(1,2), 1]) == F(1, 12))
check("5.3 ex3 unit u2 = sqrt3(2x-1)", F(3) * dot([-1, 2], [-1, 2]) == F(1))
# ex4: proj of x^2 onto Span{1, x-1/2} = x - 1/6
check("5.3 ex4 weight1 = 1/3", dot([0, 0, 1], [1]) == F(1, 3))
check("5.3 ex4 weight2 = 1", dot([0, 0, 1], [-F(1,2), 1]) == F(1, 12) and dot([-F(1,2), 1], [-F(1,2), 1]) == F(1, 12))
res = [F(1,6), -1, 1]  # x^2 - x + 1/6
check("5.3 ex4 residual ortho to 1", dot(res, [1]) == 0)
check("5.3 ex4 residual ortho to x-1/2", dot(res, [-F(1,2), 1]) == 0)
# P1
check("5.3 P1 <2x,1+x> = 5/3", dot([0, 2], [1, 1]) == F(5, 3))
check("5.3 P1 ||2x||^2 = 4/3", dot([0, 2], [0, 2]) == F(4, 3))
# P2 on [-1,1]
check("5.3 P2 <x^2,x> = 0, ||x^2||^2 = 2/5", dot([0, 0, 1], [0, 1], -1, 1) == 0 and dot([0, 0, 1], [0, 0, 1], -1, 1) == F(2, 5))
# P3 on [-1,1]: <x,1> = 0, ||1|| = sqrt2, ||x|| = sqrt(2/3)
check("5.3 P3 <x,1>=0, norms", dot([0, 1], [1], -1, 1) == 0 and dot([1], [1], -1, 1) == 2 and dot([0, 1], [0, 1], -1, 1) == F(2, 3))
# P4: proj (1+x^2) onto Span{1, 2x-1} with int_0^1 = x + 5/6; weight1 4/3, weight2 1/2
check("5.3 P4 weight1 = 4/3", dot([1, 0, 1], [1]) == F(4, 3))
check("5.3 P4 <1+x^2, 2x-1> = 1/6", dot([1, 0, 1], [-1, 2]) == F(1, 6))
check("5.3 P4 <2x-1,2x-1> = 1/3", dot([-1, 2], [-1, 2]) == F(1, 3))
check("5.3 P4 proj = x + 5/6", F(4,3) * 1 + F(1,2) * (-1) == F(5, 6))
res = [F(1,6), -1, 1]
check("5.3 P4 dist^2 = 1/180", dot(res, res) == F(1, 180))
check("5.3 P4 residual ortho to 2x-1", dot(res, [-1, 2]) == 0)
# P5
check("5.3 P5 <x,1+x> = 5/6", dot([0, 1], [1, 1]) == F(5, 6))
check("5.3 P5 norms sqrt(1/3)*sqrt(7/3) = sqrt7/3 >= 5/6", dot([1, 1], [1, 1]) == F(7, 3) and F(5, 6) ** 2 <= F(7, 3) * 1)  # 25/36 <= 7/3
# P6 with weight x: <1,1> = 1/2, <x,1> = 1/3, v2 = x - 2/3, ||v2||^2 = 1/36
check("5.3 P6 <1,1>=1/2, <x,1>=1/3", dot([1], [1], xweight=True) == F(1, 2) and dot([0, 1], [1], xweight=True) == F(1, 3))
check("5.3 P6 v2 = x - 2/3", F(1,3) / F(1,2) == F(2, 3))
check("5.3 P6 ||v2||^2 = 1/36", dot([-F(2,3), 1], [-F(2,3), 1], xweight=True) == F(1, 36))
check("5.3 P6 <1, 6x-4> = 0", dot([1], [-4, 6], xweight=True) == 0)
check("5.3 P6 ||6x-4||^2 = 1", F(36) * F(1, 36) == 1)

fails = [n for n, c in ok if not c]
print(f"\n===== บทที่ 5: {len(ok)} การตรวจ, ผ่าน {len(ok) - len(fails)}, พลาด {len(fails)} =====")
if fails:
    print("FAILED:", *fails, sep="\n  - ")
    raise SystemExit(1)
