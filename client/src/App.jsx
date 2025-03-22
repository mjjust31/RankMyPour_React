import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Tasting from './pages/SingleTasting';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import MultiTasting from './pages/MultiTasting'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/tasting" element={<Tasting />} />
        <Route path="/multi-tasting" element={MultiTasting}></Route>
        {/* Add more routes here */}
      </Routes>
    </>
  );
}
export default App;
