import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="flex items-center justify-center min-h-screen px-4 bg-secondary">
                <div className="flex flex-col items-center gap-4 text-center font-poppins">
                    <p className="text-5xl font-bold text-primary font-quantico">404</p>
                    <h1 className="text-2xl font-bold text-black">Halaman tidak ditemukan</h1>
                    <p className="max-w-md text-base text-black">
                        Alamat yang Anda buka tidak ada atau sudah dipindahkan.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-2">
                        <Link to="/" className="px-4 py-2 text-white rounded-lg bg-btn hover:bg-[#005071] transition">
                            Kembali ke Home
                        </Link>
                        <Link to="/materi/sequence-diagram" className="px-4 py-2 border-2 rounded-lg text-primary border-btn hover:bg-[#005071] hover:text-white transition">
                            Buka Materi
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
