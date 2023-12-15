import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Prices from './components/price/Prices';

function Price() {
    return(
        <div className='team'>
            <Header />
            <Prices />
            <Footer /> 
        </div>
    );
};
 
export default Price;