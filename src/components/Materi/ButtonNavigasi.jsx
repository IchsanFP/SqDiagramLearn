import { Link } from "react-router-dom";

export default function ButtonNavigasi({ to, icon, children }) {
    return (
        <Link to={to} className="btn-primary">
            {icon === "left" && <i className="ri-arrow-left-s-line"></i>}
            {children}
            {icon === "right" && <i className="ri-arrow-right-s-line"></i>}
        </Link>
        
    );
}
  
 