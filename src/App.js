import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} exact />
        <Route path="/contact" element={<ContactPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
