import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";


function App() {
  const {theme} = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
