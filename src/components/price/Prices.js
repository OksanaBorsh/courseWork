import React from "react";
import './prices.css';

import photo1 from './../../img/image.png';

const ServicesBlock = ({ name, price, additionalInfo }) => (
  <div className="prices_text">
    <div className="text_wrapper">
        <div className="text_n">{name}</div>
        <div className="text_p">{price}</div>
    </div>
    <div className="text_pr">{additionalInfo}</div>
    
  </div>
);

const Prices = () => {
  const generateServiceBlocks = () => {
    const services = [
      { name: 'Жіноча укладка', price: '1 000 ₽', additionalInfo: '+ обробка кінчиків волосся' },
    ];

    return services.map((service, index) => (
      <React.Fragment key={index}>
        <ServicesBlock {...service} />
        {index < services.length - 1 && <div className="line3"></div>}
      </React.Fragment>
    ));
  };

  return (
    <section className="prices">
      <div className="container">
        <div className="prices_content">
          <div className="prices_name">Ціни на послуги</div>
          <div className="prices_block1">
            <div className="block1_photo">
              <img src={photo1} alt="Service" />
            </div>
            <ul>
                <li>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                </li>
            </ul>
            
          </div>
          <div className="prices_block2">
          <ul>
                <li>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                </li>
            </ul>
            <div className="block2_photo">
              <img src={photo1} alt="Service" />
            </div>
          </div>
          <div className="prices_block1">
            <div className="block1_photo">
              <img src={photo1} alt="Service" />
            </div>
            <ul>
                <li>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                    {generateServiceBlocks()}
                    <div className="line3"></div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
