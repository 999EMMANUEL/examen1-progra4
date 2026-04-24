import "./CarParts.css";
import { useEffect, useState } from "react";

// estructura visual mínima
export default function CarParts() {
    const [carParts, setCarParts] = useState([]);
    useEffect(() => {
        
        const fetchCarParts = async () => {
            
            const response = await fetch("/api/car-parts");
            const data = await response.json();
            setCarParts(data);
        };

        fetchCarParts();
    }, []);

    return (
        <div className="car-parts">
            <h1>Car Parts</h1>
            <ul>
                {carParts.map((part) => (
                    <li key={part.id}>{part.name}</li>
                ))}
            </ul>
        </div>
    );
}
