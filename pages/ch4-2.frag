<!-- meta
title: 4.2 การฉายเชิงตั้งฉากและกระบวนการกราม-ชมิดต์
ch: 4
section: 4.2
page: ch4-2.html
-->

<div class="crumb">บทที่ 4 · เรขาคณิตเชิงเส้นและฐานหลักเชิงตั้งฉาก</div>
<h1 class="page-title">4.2 การฉายเชิงตั้งฉากและกระบวนการกราม-ชมิดต์</h1>
<p class="page-sub">เรียนรู้การแยกเวกเตอร์ออกเป็นสองส่วนตั้งฉากกัน (\(\vec{y} = \hat{y} + \vec{z}\))
หาส่วนเติมเต็มเชิงตั้งฉาก \(H^\perp\) และเรียน<strong>กระบวนการกราม-ชมิดต์</strong> — เครื่องมือเปลี่ยนฐานหลักใด ๆ ให้กลายเป็นฐานหลักเชิงตั้งฉากได้เสมอ</p>

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
      <li>หาฐานหลักสำหรับ \(H^\perp\) (โดยรู้ว่า \(H^\perp = \operatorname{Nul} A^T\) เมื่อหลักของ \(A\) แผ่ \(H\))</li>
      <li>หาการฉายเชิงตั้งฉาก \(\operatorname{proj}_H \vec{y}\) บนปริภูมิย่อยที่มีฐานหลักเชิงตั้งฉาก และแยก \(\vec{y} = \hat{y} + \vec{z}\)</li>
      <li>ใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉาก (และเชิงตั้งฉากปรกติ) จากฐานหลักใด ๆ</li>
      <li>หาการแยกตัวประกอบ \(A = QR\) เมื่อหลักของ \(A\) อิสระเชิงเส้น</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) ส่วนเติมเต็มเชิงตั้งฉาก \(H^\perp\)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม</div>
    <p>\(H^\perp\) (อ่านว่า "H เพิร์พ") คือเซตของเวกเตอร์ที่<em>ตั้งฉากกับทุกเวกเตอร์ใน \(H\)</em>:</p>
    \[ H^\perp = \{\vec{z} \in \mathbb{R}^n : \vec{z}\cdot\vec{a} = 0 \text{ สำหรับทุก } \vec{a} \in H\} \]
    <p>สมบัติ (ทฤษฎีบท 4.2.1): \(H^\perp\) เป็นปริภูมิย่อยของ \(\mathbb{R}^n\), \(H \cap H^\perp = \{\vec{0}\}\) และเมื่อ \(H = \operatorname{Span}\{\vec{u}_1, \dots, \vec{u}_p\}\):</p>
    \[ H^\perp = \operatorname{Nul} A^T \qquad \text{เมื่อ} \quad A = \begin{bmatrix} \vec{u}_1 & \vec{u}_2 & \cdots & \vec{u}_p \end{bmatrix} \]
    <p>(ตั้งฉากกับทุก \(\vec{u}_i\) = ตั้งฉากกับทุกการรวมเชิงเส้นของมัน)</p>
  </div>

  <h3>2) การแยกเชิงตั้งฉาก (orthogonal decomposition)</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 4.2.2 — การฉายเชิงตั้งฉาก</div>
    <p>ให้ \(\{\vec{u}_1, \dots, \vec{u}_p\}\) เป็นฐานหลักเชิงตั้งฉากของ \(H\) เวกเตอร์ใด \(\vec{y} \in \mathbb{R}^n\) แยกได้เป็น</p>
    \[ \vec{y} = \hat{y} + \vec{z} \qquad \text{โดย} \qquad \hat{y} = \operatorname{proj}_H \vec{y} = \frac{\vec{y}\cdot\vec{u}_1}{\vec{u}_1\cdot\vec{u}_1}\vec{u}_1 + \cdots + \frac{\vec{y}\cdot\vec{u}_p}{\vec{u}_p\cdot\vec{u}_p}\vec{u}_p \;\in\; H \]
    <p>และ \(\vec{z} = \vec{y} - \hat{y} \in H^\perp\) — กรณีพิเศษ \(\operatorname{Span}\{\vec{u}\}\): \(\;\hat{y} = \dfrac{\vec{y}\cdot\vec{u}}{\vec{u}\cdot\vec{u}}\vec{u}\)</p>
  </div>

  <h3>3) กระบวนการกราม-ชมิดต์ (Gram-Schmidt)</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 4.2.3 — สร้างฐานหลักเชิงตั้งฉากจากฐานหลักใดก็ได้</div>
    <p>ให้ \(\{\vec{x}_1, \dots, \vec{x}_p\}\) เป็นฐานหลักของ \(H\) กำหนด</p>
    \[ \vec{v}_1 = \vec{x}_1, \qquad \vec{v}_2 = \vec{x}_2 - \frac{\vec{x}_2\cdot\vec{v}_1}{\vec{v}_1\cdot\vec{v}_1}\vec{v}_1, \qquad
    \vec{v}_3 = \vec{x}_3 - \frac{\vec{x}_3\cdot\vec{v}_1}{\vec{v}_1\cdot\vec{v}_1}\vec{v}_1 - \frac{\vec{x}_3\cdot\vec{v}_2}{\vec{v}_2\cdot\vec{v}_2}\vec{v}_2, \;\; \dots \]
    <p>นั่นคือ \(\vec{v}_i\) = \(\vec{x}_i\) ลบส่วนที่ฉายบนเวกเตอร์ที่สร้างไว้ก่อนหน้า — จะได้ \(\{\vec{v}_1, \dots, \vec{v}_p\}\) เป็นฐานหลักเชิงตั้งฉากของ \(H\) และปรับเป็น orthonormal ได้โดยหารด้วยความยาว (บทแทรก 4.2.4: ทำได้เสมอ)</p>
  </div>
  <div class="box box-idea">
    <div class="box-title">💡 เทคนิคทำให้เลขสวย</div>
    <p>ระหว่างกราม-ชมิดต์ ถ้า \(\vec{v}_i\) มีเศษส่วนรก สามารถ<em>คูณสเกลาร์</em> (ที่ไม่ศูนย์) ให้เป็นจำนวนเต็มก่อนได้เสมอ — การคูณสเกลาร์ไม่ทำลายความตั้งฉากและไม่เปลี่ยน span เช่น \((\tfrac12, -\tfrac12, 2)\) ใช้ \((1, -1, 4)\) แทนได้</p>
  </div>

  <h3>4) การแยกตัวประกอบ QR</h3>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 4.2.5 — QR Factorization</div>
    <p>ถ้าหลักของ \(A\) (ขนาด \(m\times n\)) อิสระเชิงเส้น แล้ว \(A = QR\) เมื่อ</p>
    <p>• \(Q\) = เมทริกซ์ \(m\times n\) ที่หลักเป็นฐานหลักเชิงตั้งฉาก<strong>ปรกติ</strong>ของ \(\operatorname{Col} A\) (จากกราม-ชมิดต์)</p>
    <p>• \(R = Q^TA\) = เมทริกซ์สามเหลี่ยมบนไม่เอกฐาน ทแยงเป็นบวก</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">หาฐานหลักสำหรับ \(H^\perp\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(H = \operatorname{Span}\{(1,1,0), (0,1,1)\}\) จงหาฐานหลักสำหรับ \(H^\perp\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(H^\perp = \operatorname{Nul} A^T\) เมื่อ \(A\) มีเวกเตอร์ฐานหลักเรียงเป็นหลัก — คือแก้ระบบเอกพันธุ์ \(A^T\vec{x} = \vec{0}\)</div>
      <ol class="steps">
        <li><span class="step-t">เขียนเงื่อนไขการตั้งฉาก</span> \(\vec{z} = (x_1, x_2, x_3)^T \in H^\perp\) ก็ต่อเมื่อ
        \[ \vec{z}\cdot(1,1,0) = x_1 + x_2 = 0 \qquad \vec{z}\cdot(0,1,1) = x_2 + x_3 = 0 \]</li>
        <li><span class="step-t">แก้ระบบเอกพันธุ์</span>
        \[ A^T = \begin{bmatrix} 1 & 1 & 0\\ 0 & 1 & 1 \end{bmatrix} \sim \begin{bmatrix} 1 & 0 & -1\\ 0 & 1 & 1 \end{bmatrix} \;\Longrightarrow\; x_1 = x_3, \;\; x_2 = -x_3 \]</li>
        <li><span class="step-t">เขียนผลเฉลยอิงตัวแปรเสริม</span>
        \[ \vec{x} = x_3\begin{bmatrix} 1\\ -1\\ 1 \end{bmatrix} \;\Longrightarrow\; \text{ฐานหลักสำหรับ } H^\perp = \left\{ \begin{bmatrix} 1\\ -1\\ 1 \end{bmatrix} \right\} \]
        (\(\dim H + \dim H^\perp = 2 + 1 = 3\) ✓)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \((1,-1,1)\cdot(1,1,0) = 0\) ✓ และ \((1,-1,1)\cdot(0,1,1) = 0\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">ฉายบนเส้นตรง \(\operatorname{Span}\{\vec{u}\}\)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(\vec{y} = \begin{bmatrix} 5\\ 0 \end{bmatrix}\) และ \(\vec{u} = \begin{bmatrix} 3\\ 4 \end{bmatrix}\) จงหา \(\operatorname{proj}_{\operatorname{Span}\{\vec{u}\}} \vec{y}\) และส่วนเติมเต็ม \(\vec{z}\) ที่ตั้งฉากกับ \(\vec{u}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — กรณีเวกเตอร์เดียว: \(\hat{y} = \frac{\vec{y}\cdot\vec{u}}{\vec{u}\cdot\vec{u}}\vec{u}\) แล้ว \(\vec{z} = \vec{y} - \hat{y}\)</div>
      <ol class="steps">
        <li><span class="step-t">หาน้ำหนัก</span>
        \[ \frac{\vec{y}\cdot\vec{u}}{\vec{u}\cdot\vec{u}} = \frac{15 + 0}{9 + 16} = \frac{15}{25} = \frac{3}{5} \]</li>
        <li><span class="step-t">การฉาย</span>
        \[ \hat{y} = \frac{3}{5}\begin{bmatrix} 3\\ 4 \end{bmatrix} = \begin{bmatrix} 9/5\\ 12/5 \end{bmatrix} \]</li>
        <li><span class="step-t">ส่วนเติมเต็ม</span>
        \[ \vec{z} = \vec{y} - \hat{y} = \begin{bmatrix} 16/5\\ -12/5 \end{bmatrix} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(\vec{z}\cdot\vec{u} = \tfrac{48}{5} - \tfrac{48}{5} = 0\) ✓ และ \(\vec{y} = \hat{y} + \vec{z}\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag hard">ยาก</span><span class="ex-title">แยก \(\vec{x} = \vec{y} + \vec{z}\) บนฐานหลักเชิงตั้งฉาก (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">กำหนด \(\vec{u}_1 = \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix}, \vec{u}_2 = \begin{bmatrix} -1\\ 4\\ 1 \end{bmatrix}, \vec{u}_3 = \begin{bmatrix} 2\\ 1\\ -2 \end{bmatrix}, \vec{x} = \begin{bmatrix} 8\\ -4\\ -3 \end{bmatrix}\) โดย \(\{\vec{u}_1, \vec{u}_2, \vec{u}_3\}\) เป็นฐานหลักเชิงตั้งฉากของ \(\mathbb{R}^3\) จงเขียน \(\vec{x}\) ในรูป \(\vec{x} = \vec{y} + \vec{z}\) โดย \(\vec{y} \in \operatorname{Span}\{\vec{u}_1, \vec{u}_2\}\) และ \(\vec{z} \in \operatorname{Span}\{\vec{u}_3\}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — คิดน้ำหนักทั้งสามตัวแยกกันด้วยทฤษฎีบท 4.1.3 แล้วตัดตามที่โจทย์ขอ: \(\vec{y}\) เก็บน้ำหนักของ \(\vec{u}_1, \vec{u}_2\), \(\vec{z}\) เก็บของ \(\vec{u}_3\)</div>
      <ol class="steps">
        <li><span class="step-t">คิดน้ำหนักทั้งสาม</span>
        \[ \frac{\vec{x}\cdot\vec{u}_1}{\vec{u}_1\cdot\vec{u}_1} = \frac{8-3}{2} = \frac{5}{2}, \qquad
        \frac{\vec{x}\cdot\vec{u}_2}{\vec{u}_2\cdot\vec{u}_2} = \frac{-8-16-3}{18} = -\frac{3}{2}, \qquad
        \frac{\vec{x}\cdot\vec{u}_3}{\vec{u}_3\cdot\vec{u}_3} = \frac{16-4+6}{9} = 2 \]</li>
        <li><span class="step-t">แยกตามที่โจทย์ต้องการ</span>
        \[ \vec{y} = \frac{5}{2}\vec{u}_1 - \frac{3}{2}\vec{u}_2 = \begin{bmatrix} 5/2 + 3/2\\ -6\\ 5/2 - 3/2 \end{bmatrix} = \begin{bmatrix} 4\\ -6\\ 1 \end{bmatrix} \in \operatorname{Span}\{\vec{u}_1, \vec{u}_2\} \]
        \[ \vec{z} = 2\vec{u}_3 = \begin{bmatrix} 4\\ 2\\ -4 \end{bmatrix} \in \operatorname{Span}\{\vec{u}_3\} \]</li>
        <li><span class="step-t">สรุป</span> \(\vec{x} = \vec{y} + \vec{z}\) โดย \(\vec{y} = \operatorname{proj}_H \vec{x}\) (เมื่อ \(H = \operatorname{Span}\{\vec{u}_1, \vec{u}_2\}\)) และ \(\vec{z} \in H^\perp\)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(\vec{y} + \vec{z} = (8, -4, -3) = \vec{x}\) ✓ และ \(\vec{z}\cdot\vec{u}_1 = 4-4 = 0\), \(\vec{z}\cdot\vec{u}_2 = -4+8-4 = 0\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">กราม-ชมิดต์ 2 เวกเตอร์ (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(H = \operatorname{Span}\{\vec{x}_1, \vec{x}_2\}\) เมื่อ \(\vec{x}_1 = \begin{bmatrix} 1\\ 2\\ 0 \end{bmatrix}\), \(\vec{x}_2 = \begin{bmatrix} 1\\ 2\\ -3 \end{bmatrix}\) จงใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากสำหรับ \(H\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \(\vec{v}_1 = \vec{x}_1\) แล้ว \(\vec{v}_2 = \vec{x}_2\) ลบส่วนที่ฉายบน \(\vec{v}_1\)</div>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1 = \vec{x}_1\)</span> \(\vec{v}_1 = (1, 2, 0)^T\), \(\vec{v}_1\cdot\vec{v}_1 = 5\)</li>
        <li><span class="step-t">ลบส่วนฉายออกจาก \(\vec{x}_2\)</span>
        \[ \vec{v}_2 = \vec{x}_2 - \frac{\vec{x}_2\cdot\vec{v}_1}{\vec{v}_1\cdot\vec{v}_1}\vec{v}_1 = \begin{bmatrix} 1\\ 2\\ -3 \end{bmatrix} - \frac{1 + 4 + 0}{5}\begin{bmatrix} 1\\ 2\\ 0 \end{bmatrix} = \begin{bmatrix} 1\\ 2\\ -3 \end{bmatrix} - \begin{bmatrix} 1\\ 2\\ 0 \end{bmatrix} = \begin{bmatrix} 0\\ 0\\ -3 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> \(\left\{ (1,2,0)^T, (0,0,-3)^T \right\}\) เป็นฐานหลักเชิงตั้งฉากสำหรับ \(H\) (ตรวจ: ผลคูณจุด = 0 ✓)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">กราม-ชมิดต์ 3 เวกเตอร์พร้อมท่าคูณสเกลาร์เก็บเลขสวย</span></div>
    <div class="ex-body">
      <div class="ex-q">จงใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากสำหรับ \(H = \operatorname{Span}\{\vec{x}_1, \vec{x}_2, \vec{x}_3\}\) เมื่อ \(\vec{x}_1 = (1,1,0)^T\), \(\vec{x}_2 = (1,0,1)^T\), \(\vec{x}_3 = (0,1,1)^T\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ทำทีละตัว และระหว่างทางคูณสเกลาร์เก็บตัวเลขให้เป็นจำนวนเต็ม</div>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1\)</span> \(\vec{v}_1 = (1, 1, 0)^T\), \(\vec{v}_1\cdot\vec{v}_1 = 2\)</li>
        <li><span class="step-t">หา \(\vec{v}_2\)</span> \(\vec{x}_2\cdot\vec{v}_1 = 1\)
        \[ \vec{v}_2 = \begin{bmatrix} 1\\ 0\\ 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} 1\\ 1\\ 0 \end{bmatrix} = \begin{bmatrix} 1/2\\ -1/2\\ 1 \end{bmatrix} \;\xrightarrow{\;\times 2\;}\; \vec{v}_2' = \begin{bmatrix} 1\\ -1\\ 2 \end{bmatrix} \]
        (\(\vec{v}_2'\cdot\vec{v}_1 = 0\) ✓, \(\vec{v}_2'\cdot\vec{v}_2' = 6\))</li>
        <li><span class="step-t">หา \(\vec{v}_3\)</span> ลบส่วนฉายบน \(\vec{v}_1\) และ \(\vec{v}_2'\): \(\vec{x}_3\cdot\vec{v}_1 = 1\), \(\vec{x}_3\cdot\vec{v}_2' = 0 - 1 + 2 = 1\)
        \[ \vec{v}_3 = \begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} 1\\ 1\\ 0 \end{bmatrix} - \frac{1}{6}\begin{bmatrix} 1\\ -1\\ 2 \end{bmatrix} = \begin{bmatrix} -2/3\\ 2/3\\ 2/3 \end{bmatrix} \;\xrightarrow{\;\times 3/2\;}\; \vec{v}_3' = \begin{bmatrix} -1\\ 1\\ 1 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> \(\{(1,1,0)^T, (1,-1,2)^T, (-1,1,1)^T\}\) เป็นฐานหลักเชิงตั้งฉากสำหรับ \(H\) (จับคู่จุดกันหมด ✓)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \((1,1,0)\cdot(1,-1,2) = 0\) ✓, \((1,1,0)\cdot(-1,1,1) = 0\) ✓, \((1,-1,2)\cdot(-1,1,1) = -1-1+2 = 0\) ✓ และเวกเตอร์ทั้งสามไม่ศูนย์ → อิสระเชิงเส้น → เป็นฐานหลักของ \(H\) จริง</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 6</span><span class="tag hard">ยาก</span><span class="ex-title">QR Factorization</span></div>
    <div class="ex-body">
      <div class="ex-q">จงหาการแยกตัวประกอบ \(A = QR\) ของ \(A = \begin{bmatrix} 1 & 1\\ 1 & 0\\ 0 & 1 \end{bmatrix}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — หลักของ \(A\) คือ \(\vec{x}_1 = (1,1,0)^T, \vec{x}_2 = (1,0,1)^T\) — ทำกราม-ชมิดต์ → ปรับหนึ่งหน่วย → \(Q\) = เรียงเป็นหลัก → \(R = Q^TA\)</div>
      <ol class="steps">
        <li><span class="step-t">กราม-ชมิดต์ (จากตัวอย่าง 5 สองตัวแรก)</span>
        \[ \vec{v}_1 = (1,1,0)^T, \qquad \vec{v}_2' = (1,-1,2)^T \]</li>
        <li><span class="step-t">ปรับหนึ่งหน่วยแล้วเรียงเป็นหลักของ \(Q\)</span> \(\|\vec{v}_1\| = \sqrt{2}\), \(\|\vec{v}_2'\| = \sqrt{6}\)
        \[ Q = \begin{bmatrix} \tfrac{1}{\sqrt{2}} & \tfrac{1}{\sqrt{6}}\\[4pt] \tfrac{1}{\sqrt{2}} & -\tfrac{1}{\sqrt{6}}\\[4pt] 0 & \tfrac{2}{\sqrt{6}} \end{bmatrix} \]</li>
        <li><span class="step-t">คำนวณ \(R = Q^TA\)</span>
        \[ R = \begin{bmatrix} \tfrac{1}{\sqrt{2}} & \tfrac{1}{\sqrt{2}} & 0\\[4pt] \tfrac{1}{\sqrt{6}} & -\tfrac{1}{\sqrt{6}} & \tfrac{2}{\sqrt{6}} \end{bmatrix}\begin{bmatrix} 1 & 1\\ 1 & 0\\ 0 & 1 \end{bmatrix} = \begin{bmatrix} \tfrac{2}{\sqrt{2}} & \tfrac{1}{\sqrt{2}}\\[4pt] 0 & \tfrac{3}{\sqrt{6}} \end{bmatrix} = \begin{bmatrix} \sqrt{2} & \tfrac{1}{\sqrt{2}}\\[4pt] 0 & \sqrt{\tfrac{3}{2}} \end{bmatrix} \]
        (เป็นสามเหลี่ยมบน ทแยงเป็นบวก ✓)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(QR\) หลักแรก: \(\sqrt{2}\,\vec{q}_1 = (1,1,0)^T = \vec{x}_1\) ✓ หลักที่สอง: \(\tfrac{1}{\sqrt{2}}\vec{q}_1 + \sqrt{\tfrac{3}{2}}\,\vec{q}_2 = (\tfrac12 + \tfrac12,\; \tfrac12 - \tfrac12,\; 0 + 1)^T = (1, 0, 1)^T = \vec{x}_2\) ✓</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: กระบวนการกราม-ชมิดต์และการฉาย</div>
    <div class="recipe-body">
      <ol>
        <li><strong>หา \(H^\perp\):</strong> เรียงฐานหลักของ \(H\) เป็นหลักของ \(A\) → \(H^\perp = \operatorname{Nul} A^T\) → แก้ระบบเอกพันธุ์</li>
        <li><strong>ฉายบนฐานหลักเชิงตั้งฉาก:</strong> น้ำหนักที่ \(i\) = \(\frac{\vec{y}\cdot\vec{u}_i}{\vec{u}_i\cdot\vec{u}_i}\) (คิดแยกทีละตัว) → \(\hat{y} = \sum\) น้ำหนัก × \(\vec{u}_i\) → \(\vec{z} = \vec{y} - \hat{y}\)</li>
        <li><strong>กราม-ชมิดต์:</strong> \(\vec{v}_1 = \vec{x}_1\); ตัวถัดไปลบส่วนฉายบน \(\vec{v}_1, \dots, \vec{v}_{i-1}\) ทั้งหมด — คูณสเกลาร์เก็บเลขสวยได้ตลอด</li>
        <li><strong>QR:</strong> กราม-ชมิดต์ → ปรับหนึ่งหน่วย → \(Q\) → \(R = Q^TA\) (สามเหลี่ยมบน)</li>
        <li>ตรวจเสมอด้วยผลคูณจุดของคู่เวกเตอร์ที่ได้</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: อ่านทิศของ \(H^\perp\)</div>\(\dim H + \dim H^\perp = n\) — ใช้เช็กความสมเหตุสมผลของคำตอบ</div>
    <div class="key-card"><div class="k-title">ท่า: แยก \(\vec{x} = \vec{y} + \vec{z}\)</div>เขียน \(\vec{x}\) ในฐานหลักเชิงตั้งฉากทั้งหมดก่อน (ทฤษฎีบท 4.1.3) แล้วค่อยตัดกลุ่มเวกเตอร์ตามที่โจทย์แบ่ง</div>
    <div class="key-card"><div class="k-title">ท่า: เช็กผลกราม-ชมิดต์</div>เวกเตอร์คู่ใหม่ต้องจุดกัน = 0 ทุกคู่ และ span เท่าเดิม (จำนวน + อิสระครบ)</div>
    <div class="key-card"><div class="k-title">ท่า: อย่าลืมว่า R มาจากไหน</div>\(R = Q^TA\) ไม่ใช่ \(Q^{-1}A\) แม้ในทางปฏิบัติค่าเท่ากันเมื่อ \(Q\) จัตุรัส — ใช้ \(Q^T\) ปลอดภัยกว่า</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p4-2-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาฐานหลักสำหรับ \(H^\perp\) เมื่อ \(H = \operatorname{Span}\{\vec{u}\}\) และ \(\vec{u} = \begin{bmatrix} 1\\ 2\\ -3 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\vec{z} = (x_1, x_2, x_3)^T \in H^\perp\) ก็ต่อเมื่อ \(x_1 + 2x_2 - 3x_3 = 0\) → เขียน \(x_1 = -2x_2 + 3x_3\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(H^\perp = \operatorname{Nul} A^T\) เมื่อ \(A = \begin{bmatrix} 1 & 2 & -3 \end{bmatrix}^T\)</p>
      <ol class="steps">
        <li><span class="step-t">เงื่อนไขเดียว</span> \(x_1 + 2x_2 - 3x_3 = 0 \Rightarrow x_1 = -2x_2 + 3x_3\) โดย \(x_2, x_3\) เสรี</li>
        <li><span class="step-t">ผลเฉลยอิงตัวแปรเสริม</span>
        \[ \vec{x} = x_2\begin{bmatrix} -2\\ 1\\ 0 \end{bmatrix} + x_3\begin{bmatrix} 3\\ 0\\ 1 \end{bmatrix} \;\Longrightarrow\; \text{ฐานหลักสำหรับ } H^\perp = \left\{ \begin{bmatrix} -2\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} 3\\ 0\\ 1 \end{bmatrix} \right\} \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \((-2,1,0)\cdot(1,2,-3) = -2+2 = 0\) ✓ และ \((3,0,1)\cdot(1,2,-3) = 3-3 = 0\) ✓ และ \(\dim H + \dim H^\perp = 1 + 2 = 3\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-2-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงแสดงว่า \(\{\vec{u}_1, \vec{u}_2\} = \left\{ \begin{bmatrix} 1\\ 1\\ 0 \end{bmatrix}, \begin{bmatrix} -1\\ 1\\ 0 \end{bmatrix} \right\}\) เป็นเซตเชิงตั้งฉาก แล้วหาการฉายเชิงตั้งฉากของ \(\vec{y} = \begin{bmatrix} 1\\ -4\\ 3 \end{bmatrix}\) บน \(H = \operatorname{Span}\{\vec{u}_1, \vec{u}_2\}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\vec{y}\cdot\vec{u}_1 = -3\), \(\vec{y}\cdot\vec{u}_2 = -5\) และ \(\|\vec{u}_1\|^2 = \|\vec{u}_2\|^2 = 2\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ทฤษฎีบท 4.2.2 โดยตรง</p>
      <ol class="steps">
        <li><span class="step-t">เช็กเซตเชิงตั้งฉาก</span> \(\vec{u}_1\cdot\vec{u}_2 = -1 + 1 + 0 = 0\) ✓</li>
        <li><span class="step-t">น้ำหนัก</span>
        \[ \frac{\vec{y}\cdot\vec{u}_1}{2} = \frac{1-4}{2} = -\frac{3}{2}, \qquad \frac{\vec{y}\cdot\vec{u}_2}{2} = \frac{-1-4}{2} = -\frac{5}{2} \]</li>
        <li><span class="step-t">การฉาย</span>
        \[ \hat{y} = -\frac{3}{2}\begin{bmatrix} 1\\ 1\\ 0 \end{bmatrix} - \frac{5}{2}\begin{bmatrix} -1\\ 1\\ 0 \end{bmatrix} = \begin{bmatrix} -3/2 + 5/2\\ -3/2 - 5/2\\ 0 \end{bmatrix} = \begin{bmatrix} 1\\ -4\\ 0 \end{bmatrix} \]
        (และ \(\vec{z} = \vec{y} - \hat{y} = (0, 0, 3)^T \in H^\perp\) ✓ เพราะตั้งฉากกับ \(\vec{u}_1, \vec{u}_2\) ทั้งคู่)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-2-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากของปริภูมิย่อยที่แผ่ทั่วโดย \(\vec{x}_1 = \begin{bmatrix} 1\\ -1\\ 0 \end{bmatrix}\) และ \(\vec{x}_2 = \begin{bmatrix} 0\\ 1\\ -1 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\vec{x}_2\cdot\vec{v}_1 = -1\), \(\vec{v}_1\cdot\vec{v}_1 = 2\) — หลังลบแล้วได้เศษส่วน คูณ 2 เก็บเลขให้สวยได้</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> กราม-ชมิดต์สองตัว</p>
      <ol class="steps">
        <li><span class="step-t">ตั้ง \(\vec{v}_1 = \vec{x}_1\)</span> \(\vec{v}_1 = (1,-1,0)^T\), \(\vec{v}_1\cdot\vec{v}_1 = 2\)</li>
        <li><span class="step-t">ลบส่วนฉาย</span>
        \[ \vec{v}_2 = \begin{bmatrix} 0\\ 1\\ -1 \end{bmatrix} - \frac{-1}{2}\begin{bmatrix} 1\\ -1\\ 0 \end{bmatrix} = \begin{bmatrix} 1/2\\ 1/2\\ -1 \end{bmatrix} \;\xrightarrow{\;\times 2\;}\; \begin{bmatrix} 1\\ 1\\ -2 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> \(\{(1,-1,0)^T, (1,1,-2)^T\}\) เป็นฐานหลักเชิงตั้งฉาก (ตรวจ: \(1 - 1 + 0 = 0\) ✓)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-2-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาฐานหลักของ \(\operatorname{Col} A\) แล้วใช้กระบวนการกราม-ชมิดต์สร้างฐานหลักเชิงตั้งฉากของ \(\operatorname{Col} A\) เมื่อ \(A = \begin{bmatrix} 1 & 0 & 1\\ 1 & 1 & 0\\ 1 & 0 & 1 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หลักที่ 3 ของ \(A\) เป็นการรวมเชิงเส้นของสองหลักแรก (หลัก 1 − หลัก 2) → ฐานหลักของ Col A มี 2 ตัว (หลักตัวหลัก 1, 2)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ต้องหาฐานหลักก่อนเสมอ — กราม-ชมิดต์ใช้กับ<em>ฐานหลัก</em>เท่านั้น</p>
      <ol class="steps">
        <li><span class="step-t">หาฐานหลักของ Col A</span> สังเกต \(\vec{a}_1 - \vec{a}_2 = (1,0,1)^T = \vec{a}_3\) → หลักที่ 3 พึ่งเชิงเส้น → โดยทฤษฎีบท 2.2.4 ฐานหลักคือหลักตัวหลัก \(\{(1,1,1)^T, (0,1,0)^T\}\)</li>
        <li><span class="step-t">กราม-ชมิดต์</span> \(\vec{v}_1 = (1,1,1)^T\), \(\vec{v}_1\cdot\vec{v}_1 = 3\); \(\vec{x}_2\cdot\vec{v}_1 = 1\)
        \[ \vec{v}_2 = \begin{bmatrix} 0\\ 1\\ 0 \end{bmatrix} - \frac{1}{3}\begin{bmatrix} 1\\ 1\\ 1 \end{bmatrix} = \begin{bmatrix} -1/3\\ 2/3\\ -1/3 \end{bmatrix} \;\xrightarrow{\;\times 3\;}\; \begin{bmatrix} -1\\ 2\\ -1 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> \(\{(1,1,1)^T, (-1,2,-1)^T\}\) เป็นฐานหลักเชิงตั้งฉากของ \(\operatorname{Col} A\) (ตรวจ: \(-1+2-1 = 0\) ✓) — และถ้าต้องการ orthonormal ให้หารด้วย \(\sqrt{3}\) และ \(\sqrt{6}\) ตามลำดับ</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-2-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>จงหาการแยกตัวประกอบ \(A = QR\) ของ \(A = \begin{bmatrix} 1 & 0\\ 1 & 1\\ 0 & 1 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หลักของ \(A\): \(\vec{x}_1 = (1,1,0)^T\), \(\vec{x}_2 = (0,1,1)^T\) / กราม-ชมิดต์: \(\vec{v}_1 = \vec{x}_1\), \(\vec{x}_2\cdot\vec{v}_1 = 1\) → \(\vec{v}_2 \to (-1,1,2)^T\) (คูณ 2) / \(R = Q^TA\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> กราม-ชมิดต์ → ปรับหนึ่งหน่วย → \(Q\) → \(R = Q^TA\)</p>
      <ol class="steps">
        <li><span class="step-t">กราม-ชมิดต์</span> \(\vec{v}_1 = (1,1,0)^T\), \(\vec{v}_1\cdot\vec{v}_1 = 2\); \(\vec{x}_2\cdot\vec{v}_1 = 1\)
        \[ \vec{v}_2 = \begin{bmatrix} 0\\ 1\\ 1 \end{bmatrix} - \frac{1}{2}\begin{bmatrix} 1\\ 1\\ 0 \end{bmatrix} = \begin{bmatrix} -1/2\\ 1/2\\ 1 \end{bmatrix} \;\xrightarrow{\;\times 2\;}\; \begin{bmatrix} -1\\ 1\\ 2 \end{bmatrix} \]</li>
        <li><span class="step-t">ปรับหนึ่งหน่วย</span> \(\|\vec{v}_1\| = \sqrt{2}\), \(\|(-1,1,2)^T\| = \sqrt{6}\)
        \[ Q = \begin{bmatrix} \tfrac{1}{\sqrt{2}} & -\tfrac{1}{\sqrt{6}}\\[4pt] \tfrac{1}{\sqrt{2}} & \tfrac{1}{\sqrt{6}}\\[4pt] 0 & \tfrac{2}{\sqrt{6}} \end{bmatrix} \]</li>
        <li><span class="step-t">หา \(R = Q^TA\)</span>
        \[ R = \begin{bmatrix} \vec{q}_1^T\vec{x}_1 & \vec{q}_1^T\vec{x}_2\\ \vec{q}_2^T\vec{x}_1 & \vec{q}_2^T\vec{x}_2 \end{bmatrix} = \begin{bmatrix} \tfrac{2}{\sqrt{2}} & \tfrac{1}{\sqrt{2}}\\[4pt] 0 & \tfrac{3}{\sqrt{6}} \end{bmatrix} = \begin{bmatrix} \sqrt{2} & \tfrac{1}{\sqrt{2}}\\[4pt] 0 & \tfrac{3}{\sqrt{6}} \end{bmatrix} \]
        (สามเหลี่ยมบน ทแยงเป็นบวก ✓ — \(R_{21} = 0\) เพราะ \(\vec{q}_2 \perp \vec{x}_1\))</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> หลักแรกของ \(QR\): \(\sqrt{2}\,\vec{q}_1 = (1,1,0)^T = \vec{x}_1\) ✓ หลักที่สอง: \(\tfrac{1}{\sqrt{2}}\vec{q}_1 + \tfrac{3}{\sqrt{6}}\vec{q}_2 = (\tfrac12 - \tfrac36,\; \tfrac12 + \tfrac36,\; 0 + \tfrac66)^T = (0, 1, 1)^T = \vec{x}_2\) ✓</div>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p4-2-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(H = \operatorname{Span}\{\vec{u}_1, \vec{u}_2\}\) เมื่อ \(\vec{u}_1 = \begin{bmatrix} 1\\ 3\\ -2 \end{bmatrix}\), \(\vec{u}_2 = \begin{bmatrix} 5\\ 1\\ 4 \end{bmatrix}\) (เซตเชิงตั้งฉาก) และ \(\vec{y} = \begin{bmatrix} 1\\ 3\\ 5 \end{bmatrix}\) จงแยก \(\vec{y}\) เป็น \(\vec{y} = \hat{y} + \vec{z}\) โดย \(\hat{y} \in H\) และ \(\vec{z} \in H^\perp\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(\vec{u}_1\cdot\vec{u}_1 = 14\), \(\vec{u}_2\cdot\vec{u}_2 = 42\) / น้ำหนัก: \(\tfrac{\vec{y}\cdot\vec{u}_1}{14} = 0\), \(\tfrac{\vec{y}\cdot\vec{u}_2}{42} = \tfrac{2}{3}\) — แล้ว \(\vec{z} = \vec{y} - \hat{y}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ทฤษฎีบท 4.2.2</p>
      <ol class="steps">
        <li><span class="step-t">เช็กและหาน้ำหนัก</span> เซตเชิงตั้งฉาก: \(\vec{u}_1\cdot\vec{u}_2 = 5 + 3 - 8 = 0\) ✓
        \[ \frac{\vec{y}\cdot\vec{u}_1}{\vec{u}_1\cdot\vec{u}_1} = \frac{1 + 9 - 10}{14} = 0, \qquad \frac{\vec{y}\cdot\vec{u}_2}{\vec{u}_2\cdot\vec{u}_2} = \frac{5 + 3 + 20}{42} = \frac{28}{42} = \frac{2}{3} \]
        (น้ำหนักแรกเป็น 0 ได้ — แปลว่า \(\vec{y}\) ตั้งฉากกับ \(\vec{u}_1\) ไปเองแล้ว)</li>
        <li><span class="step-t">การฉาย</span>
        \[ \hat{y} = 0\cdot\vec{u}_1 + \frac{2}{3}\vec{u}_2 = \begin{bmatrix} 10/3\\ 2/3\\ 8/3 \end{bmatrix} \in H \]</li>
        <li><span class="step-t">ส่วนเติมเต็ม</span>
        \[ \vec{z} = \vec{y} - \hat{y} = \begin{bmatrix} -7/3\\ 7/3\\ 7/3 \end{bmatrix} \in H^\perp \]</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(\hat{y} + \vec{z} = (1, 3, 5)^T = \vec{y}\) ✓ และ \(\vec{z}\cdot\vec{u}_1 = \tfrac{7}{3}(-1 + 3 - 2) = 0\) ✓, \(\vec{z}\cdot\vec{u}_2 = \tfrac{7}{3}(-5 + 1 + 4) = 0\) ✓</li>
      </ol>
    </div></details>
  </article>
</section>
