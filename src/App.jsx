import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Contenue from "./pages/Contenue";
import VieEtudiante from "./pages/VieEtudiante";
import Admission from "./pages/Admission";
import News from "./pages/News";
import CalendrierUniversitaire from "./components/CalendrierUniversitaire";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop />
      <ScrollToHash />   {/* <---- Ajout pour gérer #hash */}
      
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 duration-700 transition-all ease-in-out">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Contenue />} />
            <Route path="/vie-etudiante" element={<VieEtudiante />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/calendrier" element={<CalendrierUniversitaire />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
