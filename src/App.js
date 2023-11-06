import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
import Council from './components/Council';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Updated from './components/Updated';
import Preview from './components/Preview';

function App() {
  return (

    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home ug={"800+"} pg={"500+"} f={"120+"} />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path="/experiences/alumni/:index" element={<Preview isActive={0} />} />
        <Route path="/experiences/quill/:index" element={<Preview isActive={1} />} />
        <Route path="/experiences/QnA/:index" element={<Preview isActive={2} />} />
        <Route path='/council' element={<Council />} />
        <Route path='*' element={<Updated />} />
      </Routes>
      <Footer />

    </HashRouter>
  );
}

export default App;
