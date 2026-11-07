// Menyimpan gambar jawaban latihan di memori browser selama tab terbuka,
// supaya halaman Pembahasan bisa menampilkannya berdampingan dengan kunci jawaban.
// Tidak ada yang dikirim ke server. Data hilang saat halaman di-refresh.
export interface Jawaban {
  name: string;
  url: string;
}

const store = new Map<string, Jawaban>();

export function getJawaban(id: string): Jawaban | null {
  return store.get(id) ?? null;
}

export function setJawaban(id: string, file: File | null): Jawaban | null {
  const prev = store.get(id);
  if (prev) URL.revokeObjectURL(prev.url);
  if (!file) {
    store.delete(id);
    return null;
  }
  const entry = { name: file.name, url: URL.createObjectURL(file) };
  store.set(id, entry);
  return entry;
}
