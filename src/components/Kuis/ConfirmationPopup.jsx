import Modal from "./Modal";

export default function ConfirmationPopup({ onClose, onConfirm }) {
  return (
    <Modal
      labelledBy="confirm-title"
      describedBy="confirm-desc"
      onEscape={onClose}
      className="bg-card w-full max-w-[390px] p-8 rounded-lg shadow-lg text-center flex justify-center gap-4 flex-col"
    >
      <h2 id="confirm-title" className="font-poppins text-base text-muted font-medium">Apakah Anda yakin ingin pindah halaman?</h2>
      <p id="confirm-desc" className="font-poppins text-sm text-muted font-normal">Jawaban yang sudah Anda isi akan hilang.</p>
      <div className="flex justify-center gap-4">
        <button onClick={onConfirm} className="btn-secondary px-6 py-3 w-[135px]">
          Ya, pindah
        </button>
        <button data-autofocus onClick={onClose} className="btn-primary px-6 py-3 w-[135px]">
          Tidak
        </button>
      </div>
    </Modal>
  );
}
