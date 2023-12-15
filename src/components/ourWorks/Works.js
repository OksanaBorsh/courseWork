import React, { useState } from 'react';

import './works.css';

import fWork from './../../img/work-9.png';
import sWork from './../../img/work-6.png';
import tWork from './../../img/work-3.png';
import foWork from './../../img/work-8.png';
import fiork from './../../img/work-5.png';
import siWork from './../../img/work-2.png';
import seWork from './../../img/work-7.png';
import eWork from './../../img/work-4.png';
import nWork from './../../img/work-1.png';

const Works = () => {

    const [activeTab, setActiveTab] = useState('all'); // Изначально выбран пункт "Показать все"

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const tabPhotos = {
        all: [fWork, sWork, tWork, foWork, fiork, siWork, seWork, eWork, nWork],
        hair: [fiork, eWork, nWork],
        manicure: [tWork, seWork, tWork],
        pedicure: [siWork, sWork, foWork],
    };

    return ( 
        <div className="works">
            <div className="container">
                <div className="works_content">
                    <div className="main_text">Наші роботи</div>
                    <div className="work_tabs">
                    <ul>
                            <li className={activeTab === 'all' ? 'active' : ''}>
                                <a href="#!" onClick={() => handleTabClick('all')}>Показати все</a>
                            </li>
                            <li className={activeTab === 'hair' ? 'active' : ''}>
                                <a href="#!" onClick={() => handleTabClick('hair')}>Перукарські послуги</a>
                            </li>
                            <li className={activeTab === 'manicure' ? 'active' : ''}>
                                <a href="#!" onClick={() => handleTabClick('manicure')}>Манікюр</a>
                            </li>
                            <li className={activeTab === 'pedicure' ? 'active' : ''}>
                                <a href="#!" onClick={() => handleTabClick('pedicure')}>Педикюр</a>
                            </li>
                        </ul>
                    </div>
                    <div className="work_photo">
                        {tabPhotos[activeTab].map((photo, index) => (
                            <img key={index} src={photo} alt={`Work ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Works;