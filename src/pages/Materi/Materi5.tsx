// src/pages/Materi3.jsx
import SectionTitle from "../../components/Materi/SectionTitle";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import ButtonNavigasi from "../../components/Materi/ButtonNavigasi";

import MT1 from "../../assets/Materi/mt4.png";

export default function Materi5() {
  return (
    <div className="container">
      <div className="flex flex-col w-full m-auto gap-9">
        <SectionTitle title="Apa itu Activion Bar?" />

        <div className="w-full flex justify-between">
          <ButtonNavigasi to="/materi/message-arrow" icon="left">Sebelumnya</ButtonNavigasi>
          <ButtonNavigasi to="/materi/cara-membuat-sequence-diagram" icon="right">Berikutnya</ButtonNavigasi>
        </div>
        
        <div className="flex flex-col justify-center w-full gap-2">
          <Image src={MT1} alt="Activation Bar" />
          
          <Paragraph>
            Activion Bar adalah kotak yang ditempatkan pada lifeline. Ini digunakan untuk menunjukkan bahwa suatu objek aktif (atau dipakai) selama interaksi antara dua objek. Panjang persegi panjang menunjukkan durasi objek tetap aktif.
          </Paragraph>
          
          <Paragraph>
          Dalam sequence diagram, interaksi antara dua objek terjadi ketika satu objek mengirimkan pesan ke objek lainnya. Penggunaan Activion Bari pada Lifeline Pemanggil Pesan (objek yang mengirim pesan) dan Penerima Pesan (objek yang menerima pesan) menunjukkan bahwa keduanya aktif/diinisiasi selama pertukaran pesan.
          </Paragraph>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between">
        <ButtonNavigasi to="/materi/message-arrow" icon="left">Sebelumnya</ButtonNavigasi>
        <ButtonNavigasi to="/materi/cara-membuat-sequence-diagram" icon="right">Berikutnya</ButtonNavigasi>
        </div>
      </div>
    </div>
  );
}
