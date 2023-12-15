import './window.css';
import closeIcon from './../../img/close-icon.svg';

const Window = ( props ) => {

    const handleClose = () => {
        if (props.closeModal) {
            props.closeModal();
        }
    };
    return ( 
        <section className='window'>
            <div className="container">
                <div className="window_content">
                    <button className="window_close" onClick={handleClose}>
                        <img src={closeIcon} alt="Close"/>
                    </button>
                    <div className="window_text">
                        <div className="text_lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt minima quo ad nulla iusto porro, facere vero. Praesentium, vitae alias! Doloribus eos aut a veniam ducimus officia facilis accusantium?
                        </div>
                        <div className="text_contact">
                            Контакты
                        </div>
                        <div className="contact_phone">
                            <span>+7 (812) 123-45-67</span>
                            <span>+7 (911) 123-45-67</span>

                            <span>Новоостровский проспект, дом 36 лит. С</span>
                        </div>
                        
                        <div className="text_graphic">
                            Режим работы
                        </div>
                        <div className="graphic_time">
                            <span>C 10:00 до 21:00 (Пн-Пт)</span>
                            <span>С 11:00 до 20:00 (Сб-Вс)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Window;