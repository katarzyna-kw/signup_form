import Card from './components/Card.component'
import Footer from './components/Footer.component'
import './App.css';
import desktopBg from './img/bg-intro-desktop.png'
import mobileBg from './img/bg-intro-mobile.png'

function App() {
  const bgUrl = window.innerWidth >= 600 ? desktopBg : mobileBg

  return (
    <div className="App" style={{backgroundImage: `url(${bgUrl})` }}>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
