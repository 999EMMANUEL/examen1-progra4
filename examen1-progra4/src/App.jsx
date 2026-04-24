import Navbar from "./ComponentNavbar/Navbar";
import Footer from "./ComponentFooter/Footer";
import Home from "./ComponentHome/Home";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
