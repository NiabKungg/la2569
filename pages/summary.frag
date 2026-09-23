<!-- meta
title: สรุปสูตรรวมทุกบท
page: summary.html
-->

<div class="crumb">ทบทวนด่วนก่อนสอบ</div>
<h1 class="page-title">สรุปสูตรรวมทุกบท</h1>
<p class="page-sub">เก็บทุกสูตรและทุก "ท่า" สำคัญจากทั้ง 5 บทมาไว้ในหน้าเดียว — เหมาะกับการทบทวนก่อนเข้าห้องสอบ</p>

<section class="sum-ch" style="--cc:#0ea5e9">
  <div class="sum-ch-head">บทที่ 1 · ระบบเชิงเส้น</div>
  <div class="sum-ch-body">
    <h3>การดำเนินการแถวขั้นมูลฐาน</h3>
    <ul>
      <li>สลับแถว \(R_{pq}\) · แทนที่ \(R_p + cR_q\) · ปรับมาตรา \(cR_p\) (\(c \neq 0\))</li>
      <li>\(A \sim B\) (สมมูลแถว) ⟹ ระบบมีเซตผลเฉลยเดียวกัน (ทฤษฎีบท 1.1.1)</li>
    </ul>
    <h3>ตัดสินผลเฉลยจากรูปแบบขั้นบันได</h3>
    <div class="tbl-wrap"><table class="sum-tbl">
      <tr><th>เงื่อนไข</th><th>ข้อสรุป</th></tr>
      <tr><td>มีแถว \(\begin{bmatrix} 0 & \cdots & 0 & b\end{bmatrix}\), \(b \neq 0\)</td><td>ไม่มีผลเฉลย (ไม่ต้องกัน)</td></tr>
      <tr><td>ไม่มีตัวแปรเสรี (ทุกหลักเป็นหลักตัวหลัก)</td><td>ผลเฉลยชุดเดียว</td></tr>
      <tr><td>มีตัวแปรเสรี</td><td>ผลเฉลยอนันต์ชุด — เขียนผลเฉลยทั่วไป</td></tr>
    </table></div>
    <h3>การรวมเชิงเส้น / Span</h3>
    <ul>
      <li>\(\vec{b}\) เป็นการรวมเชิงเส้นของ \(\vec{v}_1,\dots,\vec{v}_p\) ⟺ \(\begin{bmatrix}\vec{v}_1 \cdots \vec{v}_p \mid \vec{b}\end{bmatrix}\) ต้องกัน</li>
      <li>\(A\vec{x} = \vec{b}\) มีผลเฉลยทุก \(\vec{b}\) ⟺ หลักของ \(A\) แผ่ทั่ว ⟺ มีตำแหน่งตัวหลักในทุก<strong>แถว</strong></li>
      <li>หลักของ \(A\) อิสระเชิงเส้น ⟺ \(A\vec{x} = \vec{0}\) มีเพียงผลเฉลยชัด ⟺ ทุก<strong>หลัก</strong>เป็นหลักตัวหลัก</li>
      <li>เวกเตอร์ \(p\) ตัวใน \(\mathbb{R}^m\) เมื่อ \(p &gt; m\) → พึ่งเชิงเส้น / มี \(\vec{0}\) → พึ่งเชิงเส้น</li>
    </ul>
  </div>
</section>

<section class="sum-ch" style="--cc:#8b5cf6">
  <div class="sum-ch-head">บทที่ 2 · การแปลงเชิงเส้น พีชคณิตเมทริกซ์ ดีเทอร์มิแนนต์</div>
  <div class="sum-ch-body">
    <h3>การแปลงเชิงเส้น</h3>
    <ul>
      <li>เมทริกซ์มาตรฐาน: \(A = \begin{bmatrix} T(\vec{e}_1) & \cdots & T(\vec{e}_n) \end{bmatrix}\) ⟹ \(T(\vec{x}) = A\vec{x}\)</li>
      <li>ทั่วถึง ⟺ ตัวหลักครบทุก<strong>แถว</strong> / 1-1 ⟺ ตัวหลักครบทุก<strong>หลัก</strong> (\(T:\mathbb{R}^n\to\mathbb{R}^m\) มีตัวหลักได้ไม่เกิน \(\min(m,n)\))</li>
    </ul>
    <h3>ปริภูมิย่อย ฐานหลัก แรงก์</h3>
    <ul>
      <li>\(\operatorname{Col} A\) ⊂ \(\mathbb{R}^m\) (ฐานหลัก = หลักตัวหลักของ \(A\)) / \(\operatorname{Nul} A\) ⊂ \(\mathbb{R}^n\) (ฐานหลักจาก RREF)</li>
      <li><strong>ทฤษฎีบทแรงก์:</strong> \(\operatorname{rank}A + \operatorname{nullity}A = n\) (จำนวนหลัก)</li>
    </ul>
    <h3>เมทริกซ์ผกผัน</h3>
    <ul>
      <li>\(2\times2\): \(A^{-1} = \tfrac{1}{ad-bc}\begin{bmatrix} d & -b\\ -c & a \end{bmatrix}\) &nbsp;• \(n\times n\): \(\begin{bmatrix} A \mid I \end{bmatrix} \to \begin{bmatrix} I \mid A^{-1} \end{bmatrix}\)</li>
      <li>\((AB)^{-1} = B^{-1}A^{-1}\), \((A^T)^{-1} = (A^{-1})^T\), \(A\vec{x} = \vec{b} \Rightarrow \vec{x} = A^{-1}\vec{b}\)</li>
    </ul>
    <h3>ดีเทอร์มิแนนต์</h3>
    <ul>
      <li>กระจายโคแฟกเตอร์: \(\det A = \sum_j a_{ij}C_{ij}\) (เลือกแถว/หลักที่ 0 เยอะ)</li>
      <li>สลับแถว → เครื่องหมายเปลี่ยน / \(cR_p\) → det คูณ \(c\) / \(R_p + cR_q\) → คงค่า / สามเหลี่ยม → คูณทแยง</li>
      <li>\(\det(AB) = \det A\det B\), \(\det(cA) = c^n\det A\), \(\det A^{-1} = 1/\det A\), \(\det A^T = \det A\)</li>
      <li>\(A^{-1} = \tfrac{1}{\det A}\operatorname{adj}A\) • กฎของคราเมอร์: \(x_i = \det A_i / \det A\) (เมื่อ \(\det A \neq 0\))</li>
    </ul>
  </div>
</section>

<section class="sum-ch" style="--cc:#ec4899">
  <div class="sum-ch-head">บทที่ 3 · ค่าลักษณะเฉพาะและการแปลงเป็นทแยงมุม</div>
  <div class="sum-ch-body">
    <h3>ค่า/เวกเตอร์ลักษณะเฉพาะ</h3>
    <ul>
      <li>สมการลักษณะเฉพาะ: \(\det(A - \lambda I) = 0\) (2×2: \(\lambda^2 - (\operatorname{tr}A)\lambda + \det A\))</li>
      <li>ปริภูมิลักษณะเฉพาะ: \(E_\lambda = \operatorname{Nul}(A - \lambda I)\) / ตรวจ: ผลบวก λ = trace, ผลคูณ λ = det</li>
      <li>เวกเตอร์ลักษณะเฉพาะของค่า<em>ต่างกัน</em> อิสระเชิงเส้นเสมอ</li>
    </ul>
    <h3>การแปลงเป็นทแยงมุม</h3>
    <ul>
      <li>\(A = PDP^{-1}\): หลักของ \(P\) = eigenvectors อิสระ \(n\) ตัว, ทแยงของ \(D\) = λ ตามลำดับเดียวกัน</li>
      <li>diagonalizable ⟺ มี eigenvector อิสระครบ \(n\) ตัว (ค่าซ้ำ: \(\dim E_\lambda\) ต้อง = จำนวนซ้ำ)</li>
      <li>\(A^k = PD^kP^{-1}\) — ยกกำลังเฉพาะทแยง</li>
    </ul>
    <h3>ระบบสมการเชิงอนุพันธ์ \(\vec{x}\,{}' = A\vec{x}\)</h3>
    <ul>
      <li>ผลเฉลยทั่วไป: \(\vec{x}(t) = C_1e^{\lambda_1t}\vec{v}_1 + \cdots + C_ne^{\lambda_nt}\vec{v}_n\) (A diagonalizable)</li>
      <li>เงื่อนไขเริ่มต้น \(\vec{x}(0)\): แทน \(t = 0\) → แก้ \(P\vec{C} = \vec{x}(0)\)</li>
    </ul>
    <h3>ฐานหลักและการเปลี่ยนพิกัด</h3>
    <ul>
      <li>\([\vec{x}]_B\): แก้ \(\begin{bmatrix}\vec{v}_1 \cdots \vec{v}_n \mid \vec{x}\end{bmatrix}\) / \(P_{\mathcal{E}\to B'} = \begin{bmatrix}\vec{v}_1 \cdots \vec{v}_n\end{bmatrix}^{-1}\)</li>
      <li>\([T]_{B'} = P^{-1}[T]_B P\) และ \([T^{-1}]_B = [T]_B^{-1}\)</li>
    </ul>
  </div>
</section>

<section class="sum-ch" style="--cc:#10b981">
  <div class="sum-ch-head">บทที่ 4 · ความตั้งฉาก กราม-ชมิดต์ Least Squares</div>
  <div class="sum-ch-body">
    <h3>ผลคูณภายในและเซตตั้งฉาก</h3>
    <ul>
      <li>\(\|\vec{v}\| = \sqrt{\vec{v}\cdot\vec{v}}\), เวกเตอร์หนึ่งหน่วย = \(\vec{v}/\|\vec{v}\|\)</li>
      <li>ฐานหลักเชิงตั้งฉาก: \(\vec{y} = \sum \frac{\vec{y}\cdot\vec{u}_i}{\vec{u}_i\cdot\vec{u}_i}\vec{u}_i\) (ไม่ต้องแก้ระบบ!)</li>
      <li>\(U^TU = I\) ⟹ \(U^{-1} = U^T\), \(\|U\vec{x}\| = \|\vec{x}\|\), \(\det U = \pm1\)</li>
    </ul>
    <h3>การฉายและกราม-ชมิดต์</h3>
    <ul>
      <li>\(H^\perp = \operatorname{Nul}A^T\) เมื่อหลักของ \(A\) แผ่ \(H\)</li>
      <li>\(\hat{y} = \operatorname{proj}_H\vec{y}\) ด้วยน้ำหนักเดียวกันด้านบน; \(\vec{y} = \hat{y} + \vec{z}\), \(\vec{z} \in H^\perp\)</li>
      <li>กราม-ชมิดต์: \(\vec{v}_i = \vec{x}_i - \sum_{j&lt;i}\frac{\vec{x}_i\cdot\vec{v}_j}{\vec{v}_j\cdot\vec{v}_j}\vec{v}_j\) (คูณสเกลาร์เก็บเลขสวยได้)</li>
      <li>QR: \(Q\) = ฐาน orthonormal ของ Col A, \(R = Q^TA\) สามเหลี่ยมบน</li>
    </ul>
    <h3>Least squares</h3>
    <ul>
      <li>สมการปรกติ: \(A^TA\hat{x} = A^T\vec{b}\) — เศษตกค้าง \(\vec{b} - A\hat{x}\) ตั้งฉากกับหลักของ \(A\)</li>
      <li>ความผิดพลาด = \(\|\vec{b} - A\hat{x}\|\) = ระยะทางจาก \(\vec{b}\) ไป \(\operatorname{Col}A\) / ฟิตเส้น: \(A = \begin{bmatrix} 1 & x_i\\ \vdots \end{bmatrix}\)</li>
    </ul>
    <h3>เมทริกซ์สมมาตรและรูปแบบกำลังสอง</h3>
    <ul>
      <li>สมมาตร (\(A^T = A\)): λ จริงทั้งหมด, eigenspace คนละค่าตั้งฉาก, \(A = PDP^T\) เสมอ (P orthonormal)</li>
      <li>ค่าซ้ำ: กราม-ชมิดต์<em>ภายใน \(E_\lambda\)</em> เท่านั้น / สเปกตรัม: \(A = \sum \lambda_i\vec{u}_i\vec{u}_i^T\)</li>
      <li>รูปแบบกำลังสอง: ไขว้หาร 2 ลง \(a_{ij}\); \(\vec{x} = P\vec{y}\) → \(Q = \sum\lambda_iy_i^2\) (ไม่มีไขว้)</li>
      <li>บวกแน่นอน ⟺ λ &gt; 0 ทุกตัว / ลบแน่นอน ⟺ λ &lt; 0 ทุกตัว / ปนบวกลบ = ไม่แน่นอน (2×2: trace &gt; 0 และ det &gt; 0)</li>
    </ul>
  </div>
</section>

<section class="sum-ch" style="--cc:#f59e0b">
  <div class="sum-ch-head">บทที่ 5 · ปริภูมิเวกเตอร์นามธรรม</div>
  <div class="sum-ch-body">
    <h3>ปริภูมิเวกเตอร์และปริภูมิย่อย</h3>
    <ul>
      <li>เกณฑ์ปริภูมิย่อย: \(\vec{0} \in W\) และ \(\vec{v}_1 + c\vec{v}_2 \in W\)</li>
      <li>\(\dim M_{m,n} = mn\) (ฐาน \(E_{ij}\)), \(\dim \mathbb{F}_n[x] = n+1\) (ฐาน \(\{1, x, \dots, x^n\}\))</li>
      <li>\(\dim(W_1+W_2) = \dim W_1 + \dim W_2 - \dim(W_1\cap W_2)\)</li>
      <li>เงื่อนไขไม่เชิงเส้น (det = 0, p(0) = 1, นอร์ม) มัก<em>ไม่</em>เป็นปริภูมิย่อย</li>
    </ul>
    <h3>การแปลงเชิงเส้นบนปริภูมินามธรรม</h3>
    <ul>
      <li>นิยาม \(T\) ด้วยฐานหลัก: เขียน \(\vec{x} = \sum c_i\vec{v}_i\) → \(T(\vec{x}) = \sum c_iT(\vec{v}_i)\)</li>
      <li>เชิงเส้น: อนุพันธ์, แทนค่า, transpose, trace / ไม่เชิงเส้น: det, นอร์ม, +ค่าคงตัว, กำลังสอง</li>
      <li>\(\ker T\) ⊂ \(V\) (⇔ Nul A), \(\operatorname{range}T\) ⊂ \(W\) (⇔ Col A)</li>
      <li>\(\dim V = \operatorname{rank}T + \operatorname{nullity}T\) / 1-1 ⟺ \(\ker T = \{\vec{0}\}\) / ทั่วถึง ⟺ range = \(W\)</li>
    </ul>
    <h3>ปริภูมิผลคูณภายใน</h3>
    <ul>
      <li>\(\langle p, q\rangle = \int_a^b p(x)q(x)\,dx\), \(\|f\| = \sqrt{\langle f, f\rangle}\)</li>
      <li>ทุกทฤษฎีของบทที่ 4 ใช้ได้: เซตตั้งฉาก → อิสระ, กราม-ชมิดต์, การฉาย, ประมาณที่ดีสุด, โคชี-ชวาร์ตซ์</li>
      <li>ช่วงสมมาตร \([-1,1]\): ฟังก์ชันคี่ตั้งฉากกับฟังก์ชันคู่โดยอัตโนมัติ</li>
    </ul>
  </div>
</section>
