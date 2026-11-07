import { notasi } from "../../components/Data";

import Navbar from "../../components/Header";
import NotasiList from "../../components/Latihan/NotasiList";
import FileUpload from "../../components/Latihan/Upload";
import ButtonNav from "../../components/ButtonNav";
export default function T1_Latihan4(){

    return(
        <>
        <Navbar />
        <section id="#" className="pb-5 pt-[120px] bg-surface min-h-screen">  
            <div className="container">
                <div className="flex flex-col m-auto max-w-[1024px] gap-3">
                    <div className="flex gap-9 flex-col lg:flex-row max-w-[1090px] justify-between">
                        <div className="w-[142px]">
                            <p className="font-poppins text-base font-semibold text-black">Pertanyaan  <span className="text-xl">1</span> </p>
                        </div>

                        <div className="flex w-full flex-col gap-9 border-2 rounded-lg border-navy px-12 py-5">
                            <div className="w-full">
                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                Buatlah sebuah sequence diagram, dimana seorang admin toko online dapat menambahkan barang.
                                Berikut adalah use case scenario atau deskripsi admin menambahkan barang:
                                </p>
                                
                                <div className="font-poppins text-base font-semibold text-black text-justify">
                                    <ol className="list-decimal ml-4">
                                        <li>Admin menambahkan barang yang ingin ditambahkan.</li>
                                        <li>Database memvalidasi barang yang ditambahkan.</li>
                                        <li>Jika barang tersebut berhasil ditambahkan maka admin akan mendapatkan pesan &quot;Barang
                                            Berhasil ditambahkan&quot;.</li>
                                        <li>Jika barang tersebut tidak berhasil ditambahkan maka admin akan mendapatkan pesan &quot;Barang Gagal ditambahkan&quot;.</li>
                                    </ol>
                                </div>

                                <p className="font-poppins text-base font-semibold text-black text-justify">
                                    berdasarkan studi kasus diatas, buatlah sequence diagram dengan benar
                                </p>
                                
                            </div>

                            <div className="gap-2 w-full flex flex-col justify-start">
                                <p className="font-poppins text-sm font-normal text-muted">Referensi notasi</p>

                                <NotasiList notasi={notasi}/>
                                <FileUpload latihanId="T4" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <ButtonNav to="/latihanT4/pembahasanT4">Selesai</ButtonNav>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
