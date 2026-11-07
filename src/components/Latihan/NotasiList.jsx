// Palet referensi notasi: grid penuh tanpa tinggi tetap, sehingga semua notasi
// terlihat sekaligus dan label tidak terpotong.
export default function NotasiList({ notasi }) {
  return (
    <ul className="grid w-full grid-cols-3 gap-3 p-4 rounded-lg sm:grid-cols-4 md:grid-cols-6 bg-panel">
      {notasi.map((menu) => (
        <li key={menu.title} className="flex flex-col items-center gap-1">
          <div className="flex items-center justify-center w-20 h-20 overflow-hidden">
            <img src={menu.img} alt="" className="object-contain w-full h-full" />
          </div>
          <p className="text-sm font-semibold text-center text-black font-poppins">{menu.title}</p>
        </li>
      ))}
    </ul>
  );
}
