// src/pages/Materi3.jsx
import SectionTitle from "../../components/Materi/SectionTitle";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import ButtonNavigasi from "../../components/Materi/ButtonNavigasi";

import MT1 from "../../assets/Materi/mt5-1.png";
import MT1_ from "../../assets/Materi/mt5-1-1.png";
import MT2 from "../../assets/Materi/mt5-2.png";
import MT2_ from "../../assets/Materi/mt5-2-1.png";
import MT3 from "../../assets/Materi/mt5-3.png";
import MT4 from "../../assets/Materi/mt5-4.png";
import MT5 from "../../assets/Materi/mt5-5.png";
import MT6 from "../../assets/Materi/mt5-6.png";
import MT7 from "../../assets/Materi/mt5-7.png";


export default function Materi4() {
  return (
    <div className="container">
      <div className="flex flex-col w-full m-auto gap-9">
        <SectionTitle title="Apa itu Message Arrow?" />
        
        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/lifeline-notation" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/materi/activation-bar" icon="right">Berikutnya</ButtonNavigasi>
        </div>
        
        <div className="flex flex-col justify-center w-full gap-2">          
          <Paragraph>
            Dalam sequence diagram, komunikasi antar objek digambarkan melalui penggunaan pesan, yang muncul secara berurutan di garis hidup (lifeline). Unsur kunci dalam sequence diagram adalah message arrow, yang berperan penting dalam merepresentasikan interaksi atau pertukaran informasi antar objek. Message arrow tidak hanya menunjukkan arah komunikasi, tetapi juga jenis pesan yang dikirim atau diterima.
          </Paragraph>
          
          <Paragraph>
            Message arrow menghubungkan pemanggil pesan ke penerima pesan untuk menentukan arah aliran pesan dalam sequence diagram. Pesan dapat mengalir ke segala arah; dari kiri ke kanan, kanan ke kiri, atau kembali ke Pemanggil Pesan itu sendiri. Meskipun dapat mendeskripsikan pesan yang dikirim dari satu objek ke objek lainnya pada panah, dengan kepala panah yang berbeda Anda dapat menunjukkan jenis pesan yang dikirim atau diterima.
          </Paragraph>
          
          <Paragraph>
            Dengan menggunakan message arrow, kita dapat dengan jelas menggambarkan dinamika komunikasi antar objek dalam suatu sistem, mempermudah pemahaman tentang alur pesan dan jenis interaksi yang terjadi dalam diagram urutan. Berikut adalah jenis-jenis message arrow.
          </Paragraph>
          
          <Paragraph className="font-semibold">Synchronous message</Paragraph>
          <Paragraph>
            Pesan sinkron digunakan ketika pengirim menunggu penerima memproses pesan dan kembali sebelum melanjutkan dengan pesan lain. Kepala panah yang digunakan untuk menunjukkan jenis pesan ini berbentuk padat, seperti di bawah ini.
          </Paragraph>
          <Image src={MT1} alt="Synchronous message"/>
          <Paragraph>
            Gunakan pesan synchronous ketika tanggapan langsung diperlukan dalam situasi interaksi real-time atau ketika urutan tindakan bergantung pada respon sebelumnya. Contohnya dalam proses autentikasi login, pesan synchronous digunakan ketika sistem mengirim permintaan login dan menunggu tanggapan yang berisi informasi keberhasilan atau kegagalan login. Dibawah ini merupakan contoh synchronous message.
          </Paragraph>
          <Image src={MT1_} alt="Contoh Synchronous message"/>
          
          <Paragraph className="font-semibold">Asynchronous message</Paragraph>
          <Paragraph>
          Pesan asinkron digunakan ketika pemanggil pesan tidak menunggu penerima memproses pesan dan kembali sebelum mengirim pesan lain ke objek lain dalam sistem. Kepala panah yang digunakan untuk menampilkan pesan jenis ini adalah panah garis seperti yang ditunjukkan pada contoh di bawah ini.
          </Paragraph>
          <Image src={MT2} alt="Asynchronous message" />
          <Paragraph>
          Gunakan pesan asynchronous ketika interaksi tidak memerlukan tanggapan langsung atau ketika tugas dapat dilakukan secara independen. Contohnya dalam pengiriman email, pesan asynchronous digunakan ketika pengirim mengirim email dan tidak perlu menunggu penerima membaca atau merespons langsung. Dibawah ini merupakan contoh Asynchronous message.
          </Paragraph>
          <Image src={MT2_} alt="Contoh Asynchronous message" />
          
          <Paragraph className="font-semibold">Return message</Paragraph>
          <Paragraph>
            Pesan balasan digunakan untuk menunjukkan bahwa penerima pesan telah selesai memproses pesan dan mengembalikan kendali ke pemanggil pesan. Pesan balasan adalah bagian notasi opsional, karena bilah aktivasi yang dipicu oleh pesan sinkron selalu menyiratkan pesan balasan.
          </Paragraph>
          <Image src={MT3} alt="Return message" />

          <Paragraph className="font-semibold">Participant creation message</Paragraph>
          <Paragraph>
            Objek belum tentu hidup sepanjang rangkaian peristiwa. Objek atau partisipan dapat dibuat sesuai dengan pesan yang dikirimkan. Notasi kotak peserta yang dijatuhkan dapat digunakan ketika Anda perlu menunjukkan bahwa peserta tertentu tidak ada sampai panggilan buat dikirim. Jika peserta yang dibuat melakukan sesuatu segera setelah pembuatannya, Anda harus menambahkan kotak aktivasi tepat di bawah kotak peserta
          </Paragraph>
          <Image src={MT4} alt="Participant creation message" />

          <Paragraph className="font-semibold">Participant destruction message</Paragraph>
          <Paragraph>
            peserta bila tidak diperlukan lagi juga dapat dihapus dari sequence diagram. Hal ini dilakukan dengan menambahkan tanda &apos;X&apos; di akhir lifeline peserta tersebut.
          </Paragraph>
          <Image src={MT5} alt="Participant destruction message" />

          <Paragraph className="font-semibold">Reflexive message</Paragraph>
          <Paragraph>
            Ketika suatu objek mengirimkan pesan kepada dirinya sendiri, hal itu disebut pesan refleksif. Hal ini ditunjukkan dengan panah pesan yang dimulai dan diakhiri pada lifeline yang sama seperti yang ditunjukkan pada contoh di bawah.
          </Paragraph>
          <Image src={MT6} alt="Reflexive message" />

          <Paragraph className="font-semibold">Found message</Paragraph>
          <Paragraph>
          Found message digunakan untuk mewakili skenario di mana sumber tidak dikenal mengirimkan pesan. Hal ini direpresentasikan dengan menggunakan panah yang diarahkan menuju garis hidup dari suatu titik akhir. Misalnya: Pertimbangkan skenario kegagalan perangkat keras.
          </Paragraph>
          <Image src={MT7} alt="Found message" />
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/lifeline-notation" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/materi/activation-bar" icon="right">Berikutnya</ButtonNavigasi>
        </div>
      </div>
    </div>
  );
}
