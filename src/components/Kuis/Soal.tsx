import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Header";
import Popup from "./Popup"
import ConfirmationPopup from "./ConfirmationPopup"
import QuestionCard from "./QuestionCard"
import { saveSkor } from "./skorStore";
import type { NavClickHandler, OptionValue, Question } from "../../types";


export default function SoalKuis({ kuisId, questions }: { kuisId: string; questions: Question[] }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<OptionValue | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedExplanation, setSelectedExplanation] = useState("");
  // Skor = jumlah soal yang dijawab benar pada percobaan pertama.
  const [score, setScore] = useState(0);
  const [missedCurrent, setMissedCurrent] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Reset state when questions change
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowPopup(false);
    setSelectedExplanation("");
    setScore(0);
    setMissedCurrent(false);
    setFinished(false);
  }, [questions]);

  // Handler
  const handleNavClick: NavClickHandler = (event, to) => {
    event.preventDefault();
    setNextPage(to);
    setShowConfirmation(true);
  };

  const handleConfirmNavigation = () => {
    setShowConfirmation(false);
    if (nextPage) navigate(nextPage);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer) {
      const selectedOption = currentQuestion.options.find((option) => option.value === selectedAnswer);
      const correct = selectedAnswer === currentQuestion.correctAnswer;
      setIsCorrect(correct);
      if (correct && !missedCurrent) setScore((s) => s + 1);
      if (!correct) setMissedCurrent(true);
      setSelectedExplanation(selectedOption?.explanation ?? "");
      setShowPopup(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowPopup(false);
      setSelectedExplanation("");
      setMissedCurrent(false);
    }
  };

  const handleFinish = () => {
    setShowPopup(false);
    setFinished(true);
    saveSkor(kuisId, score, questions.length);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setSelectedExplanation("");
    setScore(0);
    setMissedCurrent(false);
    setFinished(false);
  };

  if (finished) {
    return (
      <>
        <Navbar />
        <main className="pb-5 pt-[120px] bg-surface min-h-screen">
          <div className="container">
            <div className="flex flex-col items-center m-auto max-w-[560px] gap-4 p-8 text-center bg-card border-2 border-navy rounded-lg font-poppins">
              <h1 className="text-2xl font-bold text-black">Kuis Selesai</h1>
              <p className="text-5xl font-bold text-navy font-quantico" aria-label={`Skor ${score} dari ${questions.length}`}>
                {score}/{questions.length}
              </p>
              <p className="text-base text-black">
                Anda menjawab benar {score} dari {questions.length} soal pada percobaan pertama.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <button onClick={handleRestart} className="btn-secondary">
                  Ulangi Kuis
                </button>
                <button onClick={() => navigate("/kuis")} className="btn-primary">
                  Kembali ke Topik Kuis
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <section id="#" className="pb-5 pt-[120px] bg-surface min-h-screen">
        <div className="container">
          <div className="flex flex-col m-auto max-w-[1024px] gap-3">
            <QuestionCard
              id={currentQuestion.id}
              total={questions.length}
              imgSrc={currentQuestion.imgSrc}
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedAnswer={selectedAnswer}
              onAnswerChange={setSelectedAnswer}
            />
            <div className="flex justify-end">
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedAnswer}
                className="btn-primary py-3"
              >
                Cek Jawaban 
              </button>
            </div>
          </div>
        </div>
        {showPopup && (
          <Popup
            explanation={selectedExplanation}
            isCorrect={isCorrect === true}
            onClose={() => setShowPopup(false)}
            onNext={handleNextQuestion}
            isLastQuestion={isLastQuestion}
            onFinish={handleFinish}
          />
        )}
        {showConfirmation && (
          <ConfirmationPopup onClose={() => setShowConfirmation(false)} onConfirm={handleConfirmNavigation} />
        )}
      </section>
    </>
  );
}
