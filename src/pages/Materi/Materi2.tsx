
import SectionTitle from "../../components/Materi/SectionTitle";
import ButtonNavigasi from "../../components/Materi/ButtonNavigasi";

import NT1 from "../../assets/Notasi/notasi1.png";
import NT2 from "../../assets/Notasi/notasi2.png";
import NT3 from "../../assets/Notasi/notasi3.png";
import NT4 from "../../assets/Notasi/notasi4.png";
import NT5 from "../../assets/Notasi/notasi5.png";
import NT6 from "../../assets/Notasi/notasi6.png";
import NT7 from "../../assets/Notasi/notasi7.png";
import NT8 from "../../assets/Notasi/notasi8.png";
import NT9 from "../../assets/Notasi/notasi9.png";
import NT10 from "../../assets/Notasi/notasi10.png";
import NT11 from "../../assets/Notasi/notasi11.png";
import NT12 from "../../assets/Notasi/notasi12.png";
import NT13 from "../../assets/Notasi/notasi13.png";
import NT14 from "../../assets/Notasi/notasi14.png";
import NT15 from "../../assets/Notasi/notasi15.png";
import NT16 from "../../assets/Notasi/notasi16.png";
import NT17 from "../../assets/Notasi/notasi17.png";
import NT18 from "../../assets/Notasi/notasi18.png";

const notasi = [
    {
        img: NT1,
        title: "Actor",
        desc: "Actor digunakan untuk mewakili Actor eksternal yang berinteraksi dengan sistem atau entitas internal dalam suatu skenario atau proses.",
    },
    {
        img: NT2,
        title: "Boundary Class",
        desc: "Boundary Class digunakan untuk menunjukkan batas sistem/elemen perangkat lunak dalam suatu sistem",
    },
    {
        img: NT3,
        title: "Entity Class",
        desc: "Entity class digunakan untuk merepresentasikan objek-objek yang menyimpan data atau informasi yang penting untuk sistem.",
    },
    {
        img: NT4,
        title: "Control Class",
        desc: "Control class digunakan untuk merepresentasikan komponen yang mengendalikan proses bisnis atau alur kontrol dalam suatu sistem.",
    },
    {
        img: NT5,
        title: "Synchronous Message",
        desc: "Synchronous Message merupakan Pesan yang dikirim dengan menunggu respons dari penerima sebelum melanjutkan eksekusi.",
    },
    {
        img: NT6,
        title: "Asynchronous Message",
        desc: "Asynchronous Message merupakan Pesan yang dikirim tanpa menunggu respons langsung.",
    },
    {
        img: NT7,
        title: "Callback",
        desc: "Callback digunakan untuk merepresentasikan situasi di mana satu objek memanggil atau mengirimkan sinyal ke objek lain untuk meminta atau memberikan informasi.",
    },
    {
        img: NT8,
        title: "Return",
        desc: "Return Message digunakan untuk menunjukkan bahwa penerima pesan telah selesai memproses pesan dan mengembalikan kendali ke pemanggil pesan.",
    },
    {
        img: NT9,
        title: "Found message",
        desc: "Found message digunakan untuk mewakili skenario di mana sumber tidak dikenal mengirimkan pesan.",
    },
    {
        img: NT10,
        title: "Lifeline notation",
        desc: "Lifeline notation digunakan untuk mengambarkan entitas (objek atau aktor) dalam sequence diagram.",
    },
    {
        img: NT11,
        title: "Activation Bar",
        desc: "Activation Bar digunakan untuk menunjukkan bahwa suatu objek aktif (atau dipakai) selama interaksi antara dua objek.",
    },
    {
        img: NT12,
        title: "Recursive",
        desc: "Recursive digunakan untuk suatu objek mengirimkan pesan kepada dirinya sendiri.",
    },
    {
        img: NT13,
        title: "Destruction",
        desc: "Destruction untuk menunjukkan penghancuran suatu objek atau entitas di dalam sistem. Ini digunakan untuk menandai titik di mana objek atau entitas tersebut berhenti ada atau dihancurkan",
    },
    {
        img: NT14,
        title: "Objek",
        desc: "Objek digunakan untuk mewakili instans dari suatu kelas atau entitas. Objek ditempatkan pada garis vertikal yang disebut 'lifeline'  dan mewakili kehidupan objek selama interaksi.",
    },
    {
        img: NT15,
        title: "Frame",
        desc: "Frame dapat digunakn jika ada serangkaian pesan yang terkait dengan suatu operasi atau kejadian tertentu, frame dapat digunakan untuk mengelompokkannya bersama di dalam satu kotak.",
    },
    {
        img: NT16,
        title: "Comment",
        desc: "Comment digunakan untuk Menambahkan penjelasan atau keterangan tambahan untuk memperjelas bagian-bagian tertentu dari sequence diagram.",
    },
    {
        img: NT17,
        title: "Option loop",
        desc: "Option loop digunakan untuk memodelkan skenario if/then, yaitu suatu keadaan yang hanya akan terjadi dalam kondisi tertentu.",
    },
    {
        img: NT18,
        title: "Alternative",
        desc: "Alternative digunakan untuk melambangkan pilihan (yang biasanya saling eksklusif) antara dua atau lebih rangkaian pesan.",
    },
];

export default function Materi2() {
  return (
    <div className="container">
        <div className="flex flex-col w-full m-auto gap-9">
            <SectionTitle title="Apa saja Notasi dalam Sequence Diagram?"/>

            <div className="w-full flex justify-between">
                <ButtonNavigasi to="/materi/sequence-diagram" icon="left">Sebelumnya</ButtonNavigasi>
                <ButtonNavigasi to="/materi/lifeline-notation" icon="right">Berikutnya</ButtonNavigasi>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full">
                {notasi.map((card, index) => (
                    <div key={index} className="p-4 items-center flex flex-col gap-9 h-[420px] border-2 border-navy">
                        <div className="gap-2 flex flex-col m-2 items-center w-full">
                            <div className="w-28 h-28 rounded-full bg-figure overflow-hidden flex items-center justify-center">
                                <img src={card.img} alt="" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-center font-poppins text-base font-semibold text-black">{card.title}</p>
                        </div>
                        <div className="w-full text-center">
                            <p className="font-poppins font-normal text-sm">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="w-full flex justify-between">
                <ButtonNavigasi to="/materi/sequence-diagram" icon="left">Sebelumnya</ButtonNavigasi>
                <ButtonNavigasi to="/materi/lifeline-notation" icon="right">Berikutnya</ButtonNavigasi>
            </div>
        </div>
    </div>
  )
}