import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
import Council from './components/Council';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home ug={"800+"} pg={"500+"} f={"120+"}/>}/>
      <Route path='/experiences' element={<Experiences/>}/>
      <Route path='/council' element={<Council/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
