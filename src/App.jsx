import React,{ useState , useEffect } from 'react'
import { BrowserRouter as Routers , Routes , Route , Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
// import SideBar from './components/SideBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Contact from './pages/Contact';

import WOW from "wowjs";
import "animate.css";

function App() {

  useEffect(()=>{
      new WOW.WOW({
        live : false,
      }).init();
  },[])

  return (
    <Routers>
      <header>
        <NavBar/>
      </header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Routers>
  )
}

export default App
