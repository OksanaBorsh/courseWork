import './promo.css';
import promoMouse from './../../img/mouse.png';

const Promo = () => {
    return (<section className="promo">
        <div className="container">
                    <div className="promo_text">
                        <span>Салон краси</span>
                        <span>«Delote-Beauty»</span>
                        <span>в Запоріжжі</span>
                    </div>
                </div>
                <div className="promo_scroll">
                    <div className="scroll_img">
                        <img src={promoMouse} alt="mouse" />
                    </div>
                    <div className="scroll_text">
                        Прокрутити вниз
                    </div>
                </div>
    </section>);
};
 
export default Promo;