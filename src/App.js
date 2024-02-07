import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Home/Portfolio';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/home' element ={<Home/>} />
          <Route path='/about' element ={<About/>} />
          <Route path='/contact' element ={<Contact/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
