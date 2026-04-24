import { useEffect, useState } from "react";
import "./CarParts.css";

const PAGE_SIZE = 10;

export default function CarParts() {
  const [parts, setParts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const fetchParts = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        headers: {
          "X-Access-Key": import.meta.env.VITE_JSONBIN_ACCESS_KEY,
        },
      });
      const data = await response.json();
      setParts(data.record.articles);
    };

    fetchParts();
  }, []);

  const visibleParts = parts.slice(0, visibleCount);
  const remaining = parts.length - visibleCount;

  return (
    <div className="carparts">
      <div className="carparts-header">
        <p className="carparts-label">CATÁLOGO</p>
        <h1 className="carparts-title">Repuestos</h1>
        {parts.length > 0 && (
          <p className="carparts-subtitle">
            Mostrando {visibleParts.length} de {parts.length} artículos
          </p>
        )}
      </div>

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
    </div>
  );
}
