import './footer.css';
import logoImg from './../../img/bigLogo.svg';
import Insta from './../../img/bigInsta.svg';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_line">
            <div className="line_1"></div>
            <ul className="footerC">
              <div className="footer_logo">
                <img src={logoImg} alt="" />
              </div>

              <li className="footer_contact">
                <span>Контакти</span>
                <ul className="contact_phone">
                  <li>+38 (099) 48 67 566</li>
                  <li>+38 (099) 48 67 566</li>
                  <li>вул. Василя Сергієнка, дім 6</li>
                </ul>
              </li>
              <li className="footer_contact">
                <span>Графік роботи</span>
                <ul className="contact_phone">
                  <li>з 10:00 до 21:00 (Пн-Пт)</li>
                  <li>з 11:00 до 20:00 (Сб-Вс)</li>
                </ul>
              </li>
              <li className="footer_insta">
                <span className="insta_text">Ми в Instagram</span>
                <ul className="insta_logo">
                  <li>
                  <a href="https://www.instagram.com/">
                    <img src={Insta} alt="instagram" />
                  </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="line_1"></div>
          </div>
        </div>
      </div>
      <div className="footer_copy">Copyright © 2017 - 2022</div>
    </section>
  );
};

export default Footer;
