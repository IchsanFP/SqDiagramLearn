import { notasi } from "../../components/Data";

import Navbar from "../../components/Header";
import NotasiList from "../../components/Latihan/NotasiList";
import FileUpload from "../../components/Latihan/Upload";
import ButtonNav from "../../components/ButtonNav";

export default function T1_Latihan2(){

    return(
        <>
        <Navbar />
        <section id="#" className="pb-5 pt-[120px] bg-surface min-h-screen">  
            <div className="container">
                <div className="flex flex-col m-auto max-w-[1024px] gap-3">
                    <div className="flex gap-9 flex-col lg:flex-row max-w-[1090px] justify-between">
                        <div className="w-full lg:w-[172px] lg:shrink-0">
                            <h1 className="font-poppins text-black"><span className="block text-sm font-normal text-muted">Studi kasus</span><span className="block text-base font-semibold">Reservasi Tiket Bioskop</span></h1>
                        </div>

                        <div className="flex w-full flex-col gap-9 border-2 rounded-lg border-navy px-4 py-5 md:px-12">
                            <div className="w-full">
                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                Sebuah bioskop ingin membuat sistem reservasi tiket online, dimana pengguna dapat memilih film hingga pembayaran tiket. Berikut adalah deskripsi sistem reservasi tiket online:
                                </p>
                                
                                <div className="font-poppins text-base font-semibold text-black text-justify">
                                    <ol className="list-decimal ml-4">
                                        <li>Pengguna memilih film dan jadwal yang diinginkan.</li>
                                        <li>Reservasi menampilkan informasi ketersediaan kursi kepada pengguna.</li>
                                        <li>Pengguna memilih kursi dan melakukan pembayaran.</li>
                                        <li>Reservasi mengirimkan konfirmasi pembayaran dan tiket elektronik kepada pengguna.</li>
                                    </ol>
                                </div>

                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                    berdasarkan studi kasus diatas, buatlah sequence diagram dengan benar
                                </p>
                                
                            </div>

                            <div className="gap-2 w-full flex flex-col justify-start">
                                <p className="font-poppins text-sm font-normal text-muted">Referensi notasi</p>

                                <NotasiList notasi={notasi}/>
                                <FileUpload latihanId="T2" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <ButtonNav to="/latihan/T2/pembahasan">Selesai</ButtonNav>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
