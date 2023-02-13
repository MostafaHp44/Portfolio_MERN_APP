import './App.css';
import NavBar from './components/NavBar/NavBar';
import Bio from './components/Bio/Bio'
import Aboutme from './components/Aboutme/Aboutme'
import Services from './components/Services/Services'
import ContactUs from './components/ContactUs/Contactus';
import Footer from './components/Footer/footer';
import DarkMode from './components/DarkMode/DarkMode'
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
 
  return (
    <div className="App" >
      <DarkMode/>
      <NavBar/>
      <Bio/>
      <Aboutme/>
      <Services/>
      <ContactUs/>
      <Footer/>
      <div>

      </div>
    </div>
  
  );
}

export default App;
