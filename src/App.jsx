import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Header/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<Home />} />

      </Routes>
      <Footer/>  
    </>
  );
}

export default App;
