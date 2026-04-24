import "./CarParts.css";

export default function CarParts() {
  return (
    <div className="carparts">
      <div className="carparts-header">
        <p className="carparts-label">CATÁLOGO</p>
        <h1 className="carparts-title">Repuestos</h1>
      </div>
      <div className="carparts-grid">
        <p className="carparts-empty">Cargando repuestos...</p>
      </div>
    </div>
  );
}
