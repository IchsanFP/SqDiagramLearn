import ButtonNav from "../../components/ButtonNav";
import Navbar from "../../components/Header";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import P2 from "../../assets/pembahasan/pem2.png"
export default function Pembahasan2(){
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
                            </div>
                            
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-black font-poppins text-lg font-semibold">Jawaban yang benar :</p>
                                <Image src={P2} alt="" />
                                <Paragraph className="font-semibold">Penjelasan</Paragraph>
                                <Paragraph>
                                    Pada jawaban diatas terdapat aktor dan objek yaitu pengguna dan reservasi. Pertama-tama pengguna
                                    memilih film beserta jadwalnya. Lalu, reservasi akan menampilkan informasi ketersediaan kursi.
                                    Kemudian pengguna memilih kursi dan melakukan pembayaran. Reservasi akan mengirim konfirmasi
                                    pembayaran dan tiket elektornik kepada pengguna.
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
