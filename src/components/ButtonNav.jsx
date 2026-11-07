import { Link } from "react-router-dom";

export default function ButtonNav({ to, children }) {
    return (
        <Link to={to} className="btn-primary">
            {children}
        </Link>  
    );
}
  
 
 