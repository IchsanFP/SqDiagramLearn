import type { ReactNode } from "react";

interface ParagraphProps {
    children: ReactNode;
    className?: string;
    as?: "p" | "div";
}

// `as="div"` dipakai bila isinya berupa daftar (<ol>/<ul>), karena <p> tidak boleh berisi daftar.
export default function Paragraph({ children, className = "", as: Tag = "p" }: ParagraphProps) {
    return (
      <Tag className={`text-lg font-normal text-left md:text-justify text-black font-poppins ${className}`}>
        {children}
      </Tag>
    );
  }
  