import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { getSkor } from "../../components/Kuis/skorStore";
const menu = [
    {
        title: "Kuis Penjelasan Umum Sequence Diagram",
        subtitle: "5 soal pilihan ganda tentang pengertian dan tujuan Sequence Diagram",
        id: "T1",
    },
    {
        title: "Kuis Lifeline Notation",
        subtitle: "5 soal pilihan ganda tentang fungsi dan bentuk lifeline",
        id: "T2",
    },
    {
        title: "Kuis Message Arrow",
        subtitle: "5 soal pilihan ganda tentang synchronous, asynchronous, dan reflexive message",
        id: "T3",
    },
    {
        title: "Kuis Notasi Sequence Diagram",
        subtitle: "5 soal pilihan ganda tentang activation bar, entity, dan blok alt",
        id: "T4",
    },
]


export default function MenuKuis(){

    return(
        <>
            <Header />
            <section id="#" className="pt-[120px] bg-surface min-h-screen">  
                <div className="container">
                    <div className="flex flex-col justify-center m-auto gap-9">
                        <div className="items-center m-auto text-center text-black font-poppins">
                            <h1 className="text-[28px] md:text-[32px] lg:text-4xl font-bold">Mari Mengerjakan Kuis</h1>
                            <p className="text-sm italic font-normal md:text-base lg:text-[18px]">Ayo bersiap-siap untuk menguji pengetahuan dan keterampilanmu.</p>
                        </div>
                            <div  className="grid items-center justify-center grid-cols-1 gap-3 m-auto lg:grid-cols-2">                        
                            {menu.map((p_menu) => {
                                const skor = getSkor(p_menu.id);
                                const sempurna = skor !== null && skor.score === skor.total;
                                return (
                                <div key={p_menu.id} className="p-3 items-center flex flex-col gap-3 border-2 bg-card border-navy w-full rounded-lg">
                                    <div className="flex flex-col w-full gap-1">
                                        <h2 className="text-base font-semibold text-black md:text-xl font-poppins">{p_menu.title}</h2>
                                        <p className="text-black font-normal text-sm md:text-base font-poppins max-w-[350px]">{p_menu.subtitle}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between w-full gap-2">
                                        {skor ? (
                                            <p className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-white rounded-full bg-navy font-poppins">
                                                {sempurna && <i aria-hidden="true" className="ri-check-line text-accent"></i>}
                                                Skor terakhir: {skor.score}/{skor.total}
                                            </p>
                                        ) : (
                                            <p className="text-sm text-muted font-poppins">Belum dikerjakan</p>
                                        )}
                                        <Link to={`/kuis/${p_menu.id}`} className="btn-primary text-sm md:text-sm">
                                            {skor ? "Kerjakan Lagi" : "Mulai Mengerjakan"}
                                        </Link>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}