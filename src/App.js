import React, { useState, useEffect } from 'react'
import Card from './components/Card.component'
import Footer from './components/Footer.component'
import './App.css';
import desktopBg from './img/bg-intro-desktop.png'
import mobileBg from './img/bg-intro-mobile.png'

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bgUrl = window.innerWidth >= 600 ? desktopBg : mobileBg

  useEffect(() => {
    const updateBg = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateBg);
    
    return () => window.removeEventListener("resize", updateBg);
    }, 
  []);

  return (
    <div className="App" data-testid="app" style={{backgroundImage: `url(${bgUrl})` }}>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
