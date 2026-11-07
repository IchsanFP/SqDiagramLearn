// src/pages/Materi3.jsx
import SectionTitle from "../../components/Materi/SectionTitle";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import ButtonNavigasi from "../../components/Materi/ButtonNavigasi";

import MT1_ from "../../assets/Materi/mt6-1R.png";
import MT2_ from "../../assets/Materi/mt6-2R.png";


export default function Materi6() {
  return (
    <div className="container">
      <div className="flex flex-col w-full m-auto gap-9">
        <SectionTitle title="Bagaimana cara membuat Sequence Diagram?" />

        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/activation-bar" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/materi/contoh-sequence-diagram" icon="right">Berikutnya</ButtonNavigasi>
        </div>
        
        <div className="flex flex-col justify-center w-full gap-2">          
          <Paragraph>
            Sequence Diagram mewakili skenario atau alur dalam satu use case diagram. Alur pesan dalam sequence diagram didasarkan pada narasi dari use case tertentu.
          </Paragraph>
          
          <Paragraph>
            Sebelum Anda mulai menggambar sequence diagram atau memutuskan interaksi apa yang harus disertakan di dalamnya, Anda perlu menggambar use case diagram dan menyiapkan deskripsi komprehensif tentang apa yang dilakukan use case tertentu.
          </Paragraph>
          
          <Paragraph>
            Berikut adalah contoh Use Case Diagram 
          </Paragraph>
          <Image src={MT1_} alt="Lifeline notation dengan simbol aktor" />
          
          <Paragraph className="font-semibold">Lifeline notation dengan simbol aktor</Paragraph>
          <Paragraph>
            Dari contoh use case diagram &quot;Create New Online Bank Account&quot; di atas, kami akan mangambil contoh
            untuk menggambar sequence diagram pada use case bernama &quot;Create New Bank User Account&quot;.
          </Paragraph>
      
          <Paragraph className="font-semibold">
            Langkah - langkah membuat sequence diagram
          </Paragraph>
          
          <Paragraph className="font-semibold">Lifeline notation dengan elemen control</Paragraph>
          <Paragraph>
            Pertama, sebelum kita menggambar sequence diagram, penting untuk mengidentifikasi objek atau aktor
            yang akan terlibat dalam pembuatan akun pengguna baru. Berikut adalah objek atau aktor yang akan
            terlibat.
          </Paragraph>
          
          <Paragraph as="div">
          <ol className="list-decimal ml-4">
              <li>Employee</li>
              <li>Online Bank Management</li>
              <li>User credentials database</li>
              <li>Email system</li>
            </ol>
          </Paragraph>

          <Paragraph>
            Kedua, setelah mengidentifikasi objek selanjutnya menulis deskripsi mengenai apa yang dilakukan oleh
            use case. Hal ini bertujuan untuk mengetahui interaksi (yang seharusnya ada dalam sequence diagram)
            yang akan terjadi antara objek-objek di atas, setelah use case dijalankan. Berikut langkah-langkah
            yang terjadi pada use case bernama &quot;Create New Bank User Account&quot;.
          </Paragraph>

          <Paragraph as="div">
            <ol className="list-decimal ml-4">
              <li>The employee meminta sistem untuk membuat akun Bank online baru (Create new online bank account)</li>
              <li>The employee kemudian memilih tipe akun pengguna Bank</li>
              <li>The employee memasukkan rincian pengguna</li>
              <li>Detail pengguna diperiksa menggunakan User credentials database</li>
              <li>Akun pengguna Bank baru telah dibuat</li>
              <li>Ringkasan rincian akun baru kemudian dikirim melalui email ke pengguna</li>
            </ol>
          </Paragraph>

          <Paragraph>
            Setelah langkah pertama dan kedua dilakukan selanjutnya anda dapat dengan mudah menentukan pesan apa
            yang harus dipertukarkan antar objek dalam sequence diagram.
          </Paragraph>

          <Paragraph>
            Dibawah ini adalah sequence diagram yang menunjukkan bagaimana objek-objek dalam sistem manajemen
            bank online berinteraksi satu sama lain untuk menjalankan fungsi ”Create New Bank User Account”.
          </Paragraph>

          <Image src={MT2_} alt="Lifeline notation dengan elemen boundry" />
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/activation-bar" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/materi/contoh-sequence-diagram" icon="right">Berikutnya</ButtonNavigasi>
        </div>
      </div>
    </div>
  );
}
