import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar, { HEADER_HEIGHT } from '../../components/Header';

const MATERI = [
  { name: "Penjelasan Umum Sequence Diagram", path: "/materi/sequence-diagram" },
  { name: "Notasi dalam Sequence Diagram", path: "/materi/notasi-sequence-diagram" },
  { name: "Lifeline Notation", path: "/materi/lifeline-notation" },
  { name: "Message Arrow", path: "/materi/message-arrow" },
  { name: "Activation Bar", path: "/materi/activation-bar" },
  { name: "Cara Membuat Sequence Diagram", path: "/materi/cara-membuat-sequence-diagram" },
  { name: "Contoh-contoh Sequence Diagram", path: "/materi/contoh-sequence-diagram" },
];

const GAP = 16;

function MateriList() {
  const { pathname } = useLocation();
  return (
    <ul className="flex flex-col gap-2">
      {MATERI.map((menu, index) => {
        const active = pathname === menu.path;
        return (
          <li key={menu.path}>
            <Link
              to={menu.path}
              aria-current={active ? "page" : undefined}
              className={`group flex items-center gap-2 p-3 rounded-lg border font-poppins text-base font-medium transition-colors ${
                active
                  ? "bg-navy border-navy text-white"
                  : "border-line text-black hover:bg-card"
              }`}
            >
              <span className={`text-sm tabular-nums ${active ? "text-accent" : "text-muted"}`}>{index + 1}.</span>
              <span className="flex-1">{menu.name}</span>
              <i
                aria-hidden="true"
                className={`ri-arrow-right-line transition-opacity ${active ? "text-accent opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              ></i>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function SidebarLayout({ MateriComponent }) {
  const { pathname } = useLocation();
  const [listOpen, setListOpen] = useState(false);
  const currentIndex = MATERI.findIndex((m) => m.path === pathname);
  const current = MATERI[currentIndex];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-surface" style={{ paddingTop: HEADER_HEIGHT + GAP }}>
        <div className="container flex flex-col gap-4 pb-6 lg:flex-row lg:items-start lg:gap-7">

          {/* Desktop: sidebar sticky di kiri */}
          <nav
            aria-label="Daftar materi"
            className="hidden lg:block lg:w-[320px] lg:shrink-0 lg:sticky p-5 rounded-lg bg-panel shadow-sm overflow-y-auto no-scrollbar"
            style={{ top: HEADER_HEIGHT + GAP, maxHeight: `calc(100vh - ${HEADER_HEIGHT + GAP * 2}px)` }}
          >
            <h2 className="p-4 mb-4 text-xl font-bold text-center text-white rounded-lg bg-navy font-quantico">Sequence Diagram</h2>
            <MateriList />
          </nav>

          {/* Mobile/tablet: satu tombol daftar materi di atas konten, membuka di tempat */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-expanded={listOpen}
              aria-controls="materi-list-mobile"
              onClick={() => setListOpen((o) => !o)}
              className="flex items-center w-full gap-3 p-3 text-left text-white rounded-lg bg-navy font-poppins"
            >
              <i aria-hidden="true" className="text-2xl ri-list-check"></i>
              <span className="flex flex-col flex-1">
                <span className="text-sm text-navy-muted">
                  Daftar Materi{current ? ` · ${currentIndex + 1} dari ${MATERI.length}` : ""}
                </span>
                <span className="font-semibold">{current?.name ?? "Pilih materi"}</span>
              </span>
              <i aria-hidden="true" className={`text-2xl ${listOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}`}></i>
            </button>
            {listOpen && (
              <nav id="materi-list-mobile" aria-label="Daftar materi" className="p-3 mt-2 rounded-lg bg-panel shadow-sm">
                <MateriList />
              </nav>
            )}
          </div>

          <main className="flex-1 min-w-0 p-5 rounded-lg bg-panel shadow-sm">
            <MateriComponent />
          </main>
        </div>
      </div>
    </>
  );
}
