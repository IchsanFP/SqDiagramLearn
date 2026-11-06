import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
const menu = [
    {
        title: "Kuis Penjelasan Umum Sequence Diagram",
        subtitle: "5 soal pilihan ganda tentang pengertian dan tujuan Sequence Diagram",
        path: "T1",
    },
    {
        title: "Kuis Lifeline Notation",
        subtitle: "5 soal pilihan ganda tentang fungsi dan bentuk lifeline",
        path: "T2",
    },
    {
        title: "Kuis Message Arrow",
        subtitle: "5 soal pilihan ganda tentang synchronous, asynchronous, dan reflexive message",
        path: "T3",
    },
    {
        title: "Kuis Notasi Sequence Diagram",
        subtitle: "5 soal pilihan ganda tentang activation bar, entity, dan blok alt",
        path: "T4",
    },
]


export default function MenuKuis(){
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return(
        <>
            <Header />
            <section id="#" className="pt-[120px] bg-secondary min-h-screen">  
                <div className="container">
                    <div className="flex flex-col justify-center m-auto gap-9">
                        <div className="items-center m-auto text-center text-black font-poppins">
                            <h1 className="text-[28px] md:text-[32px] lg:text-4xl font-bold">Mari Mengerjakan Kuis</h1>
                            <p className="text-sm italic font-normal md:text-base lg:text-[18px]">Ayo bersiap-siap untuk menguji pengetahuan dan keterampilanmu.</p>
                        </div>
                            <div  className="grid items-center justify-center grid-cols-1 gap-3 m-auto lg:grid-cols-2">                        
                            {menu.map((p_menu, index) => (
                                <div key={index} className="p-3 items-center flex flex-col border-2 bg-[#9CA5CE] border-primary w-full rounded-[10px]">
                                    <div className="flex flex-col w-full gap-1">
                                        <h1 className="text-base font-semibold text-black md:text-xl font-poppins">{p_menu.title}</h1>
                                        <p className="text-black font-normal text-sm md:text-base font-poppins max-w-[350px]">{p_menu.subtitle}</p>
                                    </div>
                                    <div className="flex justify-end w-full">
                                        {/* <button onClick={() => handleNavigate(p_menu.path)} className="flex items-center justify-center px-4 py-2 text-sm font-sm text-white transition ease-in-out rounded-[10px] font-poppins bg-btn hover:shadow-lg hover:opacity-80 duration-300 max-w-fit hover:bg-[#005071]"> */}
                                        <button onClick={() => handleNavigate(p_menu.path)} className="flex items-center justify-center px-4 py-2 text-sm font-sm text-white transition ease-in-out rounded-[10px] font-poppins bg-btn hover:bg-[#005071] hover:shadow-lg hover:opacity-80 duration-300 max-w-fit">
                                            Mulai Mengerjakan
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}