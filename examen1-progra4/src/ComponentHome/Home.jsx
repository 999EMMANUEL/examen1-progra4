import { Link } from "@tanstack/react-router";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <p className="home-label">BIENVENIDO</p>
      <h1 className="home-title">Catálogo de Repuestos</h1>
      <p className="home-description">
        Encuentra los repuestos que necesitas para tu vehículo de forma rápida y sencilla.
      </p>
      <Link to="/repuestos" className="home-cta">Ver catálogo</Link>
    </div>
  );
}
