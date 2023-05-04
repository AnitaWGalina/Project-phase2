<<<<<<< HEAD
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Homepage />
    </main>
=======
import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import About from './components/About';
import FAQs from './components/FAQs';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/about' element={<About/>} />
        <Route path='/faq'element={<FAQs/>} />
        
        
      </Routes>
     <Footer/>
    </div>
>>>>>>> f22999ab220e3cb46727b5ecb1514ea0d3cd99d9
  );
}

export default App;
 
