import { createBrowserRouter, Navigate } from "react-router-dom";

import RootLayout from "./components/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";

import M1 from "./pages/Materi/M1";
import M2 from "./pages/Materi/M2";
import M3 from "./pages/Materi/M3";
import M4 from "./pages/Materi/M4";
import M5 from "./pages/Materi/M5";
import M6 from "./pages/Materi/M6";
import M7 from "./pages/Materi/M7";

import MenuKuis from "./pages/Kuis/MenuKuis.jsx";
import T1 from "./pages/Kuis/T1.jsx";
import T2 from "./pages/Kuis/T2.jsx";
import T3 from "./pages/Kuis/T3.jsx";
import T4 from "./pages/Kuis/T4.jsx";

import MenuLatihan from "./pages/Latihan/MenuLatihan.jsx";
import TL1 from "./pages/Latihan/TL1.jsx";
import TL2 from "./pages/Latihan/TL2.jsx";
import TL3 from "./pages/Latihan/TL3.jsx";
import TL4 from "./pages/Latihan/TL4.jsx";
import Pembahasan1 from "./pages/Latihan/Pembahasan1.jsx";
import Pembahasan2 from "./pages/Latihan/Pembahasan2.jsx";
import Pembahasan3 from "./pages/Latihan/Pembahasan3.jsx";
import Pembahasan4 from "./pages/Latihan/Pembahasan4.jsx";

const page = (path, element, title) => ({ path, element, handle: { title } });

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      page("/", <HomePage />, "Belajar Sequence Diagram"),

      page("/materi/sequence-diagram", <M1 />, "Penjelasan Umum Sequence Diagram"),
      page("/materi/notasi-sequence-diagram", <M2 />, "Notasi dalam Sequence Diagram"),
      page("/materi/lifeline-notation", <M3 />, "Lifeline Notation"),
      page("/materi/message-arrow", <M4 />, "Message Arrow"),
      page("/materi/activation-bar", <M5 />, "Activation Bar"),
      page("/materi/cara-membuat-sequence-diagram", <M6 />, "Cara Membuat Sequence Diagram"),
      page("/materi/contoh-sequence-diagram", <M7 />, "Contoh-contoh Sequence Diagram"),

      page("/kuis", <MenuKuis />, "Kuis"),
      page("/kuis/T1", <T1 />, "Kuis Penjelasan Umum"),
      page("/kuis/T2", <T2 />, "Kuis Lifeline Notation"),
      page("/kuis/T3", <T3 />, "Kuis Message Arrow"),
      page("/kuis/T4", <T4 />, "Kuis Notasi Sequence Diagram"),

      page("/latihan", <MenuLatihan />, "Latihan"),
      page("/latihan/T1", <TL1 />, "Latihan: Proses Login Aplikasi"),
      page("/latihan/T2", <TL2 />, "Latihan: Reservasi Tiket Bioskop"),
      page("/latihan/T3", <TL3 />, "Latihan: Sistem Pemesanan Kamar Hotel"),
      page("/latihan/T4", <TL4 />, "Latihan: Manajemen Barang Toko Online"),
      page("/latihan/T1/pembahasan", <Pembahasan1 />, "Pembahasan: Proses Login Aplikasi"),
      page("/latihan/T2/pembahasan", <Pembahasan2 />, "Pembahasan: Reservasi Tiket Bioskop"),
      page("/latihan/T3/pembahasan", <Pembahasan3 />, "Pembahasan: Sistem Pemesanan Kamar Hotel"),
      page("/latihan/T4/pembahasan", <Pembahasan4 />, "Pembahasan: Manajemen Barang Toko Online"),
      // Alamat lama /latihanT1/pembahasanT1 tetap berfungsi (bookmark/tautan lama)
      ...[1, 2, 3, 4].map((n) => ({
        path: `/latihanT${n}/pembahasanT${n}`,
        element: <Navigate to={`/latihan/T${n}/pembahasan`} replace />,
      })),

      page("*", <NotFound />, "Halaman tidak ditemukan"),
    ],
  },
]);
