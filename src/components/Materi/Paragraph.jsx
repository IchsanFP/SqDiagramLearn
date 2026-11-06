// src/components/Paragraph.jsx
// `as="div"` dipakai bila isinya berupa daftar (<ol>/<ul>), karena <p> tidak boleh berisi daftar.
export default function Paragraph({ children, className = "", as: Tag = "p" }) {
    return (
      <Tag className={`text-lg font-normal text-left md:text-justify text-black font-poppins ${className}`}>
        {children}
      </Tag>
    );
  }
  