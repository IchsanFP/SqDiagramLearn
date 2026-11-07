import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonNavigasiProps {
    to: string;
    icon?: "left" | "right";
    children: ReactNode;
}

export default function ButtonNavigasi({ to, icon, children }: ButtonNavigasiProps) {
    return (
        <Link to={to} className="btn-primary">
            {icon === "left" && <i aria-hidden="true" className="ri-arrow-left-s-line"></i>}
            {children}
            {icon === "right" && <i aria-hidden="true" className="ri-arrow-right-s-line"></i>}
        </Link>
        
    );
}
  
 