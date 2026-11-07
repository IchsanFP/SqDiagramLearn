import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Tinggi header dipakai juga oleh Sidebar (offset sticky). Ubah keduanya bersamaan.
export const HEADER_HEIGHT = 76;

const NAV_ITEMS = [
    { label: "Home", to: "/", match: (p) => p === "/" },
    { label: "Materi", to: "/materi/sequence-diagram", match: (p) => p.startsWith("/materi") },
    { label: "Kuis", to: "/kuis", match: (p) => p.startsWith("/kuis") },
    { label: "Latihan", to: "/latihan", match: (p) => p.startsWith("/latihan") },
];

// Header selalu navy di semua halaman (aturan: navy = identitas & struktur).
// Item aktif memakai aksen pink, yang hanya boleh dipakai di atas navy.
export default function Header({ onNavClick = () => {} }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const handleClick = (e, to) => {
        setMenuOpen(false);
        onNavClick(e, to);
    };

    return (
        <header className="fixed top-0 left-0 z-[100] w-full bg-navy shadow-md" style={{ height: HEADER_HEIGHT }}>
            <div className="container flex items-center justify-between h-full">
                <Link
                    to="/"
                    onClick={(e) => handleClick(e, "/")}
                    className="px-4 py-2 text-xl font-bold text-white rounded-lg font-quantico"
                >
                    sqDiagramLearn
                </Link>

                <button
                    type="button"
                    aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                    aria-expanded={menuOpen}
                    aria-controls="main-nav"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex items-center justify-center w-11 h-11 mr-2 text-white rounded-lg lg:hidden hover:bg-white/10"
                >
                    <i aria-hidden="true" className={`text-3xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`}></i>
                </button>

                <nav
                    id="main-nav"
                    aria-label="Navigasi utama"
                    className={`${menuOpen ? "block" : "hidden"} absolute right-4 top-full mt-2 w-[220px] rounded-lg bg-navy p-3 shadow-lg ring-1 ring-white/10
                        lg:static lg:block lg:w-auto lg:mt-0 lg:p-0 lg:shadow-none lg:ring-0`}
                >
                    <ul className="flex flex-col gap-1 lg:flex-row lg:gap-2">
                        {NAV_ITEMS.map((item) => {
                            const active = item.match(pathname);
                            return (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        onClick={(e) => handleClick(e, item.to)}
                                        aria-current={active ? "page" : undefined}
                                        className={`block px-3 py-2 rounded-lg text-base font-medium font-poppins transition-colors ${
                                            active ? "bg-accent text-navy" : "text-white hover:bg-white/10"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
