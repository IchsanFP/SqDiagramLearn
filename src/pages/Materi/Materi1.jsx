import SectionTitle from "../../components/Materi/SectionTitle";
import Paragraph from "../../components/Materi/Paragraph";
import Image from "../../components/Materi/Image";
import ButtonNavigasi from "../../components/Materi/ButtonNavigasi";
import MT from "../../assets/Materi/mt1.png"

export default function Materi1() {
  return (
    <div className="container">
        <div className="flex flex-col w-full m-auto gap-9">
            <SectionTitle title="Apa itu Sequence Diagram?"/>

            <div className="w-full flex justify-end">
                <ButtonNavigasi to="/materi/notasi-sequence-diagram" icon="right">Berikutnya</ButtonNavigasi>
            </div>
            
            <div className="flex flex-col justify-center w-full gap-2 ">
                <Paragraph>
                    Sequence diagram merupakan salah satu jenis diagram dalam Unified
                    Modeling Language (UML) yang digunakan untuk menggambarkan interaksi
                    antara objek-objek dalam suatu sistem perangkat lunak. Sequence
                    Diagram juga merupakan jenis diagram interaksi yang paling umum, yang
                    berfokus pada pertukaran pesan antara sejumlah lifelines. Sequence
                    Diagram menggambarkan interaksi dengan memusatkan perhatian pada
                    urutan pesan yang dipertukarkan, beserta spesifikasi kemunculannya
                    yang sesuai pada lifelines
                </Paragraph>
                
                <Paragraph >
                    Tujuan dari sequence diagram adalah memberikan gambaran visual yang
                    jelas tentang bagaimana objek-objek berkomunikasi dan berinteraksi
                    satu sama lain selama eksekusi suatu use case atau fungsionalitas
                    sistem. Sequence diagram biasanya digunakan dalam pengembangan
                    perangkat lunak untuk menggambarkan perilaku suatu sistem atau untuk
                    membantu pengembang merancang dan memahami sistem yang kompleks.
                    Mereka dapat digunakan untuk memodelkan interaksi sederhana dan
                    kompleks antar objek, menjadikannya alat yang berguna bagi perancang,
                    dan pengembang perangkat lunak.
                </Paragraph>

                <Paragraph>
                    Berikut adalah node dan tepi yang biasanya digambarkan dalam sequence
                    diagram UML : lifeline, execution specification, message, combined
                    fragment, interaction use, state invariant, continuation, destruction
                    occurrence. Element utama dalam sequence diagram dapat dilihat pada
                    gambar dibawah ini.
                </Paragraph>
                <Image src={MT} alt="Element Sequence Diagram" />
            </div>

            <div className="w-full flex justify-end">
                <ButtonNavigasi to="/materi/notasi-sequence-diagram" icon="right">Berikutnya</ButtonNavigasi>
            </div>
        </div>
    </div>
  )
}