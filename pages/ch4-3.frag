<!-- meta
title: 4.3 ปัญหากำลังสองน้อยสุด
ch: 4
section: 4.3
page: ch4-3.html
-->

<div class="crumb">บทที่ 4 · เรขาคณิตเชิงเส้นและฐานหลักเชิงตั้งฉาก</div>
<h1 class="page-title">4.3 ปัญหากำลังสองน้อยสุด</h1>
<p class="page-sub">เมื่อระบบ \(A\vec{x} = \vec{b}\) <em>ไม่มี</em>ผลเฉลย (ข้อมูลจริงมักเป็นแบบนี้!) เราหา \(\hat{x}\) ที่ทำให้
\(\|A\hat{x} - \vec{b}\|\) เล็กที่สุด — หัวใจของการฟิตเส้นตรงกับข้อมูล และสูตรเด็ด \(A^TA\hat{x} = A^T\vec{b}\)</p>

<nav class="pillnav">
  <a href="#objectives">🎯 จุดประสงค์</a>
  <a href="#lesson">📖 บทเรียน</a>
  <a href="#examples">✏️ ตัวอย่างโจทย์</a>
  <a href="#recipe">⚡ สูตรสำเร็จ</a>
  <a href="#practice">🏋️ โจทย์ซ้อมมือ</a>
</nav>

<section class="block" id="objectives">
  <div class="obj">
    <h2>🎯 เรียนจบหัวข้อนี้ คุณต้องทำสิ่งเหล่านี้ได้</h2>
    <ul>
      <li>เข้าใจว่า \(\hat{b} = \operatorname{proj}_{\operatorname{Col} A}\vec{b}\) คือจุดใน \(\operatorname{Col} A\) ที่ใกล้ \(\vec{b}\) ที่สุด (ทฤษฎีบทการประมาณที่ดีสุด)</li>
      <li>หาผลเฉลยกำลังสองน้อยสุด \(\hat{x}\) จากสมการปรกติ \(A^TA\hat{x} = A^T\vec{b}\)</li>
      <li>หาความผิดพลาดกำลังสองน้อยสุด \(\|\vec{b} - A\hat{x}\|\) และระยะทางจาก \(\vec{b}\) ไป \(\operatorname{Col} A\)</li>
      <li>ใช้ least squares ฟิตเส้นตรงกับข้อมูลจุด</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) การประมาณที่ดีสุด (best approximation)</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 4.3.1 — ทฤษฎีบทการประมาณที่ดีสุด (Best Approximation Theorem)</div>
    <p>ให้ \(H\) เป็นปริภูมิย่อยของ \(\mathbb{R}^n\) และ \(\vec{y} \in \mathbb{R}^n\) แล้ว \(\hat{y} = \operatorname{proj}_H \vec{y}\) เป็นจุดบน \(H\) ที่ใกล้ \(\vec{y}\) ที่สุด:</p>
    \[ \|\vec{y} - \hat{y}\| < \|\vec{y} - \vec{v}\| \qquad \text{สำหรับทุก } \vec{v} \in H, \; \vec{v} \neq \hat{y} \]
    <p>เรียก \(\|\vec{y} - \operatorname{proj}_H\vec{y}\|\) ว่า<strong>ระยะทาง</strong>จาก \(\vec{y}\) ไป \(H\)</p>
  </div>

  <h3>2) ผลเฉลยกำลังสองน้อยสุด (least squares solution)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p>\(\hat{x}\) เป็น<strong>ผลเฉลยกำลังสองน้อยสุด</strong>ของ \(A\vec{x} = \vec{b}\) เมื่อ \(\vec{u} \mapsto \|\vec{b} - A\vec{u}\|\) มีค่าน้อยที่สุดที่ \(\vec{u} = \hat{x}\) — สังเกตว่า \(A\hat{x}\) คือจุดใน \(\operatorname{Col} A\) ที่ใกล้ \(\vec{b}\) ที่สุด นั่นคือ</p>
    \[ A\hat{x} = \operatorname{proj}_{\operatorname{Col} A}\vec{b} = \hat{b} \]
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ สมการปรกติ (normal equations) — สูตรที่ใช้จริง</div>
    <p>\(\hat{x}\) เป็นผลเฉลยกำลังสองน้อยสุดของ \(A\vec{x} = \vec{b}\) ก็ต่อเมื่อ \(\hat{x}\) แก้</p>
    \[ A^TA\hat{x} = A^T\vec{b} \]
    <p>(ที่มา: \(\vec{b} - A\hat{x}\) ต้องตั้งฉากกับทุกหลักของ \(A\) → \(A^T(\vec{b} - A\hat{x}) = \vec{0}\)) — ถ้าหลักของ \(A\) อิสระเชิงเส้น \(A^TA\) จะไม่เอกฐาน → \(\hat{x} = (A^TA)^{-1}A^T\vec{b}\) เป็น<em>ตัวเดียว</em></p>
  </div>
  <div class="box box-idea">
    <div class="box-title">💡 เชื่อมโยงกับ 4.2</div>
    <p>สองวิธีได้คำตอบเดียวกัน: (1) ฉาย \(\vec{b}\) ลง \(\operatorname{Col} A\) ด้วยฐานหลักเชิงตั้งฉาก (จากกราม-ชมิดต์) แล้วแก้ \(A\vec{x} = \hat{b}\) (2) แก้สมการปรกติตรง ๆ — วิธี (2) ใช้บ่อยกว่าเพราะไม่ต้องทำกราม-ชมิดต์ ส่วน \(\|\vec{b} - A\hat{x}\|\) คือ "ความผิดพลาด" ที่หลีกเลี่ยงไม่ได้ของข้อมูล</p>
  </div>

  <h3>3) การฟิตเส้นตรง (least squares line)</h3>
  <div class="box box-idea">
    <div class="box-title">💡 ท่าคลาสสิก: ฟิต \(y = c_0 + c_1x\)</div>
    <p>ข้อมูลจุด \((x_1, y_1), \dots, (x_n, y_n)\) → เขียนเป็นระบบ \(A\vec{x} = \vec{b}\) เมื่อ</p>
    \[ A = \begin{bmatrix} 1 & x_1\\ 1 & x_2\\ \vdots & \vdots\\ 1 & x_n \end{bmatrix}, \qquad \vec{x} = \begin{bmatrix} c_0\\ c_1 \end{bmatrix}, \qquad \vec{b} = \begin{bmatrix} y_1\\ \vdots\\ y_n \end{bmatrix} \]
    <p>จุดข้อมูลจริงมักไม่เรียงเป็นเส้นตรงพอดี ระบบจึงไม่ต้องกัน → ใช้ least squares หาเส้นที่ "ดีที่สุด"</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">หา \(\hat{x}\) และความผิดพลาด</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาผลเฉลยกำลังสองน้อยสุดของ \(A\vec{x} = \vec{b}\) เมื่อ
      \[ A = \begin{bmatrix} 1 & 0\\ 1 & 1\\ 1 & 2 \end{bmatrix}, \qquad \vec{b} = \begin{bmatrix} 6\\ 0\\ 0 \end{bmatrix} \]
      พร้อมทั้งหา \(\|\vec{b} - A\hat{x}\|\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — สร้างสมการปรกติ \(A^TA\hat{x} = A^T\vec{b}\) → แก้ระบบ 2 ตัวแปร → คิดความผิดพลาด</div>
      <ol class="steps">
        <li><span class="step-t">สร้าง \(A^TA\) และ \(A^T\vec{b}\)</span>
        \[ A^TA = \begin{bmatrix} 3 & 3\\ 3 & 5 \end{bmatrix} \qquad \text{(คิดจาก } \sum 1,\; \sum x_i,\; \sum x_i^2\text{)} \qquad A^T\vec{b} = \begin{bmatrix} 6 + 0 + 0\\ 0 + 0 + 0 \end{bmatrix} = \begin{bmatrix} 6\\ 0 \end{bmatrix} \]</li>
        <li><span class="step-t">แก้สมการปรกติ</span>
        \[ \begin{aligned} 3c_1 + 3c_2 &= 6\\ 3c_1 + 5c_2 &= 0 \end{aligned} \;\xrightarrow{\;\text{หัวกัน}\;}\; 2c_2 = -6 \;\Longrightarrow\; c_2 = -3,\; c_1 = 5 \;\Longrightarrow\; \hat{x} = \begin{bmatrix} 5\\ -3 \end{bmatrix} \]</li>
        <li><span class="step-t">หาความผิดพลาด</span>
        \[ A\hat{x} = \begin{bmatrix} 5\\ 5-3\\ 5-6 \end{bmatrix} = \begin{bmatrix} 5\\ 2\\ -1 \end{bmatrix}, \qquad \vec{b} - A\hat{x} = \begin{bmatrix} 1\\ -2\\ 1 \end{bmatrix}, \qquad \|\vec{b} - A\hat{x}\| = \sqrt{1+4+1} = \sqrt{6} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> เศษตกค้าง \((1, -2, 1)^T\) ต้องตั้งฉากกับหลักของ \(A\): \((1,-2,1)\cdot(1,1,1) = 0\) ✓ และ \((1,-2,1)\cdot(0,1,2) = -2+2 = 0\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">การประมาณที่ดีสุด (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาการประมาณที่ดีสุดของ \(\vec{y} = \begin{bmatrix} 1\\ 2\\ 3 \end{bmatrix}\) โดยเวกเตอร์ในปริภูมิย่อย \(H = \operatorname{Span}\{\vec{u}_1, \vec{u}_2\}\) เมื่อ \(\vec{u}_1 = \begin{bmatrix} 2\\ 5\\ -1 \end{bmatrix}\), \(\vec{u}_2 = \begin{bmatrix} 2\\ -1\\ -1 \end{bmatrix}\) และหาระยะทางจาก \(\vec{y}\) ไป \(H\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(\{\vec{u}_1, \vec{u}_2\}\) ตั้งฉากกัน → ฉายตรง ๆ ด้วยน้ำหนัก (ไม่ต้องกราม-ชมิดต์) → ระยะทาง = \(\|\vec{y} - \hat{y}\|\)</div>
      <ol class="steps">
        <li><span class="step-t">เช็กและหาน้ำหนัก</span> \(\vec{u}_1\cdot\vec{u}_2 = 4 - 5 + 1 = 0\) ✓
        \[ \frac{\vec{y}\cdot\vec{u}_1}{\vec{u}_1\cdot\vec{u}_1} = \frac{2 + 10 - 3}{4 + 25 + 1} = \frac{9}{30} = \frac{3}{10}, \qquad \frac{\vec{y}\cdot\vec{u}_2}{\vec{u}_2\cdot\vec{u}_2} = \frac{2 - 2 - 3}{4 + 1 + 1} = -\frac{1}{2} \]</li>
        <li><span class="step-t">การฉาย (ระวังเครื่องหมาย!)</span>
        \[ \hat{y} = \frac{3}{10}\vec{u}_1 - \frac{1}{2}\vec{u}_2 = \begin{bmatrix} 3/5 - 1\\ 3/2 + 1/2\\ -3/10 + 1/2 \end{bmatrix} = \begin{bmatrix} -2/5\\ 2\\ 1/5 \end{bmatrix} \]</li>
        <li><span class="step-t">ระยะทาง</span>
        \[ \vec{y} - \hat{y} = \begin{bmatrix} 7/5\\ 0\\ 14/5 \end{bmatrix}, \qquad \operatorname{dist}(\vec{y}, H) = \sqrt{\tfrac{49}{25} + 0 + \tfrac{196}{25}} = \frac{\sqrt{245}}{5} = \frac{7\sqrt{5}}{5} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \((\vec{y}-\hat{y})\cdot\vec{u}_1 = \tfrac{14}{5} - \tfrac{14}{5} = 0\) ✓ และ \((\vec{y}-\hat{y})\cdot\vec{u}_2 = \tfrac{14}{5} - \tfrac{14}{5} = 0\) ✓ (เศษตกค้างตั้งฉากกับฐานหลักทุกตัว = สมบัติของการฉาย)</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">ฟิตเส้นตรงกับข้อมูลจุด</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาสมการเส้นตรง \(y = c_0 + c_1x\) แบบกำลังสองน้อยสุดที่ดีที่สุดสำหรับข้อมูลจุด \((0, 1), (1, 1), (2, 3)\) พร้อมทั้งหาความผิดพลาดกำลังสองน้อยสุด</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — แปลงจุดเป็น \(A\vec{x} = \vec{b}\) แล้วแก้สมการปรกติ</div>
      <ol class="steps">
        <li><span class="step-t">สร้างระบบ</span> แทนจุดลงใน \(c_0 + c_1x = y\):
        \[ \begin{bmatrix} 1 & 0\\ 1 & 1\\ 1 & 2 \end{bmatrix}\begin{bmatrix} c_0\\ c_1 \end{bmatrix} = \begin{bmatrix} 1\\ 1\\ 3 \end{bmatrix} \]
        (ระบบนี้ไม่ต้องกัน — สามจุดไม่เรียงเส้นตรง — จึงต้องใช้ least squares)</li>
        <li><span class="step-t">สมการปรกติ</span>
        \[ A^TA = \begin{bmatrix} 3 & 3\\ 3 & 5 \end{bmatrix}, \qquad A^T\vec{b} = \begin{bmatrix} 1+1+3\\ 0+1+6 \end{bmatrix} = \begin{bmatrix} 5\\ 7 \end{bmatrix} \]</li>
        <li><span class="step-t">แก้</span>
        \[ \begin{aligned} 3c_0 + 3c_1 &= 5\\ 3c_0 + 5c_1 &= 7 \end{aligned} \;\Longrightarrow\; 2c_1 = 2 \;\Longrightarrow\; c_1 = 1,\; c_0 = \frac{2}{3} \]</li>
        <li><span class="step-t">เส้นตรงและความผิดพลาด</span>
        \[ y = \frac{2}{3} + x \qquad A\hat{x} = \begin{bmatrix} 2/3\\ 5/3\\ 8/3 \end{bmatrix}, \quad \vec{b} - A\hat{x} = \begin{bmatrix} 1/3\\ -2/3\\ 1/3 \end{bmatrix}, \quad \text{error} = \sqrt{\tfrac19 + \tfrac49 + \tfrac19} = \frac{\sqrt{6}}{3} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> เศษตกค้าง \((\tfrac13, -\tfrac23, \tfrac13)^T\) ตั้งฉากกับหลักของ \(A\): \(\tfrac13 - \tfrac23 + \tfrac13 = 0\) ✓ และ \(0\cdot\tfrac13 + 1(-\tfrac23) + 2(\tfrac13) = 0\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">ระยะทางจาก \(\vec{b}\) ไป \(\operatorname{Col} A\) (1 หลัก)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาระยะทางจาก \(\vec{b} = \begin{bmatrix} 1\\ 3 \end{bmatrix}\) ไปยัง \(\operatorname{Col} A\) เมื่อ \(A = \begin{bmatrix} 1\\ 2 \end{bmatrix}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(\operatorname{Col} A = \operatorname{Span}\{(1,2)^T\}\) เป็นเส้นตรง — ฉายด้วยสูตรเวกเตอร์เดียวแล้ววัดระยะ</div>
      <ol class="steps">
        <li><span class="step-t">การฉาย</span>
        \[ \hat{b} = \frac{\vec{b}\cdot\vec{a}}{\vec{a}\cdot\vec{a}}\vec{a} = \frac{1 + 6}{1 + 4}\begin{bmatrix} 1\\ 2 \end{bmatrix} = \frac{7}{5}\begin{bmatrix} 1\\ 2 \end{bmatrix} = \begin{bmatrix} 7/5\\ 14/5 \end{bmatrix} \]</li>
        <li><span class="step-t">ระยะทาง</span>
        \[ \vec{b} - \hat{b} = \begin{bmatrix} -2/5\\ 1/5 \end{bmatrix}, \qquad \operatorname{dist}(\vec{b}, \operatorname{Col} A) = \sqrt{\tfrac45 + \tfrac15} = \frac{\sqrt{5}}{5} \]</li>
        <li><span class="step-t">เชื่อมโยง</span> ระยะทางนี้คือ \(\|\vec{b} - A\hat{x}\|\) น้อยที่สุด — ระบบ \(A\vec{x} = \vec{b}\) ไม่มีผลเฉลยจริง (เพราะ \((1,3)^T\) ไม่เป็นสัดส่วนกับ \((1,2)^T\)) แต่มีผลเฉลยกำลังสองน้อยสุดที่ทำให้พลาดเพียง \(\tfrac{\sqrt{5}}{5}\)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \((-\tfrac25, \tfrac15)^T\cdot(1,2)^T = -\tfrac25 + \tfrac25 = 0\) ✓</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: แก้ least squares ด้วยสมการปรกติ</div>
    <div class="recipe-body">
      <ol>
        <li>เขียน \(A\vec{x} = \vec{b}\) (ถ้าเป็นโจทย์ฟิตเส้น: หลักแรกคือ 1 ทั้งหมด หลักสองคือค่า \(x_i\))</li>
        <li>สร้าง <strong>สมการปรกติ</strong>: \(A^TA\hat{x} = A^T\vec{b}\) (2×2 สำหรับเส้นตรง: ใช้ \(\sum 1, \sum x_i, \sum x_i^2, \sum y_i, \sum x_iy_i\))</li>
        <li>แก้หา \(\hat{x}\) (ผลเฉลยชุดเดียวเมื่อหลักของ \(A\) อิสระ)</li>
        <li>ความผิดพลาด = \(\|\vec{b} - A\hat{x}\|\) — และเศษตกค้าง \(\vec{b} - A\hat{x}\) ต้อง<em>ตั้งฉากกับหลักของ \(A\)</em> ทุกหลัก (ใช้ตรวจคำตอบได้เสมอ)</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: คิดเป็นการฉาย</div>\(A\hat{x} = \operatorname{proj}_{\operatorname{Col}A}\vec{b}\) — ถ้าฐานหลักเชิงตั้งฉากพร้อม ฉายตรงแล้วแก้ \(A\vec{x} = \hat{b}\) ก็ได้</div>
    <div class="key-card"><div class="k-title">ท่า: สูตรเส้นตรง 2×2</div>\(A^TA = \begin{bmatrix} n & \sum x_i\\ \sum x_i & \sum x_i^2 \end{bmatrix}\), \(A^T\vec{b} = \begin{bmatrix} \sum y_i\\ \sum x_iy_i \end{bmatrix}\)</div>
    <div class="key-card"><div class="k-title">ท่า: consistent ก็ใช้ได้</div>ถ้าระบบต้องกันอยู่แล้ว ผลเฉลยกำลังสองน้อยสุด = ผลเฉลยจริง (ความผิดพลาด = 0)</div>
    <div class="key-card"><div class="k-title">ท่า: ระยะทาง</div>\(\operatorname{dist}(\vec{b}, \operatorname{Col}A) = \|\vec{b} - A\hat{x}\|\) — ใช้ตอบโจทย์ "ระยะทางไปปริภูมิย่อย"</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p4-3-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาการประมาณที่ดีสุดของ \(\vec{y} = \begin{bmatrix} 2\\ 0\\ 1 \end{bmatrix}\) โดยเวกเตอร์ใน \(H = \operatorname{Span}\{\vec{u}\}\) เมื่อ \(\vec{u} = \begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}\) พร้อมทั้งหาระยะทาง \(\operatorname{dist}(\vec{y}, H)\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\hat{y} = \tfrac{\vec{y}\cdot\vec{u}}{\vec{u}\cdot\vec{u}}\vec{u} = \tfrac{3}{3}\vec{u} = \vec{u}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ฉายบนเวกเตอร์เดียว</p>
      <ol class="steps">
        <li><span class="step-t">น้ำหนัก</span> \(\vec{y}\cdot\vec{u} = 3\), \(\vec{u}\cdot\vec{u} = 3\) → น้ำหนัก = 1</li>
        <li><span class="step-t">การฉายและระยะทาง</span>
        \[ \hat{y} = \vec{u} = \begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}, \qquad \vec{y} - \hat{y} = \begin{bmatrix} 1\\ -1\\ 0 \end{bmatrix}, \qquad \operatorname{dist}(\vec{y}, H) = \sqrt{2} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \((1,-1,0)^T\cdot(1,1,1)^T = 0\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-3-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาผลเฉลยกำลังสองน้อยสุดของ \(A\vec{x} = \vec{b}\) เมื่อ
      \[ A = \begin{bmatrix} 1 & 1\\ 1 & 2\\ 1 & 3 \end{bmatrix}, \qquad \vec{b} = \begin{bmatrix} 2\\ 3\\ 5 \end{bmatrix} \]
      พร้อมทั้งตรวจว่าเศษตกค้างตั้งฉากกับหลักของ \(A\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A^TA = \begin{bmatrix} 3 & 6\\ 6 & 14 \end{bmatrix}\), \(A^T\vec{b} = \begin{bmatrix} 10\\ 23 \end{bmatrix}\) / \(\hat{x} = (\tfrac13, \tfrac32)^T\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สมการปรกติ</p>
      <ol class="steps">
        <li><span class="step-t">สร้างและแก้</span>
        \[ \begin{aligned} 3c_1 + 6c_2 &= 10\\ 6c_1 + 14c_2 &= 23 \end{aligned} \;\xrightarrow{\;2\times(1) - (2)\;}\; -2c_2 = -3 \;\Longrightarrow\; c_2 = \tfrac32,\; c_1 = \tfrac13 \;\Longrightarrow\; \hat{x} = \begin{bmatrix} 1/3\\ 3/2 \end{bmatrix} \]</li>
        <li><span class="step-t">เศษตกค้าง</span>
        \[ A\hat{x} = \begin{bmatrix} 11/6\\ 10/3\\ 29/6 \end{bmatrix}, \qquad \vec{b} - A\hat{x} = \begin{bmatrix} 1/6\\ -1/3\\ 1/6 \end{bmatrix} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \((\tfrac16, -\tfrac13, \tfrac16)\cdot(1,1,1) = \tfrac16 - \tfrac13 + \tfrac16 = 0\) ✓ และ \((\tfrac16)(1) + (-\tfrac13)(2) + \tfrac16(3) = \tfrac16 - \tfrac23 + \tfrac12 = 0\) ✓ และความผิดพลาด = \(\sqrt{\tfrac{1}{36} + \tfrac19 + \tfrac{1}{36}} = \sqrt{\tfrac{6}{36}} = \tfrac{\sqrt6}{6}\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-3-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาสมการเส้นตรง \(y = c_0 + c_1x\) แบบกำลังสองน้อยสุดที่ดีที่สุดสำหรับข้อมูล \((0, 1), (1, 2), (2, 4)\) และหาความผิดพลาด \(\|\vec{b} - A\hat{x}\|\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A^T\vec{b} = (7, 10)^T\) — แก้ \(\begin{bmatrix} 3 & 3\\ 3 & 5 \end{bmatrix}\hat{x} = \begin{bmatrix} 7\\ 10 \end{bmatrix}\) ได้ \(c_1 = \tfrac32, c_0 = \tfrac56\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ท่าฟิตเส้นตรงมาตรฐาน</p>
      <ol class="steps">
        <li><span class="step-t">ระบบและสมการปรกติ</span>
        \[ \begin{bmatrix} 1 & 0\\ 1 & 1\\ 1 & 2 \end{bmatrix}\begin{bmatrix} c_0\\ c_1 \end{bmatrix} = \begin{bmatrix} 1\\ 2\\ 4 \end{bmatrix} \;\Longrightarrow\; A^TA = \begin{bmatrix} 3 & 3\\ 3 & 5 \end{bmatrix}, \quad A^T\vec{b} = \begin{bmatrix} 7\\ 10 \end{bmatrix} \]</li>
        <li><span class="step-t">แก้</span> \(2c_1 = 3 \Rightarrow c_1 = \tfrac32\); \(3c_0 = 7 - \tfrac92 = \tfrac52 \Rightarrow c_0 = \tfrac56\)
        \[ y = \frac{5}{6} + \frac{3}{2}x \]</li>
        <li><span class="step-t">ความผิดพลาด</span>
        \[ A\hat{x} = \begin{bmatrix} 5/6\\ 7/3\\ 23/6 \end{bmatrix}, \quad \vec{b} - A\hat{x} = \begin{bmatrix} 1/6\\ -1/3\\ 1/6 \end{bmatrix}, \quad \|\vec{b} - A\hat{x}\| = \sqrt{\tfrac{1}{36} + \tfrac{4}{36} + \tfrac{1}{36}} = \frac{\sqrt{6}}{6} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> เศษตกค้าง \((\tfrac16, -\tfrac13, \tfrac16)^T\) ตั้งฉากกับหลักทั้งสอง ✓ (เหมือนข้อ 2 เพราะเศษเดียวกัน — บังเอิญจากข้อมูลที่เลือก)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-3-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาระยะทางจาก \(\vec{b} = \begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix}\) ไปยัง \(\operatorname{Col} A\) เมื่อ \(A = \begin{bmatrix} 1 & 0\\ 0 & 1\\ 1 & 1 \end{bmatrix}\) แล้วตอบด้วยว่าระบบ \(A\vec{x} = \vec{b}\) ต้องกันหรือไม่</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A^TA = \begin{bmatrix} 2 & 1\\ 1 & 2 \end{bmatrix}\), \(A^T\vec{b} = \begin{bmatrix} 2\\ 2 \end{bmatrix}\) → \(\hat{x} = (\tfrac23, \tfrac23)^T\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> distance = \(\|\vec{b} - A\hat{x}\|\)</p>
      <ol class="steps">
        <li><span class="step-t">สมการปรกติและเฉลย</span>
        \[ \begin{aligned} 2a + b &= 2\\ a + 2b &= 2 \end{aligned} \;\Longrightarrow\; a = b = \frac{2}{3} \;\Longrightarrow\; \hat{x} = \begin{bmatrix} 2/3\\ 2/3 \end{bmatrix} \]</li>
        <li><span class="step-t">ระยะทาง</span>
        \[ A\hat{x} = \begin{bmatrix} 2/3\\ 2/3\\ 4/3 \end{bmatrix}, \quad \vec{b} - A\hat{x} = \begin{bmatrix} 1/3\\ 1/3\\ -1/3 \end{bmatrix}, \quad \operatorname{dist} = \sqrt{\tfrac39 + \tfrac39 + \tfrac39} = \frac{\sqrt{3}}{3} \]</li>
        <li><span class="step-t">ตรวจคำตอบและข้อสรุป</span> \((\tfrac13, \tfrac13, -\tfrac13)^T\) ตั้งฉากกับ \((1,0,1)^T\) ✓ และ \((0,1,1)^T\) ✓ — ระบบไม่ต้องกัน (ถ้าต้องกัน ระยะทางจะเป็น 0 เพราะ \(\vec{b} \in \operatorname{Col} A\); ที่จริง \(\operatorname{Col} A = \{(a, b, a+b)\}\) และ \((1,1,1)\) มี \(1 + 1 \ne 1\))</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-3-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาผลเฉลยกำลังสองน้อยสุดของ \(A\vec{x} = \vec{b}\) เมื่อ
      \[ A = \begin{bmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & 1\\ 1 & 1 & 1 \end{bmatrix}, \qquad \vec{b} = \begin{bmatrix} 3\\ 4\\ 5\\ 4 \end{bmatrix} \]
      พร้อมทั้งหา \(\|\vec{b} - A\hat{x}\|\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A^TA = \begin{bmatrix} 2 & 1 & 1\\ 1 & 2 & 1\\ 1 & 1 & 2 \end{bmatrix}\), \(A^T\vec{b} = (7, 8, 9)^T\) / ลบสมการคู่กันจะได้ \(a = b - 1, b = c - 1\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สมการปรกติ 3 ตัวแปร — ใช้การหักลบสมการ</p>
      <ol class="steps">
        <li><span class="step-t">สมการปรกติ</span>
        \[ \begin{aligned} 2a + b + c &= 7\\ a + 2b + c &= 8\\ a + b + 2c &= 9 \end{aligned} \]</li>
        <li><span class="step-t">หักลบสมการ</span> (1)−(2): \(a - b = -1 \Rightarrow a = b - 1\); (2)−(3): \(b - c = -1 \Rightarrow b = c - 1\) ดังนั้น \(a = c - 2\) แทนใน (2): \((c-2) + 2(c-1) + c = 8 \Rightarrow 4c - 4 = 8 \Rightarrow c = 3\) → \(b = 2,\; a = 1\)</li>
        <li><span class="step-t">ตรวจ \(\hat{x} = (1, 2, 3)^T\)</span>
        \[ A^TA\hat{x} = \begin{bmatrix} 2+2+3\\ 1+4+3\\ 1+2+6 \end{bmatrix} = \begin{bmatrix} 7\\ 8\\ 9 \end{bmatrix} = A^T\vec{b} \;\checkmark \;\Longrightarrow\; \hat{x} = \begin{bmatrix} 1\\ 2\\ 3 \end{bmatrix} \]</li>
        <li><span class="step-t">ความผิดพลาด</span>
        \[ A\hat{x} = \begin{bmatrix} 1\\ 2\\ 3\\ 6 \end{bmatrix}, \quad \vec{b} - A\hat{x} = \begin{bmatrix} 2\\ 2\\ 2\\ -2 \end{bmatrix}, \quad \|\vec{b} - A\hat{x}\| = \sqrt{4+4+4+4} = 4 \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \((2,2,2,-2)^T\) ตั้งฉากกับหลักของ \(A\) ทุกหลัก: \((2,2,2,-2)\cdot(1,0,0,1) = 0\) ✓ (เช่นเดียวกันกับอีกสองหลัก) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-3-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ข้อมูลจุด \((1, 2), (2, 5), (3, 5)\) ถูกฟิตด้วยเส้นตรง \(y = c_0 + c_1x\) แบบกำลังสองน้อยสุด จงหาสมการเส้นตรง คาดการณ์ค่า \(y\) ที่ \(x = 4\) และหาความผิดพลาด</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(A^TA = \begin{bmatrix} 3 & 6\\ 6 & 14 \end{bmatrix}\), \(A^T\vec{b} = \begin{bmatrix} 12\\ 27 \end{bmatrix}\) → \(c_1 = \tfrac32, c_0 = 1\) / คาดการณ์: \(y(4) = 7\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ท่าฟิตเส้นตรง + ใช้เส้นคาดการณ์</p>
      <ol class="steps">
        <li><span class="step-t">ระบบและสมการปรกติ</span>
        \[ \begin{bmatrix} 1 & 1\\ 1 & 2\\ 1 & 3 \end{bmatrix}\begin{bmatrix} c_0\\ c_1 \end{bmatrix} = \begin{bmatrix} 2\\ 5\\ 5 \end{bmatrix} \;\Longrightarrow\; \begin{aligned} 3c_0 + 6c_1 &= 12\\ 6c_0 + 14c_1 &= 27 \end{aligned} \]</li>
        <li><span class="step-t">แก้</span> \(2\times(1) - (2)\): \(-2c_1 = -3 \Rightarrow c_1 = \tfrac32\); \(c_0 = 4 - 3 = 1\)
        \[ y = 1 + \frac{3}{2}x \]</li>
        <li><span class="step-t">คาดการณ์และความผิดพลาด</span> ที่ \(x = 4\): \(y = 1 + 6 = 7\)
        \[ A\hat{x} = \begin{bmatrix} 5/2\\ 4\\ 11/2 \end{bmatrix}, \quad \vec{b} - A\hat{x} = \begin{bmatrix} -1/2\\ 1\\ -1/2 \end{bmatrix}, \quad \text{error} = \sqrt{\tfrac14 + 1 + \tfrac14} = \sqrt{\tfrac32} = \frac{\sqrt{6}}{2} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \((-\tfrac12, 1, -\tfrac12)^T\cdot(1,1,1)^T = 0\) ✓ และ \((-\tfrac12)(1) + 1(2) + (-\tfrac12)(3) = 0\) ✓</li>
      </ol>
    </div></details>
  </article>
</section>
