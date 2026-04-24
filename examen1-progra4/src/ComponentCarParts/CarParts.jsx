import { useEffect, useState } from "react";
import "./CarParts.css";

const PAGE_SIZE = 10;

export default function CarParts() {
  const [parts, setParts] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(import.meta.env.VITE_API_URL, {
          headers: {
            "X-Access-Key": import.meta.env.VITE_JSONBIN_ACCESS_KEY,
          },
        });
        if (!response.ok) throw new Error(`Error ${response.status}: no se pudo cargar el catálogo.`);
        const data = await response.json();
        setParts(data.record.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParts();
  }, []);

  const filtered = parts.filter((part) =>
    part.articleProductName.toLowerCase().includes(search.toLowerCase())
  );

  const visibleParts = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleCount;

  function handleSearch(e) {
    setSearch(e.target.value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div className="carparts">
      <div className="carparts-header">
        <p className="carparts-label">CATÁLOGO</p>
        <h1 className="carparts-title">Repuestos</h1>
        {!loading && !error && parts.length > 0 && (
          <p className="carparts-subtitle">
            {search
              ? `Mostrando ${filtered.length} de ${filtered.length} resultados`
              : `Mostrando ${visibleParts.length} de ${parts.length} artículos`}
          </p>
        )}
      </div>

      {!loading && !error && (
        <input
          type="text"
          className="carparts-search"
          placeholder="Buscar por nombre o código..."
          value={search}
          onChange={handleSearch}
        />
      )}

      {loading && (
        <div className="carparts-state">
          <div className="carparts-spinner" />
          <p>Cargando repuestos desde la API...</p>
        </div>
      )}

      {error && (
        <div className="carparts-state carparts-error">
          <p className="carparts-state-icon">✕</p>
          <p>{error}</p>
          <button className="carparts-more" onClick={() => window.location.reload()}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="carparts-state">
          <p className="carparts-state-icon">⊘</p>
          <p>No se encontraron repuestos para <strong>"{search}"</strong>.</p>
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <>
          <div className="carparts-grid">
            {visibleParts.map((part) => (
              <div key={part.articleId} className="part-card">
                <img
                  src={part.s3image}
                  alt={part.articleProductName}
                  className="part-card-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="part-card-body">
                  <span className="part-card-type">{part.articleProductName}</span>
                  <p className="part-card-name">{part.articleNo}</p>
                  <div className="part-card-footer">
                    <span className="part-card-supplier">{part.supplierName}</span>
                    <span className="part-card-category">#{part.supplierId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {remaining > 0 && (
            <button
              className="carparts-more"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            >
              Ver más ({Math.min(remaining, PAGE_SIZE)} de {remaining} restantes)
            </button>
          )}
        </>
      )}
    </div>
  );
}
