import type { Notasi, Question } from "../types";
import Notasi1 from "../assets/Notasi/notasi2.png";
import Notasi2 from "../assets/Notasi/notasi9.png";
import NT1 from "../assets/Notasi/notasi1.png";
import NT2 from "../assets/Notasi/notasi2.png";
import NT3 from "../assets/Notasi/notasi3.png";
import NT4 from "../assets/Notasi/notasi4.png";
import NT5 from "../assets/Notasi/notasi5.png";
import NT6 from "../assets/Notasi/notasi6.png";
import NT7 from "../assets/Notasi/notasi7.png";
import NT8 from "../assets/Notasi/notasi8.png";
import NT9 from "../assets/Notasi/notasi9.png";
import NT10 from "../assets/Notasi/notasi10.png";
import NT11 from "../assets/Notasi/notasi11.png";
import NT12 from "../assets/Notasi/notasi12.png";
import NT13 from "../assets/Notasi/notasi13.png";
import NT14 from "../assets/Notasi/notasi14.png";
import NT15 from "../assets/Notasi/notasi15.png";
import NT16 from "../assets/Notasi/notasi16.png";
import NT17 from "../assets/Notasi/notasi17.png";
import NT18 from "../assets/Notasi/notasi18.png";

// Kuis 
export const questionsT1: Question[] = [
  {
    id: 1,
    question: "Apa yang menjadi fokus utama dari Sequence Diagram dalam UML?",
    options: [
      { text: "Atribut objek", value: "option1", explanation: "Atribut objek tidak menjadi fokus utama dalam Sequence Diagram." },
      { text: "Warna latar belakang", value: "option2", explanation: "Warna latar belakang bukan merupakan fokus utama dari Sequence Diagram" },
      { text: "Pertukaran pesan antara sejumlah lifelines", value: "option3", explanation: "Pertukaran pesan antara sejumlah lifelines merupakan fokus utama dari Sequence Diagram" },
      { text: "Metode kelas", value: "option4", explanation: "Metode kelas bukan merupakan fokus utama dari Sequence Diagram" },
    ],
    correctAnswer: "option3",
  },
  {
    id: 2,
    question: "Manakah dari berikut ini yang biasanya digambar dalam diagram urutan UML?",
    options: [
      { text: "Lifeline dan message", value: "option1", explanation: "Lifeline dan message yang biasanya digambarkan dalam Sequence Diagram" },
      { text: "Node dan edge", value: "option2", explanation: "Node dan edge tidak digambarkan dalam Sequence Diagram" },
      { text: "State dan transition", value: "option3", explanation: "State dan transition tidak digambarkan dalam Sequence Diagram" },
      { text: "Package dan class", value: "option4", explanation: "Package dan class tidak digambarkan dalam Sequence Diagram" },
    ],
    correctAnswer: "option1",
  },
  {
    id: 3,
    question: "Apa yang digambarkan oleh Sequence Diagram?",
    options: [
      { text: "Urutan objek dalam sistem", value: "option1", explanation: "Urutan objek dalam sistem bukan merupakan apa yang digambarkan oleh Sequence Diagram" },
      { text: "Urutan terjadinya interaksi", value: "option2", explanation: "Urutan terjadinya interaksi merupakan Apa yang digambarkan oleh Sequence Diagram" },
      { text: "Tampilan visual sistem", value: "option3", explanation: "Tampilan visual sistem dalam sistem bukan merupakan apa yang digambarkan oleh Sequence Diagram" },
      { text: "Hasil eksekusi program", value: "option4", explanation: "Hasil eksekusi program dalam sistem bukan merupakan apa yang digambarkan oleh Sequence Diagram" },
    ],
    correctAnswer: "option2",
  },
  {
    id: 4,
    question: "Siapa yang sering menggunakan Sequence Diagram untuk mendokumentasikan dan memahami persyaratan sistem?",
    options: [
      { text: "Ilmuwan komputer", value: "option1", explanation: "Ilmuwan komputer jarang menggunakan Sequence Diagram untuk mendokumentasikan dan memahami persyaratan sistem" },
      { text: "Pengembang perangkat lunak", value: "option2", explanation: "Pengembang perangkat lunak sering menggunakan Sequence Diagram untuk mendokumentasikan dan memahami persyaratan sistem" },
      { text: "Ahli matematika", value: "option3", explanation: "Ahli matematika tidak menggunakan Sequence Diagram untuk mendokumentasikan dan memahami persyaratan sistem" },
      { text: "Aktor dalam film", value: "option4", explanation: "Aktor dalam film tidak menggunakan Sequence Diagram untuk mendokumentasikan dan memahami persyaratan sistem" },
    ],
    correctAnswer: "option2",
  },
  {
    id: 5,
    question: "Apakah Sequence Diagram termasuk dalam Unified Modelling Language (UML)",
    options: [
      { text: "Ya", value: "option1", explanation: "Sequence Diagram termasuk dalam Unified Modelling Language (UML)" },
      { text: "Tidak", value: "option2", explanation: "Salah, Sequence Diagram termasuk dalam Unified Modelling Language (UML)" },
    ],
    correctAnswer: "option1",
  },
];

export const questionsT2: Question[] = [
  {
    id: 1,
    question: "Apa fungsi dari Lifeline notation dalam sequence diagram?",
    options: [
      { text: "Representasi visual aktor", value: "option1", explanation: "Representasi visual aktor bukan merupakan fungsi dari lifeline notation" },
      { text: "Mewakili data sistem", value: "option2", explanation: "Mewakili data sistem bukan merupakan fungsi dari lifeline notation" },
      { text: "Menggambarkan interaksi antara objek", value: "option3", explanation: "Menggambarkan interaksi antara objek merupakan fungsi dari lifeline notation" },
      { text: "Menunjukkan batas sistem/elemen perangkat lunak", value: "option4", explanation: "Menunjukkan batas sistem/elemen perangkat lunak bukan merupakan fungsi dari lifeline notation" },
    ],
    correctAnswer: "option3",
  },
  {
    id: 2,
    question: "Apa fungsi Lifeline notation dengan simbol aktor dalam sequence diagram?",
    options: [
      { text: "Mengelola data sistem", value: "option1", explanation: "Mengelola data sistem bukan merupakan fungsi Lifeline notation simbol/elemen aktor" },
      { text: "Mewakili batas sistem", value: "option2", explanation: "Mewakili batas sistem bukan merupakan fungsi Lifeline notation simbol/elemen aktor" },
      { text: "Merepresentasikan interaksi dengan aktor eksternal", value: "option3", explanation: "Merepresentasikan interaksi dengan aktor eksternal merupakan fungsi Lifeline notation simbol/elemen aktor" },
      { text: "Menjadwalkan interaksi antara entitas", value: "option4", explanation: "Menjadwalkan interaksi antara entitas bukan merupakan fungsi Lifeline notation simbol/elemen aktor" },
    ],
    correctAnswer: "option3",
  },
  {
    id: 3,
    question: "Elemen Lifeline notation terletak pada bagian mana dalam sequence diagram?",
    options: [
      { text: "Bagian bawah", value: "option1", explanation: "Elemen Lifeline notation tidak terletak pada bagian bawah" },
      { text: "Bagian atas", value: "option2", explanation: "Elemen Lifeline notation terletak pada bagian atas" },
      { text: "Bagian tengah", value: "option3", explanation: "Elemen Lifeline notation tidak terletak pada bagian tengah" },
      { text: "Bagian samping", value: "option4", explanation: "Elemen Lifeline notation tidak terletak pada bagian samping" },
    ],
    correctAnswer: "option2",
  },
  {
    id: 4,
    question: "Bagaimana lifeline direpresentasikan dalam sebuah sequence diagram?",
    options: [
      { text: "Menggunakan garis lurus", value: "option1", explanation: "lifeline tidak direpresentasikan/digambarkan dengan garis lurus" },
      { text: "Menggunakan garis bergerigi", value: "option2", explanation: "lifeline tidak direpresentasikan/digambarkan dengan garis bergerigi" },
      { text: "Menggunakan garis berbentuk gelombang", value: "option3", explanation: "lifeline tidak direpresentasikan/digambarkan dengan garis berbentuk gelombang" },
      { text: "Menggunakan garis putus-putus", value: "option4", explanation: "lifeline direpresentasikan/digambarkan dengan garis putis-putus" },
    ],
    correctAnswer: "option4",
  },
  {
    id: 5,
    question: "Apa yang maksud dari simbol 'stop' atau destruction pada lifeline dalam sequence diagram?",
    options: [
      { text: "Objek yang aktif", value: "option1", explanation: "Objek yang aktif bukan merupakan maksud dari simbol 'stop' atau destruction pada lifeline" },
      { text: "Objek yang dihancurkan", value: "option2", explanation: "Objek yang dihancurkan merupakan maksud dari simbol 'stop' atau destruction pada lifeline" },
      { text: "Durasi dari interaksi", value: "option3", explanation: "Durasi dari interaksi bukan merupakan maksud dari simbol 'stop' atau destruction pada lifeline" },
      { text: "Pesan yang dikirim", value: "option4", explanation: "Pesan yang dikirim bukan merupakan maksud dari simbol 'stop' atau destruction pada lifeline" },
    ],
    correctAnswer: "option2",
  },
];

export const questionsT3: Question[] = [
  {
    id: 1,
    question: "Apa yang maksud/tujuan dari message arrow pada sequence diagram?",
    options: [
      { text: "Objek-objek dalam sebuah sistem", value: "option1", explanation: "Objek-objek dalam sebuah sistem bukan merupakan maksud/tujuan dari message arrow" },
      { text: "Komunikasi antar objek", value: "option2", explanation: "Komunikasi antar objek merupakan maksud/tujuan dari message arrow" },
      { text: "Interaksi antar objek-objek dalam sebuah sistem", value: "option3", explanation: "Interaksi antar objek-objek dalam sebuah sistem bukan merupakan maksud/tujuan dari message arrow" },
      { text: "Waktu pelaksanaan sebuah perintah", value: "option4", explanation: "Waktu pelaksanaan sebuah perintah bukan merupakan maksud/tujuan dari message arrow" },
    ],
    correctAnswer: "option2",
  },
  {
    id: 2,
    question: "Apa yang digunakan untuk menggambarkan komunikasi antar objek pada sequence diagram?",
    options: [
      { text: "Anak panah", value: "option1", explanation: "Untuk menggambarkan komunikasi antar objek menggunakan Anak panah" },
      { text: "Lingkaran", value: "option2", explanation: "Lingkaran tidak digunakan untuk menggambarkan komunikasi antar objek" },
      { text: "Garis vertikal", value: "option3", explanation: "Garis vertikal tidak digunakan untuk menggambarkan komunikasi antar objek" },
      { text: "Garis Horizontal", value: "option4", explanation: "Garis Horizontal tidak digunakan untuk menggambarkan komunikasi antar objek" },
    ],
    correctAnswer: "option1",
  },
  {
    id: 3,
    question: "Apa yang dimaksud dengan synchronous message pada sequence diagram?",
    options: [
      { text: "Pesan yang dikirim oleh objek tanpa menunggu respon dari objek lain", value: "option1", explanation: "Pesan yang dikirim oleh objek tanpa menunggu respon dari objek lain merupakan pengertian dari asynchronous message" },
      { text: "Pesan yang dikirim oleh objek dan menunggu respon dari objek lain", value: "option2", explanation: "synchronous message merupakan pesan yang dikirim oleh objek dan menunggu respon dari objek lain" },
      { text: "Pesan yang dikirim oleh objek dan tidak menunggu respon dari objek lain", value: "option3", explanation: "Pesan yang dikirim oleh objek dan tidak menunggu respon dari objek lain bukan penjelasan dari synchronous message" },
      { text: "Pesan yang dikirim oleh objek dan menunggu respon dari objek lain, namun tidak memblokir objek pengirim", value: "option4", explanation: "Pesan yang dikirim oleh objek dan menunggu respon dari objek lain, namun tidak memblokir objek pengirim bukan penjelasan dari synchronous message" },
    ],
    correctAnswer: "option2",
  },
  {
    id: 4,
    question: "Apa yang dimaksud dengan asynchronous message pada sequence diagram?",
    options: [
      { text: "Pesan yang dikirim oleh objek tanpa menunggu respon dari objek lain", value: "option1", explanation: "synchronous message merupakan pesan yang dikirim oleh objek tanpa menunggu respon dari objek lain" },
      { text: "Pesan yang dikirim oleh objek dan menunggu respon dari objek lain", value: "option2", explanation: "Pesan yang dikirim oleh objek dan menunggu respon dari objek lain merupakan pengertian dari synchronous message" },
      { text: "Pesan yang dikirim oleh objek dan tidak menunggu respon dari objek lain", value: "option3", explanation: "Pesan yang dikirim oleh objek dan tidak menunggu respon dari objek lain bukan penjelasan dari asynchronous message" },
      { text: "Pesan yang dikirim oleh objek dan menunggu respon dari objek lain, namun tidak memblokir objek pengirim", value: "option4", explanation: "Pesan yang dikirim oleh objek dan menunggu respon dari objek lain, namun tidak memblokir objek pengirim bukan penjelasan dari asynchronous message" },
    ],
    correctAnswer: "option1",
  },
  {
    id: 5,
    question: "Apa yang disebut pesan Reflexive dalam sequence diagram?",
    options: [
      { text: "Pesan yang hilang", value: "option1", explanation: "Pesan yang hilang bukan penjelasan dari Reflexive" },
      { text: "Pesan yang berulang", value: "option2", explanation: "Pesan yang berulang bukan penjelasan dari Reflexive" },
      { text: "Pesan yang dikirim oleh objek kepada dirinya sendiri", value: "option3", explanation: "Pesan yang dikirim oleh objek kepada dirinya sendiri" },
      { text: "Pesan yang belum terdefinisi", value: "option4", explanation: "Pesan yang belum terdefinisi bukan penjelasan dari Reflexive" },
    ],
    correctAnswer: "option3",
  },
];


export const questionsT4: Question[] = [
  {
    id: 1,
    question: "Apa tujuan digunakannya simbol 'activation bar' pada lifeline dalam sequence diagram?",
    options: [
      { text: "Durasi dari interaksi", value: "option1", explanation: "Durasi dari interaksi bukan tujuan digunakannya simbol 'activation bar'" },
      { text: "Objek yang aktif", value: "option2", explanation: "Tujuan digunakannya simbol 'activation bar' yaitu untuk menunjukan bahwa suatu objek yang aktif" },
      { text: "Objek yang dihancurkan", value: "option3", explanation: "Objek yang dihancurkan bukan tujuan digunakannya simbol 'activation bar'" },
      { text: "Pesan yang dikirim", value: "option4", explanation: "Pesan yang dikirim bukan tujuan digunakannya simbol 'activation bar'" },
    ],
    correctAnswer: "option2",
  },
  {
    id: 2,
    question: "Apa nama notasi dibawah ini",
    imgSrc: Notasi1,
    options: [
      { text: "Boundary Class", value: "option1", explanation: "Benar, notasi tersebut adalah Boundary Class, yang menunjukkan batas antara sistem dan aktor (misalnya antarmuka pengguna)." },
      { text: "Entity Class", value: "option2", explanation: "Nama notasi tersebut bukan Entity Class" },
      { text: "Control Class", value: "option3", explanation: "Nama notasi tersebut bukan Control Class" },
      { text: "Destruction", value: "option4", explanation: "Nama notasi tersebut bukan Destruction" },
    ],
    correctAnswer: "option1",
  },
  {
    id: 3,
    question: "Notasi apa yang digunakan untuk merepresentasikan objek-objek yang menyimpan data atau informasi yang penting untuk sistem?",
    options: [
      { text: "Boundary Class", value: "option1", explanation: "Boundary Class digunakan untuk menunjukkan batas sistem/elemen perangkat lunak dalam suatu sistem." },
      { text: "Entity Class", value: "option2", explanation: "Entity Class digunakan untuk merepresentasikan objek-objek yang menyimpan data atau informasi yang penting untuk sistem." },
      { text: "Control Class", value: "option3", explanation: "Control Class digunakan untuk merepresentasikan komponen yang mengendalikan proses bisnis atau alur kontrol dalam suatu sistem." },
      { text: "Destruction", value: "option4", explanation: "Destruction untuk menunjukkan penghancuran suatu objek atau entitas di dalam sistem." },
    ],
    correctAnswer: "option2",
  },
  {
    id: 4,
    question: "Apa dari blok 'alt' dalam sequence diagram?",
    options: [
      { text: "Menyusun objek", value: "option1", explanation: "Menyusun objek bukan tujuan dari blok 'alt'." },
      { text: "Menghapus objek", value: "option2", explanation: "Menghapus objek bukan tujuan dari blok 'alt'." },
      { text: "Menciptakan objek baru", value: "option3", explanation: "Menciptakan objek baru bukan tujuan dari blok 'alt'." },
      { text: "Menunjukkan percabangan kondisional", value: "option4", explanation: "Tujuan dari blok 'alt' yaitu untuk menunjukkan percabangan kondisional" },
    ],
    correctAnswer: "option4",
  },
  {
    id: 5,
    question: "Apa nama notasi dibawah ini dan digunakan untuk apa?",
    imgSrc:Notasi2,
    options: [
      { text: "Found message, digunakan untuk mewakili skenario di mana sumber tidak dikenal mengirimkan pesan", value: "option1", explanation: "Nama notasi ini adalah Found message, digunakan untuk mewakili skenario di mana sumber tidak dikenal mengirimkan pesan" },
      { text: "Found Message, digunakan untuk menunjukkan bahwa penerima pesan telah selesai memproses pesan dan mengembalikan kendali ke pemanggil pesan.", value: "option2", explanation: "Nama notasi ini adalah Found message, tetapi bukan digunakan untuk menunjukkan bahwa penerima pesan telah selesai memproses pesan dan mengembalikan kendali ke pemanggil pesan." },
      { text: "Recursive, digunakan untuk suatu objek mengirimkan pesan kepada dirinya sendiri.", value: "option3", explanation: "Nama notasi ini bukan Recursive, digunakan untuk suatu objek mengirimkan pesan kepada dirinya sendiri." },
      { text: "Boundary Class digunakan untuk menunjukkan batas sistem/elemen perangkat lunak dalam suatu sistem", value: "option4", explanation: "Nama notasi ini bukan Boundary Class, digunakan untuk menunjukkan batas sistem/elemen perangkat lunak dalam suatu sistem" },
    ],
    correctAnswer: "option1",
  },
];

// Notasi untuk latihan

export const notasi: Notasi[] = [
  {
      img: NT1,
      title: "Actor",
  },
  {
      img: NT2,
      title: "Boundary Class",
  },
  {
      img: NT3,
      title: "Entity Class",
  },
  {
      img: NT4,
      title: "Control Class",
  },
  {
      img: NT5,
      title: "Synchronous Message",
  },
  {
      img: NT6,
      title: "Asynchronous Message",
  },
  {
      img: NT7,
      title: "Callback",
  },
  {
      img: NT8,
      title: "Return",
  },
  {
      img: NT9,
      title: "Found message",
  },
  {
      img: NT10,
      title: "Lifeline notation",
  },
  {
      img: NT11,
      title: "Activation Bar",
  },
  {
      img: NT12,
      title: "Recursive",
  },
  {
      img: NT13,
      title: "Destruction",
  },
  {
      img: NT14,
      title: "Objek",
  },
  {
      img: NT15,
      title: "Frame",
  },
  {
      img: NT16,
      title: "Comment",
  },
  {
      img: NT17,
      title: "Option loop",
  },
  {
      img: NT18,
      title: "Alternative",
  },
];