import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  labelledBy: string;
  describedBy?: string;
  /** Dipanggil saat Esc ditekan; biarkan kosong agar Esc tidak menutup dialog. */
  onEscape?: () => void;
  className?: string;
  children: ReactNode;
}

// Dialog modal yang aksesibel: role="dialog", fokus otomatis ke [data-autofocus]
// (atau tombol pertama),
// fokus terkunci di dalam dialog (Tab/Shift+Tab), Esc memanggil onEscape,
// dan fokus dikembalikan ke elemen sebelumnya saat dialog ditutup.
export default function Modal({ labelledBy, describedBy, onEscape, className = "", children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const escapeRef = useRef(onEscape);
  escapeRef.current = onEscape;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const focusables = () => [...dialog.querySelectorAll<HTMLElement>("button, a[href], input, [tabindex]:not([tabindex='-1'])")];
    (dialog.querySelector<HTMLElement>("[data-autofocus]") ?? focusables()[0])?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && escapeRef.current) {
        e.preventDefault();
        escapeRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 px-4">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}
