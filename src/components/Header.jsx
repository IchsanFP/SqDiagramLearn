import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onNavClick = () => {} }) {
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Handle scroll for sticky header and active navbar item
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Untuk menentukan warna background(responsive) dan test di setiap halaman
    let textColor;
    let navBackground;
    if (location.pathname === "/") {
        textColor = "text-white";
        navBackground = "bg-primary"; 
    } else if ((location.pathname.startsWith("/latihan")) || (location.pathname.startsWith("/materi")) || (location.pathname.startsWith("/kuis")) ) {
        textColor = "text-black";
        navBackground = "bg-secondary"; 
    } 

    let scrollActive = scroll ? "fixed z-[9999] backdrop-blur" : "";

    return (
        <header className={`fixed top-0 left-0 z-10 flex items-center w-full bg-transparent ${scrollActive} animate__animated animate__fadeInDown animate__delay-3s`}>
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <Logo onNavClick={onNavClick} textColor={textColor} />
                    <NavBar onNavClick={onNavClick} textColor={textColor} navBackground={navBackground}/>
                </div>
            </div>
        </header>
    );
}

function Logo({ onNavClick, textColor }) {
    return (
        <div className="px-4">
            <Link to="/" onClick={(e) => onNavClick(e, "/")} className={`block py-6 text-xl font-bold ${textColor} font-quantico`}>
                sqDiagramLearn
            </Link>
        </div>
    );
}

function NavBar({ onNavClick, textColor, navBackground }) {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const location = useLocation();

    const linkClass = (path) => {
        // Check if current path matches exactly for Home, otherwise use startsWith for other paths
        const isActive = path === "/" 
            ? location.pathname === "/" 
            : (location.pathname.startsWith(path) || (path === "/materi" && location.pathname.startsWith("/materi")));

        return `flex p-1 rounded-lg mx-4 text-base font-medium lg:text-md font-poppins group-hover:text-primary group-hover:bg-nav-section ${
            (isActive) 
            ? "text-primary bg-nav-section" 
            : textColor
        }`;
    };

    return (
        <div className="flex items-center px-4">
            <button 
                name="hamburger" 
                type="button" 
                aria-label={toggleNavbar ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={toggleNavbar}
                aria-controls="main-nav"
                className="absolute block cursor-pointer right-4 lg:hidden" 
                onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
            >
                <i aria-hidden="true" className={`text-3xl ${textColor} ri-menu-3-line`}></i>
            </button>

            <nav id="main-nav" aria-label="Navigasi utama" className={`absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none lg:bg-transparent ${navBackground} shadow-slate-500 ${toggleNavbar ? "block" : "hidden"}`}>
                <ul className="block lg:flex">
                    <li className="group">
                        <Link to="/" onClick={(e) => onNavClick(e, "/")} className={linkClass("/")}>Home</Link>
                    </li>
                    <li className="group">
                        <Link to="/materi/sequence-diagram" onClick={(e) => onNavClick(e, "/materi/sequence-diagram")} className={linkClass("/materi")}>Materi</Link>
                    </li>
                    <li className="group">
                        <Link to="/kuis" onClick={(e) => onNavClick(e, "/kuis")} className={linkClass("/kuis")}>Kuis</Link>
                    </li>
                    <li className="group">
                        <Link to="/latihan" onClick={(e) => onNavClick(e, "/latihan")} className={linkClass("/latihan")}>Latihan</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
