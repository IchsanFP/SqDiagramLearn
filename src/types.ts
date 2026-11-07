// Tipe data bersama untuk kuis dan latihan.

export type OptionValue = "option1" | "option2" | "option3" | "option4";

export interface AnswerOption {
  text: string;
  value: OptionValue;
  /** Ditampilkan di popup setelah jawaban dicek. Wajib diisi, termasuk untuk jawaban benar. */
  explanation: string;
}

export interface Question {
  id: number;
  question: string;
  /** Gambar pendukung soal; kosongkan (jangan isi "") bila tidak ada. */
  imgSrc?: string;
  options: AnswerOption[];
  correctAnswer: OptionValue;
}

export interface Notasi {
  img: string;
  title: string;
}

/** Handler navigasi header; panggil event.preventDefault() untuk menahan perpindahan halaman. */
export type NavClickHandler = (event: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
