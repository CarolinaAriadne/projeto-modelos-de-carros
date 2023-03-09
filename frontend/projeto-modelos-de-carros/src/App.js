import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarsPage from "./pages/Cars";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<LandingPage />} />
       <Route exact path="/cars" element={<CarsPage />} />
     </Routes>
   </Router>
  );
};

export default App;
