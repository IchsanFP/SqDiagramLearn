import { notasi } from "../../components/Data";

import Navbar from "../../components/Header";
import NotasiList from "../../components/Latihan/NotasiList";
import FileUpload from "../../components/Latihan/Upload";
import ButtonNav from "../../components/ButtonNav";

export default function T1_Latihan1(){

    return(
        <>
        <Navbar />
        <section id="#" className="pb-5 pt-[120px] bg-surface min-h-screen">  
            <div className="container">
                <div className="flex flex-col m-auto max-w-[1024px] gap-3">
                    <div className="flex gap-9 flex-col lg:flex-row max-w-[1090px] justify-between">
                        <div className="w-full lg:w-[172px] lg:shrink-0">
                            <h1 className="font-poppins text-black"><span className="block text-sm font-normal text-muted">Studi kasus</span><span className="block text-base font-semibold">Proses Login Aplikasi</span></h1>
                        </div>

                        <div className="flex w-full flex-col gap-9 border-2 rounded-lg border-navy px-12 py-5">
                            <div className="w-full">
                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                    Sebuah aplikasi e-commerce memerlukan proses login untuk memberikan akses kepada pengguna. Berikut adalah deskripsi proses login:
                                </p>
                                
                                <div className="font-poppins text-base font-semibold text-black text-justify">
                                    <ol className="list-decimal ml-4">
                                        <li>Pengguna menginputkan nama pengguna (username) dan kata sandi (password) pada layar login.</li>
                                        <li>Database melakukan validasi data yang di inputkan oleh pengguna.</li>
                                        <li>Jika informasi login valid, pengguna diarahkan ke halaman utama aplikasi.</li>
                                        <li>Jika informasi login tidak valid, sistem memberikan pesan kesalahan dan meminta pengguna untuk memasukkan informasi yang benar.</li>
                                    </ol>
                                </div>

                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                    berdasarkan studi kasus diatas, buatlah sequence diagram dengan benar
                                </p>
                            </div>

                            <div className="gap-2 w-full flex flex-col justify-start">
                                <p className="font-poppins text-sm font-normal text-muted">Referensi notasi</p>

                                <NotasiList notasi={notasi}/>
                                <FileUpload latihanId="T1" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <ButtonNav to="/latihan/T1/pembahasan">Selesai</ButtonNav>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
