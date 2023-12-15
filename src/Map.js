import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Maps from './components/map/Maps';

function Map() {
    return(
        <div className='Map'>
            <Header />
            <Maps />
            <Footer />
        </div>
    );
};
 
export default Map;