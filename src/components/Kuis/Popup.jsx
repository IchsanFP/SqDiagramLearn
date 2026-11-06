import IconX from "../../assets/iconX.svg"
import iconCeklis from "../../assets/iconCeklis.svg"
import Modal from "./Modal";

const buttonClass = "px-6 py-3 font-poppins text-base font-medium text-white bg-btn rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:bg-[#005071]";

export default function Popup({ explanation, isCorrect, onClose, onNext, isLastQuestion, onFinish }) {
    return (
      <Modal
        labelledBy="feedback-title"
        describedBy="feedback-desc"
        // Esc hanya menutup saat jawaban salah (sama dengan "Coba Lagi");
        // saat benar, pengguna harus memilih lanjut secara eksplisit.
        onEscape={isCorrect ? undefined : onClose}
        className="bg-[#9CA5CE] p-5 rounded-lg shadow-lg w-full max-w-[390px] text-center flex justify-center gap-2 flex-col"
      >
        <div className="m-auto justify-center items-center">
          <img src={isCorrect ? iconCeklis : IconX} alt="" width={50} height={50} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="feedback-title" className="font-poppins text-base text-[#2e2d2c] font-medium">
            {isCorrect ? "Jawaban Anda Benar" : "Jawaban Anda Salah"}
          </h2>
          <p id="feedback-desc" className="font-poppins text-sm text-[#2e2d2c] font-normal">
            {explanation}
          </p>
        </div>
        <div className="flex justify-center m-2">
          {isCorrect ? (
            isLastQuestion ? (
              <button onClick={onFinish} className={buttonClass}>Lihat Hasil</button>
            ) : (
              <button onClick={onNext} className={buttonClass}>Soal Selanjutnya</button>
            )
          ) : (
            <button onClick={onClose} className={buttonClass}>Coba Lagi</button>
          )}
        </div>
      </Modal>
    );
  }
