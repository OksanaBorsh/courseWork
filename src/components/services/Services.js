import React from 'react';
import './services.css';

import Line from './../../img/line_service.svg';
import First from './../../img/image-1.png';
import Second from './../../img/image-2.png';
import Third from './../../img/image-3.png';
import Fourth from './../../img/image-4.png';
import Fiveth from './../../img/image-5.png';
import Sixth from './../../img/image-6.png';

const serviceItems = [
  { image: First, text: 'Перукарські послуги' },
  { image: Second, text: 'Манікюр' },
  { image: Third, text: 'Педикюр' },
  { image: Fourth, text: 'Косметологія' },
  { image: Fiveth, text: 'Эстетист по телу' },
  { image: Sixth, text: 'Візаж' },
];

const Services = () => {
  const firstRow = serviceItems.slice(0, 3);
  const secondRow = serviceItems.slice(3);

  return (
    <section className="services">
      <div className="container">
        <div className="services_content">
          <div className="items_one">
            {firstRow.map((item, index) => (
              <div key={index} className="one_it">
                <div className="img_top">
                  <img src={item.image} alt="" />
                </div>
                <div className="line_bot">
                  <img src={Line} alt="" />
                </div>
                <div className="text_srv">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="items_two">
            {secondRow.map((item, index) => (
              <div key={index} className="two_it">
                <div className="img_top">
                  <img src={item.image} alt="" />
                </div>
                <div className="line_bot">
                  <img src={Line} alt="" />
                </div>
                <div className="text_srv">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
