// estructura visual mínima
import "./Home.css";
import CarParts from "../ComponentCarParts/CarParts";
import Footer from "../ComponentFooter/Footer";

export default function Home() {
    return (
        <div className="home">
            <h1>Bienvenido a CarParts</h1>
            <CarParts />
            <Footer />
        </div>
    );
}