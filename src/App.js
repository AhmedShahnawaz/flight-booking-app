import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exect path="/" element={<Home/>}/>
            <Route exect path="/hotel" element={<List/>}/>
            <Route exect path="/hotel/:id" element={<Hotel/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
