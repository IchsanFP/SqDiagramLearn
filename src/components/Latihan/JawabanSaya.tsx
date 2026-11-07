import { Link } from "react-router-dom";
import { getJawaban } from "./jawabanStore";

// Ditampilkan di halaman Pembahasan: gambar yang diunggah siswa, untuk dibandingkan
// dengan jawaban yang benar. Bila belum ada unggahan, beri jalan kembali ke soal.
export default function JawabanSaya({ latihanId, soalPath }: { latihanId: string; soalPath: string }) {
  const jawaban = getJawaban(latihanId);

  return (
    <div className="flex flex-col w-full gap-2 font-poppins">
      <h2 className="text-lg font-semibold text-black">Jawaban Anda :</h2>
      {jawaban ? (
        <img src={jawaban.url} alt="Sequence diagram yang Anda unggah" className="max-h-[480px] w-auto m-auto rounded-lg bg-white" />
      ) : (
        <p className="text-base text-black">
          Anda belum mengunggah jawaban.{" "}
          <Link to={soalPath} className="font-semibold underline text-action">Kembali ke soal untuk mengunggah</Link>
        </p>
      )}
    </div>
  );
}
