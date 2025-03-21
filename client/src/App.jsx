import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Tasting from './pages/Tasting';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasting" element={<Tasting />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}
export default App;
