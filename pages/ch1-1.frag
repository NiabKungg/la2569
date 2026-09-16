<!-- meta
title: 1.1 เมทริกซ์และระบบเชิงเส้น
ch: 1
section: 1.1
page: ch1-1.html
-->

    <div class="crumb">บทที่ 1 · ระบบเชิงเส้น</div>
    <h1 class="page-title">1.1 เมทริกซ์และระบบเชิงเส้น</h1>
    <p class="page-sub">จุดเริ่มต้นของพีชคณิตเชิงเส้นทั้งวิชา — เราจะเรียนรู้ว่าเมทริกซ์คืออะไร ระบบสมการเชิงเส้นหน้าตาเป็นอย่างไร
    ผลเฉลยมีได้กี่แบบ และวิธีจัดการระบบด้วย "การดำเนินการแถว" ซึ่งเป็นเครื่องมือหลักที่ใช้ตลอดทั้งเทอม</p>

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
          <li>บอกมิติ สมาชิกนำ และชนิดของเมทริกซ์ (จัตุรัส ทแยงมุม ศูนย์ เวกเตอร์แถว/หลัก) ได้</li>
          <li>บวก ลบ และคูณเมทริกซ์ด้วยสเกลาร์ได้อย่างถูกต้อง</li>
          <li>แยกแยะว่าสมการใดเป็น "สมการเชิงเส้น" และตรวจสอบว่าชุดจำนวนหนึ่งเป็นผลเฉลยของระบบหรือไม่</li>
          <li>เขียนเมทริกซ์สัมประสิทธิ์และเมทริกซ์แต่งเติมจากระบบเชิงเส้น (และย้อนกลับ)</li>
          <li>ใช้การดำเนินการแถวขั้นมูลฐาน 3 แบบ ลดรูปเมทริกซ์แต่งเติมเพื่อหาเซตผลเฉลยของระบบเชิงเส้น</li>
        </ul>
      </div>
    </section>

    <section class="block" id="lesson">
      <h2><span class="h2-dot">📖</span> บทเรียน</h2>

      <h3>1) เมทริกซ์คืออะไร</h3>
      <div class="box box-def">
        <div class="box-title">📐 นิยาม — เมทริกซ์ (matrix)</div>
        <p>\(m \times n\) <strong>เมทริกซ์</strong> (อ่านว่า "เอ็ม คูณ เอ็น เมทริกซ์") คือตารางตัวเลขที่มี \(m\) แถว และ \(n\) หลัก</p>
        \[ A = [a_{ij}]_{m\times n} =
        \begin{bmatrix}
        a_{11} & a_{12} & \dots & a_{1n}\\
        a_{21} & a_{22} & \dots & a_{2n}\\
        \vdots & \vdots & & \vdots\\
        a_{m1} & a_{m2} & \dots & a_{mn}
        \end{bmatrix} \]
        <p>โดยสมาชิก \(a_{ij}\) อยู่ <strong>แถวที่ \(i\)</strong> และ <strong>หลักที่ \(j\)</strong> และเรียก \(m \times n\) ว่า <strong>มิติ</strong> (dimension) ของเมทริกซ์</p>
      </div>

      <div class="box box-idea">
        <div class="box-title">💡 เข้าใจง่าย ๆ</div>
        <p>จำไว้ว่า <strong>"แถวก่อน หลักหลัง"</strong> — สมาชิก \(a_{23}\) คือตัวที่อยู่แถวที่ 2 หลักที่ 3 เหมือนการบอกพิกัดตึก: ชั้นที่เท่าไร (แถว) ห้องที่เท่าไร (หลัก)</p>
      </div>

      <p>ศัพท์สำคัญเกี่ยวกับเมทริกซ์ที่ต้องรู้จัก:</p>
      <div class="tbl-wrap"><table class="tbl">
        <tr><th>ศัพท์</th><th>ความหมาย</th><th>ตัวอย่าง</th></tr>
        <tr><td><strong>เมทริกซ์จัตุรัส</strong> (square matrix)</td><td>เมทริกซ์ที่ \(m = n\) (แถวเท่ากับหลัก)</td><td>\(\begin{bmatrix} 1 & 2\\ 3 & 4 \end{bmatrix}\) เป็นเมทริกซ์จัตุรัสขนาด 2</td></tr>
        <tr><td><strong>เวกเตอร์แถว</strong> (row vector)</td><td>เมทริกซ์ขนาด \(1 \times n\) (มีแถวเดียว)</td><td>\(\begin{bmatrix} 1 & -2 & 5 \end{bmatrix}\)</td></tr>
        <tr><td><strong>เวกเตอร์หลัก</strong> (column vector)</td><td>เมทริกซ์ขนาด \(m \times 1\) (มีหลักเดียว)</td><td>\(\begin{bmatrix} 1\\ -2\\ 5 \end{bmatrix}\)</td></tr>
        <tr><td><strong>เมทริกซ์ศูนย์</strong> (zero matrix)</td><td>เมทริกซ์ที่สมาชิกทุกตำแหน่งเป็น \(0\) เขียนแทนด้วย \(0\)</td><td>\(\begin{bmatrix} 0 & 0\\ 0 & 0 \end{bmatrix}\)</td></tr>
        <tr><td><strong>สมาชิกทแยงมุม</strong> (diagonal entry)</td><td>บรรดา \(a_{11}, a_{22}, a_{33}, \dots\) ซึ่งเรียงกันเป็นเส้นทแยงมุมหลัก</td><td>ใน \(\begin{bmatrix} 2 & 1\\ 5 & 7 \end{bmatrix}\) คือ \(2\) กับ \(7\)</td></tr>
        <tr><td><strong>เมทริกซ์ทแยงมุม</strong> (diagonal matrix)</td><td>เมทริกซ์จัตุรัสที่สมาชิกนอกเส้นทแยงมุมหลักเป็นศูนย์</td><td>\(\begin{bmatrix} 2 & 0\\ 0 & 7 \end{bmatrix}\)</td></tr>
      </table></div>

      <h3>2) การบวกเมทริกซ์และการคูณด้วยสเกลาร์</h3>
      <div class="box box-def">
        <div class="box-title">📐 นิยาม — บวกและคูณสเกลาร์</div>
        <p>ให้ \(A = [a_{ij}]_{m\times n}\) และ \(B = [b_{ij}]_{m\times n}\) เป็นเมทริกซ์มีมิติเท่ากัน และ \(c\) เป็นจำนวนจริง</p>
        <p>• \(A = B\) ก็ต่อเมื่อ \(a_{ij} = b_{ij}\) <em>ทุกตำแหน่ง</em></p>
        <p>• <strong>ผลบวก:</strong> \(A + B = [a_{ij} + b_{ij}]_{m\times n}\) — บวกกันแบบ "ตำแหน่งต่อตำแหน่ง"</p>
        <p>• <strong>การคูณสเกลาร์:</strong> \(cA = [c\,a_{ij}]_{m\times n}\) — คูณทุกสมาชิกด้วย \(c\)</p>
        <p>• เขียน \(-B\) แทน \((-1)B\) และ \(A - B\) แทน \(A + (-B)\)</p>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ ข้อควรระวัง</div>
        <p><strong>บวกเมทริกซ์ได้ ต่อเมื่อมิติเท่ากันเท่านั้น!</strong> \(\begin{bmatrix} 1 & 2 \end{bmatrix} + \begin{bmatrix} 1\\ 2 \end{bmatrix}\) ทำไม่ได้ เพราะขนาด \(1\times 2\) กับ \(2\times 1\) ต่างกัน แม้ตัวเลขจะเหมือนกันก็ตาม</p>
      </div>

      <h3>3) สมการเชิงเส้น</h3>
      <div class="box box-def">
        <div class="box-title">📐 นิยาม — สมการเชิงเส้น (linear equation)</div>
        <p><strong>สมการเชิงเส้น</strong>ในตัวแปร \(x_1, x_2, \dots, x_n\) คือสมการที่เขียนได้ในรูป</p>
        \[ a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b \]
        <p>โดยที่ค่าคงตัว \(b\) และสัมประสิทธิ์ \(a_1, \dots, a_n\) เป็นจำนวนจริง</p>
      </div>

      <p>สังเกตว่าสมการเชิงเส้น <strong>อนุญาต</strong>: ตัวแปรยกกำลัง 1 เท่านั้น คูณด้วยค่าคงตัวใดก็ได้ (แม้จะเป็น \(\pi\), \(\sqrt{2}\) หรือเศษส่วน) ตัวแปรหายไปบางตัวได้ (เท่ากับสัมประสิทธิ์เป็น 0)</p>
      <p>สมการเชิงเส้น <strong>ห้าม</strong>: ตัวแปรคูณกัน (\(x_1x_2\)) ยกกำลังมากกว่า 1 (\(x_2^2\)) รากของตัวแปร (\(\sqrt{x_1}\)) หรือฟังก์ชันอื่น ๆ เช่น \(\sin x_1\)</p>

      <h3>4) ระบบเชิงเส้นและผลเฉลย</h3>
      <div class="box box-def">
        <div class="box-title">📐 นิยาม — ระบบเชิงเส้น (linear system)</div>
        <p><strong>ระบบสมการเชิงเส้น</strong> คือชุดจำกัดของสมการเชิงเส้นในตัวแปรเดียวกัน ซึ่งเขียนทั่วไปได้เป็น</p>
        \[ \begin{aligned}
        a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1\\
        a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2\\
        &\;\;\vdots\\
        a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n &= b_m
        \end{aligned} \]
        <p><strong>ผลเฉลย</strong> คือชุดจำนวนจริง \((c_1, c_2, \dots, c_n)\) ที่แทนแล้วทำให้<em>ทุกสมการ</em>ในระบบเป็นจริงพร้อมกัน และเรียกเซตของผลเฉลยทั้งหมดว่า <strong>เซตผลเฉลย</strong> (solution set) นอกจากนี้ ระบบสองระบบที่มีเซตผลเฉลยเดียวกันเรียกว่า <strong>สมมูลกัน</strong> (equivalent)</p>
      </div>

      <div class="box box-thm">
        <div class="box-title">🔑 ข้อเท็จจริงสำคัญ — ผลเฉลยของระบบเชิงเส้นมีได้แค่ 3 แบบ</div>
        <p>1. <strong>ไม่มีผลเฉลย</strong> &nbsp; 2. <strong>มีผลเฉลยเพียงชุดเดียว</strong> &nbsp; 3. <strong>มีผลเฉลยอนันต์ชุด</strong></p>
        <p>ระบบที่มีผลเฉลย (ชุดเดียวหรืออนันต์ชุด) เรียกว่า <strong>ต้องกัน</strong> (consistent) ส่วนระบบที่ไม่มีผลเฉลยเรียกว่า <strong>ไม่ต้องกัน</strong> (inconsistent)</p>
      </div>

      <h3>5) เมทริกซ์สัมประสิทธิ์และเมทริกซ์แต่งเติม</h3>
      <p>แทนที่จะเขียนระบบเชิงเส้นยาว ๆ เราเก็บ "ข้อมูลที่จำเป็น" ลงในเมทริกซ์:</p>
      <div class="box box-def">
        <div class="box-title">📐 นิยาม — เมทริกซ์สัมประสิทธิ์ และเมทริกซ์แต่งเติม</div>
        <p>จากระบบเชิงเส้นทั่วไปด้านบน</p>
        <p>• <strong>เมทริกซ์สัมประสิทธิ์</strong> (coefficient matrix):</p>
        \[ A = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n}\\ a_{21} & a_{22} & \dots & a_{2n}\\ \vdots & \vdots & & \vdots\\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix} \]
        <p>• <strong>เมทริกซ์แต่งเติม</strong> (augmented matrix) คือเมทริกซ์สัมประสิทธิ์ที่ต่อท้ายด้วยหลักค่าคงตัว:</p>
        \[ [A \mid \vec{b}] = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} & b_1\\ a_{21} & a_{22} & \dots & a_{2n} & b_2\\ \vdots & \vdots & & \vdots & \vdots\\ a_{m1} & a_{m2} & \dots & a_{mn} & b_m \end{bmatrix} \]
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ ข้อควรระวัง</div>
        <p>เขียนเมทริกซ์แต่งเติมแล้ว <strong>ตัวแปรต้องเรียงลำดับเดิมทุกสมการ</strong> — สมการที่ขาดตัวแปรต้องใส่สัมประสิทธิ์ \(0\) ให้ครบ เช่น \(x_2 - 5x_3 = 6\) ต้องเขียนแถวเป็น \(\begin{bmatrix} 0 & 1 & -5 & 6 \end{bmatrix}\) เพราะไม่มี \(x_1\)</p>
      </div>

      <h3>6) การดำเนินการแถวขั้นมูลฐาน — เครื่องมือหลักของทั้งวิชา</h3>
      <div class="box box-def">
        <div class="box-title">📐 นิยาม — การดำเนินการแถวขั้นมูลฐาน (elementary row operations)</div>
        <p>มี 3 แบบ (ใช้กับเมทริกซ์แต่งเติมเพื่อลดรูปโดยความหมายของระบบไม่เปลี่ยน):</p>
        <p>1. <strong>การสับเปลี่ยน</strong> (interchange) — สลับแถวที่ \(p\) กับแถวที่ \(q\) &nbsp; เขียนแทน \(R_{pq}\)</p>
        <p>2. <strong>การแทนที่</strong> (replacement) — เปลี่ยนแถวที่ \(p\) ด้วย "(ค่าคงตัว \(c\)) คูณแถวที่ \(q\) แล้วบวกกับแถวที่ \(p\)" &nbsp; เขียนแทน \(R_p + cR_q\)</p>
        <p>3. <strong>การปรับมาตรา</strong> (scaling) — คูณแถวที่ \(p\) ด้วยค่าคงตัว \(c \neq 0\) &nbsp; เขียนแทน \(cR_p\)</p>
      </div>

      <div class="box box-def">
        <div class="box-title">📐 นิยาม — สมมูลแถว (row equivalent)</div>
        <p>เมทริกซ์ \(B\) <strong>สมมูลแถว</strong>กับเมทริกซ์ \(A\) ถ้า \(B\) ได้มาจาก \(A\) โดยการดำเนินการแถว (เขียนแทน \(A \sim B\))</p>
      </div>

      <div class="box box-thm">
        <div class="box-title">⭐ ทฤษฎีบท 1.1.1</div>
        <p>ถ้าระบบเชิงเส้น 2 ระบบมีเมทริกซ์แต่งเติมซึ่ง<em>สมมูลแถว</em>กัน แล้วระบบเชิงเส้นทั้งสองมี<strong>เซตผลเฉลยเดียวกัน</strong></p>
      </div>

      <div class="box box-idea">
        <div class="box-title">💡 เข้าใจง่าย ๆ</div>
        <p>ทฤษฎีบทนี้คือ "ใบอนุญาต" ให้เราจัดระเบียบแถวได้อย่างอิสระ (บวก สลับ คูณ) โดยผลเฉลยของระบบ<em>ไม่เปลี่ยน</em> — เป้าหมายคือค่อย ๆ ลดรูปจนระบบง่ายจนอ่านคำตอบออกทันที ซึ่งจะเป็นหัวข้อหลักของหัวข้อ 1.2</p>
      </div>

      <div class="box box-warn">
        <div class="box-title">⚠️ ข้อควรระวังในการดำเนินการแถว</div>
        <p>• \(cR_p\) ต้องมี \(c \neq 0\) เสมอ (ห้ามคูณแถวด้วย 0 เพราะจะ "ทิ้งข้อมูล" ของระบบ)</p>
        <p>• \(R_p + cR_q\) ต่างจาก \(R_q + cR_p\) — แถวที่ถูก "เปลี่ยน" คือแถวแรก ให้แทนค่าในผลลัพธ์ของแถวนั้น ส่วนแถวที่สองยังเหมือนเดิม</p>
      </div>
    </section>

    <section class="block" id="examples">
      <h2><span class="h2-dot">✏️</span> ตัวอย่างโจทย์</h2>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 1</span><span class="tag easy">ง่าย</span><span class="ex-title">บวก ลบ และคูณสเกลาร์</span></div>
        <div class="ex-body">
          <div class="ex-q">ให้ \(A = \begin{bmatrix} 2 & -1 & 0\\ 3 & 4 & -2 \end{bmatrix}\) และ \(B = \begin{bmatrix} 1 & 5 & -3\\ -2 & 0 & 4 \end{bmatrix}\) จงหา (ก) \(A+B\) (ข) \(2A\) (ค) \(B - 2A\)</div>
          <div class="approach"><span class="lbl">แนวคิด</span> — ทำแบบ "ตำแหน่งต่อตำแหน่ง" ระวังมิติต้องเท่ากันจึงจะบวก/ลบกันได้</div>
          <ol class="steps">
            <li><span class="step-t">(ก) บวกแบบตำแหน่งต่อตำแหน่ง</span>
            \[ A + B = \begin{bmatrix} 2+1 & -1+5 & 0+(-3)\\ 3+(-2) & 4+0 & -2+4 \end{bmatrix} = \begin{bmatrix} 3 & 4 & -3\\ 1 & 4 & 2 \end{bmatrix} \]</li>
            <li><span class="step-t">(ข) คูณทุกสมาชิกด้วย 2</span>
            \[ 2A = \begin{bmatrix} 2(2) & 2(-1) & 2(0)\\ 2(3) & 2(4) & 2(-2) \end{bmatrix} = \begin{bmatrix} 4 & -2 & 0\\ 6 & 8 & -4 \end{bmatrix} \]</li>
            <li><span class="step-t"><span class="step-tag">ท่า: ลบเท่ากับบวกลบ</span>(ค) คิด \(B - 2A = B + (-2)A\)</span>
            คำนวณ \(-2A = \begin{bmatrix} -4 & 2 & 0\\ -6 & -8 & 4 \end{bmatrix}\) แล้วบวกกับ \(B\):
            \[ B - 2A = \begin{bmatrix} 1-4 & 5+2 & -3+0\\ -2-6 & 0-8 & 4+4 \end{bmatrix} = \begin{bmatrix} -3 & 7 & -3\\ -8 & -8 & 8 \end{bmatrix} \]</li>
          </ol>
          <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> ทุกเมทริกซ์ผลลัพธ์ต้องมีมิติ \(2\times 3\) เท่ากับเมทริกซ์ตั้งต้น และสมาชิกที่เป็นผลบวกสามารถนำไปตั้งย้อนเช็กได้ เช่น \(3 = 2+1\) ✓</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 2</span><span class="tag easy">ง่าย</span><span class="ex-title">แยกแยะสมการเชิงเส้น</span></div>
        <div class="ex-body">
          <div class="ex-q">สมการต่อไปนี้ข้อใดเป็นสมการเชิงเส้นในตัวแปร \(x_1, x_2, x_3\)<br>
          (ก) \(3x_1 - 4x_2 + \sqrt{2}\,x_3 = 7\) &nbsp;&nbsp; (ข) \(x_1 x_2 = 5\) &nbsp;&nbsp; (ค) \(x_1 + 2x_2 = x_1^2\) &nbsp;&nbsp; (ง) \(\dfrac{x_1}{2} + x_3 = 4\)</div>
          <div class="approach"><span class="lbl">แนวคิด</span> — สมการเชิงเส้นต้องจัดรูปให้เหลือรูป \(a_1x_1 + a_2x_2 + a_3x_3 = b\) ได้ โดยตัวแปรทุกตัวยกกำลัง 1 และไม่มีการคูณตัวแปรเข้าด้วยกัน</div>
          <ol class="steps">
            <li><span class="step-t">(ก) เป็นสมการเชิงเส้น</span> แม้สัมประสิทธิ์จะเป็น \(\sqrt{2}\) ก็ตาม เพราะสัมประสิทธิ์มีสิทธิ์เป็นจำนวนจริงใดก็ได้ ตัวแปรทุกตัวยกกำลัง 1</li>
            <li><span class="step-t">(ข) ไม่เป็นสมการเชิงเส้น</span> เพราะมีตัวแปรสองตัว <em>คูณกัน</em> (\(x_1x_2\)) ซึ่งห้ามปรากฏในรูปแบบนิยาม</li>
            <li><span class="step-t">(ค) ไม่เป็นสมการเชิงเส้น</span> ย้ายข้างได้เป็น \(x_1 + 2x_2 - x_1^2 = 0\) ปรากฏกำลังสองของตัวแปร</li>
            <li><span class="step-t">(ง) เป็นสมการเชิงเส้น</span> คูณทั้งสมการด้วย 2 ได้ \(x_1 + 2x_3 = 8\) ซึ่งเป็นรูปแบบนิยาม (สัมประสิทธิ์ของ \(x_2\) เป็น 0 ก็ได้)</li>
          </ol>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 3</span><span class="tag easy">ง่าย</span><span class="ex-title">ตรวจว่าชุดจำนวนเป็นผลเฉลยหรือไม่</span></div>
        <div class="ex-body">
          <div class="ex-q">จงตรวจว่า \((2, -1, 1)\) เป็นผลเฉลยของระบบเชิงเส้นต่อไปนี้หรือไม่
          \[ \begin{aligned} x_1 + 2x_2 + x_3 &= 1\\ 2x_1 - x_2 + x_3 &= 6\\ x_1 + x_2 - x_3 &= 0 \end{aligned} \]</div>
          <div class="approach"><span class="lbl">แนวคิด</span> — แทนค่า \(x_1 = 2,\; x_2 = -1,\; x_3 = 1\) ลงใน<em>ทุกสมการ</em> ถ้าทำให้จริงครบทุกสมการจึงเป็นผลเฉลย</div>
          <ol class="steps">
            <li><span class="step-t">แทนค่าในสมการที่ 1</span> \(2 + 2(-1) + 1 = 2 - 2 + 1 = 1\) ✓ เป็นจริง</li>
            <li><span class="step-t">แทนค่าในสมการที่ 2</span> \(2(2) - (-1) + 1 = 4 + 1 + 1 = 6\) ✓ เป็นจริง (ระวังเครื่องหมายลบซ้อนลบ!)</li>
            <li><span class="step-t">แทนค่าในสมการที่ 3</span> \(2 + (-1) - 1 = 0\) ✓ เป็นจริง</li>
          </ol>
          <div class="verify"><span class="lbl">สรุป:</span> เป็นจริงครบทั้ง 3 สมการ ดังนั้น \((2, -1, 1)\) <strong>เป็นผลเฉลย</strong>ของระบบ (แต่ไม่ได้แปลว่าเป็นผลเฉลยชุดเดียว — เซตผลเฉลยอาจมีมากกว่านี้)</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 4</span><span class="tag easy">ง่าย</span><span class="ex-title">เขียนเมทริกซ์สัมประสิทธิ์และเมทริกซ์แต่งเติม</span></div>
        <div class="ex-body">
          <div class="ex-q">จงเขียนเมทริกซ์สัมประสิทธิ์และเมทริกซ์แต่งเติมของระบบเชิงเส้น
          \[ \begin{aligned} x_1 - 2x_2 + x_3 &= 3\\ x_2 + 4x_3 &= 0\\ -x_1 + x_3 &= -2 \end{aligned} \]</div>
          <div class="approach"><span class="lbl">แนวคิด</span> — ตัวแปรที่หายไปในสมการใด ให้ใส่สัมประสิทธิ์ \(0\) แล้วคัดลอกสัมประสิทธิ์เรียงเป็นแถวตามลำดับ \(x_1, x_2, x_3\)</div>
          <ol class="steps">
            <li><span class="step-t">สังเกตตัวแปรที่หายไป</span> สมการที่ 2 ไม่มี \(x_1\) → สัมประสิทธิ์ \(0\); สมการที่ 3 ไม่มี \(x_2\) → สัมประสิทธิ์ \(0\)</li>
            <li><span class="step-t">เขียนเมทริกซ์สัมประสิทธิ์</span>
            \[ A = \begin{bmatrix} 1 & -2 & 1\\ 0 & 1 & 4\\ -1 & 0 & 1 \end{bmatrix} \]</li>
            <li><span class="step-t">ต่อท้ายด้วยหลักค่าคงตัว</span>
            \[ [A \mid \vec{b}] = \begin{bmatrix} 1 & -2 & 1 & 3\\ 0 & 1 & 4 & 0\\ -1 & 0 & 1 & -2 \end{bmatrix} \]</li>
          </ol>
          <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> นับแถว = จำนวนสมการ = 3 และแต่ละแถวมี 4 ตัว (สัมประสิทธิ์ 3 ตัว + ค่าคงตัว 1 ตัว) ตรงตามที่กำหนด ✓</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 5</span><span class="tag hard">ยาก</span><span class="ex-title">แก้ระบบเชิงเส้นด้วยการดำเนินการแถว</span></div>
        <div class="ex-body">
          <div class="ex-q">จงหาเซตผลเฉลยของระบบเชิงเส้น
          \[ \begin{aligned} x_1 + x_2 + x_3 &= 4\\ 2x_1 - x_2 + x_3 &= 8\\ x_1 + 2x_2 - x_3 &= -3 \end{aligned} \]</div>
          <div class="approach"><span class="lbl">แนวคิด</span> — เขียนเมทริกซ์แต่งเติม แล้วใช้การดำเนินการแถว "กวาด" ให้แนวทแยงมีตัวนำ จนอ่านคำตอบได้ โดยทฤษฎีบท 1.1.1 รับประกันว่าเซตผลเฉลยไม่เปลี่ยน</div>
          <ol class="steps">
            <li><span class="step-t"><span class="step-tag">ท่า: ทำลำ (pivot) ในหลักที่ 1</span>เขียนเมทริกซ์แต่งเติม แล้วทำให้ตัวใต้ \(a_{11}\) เป็น 0</span>
            \[ [A \mid \vec{b}] = \begin{bmatrix} 1 & 1 & 1 & 4\\ 2 & -1 & 1 & 8\\ 1 & 2 & -1 & -3 \end{bmatrix} \]
            ใช้ \(R_2 - 2R_1\) และ \(R_3 - R_1\):
            \[ \sim \begin{bmatrix} 1 & 1 & 1 & 4\\ 0 & -3 & -1 & 0\\ 0 & 1 & -2 & -7 \end{bmatrix} \]</li>
            <li><span class="step-t"><span class="step-tag">ท่า: สลับแถวให้ตัวนำพร้อม</span>สลับ \(R_2 \leftrightarrow R_3\) ให้ตัวนำของแถวที่ 2 อยู่หลักที่ 2</span>
            \[ \sim \begin{bmatrix} 1 & 1 & 1 & 4\\ 0 & 1 & -2 & -7\\ 0 & -3 & -1 & 0 \end{bmatrix} \xrightarrow{\,R_3 + 3R_2\,} \begin{bmatrix} 1 & 1 & 1 & 4\\ 0 & 1 & -2 & -7\\ 0 & 0 & -7 & -21 \end{bmatrix} \]
            ได้เมทริกซ์ขั้นบันได (ตัวนำเดินลงขวาเป็นบันได)</li>
            <li><span class="step-t"><span class="step-tag">ท่า: back-substitution</span>อ่านค่าจากล่างขึ้นบน</span>
            จากแถวที่ 3: \(-7x_3 = -21\) ได้ \(x_3 = 3\)<br>
            แทนในแถวที่ 2: \(x_2 - 2(3) = -7\) ได้ \(x_2 = -1\)<br>
            แทนในแถวที่ 1: \(x_1 + (-1) + 3 = 4\) ได้ \(x_1 = 2\)</li>
            <li><span class="step-t"><span class="step-tag">ทางเลือก: RREF</span>หรือลดรูปต่อจนได้รูปแบบขั้นบันไดลดรูป</span>
            \[ \begin{bmatrix} 1 & 1 & 1 & 4\\ 0 & 1 & -2 & -7\\ 0 & 0 & -7 & -21 \end{bmatrix} \xrightarrow{\,-\tfrac{1}{7}R_3\,} \begin{bmatrix} 1 & 1 & 1 & 4\\ 0 & 1 & -2 & -7\\ 0 & 0 & 1 & 3 \end{bmatrix} \xrightarrow{\substack{R_1 - R_3\\ R_2 + 2R_3}} \begin{bmatrix} 1 & 1 & 0 & 1\\ 0 & 1 & 0 & -1\\ 0 & 0 & 1 & 3 \end{bmatrix} \xrightarrow{\,R_1 - R_2\,} \begin{bmatrix} 1 & 0 & 0 & 2\\ 0 & 1 & 0 & -1\\ 0 & 0 & 1 & 3 \end{bmatrix} \]
            ซึ่งสมนัยกับ \(x_1 = 2,\; x_2 = -1,\; x_3 = 3\) ตรงกับที่ได้จาก back-substitution</li>
          </ol>
          <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> แทน \((2, -1, 3)\) กลับเข้าสมการเดิม: \(2-1+3 = 4\) ✓, \(4+1+3 = 8\) ✓, \(2-2-3 = -3\) ✓ ครบทุกสมการ</div>
          <p class="small">เซตผลเฉลยคือ \(\{(2, -1, 3)\}\) — ระบบนี้ต้องกันแบบมีผลเฉลยชุดเดียว</p>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 6</span><span class="tag hard">ยาก</span><span class="ex-title">หาค่า \(h\) ที่ทำให้ระบบมีผลเฉลยแบบต่าง ๆ</span></div>
        <div class="ex-body">
          <div class="ex-q">
          (ก) จงหาค่า \(h\) ทั้งหมดที่ทำให้ระบบที่มีเมทริกซ์แต่งเติม \(\begin{bmatrix} 1 & 2 & h\\ 2 & 4 & 8 \end{bmatrix}\) มีผลเฉลย<br>
          (ข) จงหาค่า \(h\) ทั้งหมดที่ทำให้ระบบที่มีเมทริกซ์แต่งเติม \(\begin{bmatrix} 1 & -3 & h\\ -2 & 6 & 8 \end{bmatrix}\) ไม่มีผลเฉลย</div>
          <div class="approach"><span class="lbl">แนวคิด</span> — ลดรูปจนเห็นแถวลักษณะพิเศษ: ระบบ<em>ไม่มีผลเฉลย</em>เมื่อเกิดแถว \(\begin{bmatrix} 0 & \dots & 0 & b \end{bmatrix}\) โดย \(b \neq 0\) (ได้ \(0 = b\) ขัดแย้ง) ส่วนถ้าแถวล้าเป็น \(\begin{bmatrix} 0 & \dots & 0 & 0 \end{bmatrix}\) มักบ่งชี้ผลเฉลยอนันต์ชุด</div>
          <ol class="steps">
            <li><span class="step-t">(ก) ลดรูปเมทริกซ์แต่งเติม</span>
            \[ \begin{bmatrix} 1 & 2 & h\\ 2 & 4 & 8 \end{bmatrix} \xrightarrow{\,R_2 - 2R_1\,} \begin{bmatrix} 1 & 2 & h\\ 0 & 0 & 8 - 2h \end{bmatrix} \]</li>
            <li><span class="step-t">พิจารณาแถวที่ 2</span> แถวที่ 2 สมนัยกับ \((8 - 2h)\,x_3 = 8 - 2h\)<br>
            • ถ้า \(h \neq 4\): ได้ \(x_3 = 1\) และแถวบนให้ \(x_1 + 2x_2 = h - 2\) → มี<strong>ผลเฉลยอนันต์ชุด</strong> (เลือก \(x_2\) เสรีได้) — มีผลเฉลย<br>
            • ถ้า \(h = 4\): ได้สมการ \(0 = 0\) จึงเหลือ \(x_1 + 2x_2 = 4\) เพียงสมการเดียว → มี<strong>ผลเฉลยอนันต์ชุด</strong> — ก็มีผลเฉลยเช่นกัน</li>
            <li><span class="step-t">สรุป (ก)</span> ทุกค่า \(h \in \mathbb{R}\) ทำให้ระบบนี้มีผลเฉลย (เพราะไม่มีทางเกิดแถว \(\begin{bmatrix} 0 & 0 & b \end{bmatrix}\) โดย \(b \neq 0\))</li>
            <li><span class="step-t">(ข) ลดรูปเมทริกซ์แต่งเติม</span>
            \[ \begin{bmatrix} 1 & -3 & h\\ -2 & 6 & 8 \end{bmatrix} \xrightarrow{\,R_2 + 2R_1\,} \begin{bmatrix} 1 & -3 & h\\ 0 & 0 & 8 + 2h \end{bmatrix} \]</li>
            <li><span class="step-t">พิจารณาแถวที่ 2</span> หลักซ้ายล้าเป็นศูนย์แล้ว แต่ขวาสุดคือ \(8 + 2h\)<br>
            • ถ้า \(h \neq -4\): ได้แถว \(\begin{bmatrix} 0 & 0 & b \end{bmatrix}\) โดย \(b \neq 0\) สมนัยกับ \(0 = b\) ซึ่งเป็นเท็จ → <strong>ไม่มีผลเฉลย</strong><br>
            • ถ้า \(h = -4\): แถวล้าหมด → เหลือ \(x_1 - 3x_2 = 2\) สมการเดียว → ผลเฉลยอนันต์ชุด</li>
            <li><span class="step-t">สรุป (ข)</span> ระบบไม่มีผลเฉลยเมื่อ \(h \neq -4\) (เขียนเป็นเซตคือ \(h \in \mathbb{R} \setminus \{-4\}\))</li>
          </ol>
          <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> ลองแทนค่าเช็ก: ใน (ข) เมื่อ \(h = 0\) ระบบคือ \(x_1 - 3x_2 = 0\) กับ \(-2x_1 + 6x_2 = 8\) ข้อแรกให้ \(x_1 = 3x_2\) แทนในข้อสองได้ \(8 = 8\)... ระวัง! แทนถูกต้องคือ \(-2(3x_2) + 6x_2 = 0 \neq 8\) → ขัดแย้งจริง ✓</div>
        </div>
      </article>

      <article class="ex-card">
        <div class="ex-head"><span class="ex-badge">ตัวอย่าง 7</span><span class="tag hard">ยาก</span><span class="ex-title">เส้นตรง 3 เส้นมีจุดร่วมกันหรือไม่</span></div>
        <div class="ex-body">
          <div class="ex-q">จงพิจารณาว่าเส้นตรง \(2x_1 + x_2 = 0\), \(\;x_1 - x_2 = 3\) และ \(\;3x_1 + 2x_2 = -1\) มีจุดร่วมกันหรือไม่ เพราะเหตุใด</div>
          <div class="approach"><span class="lbl">แนวคิด</span> — จุดร่วมของทั้ง 3 เส้น = ผลเฉลยที่อยู่ครบทั้ง 3 สมการพร้อมกัน = ผลเฉลยของระบบเชิงเส้น 3 สมการ จึงแปลงเป็นเมทริกซ์แต่งเติมแล้วลดรูปได้เลย</div>
          <ol class="steps">
            <li><span class="step-t">เขียนเมทริกซ์แต่งเติมของระบบ 3 สมการ</span>
            \[ \begin{bmatrix} 2 & 1 & 0\\ 1 & -1 & 3\\ 3 & 2 & -1 \end{bmatrix} \xrightarrow{\,R_{12}\,} \begin{bmatrix} 1 & -1 & 3\\ 2 & 1 & 0\\ 3 & 2 & -1 \end{bmatrix} \]
            (สลับแถวให้เริ่มด้วย 1 เพื่อคำนวณสวยงาม)</li>
            <li><span class="step-t">กวาดหลักที่ 1 ให้เหลือตัวนำเดียว</span>
            \[ \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - 3R_1}} \begin{bmatrix} 1 & -1 & 3\\ 0 & 3 & -6\\ 0 & 5 & -10 \end{bmatrix} \xrightarrow{\,\tfrac{1}{3}R_2\,} \begin{bmatrix} 1 & -1 & 3\\ 0 & 1 & -2\\ 0 & 5 & -10 \end{bmatrix} \]</li>
            <li><span class="step-t">กวาดหลักที่ 2</span>
            \[ \xrightarrow{\,R_3 - 5R_2\,} \begin{bmatrix} 1 & -1 & 3\\ 0 & 1 & -2\\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{\,R_1 + R_2\,} \begin{bmatrix} 1 & 0 & 1\\ 0 & 1 & -2\\ 0 & 0 & 0 \end{bmatrix} \]</li>
            <li><span class="step-t">อ่านผลเฉลย</span> ได้ \(x_1 = 1,\; x_2 = -2\) เป็น<em>ผลเฉลยชุดเดียว</em> (ไม่มีตัวแปรเสรี และไม่เกิด \(0 = b\neq 0\))</li>
          </ol>
          <div class="verify"><span class="lbl">ตรวจคำตอบ:</span> จุด \((1, -2)\): แทนใน 3 เส้น → \(2(1) + (-2) = 0\) ✓, \(1-(-2) = 3\) ✓, \(3(1) + 2(-2) = -1\) ✓ ดังนั้นทั้ง 3 เส้นตัดกันที่จุด \((1, -2)\) พอดีจุดเดียว</div>
        </div>
      </article>
    </section>

    <section class="block" id="recipe">
      <h2><span class="h2-dot">⚡</span> สูตรสำเร็จ — ท่าที่ใช้ทำโจทย์หัวข้อนี้</h2>
      <div class="recipe">
        <div class="recipe-head">🪜 ท่าหลัก: แก้ระบบเชิงเส้นด้วยการดำเนินการแถว</div>
        <div class="recipe-body">
          <ol>
            <li>เขียน <strong>เมทริกซ์แต่งเติม</strong> \([A \mid \vec{b}]\) ของระบบ (อย่าลืมใส่ 0 ให้ตัวแปรที่หายไป)</li>
            <li>ใช้การดำเนินการแถว ลดรูปจนได้ <strong>เมทริกซ์ขั้นบันได</strong> — ถ้าเกิดแถว \(\begin{bmatrix} 0 & \dots & 0 & b\end{bmatrix}\) โดย \(b \neq 0\) → <strong>ไม่มีผลเฉลย</strong> จบทันที</li>
            <li>ถ้ามีผลเฉลย ลดรูปต่อจนได้ <strong>รูปแบบขั้นบันไดลดรูป</strong> (ให้ 1 ตัวนำทุกหลักตัวหลัก และตัวอื่นในหลักนั้นเป็น 0)</li>
            <li>ตัวแปรที่สมนัยกับหลักตัวหลัก = <strong>ตัวแปรพื้นฐาน</strong> ที่เหลือ = <strong>ตัวแปรเสรี</strong> — เขียน <strong>ผลเฉลยทั่วไป</strong> (ไม่มีตัวแปรเสรี → ผลเฉลยชุดเดียว)</li>
            <li>ตรวจคำตอบโดยแทนกลับเข้าสมการเดิมอย่างน้อย 1–2 สมการ</li>
          </ol>
        </div>
      </div>
      <div class="key-grid">
        <div class="key-card"><div class="k-title">ท่า: ตรวจผลเฉลย</div>แทนค่าลงทุกสมการ ต้องจริงครบทุกสมการจึงเป็นผลเฉลย ระวังเครื่องหมายลบซ้อนลบ</div>
        <div class="key-card"><div class="k-title">ท่า: หา \(h\) ให้มี/ไม่มีผลเฉลย</div>ลดรูปด้วยแถวที่ไม่มี \(h\) ก่อน แล้วดูแถวที่เหลือ: \(\begin{bmatrix} 0 & \dots & b\end{bmatrix}, b\neq0\) = ไม่มีผลเฉลย, \(\begin{bmatrix} 0 & \dots & 0\end{bmatrix}\) = มีผลเฉลยอนันต์ชุด</div>
        <div class="key-card"><div class="k-title">ท่า: ปัญหาเรขาคณิต</div>จุดตัดเส้น/จุดร่วม = ผลเฉลยระบบ แปลงเป็นเมทริกซ์แต่งเติมแล้วลดรูปได้ทันที</div>
      </div>
    </section>

    <section class="block" id="practice">
      <h2><span class="h2-dot">🏋️</span> โจทย์ซ้อมมือ (6 ข้อ)</h2>
      <p class="small">ลองทำเองก่อน แล้วค่อยกดเปิดคำใบ้ → เฉลยทีละขั้น เมื่อทำได้แล้วติ๊ก ✓ เพื่อบันทึกความคืบหน้า</p>

      <article class="pr-card" data-pkey="p1-1-1">
        <div class="pr-head"><span class="pr-num">ข้อ 1</span><span class="diff">●○○</span><span class="spacer"></span>
          <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
        <div class="pr-body">
          <p>ให้ \(A = \begin{bmatrix} 4 & -3 & 1\\ -2 & 0 & 5 \end{bmatrix}\) และ \(B = \begin{bmatrix} 1 & 2 & -1\\ 3 & 4 & 0 \end{bmatrix}\) จงหา (ก) \(-3A\) &nbsp; (ข) \(A + 2B\) &nbsp; (ค) \(B - 2A\)</p>
        </div>
        <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ทำแบบตำแหน่งต่อตำแหน่ง (ค) ให้คิดเป็น \(B + (-2)A\)</div></details>
        <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
          <p><strong>แนวคิด:</strong> บวก/ลบเมทริกซ์ต้องมิติเท่ากัน และคูณสเกลาร์คือคูณทุกสมาชิก</p>
          <ol class="steps">
            <li><span class="step-t">(ก) คูณทุกสมาชิกของ \(A\) ด้วย \(-3\)</span>
            \[ -3A = \begin{bmatrix} -12 & 9 & -3\\ 6 & 0 & -15 \end{bmatrix} \]</li>
            <li><span class="step-t">(ข) คูณ \(B\) ด้วย 2 แล้วบวกกับ \(A\)</span>
            \[ 2B = \begin{bmatrix} 2 & 4 & -2\\ 6 & 8 & 0 \end{bmatrix},\qquad A + 2B = \begin{bmatrix} 6 & 1 & -1\\ 4 & 8 & 5 \end{bmatrix} \]</li>
            <li><span class="step-t">(ค) หา \(-2A\) แล้วบวกกับ \(B\)</span>
            \[ -2A = \begin{bmatrix} -8 & 6 & -2\\ 4 & 0 & -10 \end{bmatrix},\qquad B - 2A = \begin{bmatrix} -7 & 8 & -3\\ 7 & 4 & -10 \end{bmatrix} \]</li>
          </ol>
        </div></details>
      </article>

      <article class="pr-card" data-pkey="p1-1-2">
        <div class="pr-head"><span class="pr-num">ข้อ 2</span><span class="diff">●●○</span><span class="spacer"></span>
          <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
        <div class="pr-body">
          <p>ให้ \(A = \begin{bmatrix} 3 & 2 & -1 & 1\\ 0 & -2 & 1 & 0 \end{bmatrix}\) จงหาเมทริกซ์ \(X\) ซึ่งทำให้ \(2(A - X) = A + \dfrac{1}{2}X\)</p>
        </div>
        <details class="hint"><summary>คำใบ้</summary><div class="hint-body">กระจายวงเล็บก่อน แล้วย้ายข้างรวมพจน์ที่มี \(X\) ไว้ฝั่งเดียว (คิดเหมือนสมการพีชคณิตปกติ)</div></details>
        <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
          <p><strong>แนวคิด:</strong> เมทริกซ์ประพฤติตัวเหมือนจำนวนในเรื่องบวก/ลบ/คูณสเกลาร์ จึงแก้สมการได้ด้วยท่าเดียวกับพีชคณิต</p>
          <ol class="steps">
            <li><span class="step-t">กระจายวงเล็บ</span>
            \[ 2A - 2X = A + \tfrac{1}{2}X \]</li>
            <li><span class="step-t">รวมพจน์ \(X\) ไว้ฝั่งเดียว</span>
            \[ 2A - A = \tfrac{1}{2}X + 2X \;\Longrightarrow\; A = \tfrac{5}{2}X \]</li>
            <li><span class="step-t">คูณด้วย \(\tfrac{2}{5}\) เพื่อแยก \(X\)</span>
            \[ X = \tfrac{2}{5}A = \begin{bmatrix} \tfrac{6}{5} & \tfrac{4}{5} & -\tfrac{2}{5} & \tfrac{2}{5}\\[2pt] 0 & -\tfrac{4}{5} & \tfrac{2}{5} & 0 \end{bmatrix} \]</li>
            <li><span class="step-t">ตรวจคำตอบ</span> แทนกลับ: \(2(A - \tfrac{2}{5}A) = 2 \cdot \tfrac{3}{5}A = \tfrac{6}{5}A\) และ \(A + \tfrac{1}{2}\cdot\tfrac{2}{5}A = A + \tfrac{1}{5}A = \tfrac{6}{5}A\) ทั้งสองฝั่งเท่ากัน ✓</li>
          </ol>
        </div></details>
      </article>

      <article class="pr-card" data-pkey="p1-1-3">
        <div class="pr-head"><span class="pr-num">ข้อ 3</span><span class="diff">●○○</span><span class="spacer"></span>
          <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
        <div class="pr-body">
          <p>จงตรวจว่า \((-1, 2, 1)\) เป็นผลเฉลยของระบบต่อไปนี้หรือไม่
          \[ \begin{aligned} x_1 + x_2 + x_3 &= 2\\ x_1 - x_2 + 2x_3 &= -1\\ 3x_1 + x_2 &= -1 \end{aligned} \]</p>
        </div>
        <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แทนค่าลงทั้ง 3 สมการ — ต้องจริง<em>ครบทุก</em>สมการ ขาดสมการใดสมการหนึ่งก็ไม่เป็นผลเฉลย</div></details>
        <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
          <p><strong>แนวคิด:</strong> ตรวจทีละสมการ</p>
          <ol class="steps">
            <li><span class="step-t">สมการที่ 1</span> \((-1) + 2 + 1 = 2\) ✓ เป็นจริง</li>
            <li><span class="step-t">สมการที่ 2</span> \((-1) - 2 + 2(1) = -1\) ✓ เป็นจริง</li>
            <li><span class="step-t">สมการที่ 3</span> \(3(-1) + 2 = -3 + 2 = -1\) ✓ เป็นจริง</li>
            <li><span class="step-t">สรุป</span> จริงครบทั้ง 3 สมการ → \((-1, 2, 1)\) <strong>เป็นผลเฉลย</strong>ของระบบ</li>
          </ol>
        </div></details>
      </article>

      <article class="pr-card" data-pkey="p1-1-4">
        <div class="pr-head"><span class="pr-num">ข้อ 4</span><span class="diff">●●○</span><span class="spacer"></span>
          <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
        <div class="pr-body">
          <p>จงเขียนระบบเชิงเส้นที่สมนัยกับเมทริกซ์แต่งเติมต่อไปนี้ พร้อมทั้งพิจารณาว่าเป็นระบบต้องกันหรือไม่ต้องกัน
          \[ \begin{bmatrix} 1 & 5 & -8 & 4\\ 0 & 1 & -3 & 0\\ 0 & 0 & 0 & 1 \end{bmatrix} \]</p>
        </div>
        <details class="hint"><summary>คำใบ้</summary><div class="hint-body">แต่ละแถว = 1 สมการ แล้วดูแถวที่ 3 ว่าให้ข้อสรุปอะไร</div></details>
        <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
          <p><strong>แนวคิด:</strong> อ่านแถวเป็นสมการ แล้วหาแถวลักษณะ "0 = ค่าไม่ศูนย์"</p>
          <ol class="steps">
            <li><span class="step-t">เขียนเป็นระบบ</span>
            \[ \begin{aligned} x_1 + 5x_2 - 8x_3 &= 4\\ x_2 - 3x_3 &= 0\\ 0 &= 1 \end{aligned} \]</li>
            <li><span class="step-t">พิจารณาสมการที่ 3</span> \(0 = 1\) เป็นข้อขัดแย้ง (เป็นเท็จเสมอ)</li>
            <li><span class="step-t">สรุป</span> ระบบนี้<strong>ไม่ต้องกัน</strong> (inconsistent) จึงไม่มีผลเฉลย เซตผลเฉลยคือเซตว่าง \(\varnothing\)</li>
          </ol>
        </div></details>
      </article>

      <article class="pr-card" data-pkey="p1-1-5">
        <div class="pr-head"><span class="pr-num">ข้อ 5</span><span class="diff">●●●</span><span class="spacer"></span>
          <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
        <div class="pr-body">
          <p>จงหาเซตผลเฉลยของระบบเชิงเส้น
          \[ \begin{aligned} x_1 + x_2 - 2x_3 &= -1\\ 2x_1 - x_2 + x_3 &= 5\\ 3x_1 + x_2 + x_3 &= 9 \end{aligned} \]</p>
        </div>
        <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ใช้ \(R_2 - 2R_1\) และ \(R_3 - 3R_1\) ก่อน แล้วกวาดหลักที่ 2 ต่อ (จะพบเศษส่วน \(\tfrac{11}{3}\) ไม่ต้องตกใจ)</div></details>
        <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
          <p><strong>แนวคิด:</strong> ลดรูปจนเป็นเมทริกซ์ขั้นบันได แล้ว back-substitution</p>
          <ol class="steps">
            <li><span class="step-t">กวาดหลักที่ 1</span>
            \[ \begin{bmatrix} 1 & 1 & -2 & -1\\ 2 & -1 & 1 & 5\\ 3 & 1 & 1 & 9 \end{bmatrix} \xrightarrow{\substack{R_2 - 2R_1\\ R_3 - 3R_1}} \begin{bmatrix} 1 & 1 & -2 & -1\\ 0 & -3 & 5 & 7\\ 0 & -2 & 7 & 12 \end{bmatrix} \]</li>
            <li><span class="step-t">กวาดหลักที่ 2</span> ใช้ \(R_3 - \tfrac{2}{3}R_2\):
            \[ \xrightarrow{\,R_3 - \tfrac{2}{3}R_2\,} \begin{bmatrix} 1 & 1 & -2 & -1\\ 0 & -3 & 5 & 7\\ 0 & 0 & \tfrac{11}{3} & \tfrac{22}{3} \end{bmatrix} \xrightarrow{\,\tfrac{3}{11}R_3\,} \begin{bmatrix} 1 & 1 & -2 & -1\\ 0 & -3 & 5 & 7\\ 0 & 0 & 1 & 2 \end{bmatrix} \]</li>
            <li><span class="step-t">Back-substitution จากล่างขึ้น</span>
            แถวที่ 3: \(x_3 = 2\)<br>
            แถวที่ 2: \(-3x_2 + 5(2) = 7 \Rightarrow -3x_2 = -3 \Rightarrow x_2 = 1\)<br>
            แถวที่ 1: \(x_1 + 1 - 2(2) = -1 \Rightarrow x_1 = 2\)</li>
            <li><span class="step-t">สรุป</span> เซตผลเฉลยคือ \(\{(2, 1, 2)\}\) — ผลเฉลยชุดเดียว (ไม่มีตัวแปรเสรี)</li>
            <li><span class="step-t">ตรวจคำตอบ</span> แทนกลับสมการที่ 2: \(2(2) - 1 + 2 = 5\) ✓ และสมการที่ 3: \(3(2) + 1 + 2 = 9\) ✓</li>
          </ol>
        </div></details>
      </article>

      <article class="pr-card" data-pkey="p1-1-6">
        <div class="pr-head"><span class="pr-num">ข้อ 6</span><span class="diff">●●●</span><span class="spacer"></span>
          <label class="pr-done"><input type="checkbox"> ทำสำเร็จแล้ว</label></div>
        <div class="pr-body">
          <p>(ก) จงหาค่า \(h\) ทั้งหมดที่ทำให้ระบบที่มีเมทริกซ์แต่งเติม \(\begin{bmatrix} 1 & 2 & 3\\ -2 & -4 & h \end{bmatrix}\) <em>ไม่มี</em>ผลเฉลย และค่า \(h\) ที่ทำให้มีผลเฉลยอนันต์ชุด<br>
          (ข) จงหาค่า \(h\) ทั้งหมดที่ทำให้ระบบที่มีเมทริกซ์แต่งเติม \(\begin{bmatrix} 2 & h & 6\\ -4 & -8 & -14 \end{bmatrix}\) ไม่มีผลเฉลย และบอกด้วยว่ามีค่า \(h\) ที่ทำให้มีผลเฉลยอนันต์ชุดหรือไม่</p>
        </div>
        <details class="hint"><summary>คำใบ้</summary><div class="hint-body">ลดรูปด้วยแถวบน (ซึ่งไม่มี \(h\)) ให้เกิดแถว \(\begin{bmatrix} 0 & 0 & \text{นิพจน์} \end{bmatrix}\) แล้ววิเคราะห์นิพจน์นั้น</div></details>
        <details class="sol"><summary>แนวคิดและเฉลยแบบละเอียด</summary><div class="sol-body">
          <p><strong>แนวคิด:</strong> ไม่มีผลเฉลย ⇔ เกิดแถว \(\begin{bmatrix} 0 & \dots & 0 & b \end{bmatrix}\) โดย \(b \neq 0\); ผลเฉลยอนันต์ชุดมักเกิดเมื่อแถวล้าเป็นศูนย์หมด (มีตัวแปรเสรี)</p>
          <ol class="steps">
            <li><span class="step-t">(ก) ลดรูป</span>
            \[ \begin{bmatrix} 1 & 2 & 3\\ -2 & -4 & h \end{bmatrix} \xrightarrow{\,R_2 + 2R_1\,} \begin{bmatrix} 1 & 2 & 3\\ 0 & 0 & h + 6 \end{bmatrix} \]</li>
            <li><span class="step-t">(ก) วิเคราะห์</span> แถวที่ 2 สมนัยกับ \((h+6)x_3 = h+6\)<br>
            • \(h \neq -6\): ได้ \(x_3 = 1\) แล้ว \(x_1 + 2x_2 = 3 - 1 = 2\) → ผลเฉลยอนันต์ชุด (เลือก \(x_2\) เสรี)<br>
            • \(h = -6\): ได้ \(0 = 0\) → เหลือ \(x_1 + 2x_2 = 3\) สมการเดียว → ผลเฉลยอนันต์ชุด</li>
            <li><span class="step-t">(ก) สรุป</span> ระบบ (ก)<strong>ไม่มีทางไม่มีผลเฉลย</strong> และมีผลเฉลยอนันต์ชุดสำหรับ<em>ทุก</em>ค่า \(h \in \mathbb{R}\)</li>
            <li><span class="step-t">(ข) ลดรูป</span>
            \[ \begin{bmatrix} 2 & h & 6\\ -4 & -8 & -14 \end{bmatrix} \xrightarrow{\,R_2 + 2R_1\,} \begin{bmatrix} 2 & h & 6\\ 0 & 2h - 8 & -2 \end{bmatrix} \]</li>
            <li><span class="step-t">(ข) วิเคราะห์</span><br>
            • ถ้า \(h = 4\): แถวที่ 2 กลายเป็น \(\begin{bmatrix} 0 & 0 & -2 \end{bmatrix}\) สมนัยกับ \(0 = -2\) → <strong>ไม่มีผลเฉลย</strong><br>
            • ถ้า \(h \neq 4\): ตัวนำอยู่ครบหลักที่ 1, 2 → มีผลเฉลยชุดเดียว และไม่มีทางได้ผลเฉลยอนันต์ชุด เพราะขวาสุดของแถวที่ 2 คือ \(-2 \neq 0\) เสมอ</li>
            <li><span class="step-t">(ข) สรุป</span> ไม่มีผลเฉลยเมื่อ \(h = 4\) เท่านั้น และ<em>ไม่มี</em>ค่า \(h\) ใดที่ทำให้มีผลเฉลยอนันต์ชุด</li>
          </ol>
        </div></details>
      </article>
    </section>