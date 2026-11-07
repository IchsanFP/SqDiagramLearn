import ButtonNav from "../../components/ButtonNav";
import JawabanSaya from "../../components/Latihan/JawabanSaya";
import Navbar from "../../components/Header";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import P2 from "../../assets/pembahasan/pem2.png"
export default function Pembahasan2(){
    return(
        <>
        <Navbar />
        <section id="#" className="pb-5 pt-[120px] bg-surface min-h-screen">  
            <div className="container">
                <div className="flex flex-col m-auto max-w-[1024px] gap-3">
                    <h1 className="text-3xl font-bold text-black font-poppins text-center mb-6">
                        Pembahasan
                    </h1>
                    <div className="flex gap-9 flex-col lg:flex-row max-w-[1090px] justify-between">
                        <div className="w-full lg:w-[172px] lg:shrink-0">
                            <h2 className="font-poppins text-black"><span className="block text-sm font-normal text-muted">Studi kasus</span><span className="block text-base font-semibold">Reservasi Tiket Bioskop</span></h2>
                        </div>

                        <div className="flex flex-col w-full gap-9">
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
                            </div>
                            
                            <div className="flex flex-col w-full gap-2">
                                <JawabanSaya latihanId="T2" soalPath="/latihan/T2" />
                                <h2 className="text-black font-poppins text-lg font-semibold mt-6">Jawaban yang benar :</h2>
                                <Image src={P2} alt="Kunci jawaban: aktor Pengguna dan objek Reservasi. Pengguna memilih film dan jadwal, Reservasi membalas informasi ketersediaan kursi, Pengguna memilih kursi dan membayar, Reservasi membalas konfirmasi pembayaran dan tiket elektronik." />
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
