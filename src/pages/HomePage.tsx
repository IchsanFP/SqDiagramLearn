import { Link } from "react-router-dom";
import Navbar, { HEADER_HEIGHT } from "../components/Header";

// Alur belajar yang ditawarkan situs. Angka di deskripsi harus sesuai isi:
// 7 materi (Sidebar), 4 kuis × 5 soal (Data.tsx), 4 studi kasus (MenuLatihan).
const LANGKAH = [
    {
        nomor: 1,
        judul: "Materi",
        deskripsi: "7 topik bertahap, dari pengertian Sequence Diagram sampai contoh studi kasus.",
        icon: "ri-book-open-line",
        to: "/materi/sequence-diagram",
        aksi: "Baca materi",
    },
    {
        nomor: 2,
        judul: "Kuis",
        deskripsi: "4 kuis × 5 soal pilihan ganda, lengkap dengan penjelasan setiap jawaban dan skor.",
        icon: "ri-question-answer-line",
        to: "/kuis",
        aksi: "Kerjakan kuis",
    },
    {
        nomor: 3,
        judul: "Latihan",
        deskripsi: "4 studi kasus: gambar diagrammu sendiri, unggah, lalu bandingkan dengan pembahasan.",
        icon: "ri-pencil-ruler-2-line",
        to: "/latihan",
        aksi: "Mulai latihan",
    },
];

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pb-16 bg-navy" style={{ paddingTop: HEADER_HEIGHT + 64 }}>
                <div className="container">
                    <section className="flex flex-col items-center max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 font-bold text-white text-[36px] md:text-[42px] lg:text-[48px] font-quantico">
                            sqDiagramLearn
                        </h1>
                        <p className="mb-8 text-base leading-relaxed md:text-lg lg:text-xl text-navy-muted font-poppins">
                            Pelajari Sequence Diagram UML langkah demi langkah: baca materinya, uji pemahaman lewat kuis,
                            lalu latih dengan studi kasus nyata.
                        </p>
                        <Link to="/materi/sequence-diagram" className="px-6 py-3 btn-accent">
                            Mulai Belajar
                        </Link>
                    </section>

                    <section aria-labelledby="alur-belajar" className="max-w-5xl mx-auto mt-16">
                        <h2 id="alur-belajar" className="mb-4 text-lg font-semibold text-center text-white font-poppins">
                            Alur belajar
                        </h2>
                        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {LANGKAH.map((l) => (
                                <li key={l.nomor}>
                                    <Link
                                        to={l.to}
                                        className="flex flex-col h-full gap-3 p-5 transition-colors border rounded-lg group bg-white/[0.06] border-white/20 hover:bg-white/[0.12] font-poppins"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="flex items-center justify-center w-10 h-10 text-xl rounded-lg bg-accent text-navy">
                                                <i aria-hidden="true" className={l.icon}></i>
                                            </span>
                                            <span className="flex flex-col">
                                                <span className="text-sm text-navy-muted">Langkah {l.nomor}</span>
                                                <span className="text-lg font-semibold text-white">{l.judul}</span>
                                            </span>
                                        </span>
                                        <span className="flex-1 text-sm leading-relaxed text-navy-muted">{l.deskripsi}</span>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                                            {l.aksi}
                                            <i aria-hidden="true" className="transition-transform ri-arrow-right-line group-hover:translate-x-1"></i>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
            </main>
        </>
    );
}
