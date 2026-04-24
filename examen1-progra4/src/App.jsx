import { Outlet } from "@tanstack/react-router";
import Navbar from "./ComponentNavbar/Navbar";
import Footer from "./ComponentFooter/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
