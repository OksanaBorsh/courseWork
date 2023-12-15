import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Master from './components/masters/Master';

function Team() {
    return(
        <div className='team'>
            <Header />
            <Master />
            <Footer />
        </div>
    );
};
 
export default Team;