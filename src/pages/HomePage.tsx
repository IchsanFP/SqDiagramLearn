import { Link } from "react-router-dom";
import Navbar from "../components/Header";

export default function HomePage(){
    return(
        <>
        <Navbar />
        <section className="pt-[180px] min-h-screen bg-navy">  
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-full text-center">
                    <div className="flex flex-col items-center px-4 lg:px-0 max-w-7xl">
                        <h1 className="font-bold mb-4 lg:mb-6 lg:mt-5 text-white text-[36px] md:text-[42px] lg:text-[48px] font-quantico">
                            sqDiagramLearn
                        </h1> 
                        <p className="mb-8 md:mb-10 font-medium leading-relaxed font-quantico text-navy-muted max-w-4xl text-base md:text-lg lg:text-xl">
                            sqDiagramLearn merupakan sebuah Website yang dapat membantu Anda dalam memahami Sequence Diagram
                        </p>
                        
                        <Link to="/materi/sequence-diagram" className="btn-accent px-6 py-3 mt-16 md:mt-24">
                            Mulai Belajar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}