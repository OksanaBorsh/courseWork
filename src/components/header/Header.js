import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from './../../img/logo.svg';
import Insta from './../../img/insta.svg';
import infoWind from './../../img/info_window.svg';
import Window from '../window/Window';
import './header.css';

function Header() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="social_insta">
            <a href="https://www.instagram.com/">
              <img src={Insta} alt="instagram" />
            </a>
          </div>
          <nav className="nav_left">
            <ul>
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">Головна</Link>
              </li>
              <li className={location.pathname === '/team' ? 'active' : ''}>
                <Link to="/team">Мастера</Link>
              </li>
              <li className={location.pathname === '#!' ? 'active' : ''}>
                <Link to="#!">Косметика</Link>
              </li>
            </ul>
          </nav>
          <div className="header_logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <nav className="nav_right">
            <ul>
              <li className={location.pathname === '/price' ? 'active' : ''}>
                <Link to="/price">Акції</Link>
              </li>
              <li className={location.pathname === '#!' ? 'active' : ''}>
                <Link to="#!">Відгуки</Link>
              </li>
              <li className={location.pathname === '/cosmetics' ? 'active' : ''}>
                <Link to="/map">Контакти</Link>
              </li>
            </ul>
          </nav>
          <button className="info_window" onClick={openModal}>
              <img src={infoWind} alt="Info" />
          </button>
          {isModalOpen && <Window closeModal={closeModal} />}
        </div>
        <hr className="line"></hr>
      </div>
    </header>
  );
}

export default Header;
