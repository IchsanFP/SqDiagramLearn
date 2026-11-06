import Modal from "./Modal";

export default function ConfirmationPopup({ onClose, onConfirm }) {
  return (
    <Modal
      labelledBy="confirm-title"
      describedBy="confirm-desc"
      onEscape={onClose}
      className="bg-[#9CA5CE] w-full max-w-[390px] p-8 rounded-lg shadow-lg text-center flex justify-center gap-4 flex-col"
    >
      <h2 id="confirm-title" className="font-poppins text-base text-[#2e2d2c] font-medium">Apakah Anda yakin ingin pindah halaman?</h2>
      <p id="confirm-desc" className="font-poppins text-sm text-[#2e2d2c] font-normal">Jawaban yang sudah Anda isi akan hilang.</p>
      <div className="flex justify-center gap-4">
        <button onClick={onConfirm} className="px-6 py-3 font-poppins text-base font-medium text-primary w-[135px] border-2 border-btn bg-transparent rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:text-white hover:bg-[#005071]">
          Ya, pindah
        </button>
        <button data-autofocus onClick={onClose} className="px-6 py-3 font-poppins text-base font-medium text-white w-[135px] bg-btn rounded-[10px] hover:shadow-lg hover:opacity-80 duration-300 hover:bg-[#005071]">
          Tidak
        </button>
      </div>
    </Modal>
  );
}
