import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Students from "./components/Students";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Students />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
