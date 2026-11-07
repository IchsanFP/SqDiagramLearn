export default function QuestionCard({ id, total, imgSrc, question, options, selectedAnswer, onAnswerChange }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-9 max-w-full sm:max-w-[1024px] justify-between">
      <div className="w-full lg:w-[172px] lg:shrink-0 flex flex-col gap-2">
        <h1 className="text-base font-semibold text-black font-poppins">
          Pertanyaan <span className="text-xl">{id}</span> dari {total}
        </h1>
        <div
          className="w-full h-2 overflow-hidden rounded-full bg-option"
          role="progressbar"
          aria-label="Progres kuis"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={id}
        >
          <div className="h-full rounded-full bg-action transition-all duration-300" style={{ width: `${(id / total) * 100}%` }} />
        </div>
      </div>
      <div className="bg-card flex w-full flex-col gap-9 border-2 rounded-lg border-navy px-12 py-5">
        <div className="w-full">
          <p className="text-base font-semibold text-justify text-black font-poppins">
            {question}
          </p>
          <img src={imgSrc} alt="" className="m-auto" />
        </div>
        <div className="flex flex-col justify-start w-full gap-2">
          <p className="font-poppins text-sm font-normal text-muted">Pilih satu jawaban</p>
          <div className="flex flex-col w-full gap-2">
            {options.map((option, index) => (
              <AnswerOption
                key={index}
                option={option}
                selectedAnswer={selectedAnswer}
                onAnswerChange={onAnswerChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen untuk Pilihan Jawaban
function AnswerOption({ option, selectedAnswer, onAnswerChange }) {
  return (
    <label className="rounded-lg px-6 py-4 w-full bg-option flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="answer"
        value={option.value}
        className="w-4 shrink-0"
        onChange={onAnswerChange}
        checked={selectedAnswer === option.value}
      />
      <span className="text-base font-normal text-black font-poppins">{option.text}</span>
    </label>
  );
}