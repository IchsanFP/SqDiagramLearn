import IconX from "../../assets/iconX.svg"
import iconCeklis from "../../assets/iconCeklis.svg"
import Modal from "./Modal";

interface PopupProps {
  explanation: string;
  isCorrect: boolean;
  onClose: () => void;
  onNext: () => void;
  isLastQuestion: boolean;
  onFinish: () => void;
}

const buttonClass = "btn-primary px-6 py-3";

export default function Popup({ explanation, isCorrect, onClose, onNext, isLastQuestion, onFinish }: PopupProps) {
    return (
      <Modal
        labelledBy="feedback-title"
        describedBy="feedback-desc"
        // Esc hanya menutup saat jawaban salah (sama dengan "Coba Lagi");
        // saat benar, pengguna harus memilih lanjut secara eksplisit.
        onEscape={isCorrect ? undefined : onClose}
        className="bg-card p-5 rounded-lg shadow-lg w-full max-w-[390px] text-center flex justify-center gap-2 flex-col"
      >
        <div className="m-auto justify-center items-center">
          <img src={isCorrect ? iconCeklis : IconX} alt="" width={50} height={50} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="feedback-title" className="font-poppins text-base text-muted font-medium">
            {isCorrect ? "Jawaban Anda Benar" : "Jawaban Anda Salah"}
          </h2>
          <p id="feedback-desc" className="font-poppins text-sm text-muted font-normal">
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
