// Menyimpan gambar jawaban latihan supaya halaman Pembahasan bisa menampilkannya
// berdampingan dengan kunci jawaban. Tidak ada yang dikirim ke server.
//
// - Memori: selalu, selama tab terbuka.
// - sessionStorage: agar tetap ada setelah refresh (hilang saat tab ditutup).
//   Kuota ±5 MB per situs; gambar yang tidak muat hanya disimpan di memori,
//   dan pemanggil diberi tahu lewat nilai kembalian persistJawaban().

export interface Jawaban {
  name: string;
  url: string;
}

const PREFIX = "sqdl:jawaban:";
const memory = new Map<string, Jawaban>();
const objectUrls = new Map<string, string>();

function readSession(id: string): Jawaban | null {
  try {
    const raw = sessionStorage.getItem(PREFIX + id);
    return raw ? (JSON.parse(raw) as Jawaban) : null;
  } catch {
    return null;
  }
}

export function getJawaban(id: string): Jawaban | null {
  const fromMemory = memory.get(id);
  if (fromMemory) return fromMemory;
  const fromSession = readSession(id);
  if (fromSession) memory.set(id, fromSession);
  return fromSession;
}

export function setJawaban(id: string, file: File | null): Jawaban | null {
  const prevUrl = objectUrls.get(id);
  if (prevUrl) URL.revokeObjectURL(prevUrl);
  objectUrls.delete(id);

  if (!file) {
    memory.delete(id);
    try {
      sessionStorage.removeItem(PREFIX + id);
    } catch {
      /* storage tidak tersedia: cukup hapus dari memori */
    }
    return null;
  }

  const url = URL.createObjectURL(file);
  objectUrls.set(id, url);
  const entry = { name: file.name, url };
  memory.set(id, entry);
  return entry;
}

/** Simpan ke sessionStorage. Mengembalikan false bila tidak muat atau storage diblokir. */
export function persistJawaban(id: string, file: File): Promise<boolean> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const saved: Jawaban = { name: file.name, url: reader.result as string };
        sessionStorage.setItem(PREFIX + id, JSON.stringify(saved));
        resolve(true);
      } catch {
        try {
          sessionStorage.removeItem(PREFIX + id);
        } catch {
          /* abaikan */
        }
        resolve(false);
      }
    };
    reader.onerror = () => resolve(false);
    reader.readAsDataURL(file);
  });
}
