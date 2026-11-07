import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonNavProps {
    to: string;
    children: ReactNode;
}

export default function ButtonNav({ to, children }: ButtonNavProps) {
    return (
        <Link to={to} className="btn-primary">
            {children}
        </Link>  
    );
}
  
 
 