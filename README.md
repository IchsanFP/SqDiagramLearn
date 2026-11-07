# sqDiagramLearn

Website belajar **Sequence Diagram UML** dalam bahasa Indonesia, dengan tiga bagian yang saling berurutan:

1. **Materi**: 7 topik bertahap, dari pengertian Sequence Diagram sampai contoh studi kasus.
2. **Kuis**: 4 set × 5 soal pilihan ganda, dengan penjelasan per jawaban dan skor di akhir.
3. **Latihan**: 4 studi kasus. Siswa menggambar diagram sendiri, mengunggah gambarnya, lalu membandingkannya dengan pembahasan.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
```

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Dev server Vite |
| `npm run build` | Cek tipe (`tsc`), lalu build produksi ke `dist/` |
| `npm run typecheck` | Cek tipe TypeScript saja |
| `npm run lint` | ESLint |
| `npm run preview` | Menjalankan hasil build secara lokal |

> Setelah mengubah `tailwind.config.js`, restart `npm run dev`. Dev server bisa menyimpan konfigurasi lama dan halaman tampil kosong (`index.css` error 500).

## Teknologi

React 18 · TypeScript (strict) · Vite 5 · Tailwind CSS 3 · React Router 6 · Remix Icon. Deploy lewat Vercel (`vercel.json` mengarahkan semua rute ke SPA).

## Struktur

```
src/
├── Router.tsx              # Semua rute + judul tab (handle.title)
├── types.ts                # Question, AnswerOption, Notasi, NavClickHandler
├── components/
│   ├── Header.tsx          # Navigasi utama
│   ├── RootLayout.tsx      # ScrollToTop + judul tab
│   ├── Data.tsx            # Soal kuis dan daftar notasi
│   ├── Kuis/               # Soal, kartu soal, popup, dialog (Modal)
│   ├── Latihan/            # Upload jawaban, palet notasi, jawabanStore
│   └── Materi/             # Layout sidebar materi, Paragraph, Image
└── pages/                  # Materi/, Kuis/, Latihan/, HomePage, NotFound
```

**Menambah soal kuis:** tambahkan objek `Question` di `src/components/Data.tsx`. TypeScript akan menolak soal tanpa `explanation` atau dengan `correctAnswer` yang tidak valid. Isi `imgSrc` hanya bila soal memang punya gambar.

## Aturan warna

Token didefinisikan di `tailwind.config.js`. Jangan menulis warna hex langsung di komponen.

| Token | Dipakai untuk |
|---|---|
| `navy` | Identitas & struktur: header, judul blok, item navigasi aktif |
| `accent` (pink) | Aksen, **hanya di atas `navy`**. Di atas abu-abu kontrasnya cuma 1.07:1 |
| `action` (teal) | Semua tombol/aksi di permukaan terang |
| `surface` → `panel` → `card` → `option` | Lapisan permukaan, dari latar halaman ke elemen terdalam |
| `muted`, `line`, `danger`, `disabled` | Teks sekunder, garis pemisah, pesan error, tombol nonaktif |

Tombol memakai kelas bersama di `src/index.css`: `btn-primary`, `btn-secondary`, dan `btn-accent` (hanya di atas navy).

## Aksesibilitas

Yang sudah dijaga dan perlu dipertahankan saat menambah halaman:

- Kontras teks ≥ 4.5:1 (WCAG 2.2 AA).
- Satu `<h1>` per halaman.
- Semua gambar konten punya `alt` yang menjelaskan isinya.
- Dialog memakai komponen `Modal` (fokus terkunci, Esc, `role="dialog"`).
- Focus ring terlihat di semua elemen interaktif.
