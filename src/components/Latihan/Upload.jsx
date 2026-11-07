import { useId, useState } from "react";
import IconUpload from "../../assets/iconUpload.svg";
import { getJawaban, setJawaban } from "./jawabanStore";

const MAX_MB = 10;

export default function FileUpload({ latihanId }) {
  const inputId = useId();
  const [jawaban, setJawabanState] = useState(() => getJawaban(latihanId));
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar (PNG, JPG, atau SVG).");
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setError(`Ukuran gambar maksimal ${MAX_MB} MB.`);
      return;
    }
    setError("");
    setJawabanState(setJawaban(latihanId, file));
  };

  const handleRemove = () => {
    setJawabanState(setJawaban(latihanId, null));
    setError("");
  };

  if (jawaban) {
    return (
      <div className="w-full flex flex-col gap-3 p-4 border-2 border-navy rounded-lg font-poppins">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-black">
            Jawaban Anda: <span className="font-semibold break-all">{jawaban.name}</span>
          </p>
          <div className="flex gap-2">
            <label htmlFor={inputId} className="btn-secondary text-sm md:text-sm px-3">
              Ganti gambar
            </label>
            <button type="button" onClick={handleRemove} className="btn-secondary text-sm md:text-sm px-3">
              Hapus
            </button>
          </div>
        </div>
        <img src={jawaban.url} alt="Pratinjau sequence diagram yang Anda unggah" className="max-h-[480px] w-auto m-auto rounded-lg bg-white" />
        <input id={inputId} type="file" accept="image/*" className="sr-only" onChange={(e) => handleFile(e.target.files[0])} />
        {error && <p role="alert" className="text-sm font-medium text-danger">{error}</p>}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor={inputId}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
        className={`w-full flex p-10 border-2 border-dashed border-navy rounded-lg cursor-pointer transition hover:bg-option ${dragOver ? "bg-option" : ""}`}
      >
        <span className="flex flex-col m-auto justify-center items-center gap-1 text-center font-poppins">
          <img src={IconUpload} alt="" className="w-8" />
          <span className="text-sm font-semibold text-black">Unggah gambar sequence diagram Anda</span>
          <span className="text-sm text-muted">Klik atau seret file ke sini · PNG, JPG, SVG · maks. {MAX_MB} MB</span>
        </span>
        <input id={inputId} type="file" accept="image/*" className="sr-only" onChange={(e) => handleFile(e.target.files[0])} />
      </label>
      {error && <p role="alert" className="text-sm font-medium text-danger">{error}</p>}
    </div>
  );
}
