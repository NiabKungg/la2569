<!-- meta
title: 3.1 เมทริกซ์สำหรับการแปลงเชิงเส้นและการเปลี่ยนฐานหลัก
ch: 3
section: 3.1
page: ch3-1.html
-->

<div class="crumb">บทที่ 3 · ค่าลักษณะเฉพาะและเวกเตอร์ลักษณะเฉพาะ</div>
<h1 class="page-title">3.1 เมทริกซ์สำหรับการแปลงเชิงเส้นและการเปลี่ยนฐานหลัก</h1>
<p class="page-sub">เวกเตอร์เดียวกันมองได้หลายมุม — เราจะเรียนเขียน "พิกัดของเวกเตอร์เทียบฐานหลักใดก็ได้"
เรียนรู้ว่าการแปลงเชิงเส้นมีเมทริกซ์ต่างกันไปตามฐานหลัก และหาสูตรเปลี่ยนระหว่างเมทริกซ์เหล่านั้น
ซึ่งเป็นสะพานสู่การแปลงเป็นทแยงมุมในหัวข้อถัดไป</p>

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
      <li>หาเวกเตอร์พิกัด \([\vec{x}]_B\) ของ \(\vec{x}\) สัมพัทธ์กับฐานหลัก \(B\) ใด ๆ</li>
      <li>หาเมทริกซ์สำหรับ \(T\) สัมพัทธ์กับฐานหลัก \(B\) และ \(C\) และใช้สมการ \([T(\vec{x})]_C = [T]_{C \leftarrow B}[\vec{x}]_B\)</li>
      <li>หาเมทริกซ์การเปลี่ยนพิกัด \(P_{B \to B'}\) และใช้ \([\vec{x}]_{B'} = P_{B \to B'}[\vec{x}]_B\)</li>
      <li>ใช้บทแทรก 3.1.4: \([T]_{B'} = P^{-1}[T]_B P\) เปลี่ยนเมทริกซ์ของการแปลงระหว่างฐานหลัก</li>
    </ul>
  </div>
</section>

<section class="block" id="lesson">
  <h2><span class="h2-dot">📖</span> บทเรียน</h2>

  <h3>1) เวกเตอร์พิกัด (coordinate vector)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — เวกเตอร์พิกัด</div>
    <p>ให้ \(B = \{\vec{v}_1, \dots, \vec{v}_p\}\) เป็นฐานหลักสำหรับ \(H\) เพราะ \(B\) อิสระเชิงเส้นและแผ่ทั่ว \(H\) เวกเตอร์ใด \(\vec{x} \in H\) เขียนเป็นการรวมเชิงเส้นได้<em>แบบเดียว</em>:
    \(\vec{x} = c_1\vec{v}_1 + \cdots + c_p\vec{v}_p\) เราเรียก</p>
    \[ [\vec{x}]_B = \begin{bmatrix} c_1\\ c_2\\ \vdots\\ c_p \end{bmatrix} \]
    <p>ว่า <strong>เวกเตอร์พิกัดของ \(\vec{x}\) สัมพัทธ์กับฐานหลัก \(B\)</strong> — และมันเป็นเส้นตรง: \([\vec{x}+\vec{y}]_B = [\vec{x}]_B + [\vec{y}]_B\) และ \([c\vec{x}]_B = c[\vec{x}]_B\)</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 มองเป็น "การแปลภาษา"</div>
    <p>\([\vec{x}]_B\) คือตัวเลข<em>สูตร</em>ของ \(\vec{x}\) เมื่อวัดด้วยหน่วย \(\vec{v}_1, \dots, \vec{v}_p\) แทนหน่วยมาตรฐาน \(\vec{e}_1, \dots, \vec{e}_n\)
    เช่น \(\vec{x} = (5, 3)\) คือ \(\vec{x} = 5\vec{e}_1 + 3\vec{e}_2\) เมื่อวัดด้วยฐานมาตรฐาน แต่ถ้าฐานหลักเป็น \(B = \{(1,0), (1,1)\}\) จะได้ \(\vec{x} = 2(1,0) + 3(1,1)\) ดังนั้น \([\vec{x}]_B = (2,3)^T\) — เวกเตอร์<em>ตัวเดียวกัน</em> แค่คนละสูตร</p>
    <p><strong>ท่าหา \([\vec{x}]_B\):</strong> แก้สมการเวกเตอร์ \(c_1\vec{v}_1 + \cdots + c_n\vec{v}_n = \vec{x}\) — คือการลดรูปเมทริกซ์แต่งเติม \(\begin{bmatrix} \vec{v}_1 & \cdots & \vec{v}_n \mid \vec{x} \end{bmatrix}\) แบบเดียวกับบทที่ 1</p>
  </div>

  <h3>2) เมทริกซ์สำหรับ \(T\) สัมพัทธ์กับฐานหลัก</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — \([T]_{C \leftarrow B}\)</div>
    <p>ให้ \(B = \{\vec{v}_1, \dots, \vec{v}_n\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^n\), \(C = \{\vec{w}_1, \dots, \vec{w}_m\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^m\) และ \(T: \mathbb{R}^n \to \mathbb{R}^m\) เป็นการแปลงเชิงเส้น เมทริกซ์ที่หลักที่ \(j\) คือ \([T(\vec{v}_j)]_C\):</p>
    \[ [T]_{C \leftarrow B} = \begin{bmatrix} [T(\vec{v}_1)]_C & [T(\vec{v}_2)]_C & \cdots & [T(\vec{v}_n)]_C \end{bmatrix} \]
    <p>ทำให้ได้สมการสำคัญ: \([T(\vec{x})]_C = [T]_{C \leftarrow B}[\vec{x}]_B\) สำหรับทุก \(\vec{x}\) และเมื่อ \(T: \mathbb{R}^n \to \mathbb{R}^n\) และ \(B = C\) เขียนสั้น ๆ ว่า \([T]_B\)</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 เทียบกับเมทริกซ์มาตรฐานจาก 2.1</div>
    <p>เมทริกซ์มาตรฐานของ \(T\) ก็คือ \([T]_{\mathcal{E}}\) เมื่อ \(\mathcal{E}\) = ฐานหลักมาตรฐาน เพราะ \([T(\vec{e}_j)]_{\mathcal{E}} = T(\vec{e}_j)\) พอดี — ทุกอย่างใน 2.1 เป็นกรณีเฉพาะของนิยามนี้</p>
  </div>
  <div class="box box-thm">
    <div class="box-title">⭐ ทฤษฎีบท 3.1.1 และบทแทรก 3.1.2</div>
    <p>• การประกอบ \(T \circ S\) เป็นการแปลงเชิงเส้น และ \([T \circ S]_{D \leftarrow B} = [T]_{D \leftarrow C}[S]_{C \leftarrow B}\) (เมื่อฐานหลักจับคู่กันถูกต้อง)</p>
    <p>• \(T: \mathbb{R}^n \to \mathbb{R}^n\) หาตัวผกผันได้ ก็ต่อเมื่อ \([T]_B\) ไม่เอกฐาน โดย \([T^{-1}]_B = [T]_B^{-1}\)</p>
  </div>

  <h3>3) เมทริกซ์การเปลี่ยนพิกัด (change-of-coordinates matrix)</h3>
  <div class="box box-def">
    <div class="box-title">📐 นิยาม — \(P_{B \to B'}\)</div>
    <p>ให้ \(B, B'\) เป็นฐานหลักสำหรับ \(H\) เมทริกซ์ของการแปลงเอกลักษณ์ \(I\) เรียกว่า <strong>เมทริกซ์การเปลี่ยนพิกัดจาก \(B\) ไป \(B'\)</strong>:</p>
    \[ P_{B \to B'} = [I]_{B' \leftarrow B} = \begin{bmatrix} [\vec{v}_1]_{B'} & [\vec{v}_2]_{B'} & \cdots & [\vec{v}_p]_{B'} \end{bmatrix} \qquad \text{ซึ่ง} \qquad [\vec{x}]_{B'} = P_{B \to B'}[\vec{x}]_B \]
    <p>และมันสลับที่กันได้: \(P_{B' \to B} = (P_{B \to B'})^{-1}\)</p>
  </div>

  <div class="box box-idea">
    <div class="box-title">💡 กรณีพิเศษที่ใช้บ่อยที่สุด: ฐานหลักมาตรฐาน \(\mathcal{E}\)</div>
    <p>เมื่อ \(B' = \mathcal{E}\) (มาตรฐาน) การหา \([\vec{v}_j]_{\mathcal{E}}\) ไม่ต้องแก้สมการเลย — \([\vec{v}_j]_{\mathcal{E}} = \vec{v}_j\) เอง ดังนั้น</p>
    \[ P_{\mathcal{E} \to B'} = \begin{bmatrix} \vec{v}_1 & \vec{v}_2 & \cdots & \vec{v}_n \end{bmatrix} \quad \text{(เรียงเวกเตอร์ฐานหลักเป็นหลักเลย)} \]
    <p>และ \(P_{B' \to \mathcal{E}} = P_{\mathcal{E} \to B'}^{-1}\) — ท่า: เขียนเวกเตอร์ฐานหลักเรียงเป็นหลัก แล้วหา inverse ก็ได้ทิศตรงข้าม</p>
  </div>

  <div class="box box-thm">
    <div class="box-title">⭐ บทแทรก 3.1.4 — เปลี่ยนเมทริกซ์ของ \(T\) ระหว่างฐานหลัก</div>
    \[ [T]_{B'} = P_{B' \to B}\,[T]_B\,P_{B \to B'} = P^{-1}[T]_B P \quad \text{(เมื่อ } P = P_{B \to B'}\text{)} \]
    <p>เมทริกซ์ของการแปลงเดียวกันต่างฐานหลักจึง<em>คล้ายกัน</em> (similar) — และเราจะเลือกฐานหลักที่ทำให้ \([T]_{B'}\) เป็น<strong>เมทริกซ์ทแยงมุม</strong>ในหัวข้อ 3.2 นั่นเอง</p>
  </div>
</section>

<section class="block" id="examples">
  <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">หาเวกเตอร์พิกัด \([\vec{x}]_B\)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(B = \{(1, 1), (2, 3)\}\) และ \(\vec{x} = (0, -1)\) จงแสดงว่า \(B\) เป็นฐานหลักสำหรับ \(\mathbb{R}^2\) แล้วหา \([\vec{x}]_B\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ตรวจฐานหลักด้วย determinant (ไม่เอกฐาน = อิสระ + แผ่ทั่วใน \(\mathbb{R}^2\)) แล้วแก้สมการเวกเตอร์ \(c_1\vec{v}_1 + c_2\vec{v}_2 = \vec{x}\)</div>
      <ol class="steps">
        <li><span class="step-t">ตรวจฐานหลัก</span> \(\det\begin{bmatrix} 1 & 2\\ 1 & 3 \end{bmatrix} = 3 - 2 = 1 \neq 0\) → เวกเตอร์อิสระเชิงเส้น 2 ตัวใน \(\mathbb{R}^2\) → เป็นฐานหลักสำหรับ \(\mathbb{R}^2\) (โดย IMT และบทที่ 2)</li>
        <li><span class="step-t">ตั้งสมการเวกเตอร์แล้วลดรูป</span>
        \[ \begin{bmatrix} 1 & 2 & 0\\ 1 & 3 & -1 \end{bmatrix} \xrightarrow{\,R_2 - R_1\,} \begin{bmatrix} 1 & 2 & 0\\ 0 & 1 & -1 \end{bmatrix} \xrightarrow{\,R_1 - 2R_2\,} \begin{bmatrix} 1 & 0 & 2\\ 0 & 1 & -1 \end{bmatrix} \]</li>
        <li><span class="step-t">อ่านผลเฉลย</span> \(c_1 = 2,\; c_2 = -1\) ดังนั้น \(\vec{x} = 2\vec{v}_1 - \vec{v}_2\) และ
        \[ [\vec{x}]_B = \begin{bmatrix} 2\\ -1 \end{bmatrix} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(2(1,1) - (2,3) = (0, -1)\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">หา \([T]_{C \leftarrow B}\) จากค่าที่กำหนด (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(B = \{\vec{v}_1, \vec{v}_2\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^2\) และ \(C = \{\vec{w}_1, \vec{w}_2, \vec{w}_3\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) ถ้า
      \[ T(\vec{v}_1) = 3\vec{w}_1 - \vec{w}_2 + 5\vec{w}_3 \qquad \text{และ} \qquad T(\vec{v}_2) = \vec{w}_2 - 4\vec{w}_3 \]
      จงหาเมทริกซ์สำหรับ \(T\) สัมพัทธ์กับฐานหลัก \(B\) และ \(C\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — \([T]_{C \leftarrow B}\) มีหลักที่ \(j\) คือ \([T(\vec{v}_j)]_C\) — และโจทย์ให้ \(T(\vec{v}_j)\) มาในรูปการรวมเชิงเส้นของ \(\vec{w}_j\) อยู่แล้ว สัมประสิทธิ์ที่เห็นคือพิกัดเลย</div>
      <ol class="steps">
        <li><span class="step-t">อ่านพิกัดจากการรวมเชิงเส้น</span>
        \[ [T(\vec{v}_1)]_C = \begin{bmatrix} 3\\ -1\\ 5 \end{bmatrix} \qquad [T(\vec{v}_2)]_C = \begin{bmatrix} 0\\ 1\\ -4 \end{bmatrix} \]
        (ระวังพจน์ที่ขาด: \(T(\vec{v}_2)\) ไม่มี \(\vec{w}_1\) → พิกัดแรกคือ 0)</li>
        <li><span class="step-t">เรียงเป็นหลัก</span>
        \[ [T]_{C \leftarrow B} = \begin{bmatrix} 3 & 0\\ -1 & 1\\ 5 & -4 \end{bmatrix} \]</li>
        <li><span class="step-t">ใช้งาน</span> ต่อให้ \([\vec{x}]_B = (2, 1)^T\) จะได้ \([T(\vec{x})]_C = [T]_{C \leftarrow B}[\vec{x}]_B = (3\cdot2 + 0,\; -2 + 1,\; 10 - 4)^T = (6, -1, 6)^T\) นั่นคือ \(T(\vec{x}) = 6\vec{w}_1 - \vec{w}_2 + 6\vec{w}_3\)</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag easy">ง่าย</span><span class="ex-title">ใช้ \([T]_B\) หา \(T(\vec{x})\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(B = \{\vec{v}_1, \vec{v}_2, \vec{v}_3\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) และ \(T: \mathbb{R}^3 \to \mathbb{R}^3\) เป็นการแปลงเชิงเส้นซึ่ง
      \[ [T]_B = \begin{bmatrix} 1 & -1 & 3\\ -4 & 1 & 5\\ 0 & 0 & -2 \end{bmatrix} \]
      จงหา \(T(2\vec{v}_1 + \vec{v}_2 - \vec{v}_3)\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เวกเตอร์ที่โจทย์ให้เขียนอยู่ในรูปฐานหลัก \(B\) อยู่แล้ว → พิกัดคือ \((2, 1, -1)^T\) → คูณกับ \([T]_B\) → แปลกลับเป็นเวกเตอร์จริง</div>
      <ol class="steps">
        <li><span class="step-t">เขียนพิกัดแล้วคูณเมทริกซ์</span>
        \[ [T(2\vec{v}_1 + \vec{v}_2 - \vec{v}_3)]_B = [T]_B\begin{bmatrix} 2\\ 1\\ -1 \end{bmatrix} = \begin{bmatrix} 1 & -1 & 3\\ -4 & 1 & 5\\ 0 & 0 & -2 \end{bmatrix}\begin{bmatrix} 2\\ 1\\ -1 \end{bmatrix} = \begin{bmatrix} 2 - 1 - 3\\ -8 + 1 - 5\\ 0 + 0 + 2 \end{bmatrix} = \begin{bmatrix} -2\\ -12\\ 2 \end{bmatrix} \]</li>
        <li><span class="step-t">แปลกลับเป็นเวกเตอร์จริง</span> พิกัดเทียบ \(B\) คือสัมประสิทธิ์ของ \(\vec{v}_j\):
        \[ T(2\vec{v}_1 + \vec{v}_2 - \vec{v}_3) = -2\vec{v}_1 - 12\vec{v}_2 + 2\vec{v}_3 \]</li>
      </ol>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag hard">ยาก</span><span class="ex-title">เมทริกซ์เปลี่ยนพิกัดจากฐานมาตรฐานไป \(B'\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">จงแสดงว่า \(B' = \{(1,1,1), (1,1,0), (1,0,0)\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^3\) แล้วหาเมทริกซ์การเปลี่ยนพิกัด \(P_{\mathcal{E} \to B'}\) จากฐานหลักมาตรฐานไป \(B'\) พร้อมทั้งหา \([\vec{x}]_{B'}\) เมื่อ \(\vec{x} = (1, 2, -1)\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — เขียนเวกเตอร์มาตรฐาน \(\vec{e}_j\) เป็นการรวมเชิงเส้นของเวกเตอร์ฐานหลัก \(B'\) แล้วเรียงพิกัดเป็นหลักของ \(P\) — หรือใช้ทางลัด \(P_{\mathcal{E} \to B'} = (P_{B' \to \mathcal{E}})^{-1}\)</div>
      <ol class="steps">
        <li><span class="step-t">ตรวจฐานหลักด้วย det</span> \(\det\begin{bmatrix} 1 & 1 & 1\\ 1 & 1 & 0\\ 1 & 0 & 0 \end{bmatrix} = -1 \neq 0\) → \(B'\) ไม่เอกฐาน → เป็นฐานหลักสำหรับ \(\mathbb{R}^3\)</li>
        <li><span class="step-t">เขียน \(\vec{e}_j\) ในรูปของ \(\vec{v}_1, \vec{v}_2, \vec{v}_3\)</span> (แก้ระบบทีละตัว หรือใช้ inverse ของเมทริกซ์ฐานหลัก)
        \[ \vec{e}_1 = 0\vec{v}_1 + 0\vec{v}_2 + \vec{v}_3, \qquad \vec{e}_2 = 0\vec{v}_1 + \vec{v}_2 - \vec{v}_3, \qquad \vec{e}_3 = \vec{v}_1 - \vec{v}_2 + 0\vec{v}_3 \]
        (เช่น ตรวจ \(\vec{e}_2\): \((1,1,0) - (1,0,0) = (0,1,0)\) ✓)</li>
        <li><span class="step-t">เรียงพิกัดเป็นหลักของ \(P\)</span>
        \[ P_{\mathcal{E} \to B'} = \begin{bmatrix} [\vec{e}_1]_{B'} & [\vec{e}_2]_{B'} & [\vec{e}_3]_{B'} \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1\\ 0 & 1 & -1\\ 1 & -1 & 0 \end{bmatrix} \]</li>
        <li><span class="step-t">แปลง \(\vec{x}\)</span> เพราะ \(\vec{x} = \vec{e}_1 + 2\vec{e}_2 - \vec{e}_3\) ได้ \([\vec{x}]_{\mathcal{E}} = (1, 2, -1)^T\) แล้ว
        \[ [\vec{x}]_{B'} = P_{\mathcal{E} \to B'}[\vec{x}]_{\mathcal{E}} = \begin{bmatrix} 0 & 0 & 1\\ 0 & 1 & -1\\ 1 & -1 & 0 \end{bmatrix}\begin{bmatrix} 1\\ 2\\ -1 \end{bmatrix} = \begin{bmatrix} -1\\ 3\\ -1 \end{bmatrix} \]</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(-\vec{v}_1 + 3\vec{v}_2 - \vec{v}_3 = -(1,1,1) + 3(1,1,0) - (1,0,0) = (1, 2, -1)\) ✓</div>
    </div>
  </article>

  <article class="ex-card">
    <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">หา \([T]_{B'} = P^{-1}[T]_B P\) (ตัวอย่างคลาสสิกของตำรา)</span></div>
    <div class="ex-body">
      <div class="ex-q">ให้ \(T: \mathbb{R}^3 \to \mathbb{R}^3\) เป็นการแปลงเชิงเส้นที่มีเมทริกซ์มาตรฐาน
      \[ A = \begin{bmatrix} 1 & 3 & 3\\ -3 & -5 & -3\\ 3 & 3 & 1 \end{bmatrix} \]
      จงหา \([T]_{B'}\) เมื่อ \(B' = \{(1,-1,1), (-1,1,0), (-1,0,1)\}\)</div>
      <div class="approach"><span class="lbl">แนวคิด</span> — ฐานหลักเดิมคือมาตรฐาน \(\mathcal{E}\) → \(P_{B' \to \mathcal{E}}\) = เรียงเวกเตอร์ \(B'\) เป็นหลัก → \(P_{\mathcal{E} \to B'} = P^{-1}\) → คำนวณ \(P^{-1}AP\) ด้วยบทแทรก 3.1.4</div>
      <ol class="steps">
        <li><span class="step-t">เขียน \(P_{B' \to \mathcal{E}}\) และหา inverse</span>
        \[ P_{B' \to \mathcal{E}} = \begin{bmatrix} 1 & -1 & -1\\ -1 & 1 & 0\\ 1 & 0 & 1 \end{bmatrix}, \qquad P_{\mathcal{E} \to B'} = (P_{B' \to \mathcal{E}})^{-1} = \begin{bmatrix} 1 & 1 & 1\\ 1 & 2 & 1\\ -1 & -1 & 0 \end{bmatrix} \]
        (ตรวจ inverse: คูณกันได้ \(I_3\) ✓)</li>
        <li><span class="step-t">ใช้สูตร \([T]_{B'} = P^{-1}AP\)</span>
        \[ [T]_{B'} = \begin{bmatrix} 1 & 1 & 1\\ 1 & 2 & 1\\ -1 & -1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 3 & 3\\ -3 & -5 & -3\\ 3 & 3 & 1 \end{bmatrix}\begin{bmatrix} 1 & -1 & -1\\ -1 & 1 & 0\\ 1 & 0 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">คูณทีละสองตัว (จากขวาไปซ้าย)</span>
        \[ A\,P = \begin{bmatrix} 1 & 3 & 3\\ -3 & -5 & -3\\ 3 & 3 & 1 \end{bmatrix}\begin{bmatrix} 1 & -1 & -1\\ -1 & 1 & 0\\ 1 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 2\\ -1 & -2 & 0\\ 1 & 0 & -2 \end{bmatrix} \]
        \[ [T]_{B'} = P^{-1}(AP) = \begin{bmatrix} 1 & 1 & 1\\ 1 & 2 & 1\\ -1 & -1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 2 & 2\\ -1 & -2 & 0\\ 1 & 0 & -2 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0\\ 0 & -2 & 0\\ 0 & 0 & -2 \end{bmatrix} \]</li>
        <li><span class="step-t">ตีความ</span> ในฐานหลัก \(B'\) การแปลง \(T\) ดูง่ายขึ้นมาก — เป็น<strong>เมทริกซ์ทแยงมุม</strong>! (และค่าทแยง \(1, -2, -2\) ก็คือค่าลักษณะเฉพาะของ \(A\) ซึ่งจะเป็นหัวข้อหลักของ 3.2)</li>
      </ol>
      <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> \(A\vec{v}_1 = A(1,-1,1)^T = (1-3+3,\; -3+5-3,\; 3-3+1)^T = (1, -1, 1)^T = 1\cdot\vec{v}_1\) ✓ และ \(A\vec{v}_2 = A(-1,1,0)^T = (-1+3,\; 3-5,\; -3+3)^T = (2, -2, 0)^T = -2\vec{v}_2\) ✓ ตรงกับทแยงของ \([T]_{B'}\)</div>
    </div>
  </article>
</section>

<section class="block" id="recipe">
  <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
  <div class="recipe">
    <div class="recipe-head">🪜 ท่าหลัก: หา \([\vec{x}]_B\) และเปลี่ยนฐานหลัก</div>
    <div class="recipe-body">
      <ol>
        <li><strong>หา \([\vec{x}]_B\):</strong> ลดรูป \(\begin{bmatrix} \vec{v}_1 & \cdots & \vec{v}_n \mid \vec{x} \end{bmatrix}\) จน RREF → หลักขวาสุดคือพิกัด</li>
        <li><strong>\(P_{\mathcal{E} \to B'}\) (มาตรฐาน → \(B'\)):</strong> = \((\begin{bmatrix} \vec{v}_1 & \cdots & \vec{v}_n \end{bmatrix})^{-1}\) — เรียงเวกเตอร์ฐานหลักเป็นหลักแล้ว invert</li>
        <li><strong>\(P_{B \to B'}\) ทั่วไป:</strong> หลักที่ \(j\) คือ \([\vec{v}_j]_{B'}\) (ต้องแก้สมการเวกเตอร์ทีละตัว)</li>
        <li><strong>เมทริกซ์ของ \(T\):</strong> \([T]_{B'} = P^{-1}[T]_B P\) โดย \(P = P_{B \to B'}\) (บทแทรก 3.1.4)</li>
        <li>ตรวจเสมอ: \(\vec{x} = c_1\vec{v}_1 + \cdots + c_n\vec{v}_n\) ต้องได้ \(\vec{x}\) ตัวเดิมเมื่อแทนกลับ</li>
      </ol>
    </div>
  </div>
  <div class="key-grid">
    <div class="key-card"><div class="k-title">ท่า: \([T]_{C \leftarrow B}\) จากข้อมูล</div>หลักที่ \(j\) = พิกัดของ \(T(\vec{v}_j)\) เทียบ \(C\) — ถ้าโจทย์ให้ \(T(\vec{v}_j)\) ในรูปรวมเชิงเส้นของ \(\vec{w}_j\) อ่านสัมประสิทธิ์ได้เลย (พจน์ที่ขาด = 0)</div>
    <div class="key-card"><div class="k-title">ท่า: จำทิศของ \(P\)</div>\([\vec{x}]_{B'} = P_{B \to B'}[\vec{x}]_B\) — ตัวหนังสือใต้ลูกศรบอก "จาก → ไป" และ \(P\) ทั้งสองทิศเป็น inverse กัน</div>
    <div class="key-card"><div class="k-title">ท่า: ตรวจ \([T]_{B'}\)</div>\(A\vec{v}_j = \lambda_j\vec{v}_j\) เมื่อ \([T]_{B'}\) ทแยงมุม — เทียบหลักที่ \(j\) กับค่าทแยงที่ \(j\)</div>
    <div class="key-card"><div class="k-title">ท่า: \([T^{-1}]_B\)</div>= \([T]_B^{-1}\) — การหา inverse ของการแปลง = การหา inverse ของเมทริกซ์ในฐานหลักนั้น (บทแทรก 3.1.2)</div>
  </div>
</section>

<section class="block" id="practice">
  <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
  <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

  <article class="pr-card" data-pkey="p3-1-1">
    <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{\vec{b}_1, \vec{b}_2\} = \left\{ \begin{bmatrix} 1\\ 1 \end{bmatrix}, \begin{bmatrix} 2\\ 3 \end{bmatrix} \right\}\) และ \(\vec{x} = \begin{bmatrix} 0\\ -1 \end{bmatrix}\) จงหาเวกเตอร์พิกัด \([\vec{x}]_B\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แก้ \(c_1\vec{b}_1 + c_2\vec{b}_2 = \vec{x}\) โดยลดรูป \(\begin{bmatrix} 1 & 2 & 0\\ 1 & 3 & -1 \end{bmatrix}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> พิกัด = ผลเฉลยของสมการเวกเตอร์</p>
      <ol class="steps">
        <li><span class="step-t">ลดรูปเมทริกซ์แต่งเติม</span>
        \[ \begin{bmatrix} 1 & 2 & 0\\ 1 & 3 & -1 \end{bmatrix} \xrightarrow{\,R_2 - R_1\,} \begin{bmatrix} 1 & 2 & 0\\ 0 & 1 & -1 \end{bmatrix} \xrightarrow{\,R_1 - 2R_2\,} \begin{bmatrix} 1 & 0 & 2\\ 0 & 1 & -1 \end{bmatrix} \]</li>
        <li><span class="step-t">อ่านคำตอบ</span> \(c_1 = 2,\; c_2 = -1\) → \([\vec{x}]_B = \begin{bmatrix} 2\\ -1 \end{bmatrix}\)</li>
        <li><span class="step-t">ตรวจคำตอบ</span> \(2(1,1) - (2,3) = (0,-1)\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-1-2">
    <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(H = \operatorname{Span}\{\vec{b}_1, \vec{b}_2\}\) เมื่อ \(\vec{b}_1 = \begin{bmatrix} 3\\ 6\\ 2 \end{bmatrix}\), \(\vec{b}_2 = \begin{bmatrix} -1\\ 0\\ 1 \end{bmatrix}\) และ \(\vec{x} = \begin{bmatrix} 3\\ 12\\ 7 \end{bmatrix}\) จงตรวจว่า \(\vec{x} \in H\) หรือไม่ ถ้าอยู่จงหา \([\vec{x}]_B\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หลักที่ 2 ของระบบให้ \(6c_1 = 12\) ทันที — เริ่มจากหลักนี้เลย</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(\vec{x} \in H\) ก็ต่อเมื่อ \(c_1\vec{b}_1 + c_2\vec{b}_2 = \vec{x}\) ต้องกัน (บทแทรก 1.3.2)</p>
      <ol class="steps">
        <li><span class="step-t">เขียนระบบจากแต่ละสมาชิก</span>
        \[ \begin{aligned} 3c_1 - c_2 &= 3\\ 6c_1 \phantom{- c_2} &= 12\\ 2c_1 + c_2 &= 7 \end{aligned} \]</li>
        <li><span class="step-t">แก้จากง่ายไปยาก</span> สมการที่ 2: \(c_1 = 2\) → สมการที่ 1: \(c_2 = 3c_1 - 3 = 3\) → สมการที่ 3: \(2(2) + 3 = 7\) ✓ สอดคล้อง → \(\vec{x} \in H\)</li>
        <li><span class="step-t">สรุป</span> \([\vec{x}]_B = \begin{bmatrix} 2\\ 3 \end{bmatrix}\) ตรวจ: \(2(3,6,2) + 3(-1,0,1) = (3, 12, 7)\) ✓</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-1-3">
    <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>กำหนด \(T: \mathbb{R}^2 \to \mathbb{R}^3\) โดย \(T(x_1, x_2) = (x_1 + x_2, \; x_1, \; 2x_2)\) และให้ \(B = \{\vec{e}_1, \vec{e}_2\}\) (ฐานมาตรฐานของ \(\mathbb{R}^2\)) และ \(C = \{\vec{w}_1, \vec{w}_2, \vec{w}_3\} = \{(1,0,0), (1,1,0), (1,1,1)\}\) จงหา \([T]_{C \leftarrow B}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">หา \(T(\vec{e}_1)\) กับ \(T(\vec{e}_2)\) ก่อน แล้วแก้หาพิกัดของแต่ละตัวเทียบ \(C\) (เขียนเวกเตอร์ใด ๆ เป็น \((a+b+c,\, b+c,\, c)\))</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \([T]_{C \leftarrow B} = \begin{bmatrix} [T(\vec{e}_1)]_C & [T(\vec{e}_2)]_C \end{bmatrix}\)</p>
      <ol class="steps">
        <li><span class="step-t">หาภาพจากสูตร</span>
        \[ T(\vec{e}_1) = (1, 1, 0) \qquad T(\vec{e}_2) = (1, 0, 2) \]</li>
        <li><span class="step-t">พิกัดของ \(T(\vec{e}_1)\) เทียบ \(C\)</span> สังเกตว่า \((a, b, c) = a\vec{w}_1 + b\vec{w}_2 + c\vec{w}_3\) เมื่อเขียนในรูป \((a+b+c,\; b+c,\; c)\):<br>
        \((1,1,0)\): \(c = 0\), \(b + c = 1 \Rightarrow b = 1\), \(a + 1 = 1 \Rightarrow a = 0\) → \([T(\vec{e}_1)]_C = (0, 1, 0)^T\)</li>
        <li><span class="step-t">พิกัดของ \(T(\vec{e}_2)\) เทียบ \(C\)</span> \((1,0,2)\): \(c = 2\), \(b + 2 = 0 \Rightarrow b = -2\), \(a - 2 + 2 = 1 \Rightarrow a = 1\) → \([T(\vec{e}_2)]_C = (1, -2, 2)^T\)</li>
        <li><span class="step-t">สรุป</span>
        \[ [T]_{C \leftarrow B} = \begin{bmatrix} 0 & 1\\ 1 & -2\\ 0 & 2 \end{bmatrix} \]</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-1-4">
    <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●○</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(B = \{(1,0), (1,1)\}\) เป็นฐานหลักสำหรับ \(\mathbb{R}^2\) จงหา<br>
      (ก) เมทริกซ์การเปลี่ยนพิกัด \(P_{\mathcal{E} \to B}\) จากฐานมาตรฐานไป \(B\) และ \(P_{B \to \mathcal{E}}\)<br>
      (ข) \([\vec{x}]_B\) เมื่อ \(\vec{x} = (5, 3)\) &nbsp;
      (ค) เวกเตอร์ \(\vec{y}\) ที่มี \([\vec{y}]_B = \begin{bmatrix} 4\\ 1 \end{bmatrix}\)</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(P_{B \to \mathcal{E}}\) = เรียง \(\vec{b}_1, \vec{b}_2\) เป็นหลัก / \(P_{\mathcal{E} \to B}\) = inverse ของมัน / (ค) ใช้ \(\vec{y} = P_{B \to \mathcal{E}}[\vec{y}]_B\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> ทิศ "จากมาตรฐานไป B" ต้อง invert เพราะการเรียงเวกเตอร์ฐานหลักเป็นหลักให้ทิศ "จาก B มาตรฐาน"</p>
      <ol class="steps">
        <li><span class="step-t">(ก) เขียนเวกเตอร์ฐานหลักเป็นหลัก</span>
        \[ P_{B \to \mathcal{E}} = \begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix} \;\Longrightarrow\; P_{\mathcal{E} \to B} = \begin{bmatrix} 1 & -1\\ 0 & 1 \end{bmatrix} \]
        (inverse ของสามเหลี่ยมบนทแยง 1 — ตรวจ: คูณกันได้ \(I_2\) ✓)</li>
        <li><span class="step-t">(ข) แปลงพิกัด</span>
        \[ [\vec{x}]_B = P_{\mathcal{E} \to B}\vec{x} = \begin{bmatrix} 1 & -1\\ 0 & 1 \end{bmatrix}\begin{bmatrix} 5\\ 3 \end{bmatrix} = \begin{bmatrix} 2\\ 3 \end{bmatrix} \]
        ตรวจ: \(2(1,0) + 3(1,1) = (5, 3)\) ✓</li>
        <li><span class="step-t">(ค) แปลงย้อน</span>
        \[ \vec{y} = P_{B \to \mathcal{E}}[\vec{y}]_B = \begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix}\begin{bmatrix} 4\\ 1 \end{bmatrix} = \begin{bmatrix} 5\\ 1 \end{bmatrix} \]</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-1-5">
    <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T: \mathbb{R}^2 \to \mathbb{R}^2\) มีเมทริกซ์มาตรฐาน \(A = \begin{bmatrix} 4 & -2\\ 1 & 1 \end{bmatrix}\) และ \(B' = \{(1,1), (2,1)\}\) จงหา \([T]_{B'}\) โดยใช้บทแทรก 3.1.4 แล้วบอกว่าสังเกตอะไรได้</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">\(P = \begin{bmatrix} 1 & 2\\ 1 & 1 \end{bmatrix}\), \(P^{-1} = \begin{bmatrix} -1 & 2\\ 1 & -1 \end{bmatrix}\) — คำนวณ \(P^{-1}AP\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> \(P_{B' \to \mathcal{E}} = P\) (เรียงเวกเตอร์ \(B'\) เป็นหลัก) → \([T]_{B'} = P^{-1}AP\)</p>
      <ol class="steps">
        <li><span class="step-t">คูณ \(AP\) ก่อน</span>
        \[ AP = \begin{bmatrix} 4 & -2\\ 1 & 1 \end{bmatrix}\begin{bmatrix} 1 & 2\\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 6\\ 2 & 3 \end{bmatrix} \]</li>
        <li><span class="step-t">แล้วคูณ \(P^{-1}(AP)\)</span>
        \[ [T]_{B'} = \begin{bmatrix} -1 & 2\\ 1 & -1 \end{bmatrix}\begin{bmatrix} 2 & 6\\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 2 & 0\\ 0 & 3 \end{bmatrix} \]</li>
        <li><span class="step-t">สิ่งที่สังเกตได้</span> \([T]_{B'}\) เป็น<strong>เมทริกซ์ทแยงมุม</strong> — ฐานหลัก \(B'\) พิเศษมาก: เวกเตอร์แต่ละตัวถูก \(T\) ส่งไปยืดสเกลตัวเอง (\(T(1,1) = (2,2) = 2(1,1)\) ✓ และ \(T(2,1) = (6,3) = 3(2,1)\) ✓) — นี่คือแนวคิด <strong>เวกเตอร์ลักษณะเฉพาะ</strong> ของหัวข้อถัดไป และ \(2, 3\) คือ<strong>ค่าลักษณะเฉพาะ</strong>ของ \(A\)</li>
      </ol>
    </div></details>
  </article>

  <article class="pr-card" data-pkey="p3-1-6">
    <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
      <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
    <div class="pr-body">
      <p>ให้ \(T: \mathbb{R}^2 \to \mathbb{R}^2\) กำหนดโดย \(T(x_1, x_2) = (x_2, x_1)\) (การสลับตำแหน่ง) และ \(B = \{(1,0), (1,1)\}\) จงหา \([T]_B\) สองวิธี — (ก) โดยตรงจากนิยาม (หา \([T(\vec{b}_j)]_B\)) และ (ข) โดยสูตร \(P^{-1}[T]_{\mathcal{E}}P\) — แล้วเทียบคำตอบ</p>
    </div>
    <details class="hint"><summary>คำใบ้</summary><div class="hint-body">(ก) \(T(\vec{b}_1) = (0,1)\) — จงเขียนเป็นการรวมเชิงเส้นของ \(\vec{b}_1, \vec{b}_2\) (ข) \(P = \begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix}\), \([T]_{\mathcal{E}} = \begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix}\)</div></details>
    <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
      <p><strong>แนวคิด:</strong> สองวิธีต้องให้คำตอบเดียวกัน — ใช้เป็นการตรวจกันและกัน</p>
      <ol class="steps">
        <li><span class="step-t">(ก) วิธีตรง</span> \(T(\vec{b}_1) = T(1,0) = (0,1)\): แก้ \(c_1(1,0) + c_2(1,1) = (0,1)\) → \(c_2 = 1,\; c_1 = -1\) → หลักแรก \((-1, 1)^T\)<br>
        \(T(\vec{b}_2) = T(1,1) = (1,1) = \vec{b}_2\) → หลักที่สอง \((0, 1)^T\)
        \[ [T]_B = \begin{bmatrix} -1 & 0\\ 1 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">(ข) วิธีสูตร</span>
        \[ P^{-1}[T]_{\mathcal{E}}P = \begin{bmatrix} 1 & -1\\ 0 & 1 \end{bmatrix}\begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix} = \begin{bmatrix} -1 & 1\\ 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 1\\ 0 & 1 \end{bmatrix} = \begin{bmatrix} -1 & 0\\ 1 & 1 \end{bmatrix} \]</li>
        <li><span class="step-t">สรุป</span> ทั้งสองวิธีได้ \([T]_B = \begin{bmatrix} -1 & 0\\ 1 & 1 \end{bmatrix}\) ตรงกัน ✓ (และเป็นการยืนยันบทแทรก 3.1.4 อีกทาง)</li>
      </ol>
    </div></details>
  </article>
</section>
