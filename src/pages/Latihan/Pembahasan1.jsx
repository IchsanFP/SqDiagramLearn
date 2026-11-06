
import ButtonNav from "../../components/ButtonNav";
import Navbar from "../../components/Header";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import P1 from "../../assets/pembahasan/pem1.png"
export default function Pembahasan1(){
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
                            </div>
                            
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-black font-poppins text-lg font-semibold">Jawaban yang benar :</p>
                                <Image src={P1} alt="" />
                                <Paragraph className="font-semibold">Penjelasan</Paragraph>
                                <Paragraph>
                                    Pada jawaban diatas terdapat satu aktor (pengguna) dan 3 objek, yaitu login, database, dan
                                    dashboard. Pertama-tama akan masuk ke tampilan login dengan mengisi username dan Password. Lalu,
                                    data tersebut akan divalidasi oleh database untuk diverifikasi. Di dalam database data pengguna
                                    akan diperiksa dan divalidasi. Jika data yang dimasukan benar dan valid, maka sistem akan
                                    menampilkan dashboard/halaman utama aplikasi. Sedangkan jika data yang dimasukan salah dan tidak
                                    valid, maka akan menampilkan pesan bahwa username atau Password salah.
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
