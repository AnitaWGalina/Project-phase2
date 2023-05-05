
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import About from './components/About';
import FAQs from './components/FAQs';
import Homepage from "./components/Homepage";
import FormData from "./FormData";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/about' element={<About/>} />
        <Route path='/faq'element={<FAQs/>} />
        
        
      </Routes>
      <Homepage/>
      <FormData/>
     <Footer/>
    </div>

  );
}

export default App;

