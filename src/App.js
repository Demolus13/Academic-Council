import './App.css';
import React, { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Council from './components/Council';
import Events from './components/Events';
import Experiences from './components/Experiences';
import Preview from './components/Preview';
import PassFailCalculator from './components/PassFail';
import SRCs, { SRCsKnownMore } from './components/SRCs';
import Internship from './components/Internships';
import Updated from './components/Updated';
import Footer from './components/Footer';

function App() {
  const [activeLink, setActiveLink] = useState(0);

  // Callback function to update the activeLink state
  const handleLinkClick = (value) => {
    setActiveLink(value);
  };

  return (

    <HashRouter>
      <Navbar onLinkClick={handleLinkClick} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/council' element={<Council />} />
        <Route path='/events' element={<Events />} />
        <Route path='/experiences' element={<Experiences activeLink={activeLink} />} />
        <Route path="/experiences/alumni/:index" element={<Preview isActive={0} />} />
        <Route path="/experiences/quill/:index" element={<Preview isActive={1} />} />
        <Route path="/experiences/QnA/:index" element={<Preview isActive={2} />} />
        <Route path='/calculator' element={<PassFailCalculator />} />
        <Route path='/SRCs' element={<SRCs />} />
        <Route path='/SRCs/:index' element={<SRCsKnownMore />} />
        <Route path='/internships' element={<Internship />} />
        <Route path='*' element={<Updated />} />
      </Routes>
      <Footer />

    </HashRouter>
  );
}

export default App;
