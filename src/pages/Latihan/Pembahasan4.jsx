import ButtonNav from "../../components/ButtonNav";
import Navbar from "../../components/Header";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import P4 from "../../assets/pembahasan/pem4.png"
export default function Pembahasan4(){
    return(
        <>
        <Navbar />
        <section id="#" className="pb-5 pt-[120px] bg-secondary min-h-screen">  
            <div className="container">
                <div className="flex flex-col m-auto max-w-[1024px] gap-3">
                    <h1 className="text-3xl font-bold text-black font-poppins text-center mb-6">
                        Pembahasan
                    </h1>
                    <div className="flex gap-9 flex-col lg:flex-row max-w-[1090px] justify-between">
                        <div className="w-[142px]">
                            <p className="font-poppins text-base font-semibold text-black">Pertanyaan  <span className="text-xl">1</span> </p>
                        </div>

                        <div className="flex flex-col w-full gap-9">
                            <div className="flex w-full flex-col gap-9 border-2 rounded-[10px] border-primary px-12 py-5">
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
                            </div>
                            
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-black font-poppins text-lg font-semibold">Jawaban yang benar :</p>
                                <Image src={P4} alt="" />
                                <Paragraph className="font-semibold">Penjelasan</Paragraph>
                                <Paragraph>
                                    Pada jawaban diatas terdapat satu aktor (Admin) dan dua objek, yaitu MenambahBarang dan
                                    database. Pertama-tama admin akan menambahkan barang yang ingin ditambahkan. Lalu barang
                                    tersebut akan ditambahkan ke dalam database kemudian database memvalidasi barang yang
                                    ditambahkan. Jika barang tersebut berhasil ditambahkan maka admin akan mendapatkan pesan “Barang
                                    Berhasil ditambahkan” dan jika berang tersebut gagal ditambahkan maka admin mendapatkan pesan
                                    ”Barang Gagal Ditambahkan”
                                </Paragraph>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <ButtonNav to="/latihan">Kembali ke Topik Latihan</ButtonNav>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
