import Header from "../../components/Header";
import { Link } from "react-router-dom";

const menu = [
    {
        title: "Studi kasus “Proses Login Aplikasi”",
        subtitle: "Berikut merupakan contoh studi kasus Proses Login Aplikasi",
        path: "/latihan/T1",
    },
    {
        title: "Studi kasus “Reservasi Tiket Bioskop”",
        subtitle: "Berikut merupakan contoh studi kasus Reservasi Tiket Bioskop",
        path: "/latihan/T2",
    },
    {
        title: "Studi kasus “Sistem Pemesanan Kamar Hotel”",
        subtitle: "Berikut merupakan contoh studi kasus Pemesanan Kamar Hotel",
        path: "/latihan/T3",
    },
    {
        title: "Studi kasus “Manajemen Barang Toko Online”",
        subtitle: "Berikut merupakan contoh studi kasus Manajemen Barang Toko Online",
        path: "/latihan/T4",
    },
]


export default function MenuLatihan(){
    return(
        <>
            <Header />

            <section id="#" className="pt-[120px] bg-secondary min-h-screen">  
                <div className="container">
                    <div className="flex flex-col justify-center m-auto gap-9">
                        <div className="items-center m-auto text-center text-black font-poppins">
                            <h1 className="text-[28px] md:text-[32px] lg:text-4xl font-bold">Mari latihan membuat Sequence Diagram !!!</h1>
                            <p className="text-sm italic font-normal md:text-base lg:text-[18px]">Ayo bersiap-siap untuk menguji pengetahuan dan keterampilanmu dengan mengerjakan latihan soal berdasarkan studi kasus</p>
                        </div>
                            <div  className="grid items-center justify-center grid-cols-1 gap-3 m-auto lg:grid-cols-2">                        
                            {menu.map((p_menu, index) => (
                                <div key={index} className="p-3 items-center flex flex-col border-2 bg-[#9CA5CE] border-primary w-full rounded-[10px]">
                                    <div className="flex flex-col w-full gap-1">
                                        <h1 className="text-base font-semibold text-black md:text-xl font-poppins">{p_menu.title}</h1>
                                        <p className="text-black font-normal text-sm md:text-base font-poppins max-w-[350px]">{p_menu.subtitle}</p>
                                    </div>
                                    <div className="flex justify-end w-full">
                                        <Link to={p_menu.path} className="flex items-center justify-center px-4 py-2 text-sm font-sm text-white transition ease-in-out rounded-[10px] font-poppins bg-btn hover:bg-[#005071] hover:shadow-lg hover:opacity-80 duration-300 max-w-fit">
                                            Mulai Mengerjakan
                                        </Link>
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