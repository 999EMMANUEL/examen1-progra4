import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Programación IV</span>
      <div className="navbar-links">
        <a href="/" className="nav-link">Inicio</a>
        <a href="/repuestos" className="nav-link">Repuestos</a>
      </div>
    </nav>
  );
}
