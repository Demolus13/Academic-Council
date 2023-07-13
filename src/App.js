import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home ug={800} pg={400} f={215}/>}/>
      <Route path='/experiences' element={<Experiences/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
