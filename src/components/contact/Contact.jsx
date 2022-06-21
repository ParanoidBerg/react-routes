import React from "react";
import styles from "./contact.module.css";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contact = () => {
  const mapData = {
    center: [43.324675, 45.692376],
    zoom: 15,
  };

  const coordinates = [[43.324675, 45.692376]];

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoCnt}>
          <Link to="/" className={styles.logo}>
            Cover
          </Link>
        </div>
        <div className={styles.linksCnt}>
          <Link to="/" className={styles.home}>
            Home
          </Link>
          <Link to="/features" className={styles.features}>
            Features
          </Link>
          <Link to="/contact" className={styles.contacts}>
            Contact
          </Link>
        </div>
      </header>
      <div className={styles.main}>
      <div className={styles.adress}>Наш адресс:</div>

      <li>город Грозный</li>
      <li>улица Трошева</li>
      <li>дом 7</li>
      <li>ТЦ Раяна</li>
      
      <div className={styles.map}>
      <YMaps>
        <Map defaultState={mapData}>
          {coordinates.map((coordinate) => (
            <Placemark geometry={coordinate} />
          ))}
        </Map>
      </YMaps>
      </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.fText}>
          Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>{" "}
          by <a href="x">@mdo.</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
