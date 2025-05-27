import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";
import Team from "./Pages/Team";
import Mission from "./Pages/Missionpage";
import './App.css';
import ProjectsPage from "./Pages/Projects";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/team" element={<Team />} />
       <Route path="/Missionpage" element={<Mission/>} />
       <Route path="/Projects" element={<ProjectsPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
