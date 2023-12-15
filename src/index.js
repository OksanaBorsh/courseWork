import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import Team from './Team';
import Price from './Price';
import Map from './Map';

// ----- ПОДКЛЮЧАЕМ СТИЛИ ----- //
import './styles/reset.css';
import './styles/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/team" element={<Team />} />
        <Route path="/price" element={<Price />} />
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
