import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="flex items-center justify-center min-h-screen px-4 bg-surface">
                <div className="flex flex-col items-center gap-4 text-center font-poppins">
                    <p className="text-5xl font-bold text-navy font-quantico">404</p>
                    <h1 className="text-2xl font-bold text-black">Halaman tidak ditemukan</h1>
                    <p className="max-w-md text-base text-black">
                        Alamat yang Anda buka tidak ada atau sudah dipindahkan.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-2">
                        <Link to="/" className="btn-primary">
                            Kembali ke Home
                        </Link>
                        <Link to="/materi/sequence-diagram" className="btn-secondary">
                            Buka Materi
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
