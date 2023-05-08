import React from "react";
import styles from "./../styles/home/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <p className={styles.title}>Camps</p>
        <p className={styles.text}>Despertar Oceánico</p>
        <p className={styles.title}>About</p>
        <p className={styles.title}>Blog</p>
      </div>
      <div>
        <p className={styles.title}>Daytrips</p>
        <ul className={styles.footerUl}>
          <li className={styles.text}>Surf Glimpse</li>
          <li className={styles.text}>Wind Glimpse</li>
          <li className={styles.text}>Paddle Glimpse</li>
        </ul>
      </div>
      <div>
        <p className={styles.title}>Contact</p>
        <p className={styles.text}>Email: info@maripocean.com</p>
        <p className={styles.text}>Whatsapp +57-305 893 2429</p>
        <div className={styles.network}>
          <p className={styles.title}>Follow us:</p>
          <img
            className={styles.igIcon}
            src="/pictures/home/instagram-icon.png"
            alt="instagram_icon.png"
          />
          <p className={styles.text}>@maripocean</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
