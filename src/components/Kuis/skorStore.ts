// Skor kuis terakhir per set, disimpan di localStorage (bertahan antar sesi).
// Semua akses dibungkus try/catch: di mode privat atau bila storage diblokir,
// fitur ini diam-diam tidak aktif dan kuis tetap berjalan normal.

export interface SkorKuis {
  score: number;
  total: number;
  /** ISO timestamp saat kuis diselesaikan */
  date: string;
}

const PREFIX = "sqdl:skor:";

export function getSkor(kuisId: string): SkorKuis | null {
  try {
    const raw = localStorage.getItem(PREFIX + kuisId);
    return raw ? (JSON.parse(raw) as SkorKuis) : null;
  } catch {
    return null;
  }
}

export function saveSkor(kuisId: string, score: number, total: number): void {
  try {
    const value: SkorKuis = { score, total, date: new Date().toISOString() };
    localStorage.setItem(PREFIX + kuisId, JSON.stringify(value));
  } catch {
    /* storage tidak tersedia: abaikan */
  }
}
