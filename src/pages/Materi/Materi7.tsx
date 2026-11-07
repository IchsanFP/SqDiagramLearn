// src/pages/Materi3.jsx
import SectionTitle from "../../components/Materi/SectionTitle";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import ButtonNavigasi from "../../components/Materi/ButtonNavigasi";

import MT1 from "../../assets/contoh/contoh1.png";
import MT2 from "../../assets/contoh/contoh2.png";
import MT3 from "../../assets/contoh/contoh3.png";


export default function Materi7() {
  return (
    <div className="container">
      <div className="flex flex-col w-full m-auto gap-9">
        <SectionTitle title="Contoh-contoh Sequence Diagram !!!" />

        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/cara-membuat-sequence-diagram" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/kuis" icon="right">Lanjut ke Kuis</ButtonNavigasi>
        </div>
        
        <div className="flex flex-col justify-center w-full gap-2">
          {/* Studikasus 1 */}
          <Paragraph className="font-semibold text-[22px]">Studi Kasus Pencarian Tempat Wisata</Paragraph>
          
          <Paragraph>
            Sebuah aplikasi wisata ingin meningkatkan fungsionalitasnya dengan menambahkan sistem pencarian
            tempat wisata. Buatlah sequence diagram untuk menggambarkan proses pencarian tempat wisata oleh
            pengguna dalam aplikasi tersebut. Proses dimulai ketika pengguna memasukkan kata kunci pencarian
            hingga aplikasi menampilkan hasil pencarian yang sesuai.
          </Paragraph>
          
          <Paragraph>
            Berikut adalah scenario use casenya :
          </Paragraph>
          
          <Paragraph as="div">
            <ol className="list-decimal ml-4">
              <li>Wisatawan sudah membuka aplikasi dan berada di menu search bar.</li>
              <li>Wisatawan memasukan nama dari tempat wisata yang ingin dicari.</li>
              <li>Database memvalidasi data yang di inputkan oleh wisatawan.</li>
              <li>Jika data yang di inputkan oleh wisatawan terdapat kesamaan dengan data yang ada di database
                  maka sistem akan menampilkan daftar tempat wisata yang diinputkan oleh user.</li>
              <li>Jika tidak terjadi kesamaan dengan database maka sistem akan mengirimkan pesan pencarian tidak
                  ditemukan atau gagal</li>
            </ol>
          </Paragraph>

          <Paragraph className="font-semibold">Penjelasan</Paragraph>
          <Paragraph>
            Langkah pertama untuk membuat sequence diagram yaitu mengidentifikasi objek atau aktor yang akan
            terlibat. Dalam kasus diatas objek atau aktor yang terlibat yaitu Wisatawan, Search bar, Database,
            dan Results Page. Selanjutnya memahami use case scenario mengenai apa yang dilakukan antara aktor
            dan objeknya.
          </Paragraph>
          
          <Paragraph className="font-semibold">Hasil</Paragraph>
          <Image src={MT1} alt="Studi Kasus Pencarian Tempat Wisata" />

          {/* sstudi kasus 2 */}
          <Paragraph className="font-semibold text-[22px]">Studi Kasus User Register</Paragraph>
          
          <Paragraph>
            Sebuah aplikasi memerlukan proses register untuk memberikan akses kepada pengguna.
          </Paragraph>
          
          <Paragraph>
            Berikut adalah scenario use casenya :
          </Paragraph>
          
          <Paragraph as="div">
            <ol className="list-decimal ml-4">
              <li>Pengguna menginputkan username pada halaman registrasi.</li>
              <li>Database melakukan pengecekan username yang diinputkan oleh pengguna.</li>
              <li>Jika username sudah tersedia pada database maka akan menampilkan pesan &quot;username sudah
                  digunakan&quot;.</li>
              <li>Jika username belum tersedia maka pengguna menginputkan password</li>
              <li>Jika password kurang dari 6 karakter atau tidak mengandung angka maka akan menampilkan pesan
                  &quot;password tidak valid&quot;</li>
              <li>Jika inputan password benar maka pengguna langsung menginputkan password konfirmasi</li>
              <li>Jika password konfirmasi tidak sama dengan password maka akan menampilkan pesan &quot;password tidak
                  cocok.&quot;</li>
              <li>Jika password konfirmasi sama dengan password maka pengguna melakuka konfirmasi regitrasi</li>
            </ol>
          </Paragraph>

          <Paragraph className="font-semibold">Penjelasan</Paragraph>
          <Paragraph>
            Langkah pertama untuk membuat sequence diagram yaitu mengidentifikasi objek atau aktor yang akan
            terlibat. Dalam kasus diatas objek atau aktor yang terlibat yaitu Pengguna, Registrasi, dan
            Database. Selanjutnya memahami use case scenario mengenai apa yang dilakukan antara aktor dan
            objeknya.
          </Paragraph>
          
          <Paragraph className="font-semibold">Hasil</Paragraph>
          <Image src={MT2} alt="Studi Kasus User Register" />

          {/* Studikasus 3 */}
          <Paragraph className="font-semibold text-[22px]">Studi Kasus Proses Transaksi Belanja Online</Paragraph>
          
          <Paragraph>
            Berikut adalah scenario use case dari studi kasus Proses Transaksi Belanja Online:
          </Paragraph>
          
          <Paragraph as="div">
            <ol className="list-decimal ml-4">
              <li>Customer mencari produk pada website belanja</li>
              <li>Customer menambahkan produk ke keranjang</li>
              <li>Customer memulai proses checkout</li>
              <li>Website belanja mengambil informasi pembayaran customer dan mengirimkannya ke gateway pembayaran
                  untuk diproses.</li>
              <li>Setelah gateway pembayaran mengkonfirmasi pembayaran, situs website belanja mengirimkan
                  konfirmasi kepada customer.</li>
              <li>Customer menginputkan infomasi pengiriman pada website belanja.</li>
              <li>Website belanja kemudian memberikan informasi pengiriman yang diperlukan kepada perusahaan
                  pengiriman, yang mengirimkan produk ke customer.</li>
              <li>Perusahaan pengiriman mengirim produk ke customer.</li>
            </ol>
          </Paragraph>

          <Paragraph className="font-semibold">Penjelasan</Paragraph>
          <Paragraph>
            Langkah pertama untuk membuat sequence diagram yaitu mengidentifikasi objek atau aktor yang akan
            terlibat. Dalam kasus diatas objek atau aktor yang terlibat yaitu Customer, Website Belanja, Gateway
            Pembayaran, dan Perusahaan Pengiriman. Selanjutnya memahami use case scenario mengenai apa yang
            dilakukan antara aktor dan objeknya.
          </Paragraph>
          
          <Paragraph className="font-semibold">Hasil</Paragraph>
          <Image src={MT3} alt="Studi Kasus Proses Transaksi Belanja Online" />

        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/cara-membuat-sequence-diagram" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/kuis" icon="right">Lanjut ke Kuis</ButtonNavigasi>
        </div>
      </div>
    </div>
  );
}
