/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      // Aturan pewarnaan (lihat juga .btn-* di src/index.css):
      //  navy    → identitas & struktur: header, judul blok, item navigasi aktif
      //  accent  → aksen pink, HANYA di atas navy (di atas abu-abu kontrasnya 1.07:1)
      //  action  → semua tombol/aksi di permukaan terang
      //  surface/panel/card/option → permukaan konten, dari latar halaman ke elemen paling dalam
      colors: {
        'navy': { DEFAULT: "#232946", muted: "#B8C1EC" }, // muted = teks sekunder di atas navy (8.04:1)
        'accent': { DEFAULT: "#EEBBC3", hover: "#D6A8B0" },
        'action': { DEFAULT: "#053B50", hover: "#005071" },
        'surface': "#C0C1C8",   // latar halaman
        'panel': "#E2E3E8",     // sidebar, area konten, palet notasi
        'card': "#9CA5CE",      // kartu menu, kartu soal, popup
        'option': "#E0E3F0",    // opsi jawaban, hover area upload
        'line': "#656878",      // garis/border pemisah (≥3:1 di panel & surface)
        'muted': "#2E2D2C",     // teks sekunder
        'danger': "#8B0000",    // pesan error
        'disabled': "#9CA3AF",
        'figure': "#85A6B7",    // latar ilustrasi notasi
      },
      fontFamily:{
        poppins : [ "Poppins" , "sans-serif" ],
        monst : ["Montserrat Alternates" ],
        quantico : ["Quantico", "sans-serif"],
      },
      screens: {
        '2xl': '1320px',  
      },
    },
  },
  plugins: [],
}
