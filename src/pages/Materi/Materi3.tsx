// src/pages/Materi3.jsx
import SectionTitle from "../../components/Materi/SectionTitle";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import ButtonNavigasi from "../../components/Materi/ButtonNavigasi";

import MT1 from "../../assets/Materi/mt3-1.png";
import MT2 from "../../assets/Materi/mt3-2.png";
import MT3 from "../../assets/Materi/mt3-3.png";
import MT4 from "../../assets/Materi/mt3-4.png";
import MT5 from "../../assets/Materi/mt3-5.png";

export default function Materi3() {
  return (
    <div className="container">
      <div className="flex flex-col w-full m-auto gap-9">
        <SectionTitle title="Apa itu Lifeline Notation?" />
        
        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/notasi-sequence-diagram" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/materi/message-arrow" icon="right">Berikutnya</ButtonNavigasi>
        </div>
        
        <div className="flex flex-col justify-center w-full gap-2">
          <Image src={MT1} alt="Lifeline Notation" />
          
          <Paragraph>
            Lifeline notation adalah sebuah garis vertikal yang menunjukkan keberadaan atau &quot;hidup&quot; suatu
            objek selama waktu tertentu. Lifeline dapat dianggap sebagai representasi visual dari objek yang
            berpartisipasi dalam interaksi dan memberikan gambaran mengenai sejauh mana objek tersebut
            terlibat dalam suatu urutan tindakan. Lifeline notation digunakan untuk mengambarkan entitas (objek atau
            aktor) dalam sequence diagram. Tujuannya untuk membantu pemodelan dan pemahaman tentang bagaimana berbagai
            entitas (objek atau aktor) berinteraksi satu sama lain dalam suatu skenario atau proses tertentu.
          </Paragraph>
          
          <Paragraph>
            Dalam sequence diagram objek ini dapat mewakili pengguna, sistem, atau komponen lainnya yang berperan
            dalam skenario interaksi. Pilihlah objek yang memiliki peran penting dalam jalannya interaksi dan yang
            relevan dengan konteks skenario yang dijelaskan. Contohnya dalam skenario pemesanan online, objek dapat
            mencakup &quot;Pembeli&quot;, &quot;Keranjang Belanja&quot;, dan &quot;Database Produk&quot;.
            Pemilihan objek ini harus didasarkan pada peran kunci mereka dalam proses pemesanan.
          </Paragraph>
          
          <Paragraph>
            Element / simbol Lifeline notation terletak pada bagian atas dalam sequence diagram. Pada lifeline terdapat
            beberapa elemen/simbol diantaranya Lifeline notation dengan simbol aktor, Lifeline notation dengan elemen
            entity, Lifeline notation dengan elemen control, dan Lifeline notation dengan elemen boundry.
          </Paragraph>
          
          <Paragraph className="font-semibold">Lifeline notation dengan simbol aktor</Paragraph>
          <Paragraph>
            Lifeline notation dengan simbol aktor digunakan untuk mewakili aktor eksternal yang berinteraksi
            dengan sistem atau entitas internal dalam suatu skenario atau proses. Berikut adalah gambar dari
            Lifeline notation dengan simbol aktor.
          </Paragraph>
          <Image src={MT2} alt="Lifeline notation dengan simbol aktor" />
          
          <Paragraph className="font-semibold">Lifeline notation dengan elemen entity</Paragraph>
          <Paragraph>
            Lifeline dengan elemen entity mewakili data sistem. Misalnya, dalam aplikasi layanan pelanggan,
            entitas Pelanggan akan mengelola semua data yang terkait dengan pelanggan.
          </Paragraph>
          <Image src={MT3} alt="Lifeline notation dengan elemen entity" />
          
          <Paragraph className="font-semibold">Lifeline notation dengan elemen control</Paragraph>
          <Paragraph>
            Lifeline dengan elemen control menunjukkan entity atau manajer. Ia mengatur dan menjadwalkan
            interaksi antara batas-batas dan entitas serta berfungsi sebagai mediator di antara keduanya.
          </Paragraph>
          <Image src={MT4} alt="Lifeline notation dengan elemen control" />
          
          <Paragraph className="font-semibold">Lifeline notation dengan elemen boundry</Paragraph>
          <Paragraph>
            Lifeline dengan elemen boundry menunjukkan batas sistem/elemen perangkat lunak dalam suatu
            sistem; misalnya, layar antarmuka pengguna, gateway database, atau menu tempat pengguna berinteraksi,
            merupakan batasan.
          </Paragraph>
          <Image src={MT5} alt="Lifeline notation dengan elemen boundry" />
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/notasi-sequence-diagram" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/materi/message-arrow" icon="right">Berikutnya</ButtonNavigasi>
        </div>
      </div>
    </div>
  );
}
