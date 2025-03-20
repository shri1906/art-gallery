import { Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";


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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
