import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import './maps.css'
const Maps = () => {
  // Центр вашей карты
  const defaultCenter = { lat: 47.806551, lng: 35.053539 };

  return (
    <section className="Maps">
      <div className="container">
        <div className="maps_name">Контакти</div>

        <div className="google_map">
        <LoadScript googleMapsApiKey="AIzaSyAjtLiNzAWy-ymTcNeZJqtTMut6vq0oVvw">
          <GoogleMap
            mapContainerStyle={{ height: "576px", width: "1296px" }}
            center={defaultCenter}
            zoom={17}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
        </div>
        <ul className="footer_cont">
          <li>
            <span>Контакти</span>
            <ul className="contact_ph">
              <li>+38 (099) 48 67 566</li>
              <li>+38 (099) 48 67 566</li>
              <li>вул. Василя Сергієнка, дім 6</li>
            </ul>
          </li>
          <li>
            <span>Графік роботи</span>
            <ul className="contact_ph">
              <li>з 10:00 до 21:00 (Пн-Пт)</li>
              <li>з 11:00 до 20:00 (Сб-Вс)</li>
            </ul>
          </li>
          <li>
            <span>Контакти</span>
            <ul className="contact_ph">
              <li>+38 (099) 48 67 566</li>
              <li>+38 (099) 48 67 566</li>
              <li>вул. Василя Сергієнка, дім 6</li>
            </ul>
          </li>
          <li>
            <span>Графік роботи</span>
            <ul className="contact_ph">
              <li>з 10:00 до 21:00 (Пн-Пт)</li>
              <li>з 11:00 до 20:00 (Сб-Вс)</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Maps;