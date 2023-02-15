import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import About from "./components/About";
import Footer from "./components/Footer";
import Coins from "./components/Coins";
import { useState, useEffect } from "react";
import "./loader.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`md:grid items-center justify-center ${
        loading && "h-[100vh] grid"
      } `}
    >
      {loading ? (
        <span class="loader"></span>
      ) : (
        <div className="max-w-screen-xl">
          <Header />
          <Hero />
          <Why />
          <Coins />
          <About />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
