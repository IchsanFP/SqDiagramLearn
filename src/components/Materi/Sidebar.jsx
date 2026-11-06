import { Link, useLocation } from 'react-router-dom'; 
import Navbar from '../../components/Header';
import { useState } from 'react';

export default function SidebarLayout({ MateriComponent }){
  const location = useLocation();

  const menuItems = [
    { name: "Penjelasan Umum Sequence Diagram", path: "/materi/sequence-diagram" },
    { name: "Notasi dalam Sequence Diagram", path: "/materi/notasi-sequence-diagram" },
    { name: "Lifeline Notation", path: "/materi/lifeline-notation" },
    { name: "Message Arrow", path: "/materi/message-arrow" },
    { name: "Activation Bar", path: "/materi/activation-bar" },
    { name: "Cara Membuat Sequence Diagram", path: "/materi/cara-membuat-sequence-diagram" },
    { name: "Contoh-contoh Sequence Diagram", path: "/materi/contoh-sequence-diagram" },
  ];

  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <section className='min-h-screen bg-secondary'>
      <div className="container flex flex-col">
        <Navbar />
        {/* Button Hamburger */}
        <button 
          name="hamburger" 
          type="button" 
          aria-label={toggleNavbar ? "Tutup daftar materi" : "Buka daftar materi"}
          aria-expanded={toggleNavbar}
          aria-controls="materi-sidebar"
          className="hover:shadow-lg hover:shadow-btn block cursor-pointer p-4 text-white bg-notasi rounded-lg fixed z-50  top-[75.984px] lg:hidden" 
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          <i aria-hidden="true" className={`text-3xl text-black ri-menu-line`}></i>
        </button>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <nav
            id="materi-sidebar"
            aria-label="Daftar materi"
            className={`fixed z-40 mt-[135px] lg:mt-0 py-5 shadow-lg shadow-btn lg:shadow-none rounded-lg max-w-[350px] md:max-w-[450px] lg:max-w-max w-full bg-notasi lg:rounded-lg lg:sticky lg:w-1/3 p-5 lg:mr-7 overflow-y-auto no-scrollbar text-white transition-transform duration-300 lg:top-[75.984px] lg:h-[calc(100vh-75.984px)] ${
              toggleNavbar ? "translate-y-0" : "hidden"
            } lg:translate-y-0 lg:block`}
            style={{ maxHeight: "calc(100vh - 75.984px)"}}
          >
            <h2 className="p-4 mb-4 text-xl font-bold text-center rounded-lg bg-btn font-quantico">Sequence Diagram</h2>
            <ul>
              {menuItems.map((menu, index) => (
                <li
                  key={index}
                  className={`group cursor-pointer border border-bd mb-2 p-2 font-poppins font-medium text-base text-black hover:text-white hover:bg-[#005071] hover:rounded-lg flex items-center ${
                    location.pathname === menu.path ? "bg-btn text-white rounded-lg" : ""
                  }`}
                >
                  <Link
                    to={menu.path}
                    className="flex-1"
                    aria-current={location.pathname === menu.path ? "page" : undefined}
                  >
                    {menu.name}
                  </Link>
                  <span
                    aria-hidden="true"
                    className={`ml-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                      location.pathname === menu.path ? "opacity-100" : ""
                    }`}
                  >
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Konten yang akan berubah tergantung pada rute */}
          <main className="flex-1 p-5 mt-[75.984px] overflow-y-auto rounded-lg bg-notasi">
            <MateriComponent />
          </main>
        </div>
      </div>
    </section>
  );
};

