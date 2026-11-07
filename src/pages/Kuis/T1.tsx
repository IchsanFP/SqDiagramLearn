import Soal from "../../components/Kuis/Soal"
import {questionsT1} from "../../components/Data"
export default function T1(){
    return(
        <Soal kuisId="T1" questions={questionsT1} />
    )
}