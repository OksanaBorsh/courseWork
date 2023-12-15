import React from 'react';
import About from './components/about/About.js';
import Cosmetics from './components/cosmetics/Cosmetics.js';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js'
import Works from './components/ourWorks/Works.js';
import Promo from './components/promo/Promo.js';
import Services from './components/services/Services.js';

function App() {

  return (
    <div className="App">
        <Header />
        <Promo />
        <About />
        <Services />
        <Cosmetics />
        <Works />
        <Footer />
    </div>
  );
}

export default App;
