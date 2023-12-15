import './cosmetics.css';

import KevinM from './../../img/logo-4.svg';
import Oribe from './../../img/logo-1.svg';
import Alterna from './../../img/logo-2.svg';
import AldoC from './../../img/logo-3.svg';

const Cosmetics = () => {
    return ( 
        <section className='cosmetics'>
            <div className="container">
                <div className="cosmetics_list">
                    <a href="https://kevinmurphy.com.au/ua/en/km/"><img src={KevinM} alt="" /></a>
                    <a href="https://www.oribe.com/"><img src={Oribe} alt="" /></a>
                    <a href="https://www.4alterna.com.ua/"><img src={Alterna} alt="" /></a>
                    <a href="https://www.aldocoppola.com/en/"><img src={AldoC} alt="" /></a>
                </div>
            </div>
        </section>
     );
}
 
export default Cosmetics;