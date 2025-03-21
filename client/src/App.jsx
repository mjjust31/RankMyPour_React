import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
// import Tasting from './pages/Tasting'; // Add this later as you build more pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/tasting" element={<Tasting />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
