import { Link } from "@tanstack/react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Programación IV</span>
      <div className="navbar-links">
        <Link
          to="/"
          className="nav-link"
          activeProps={{ className: "nav-link active" }}
          activeOptions={{ exact: true }}
        >
          Inicio
        </Link>
        <Link
          to="/repuestos"
          className="nav-link"
          activeProps={{ className: "nav-link active" }}
        >
          Repuestos
        </Link>
      </div>
    </nav>
  );
}
