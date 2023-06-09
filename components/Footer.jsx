import React from "react";
import styles from "./../styles/home/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <a href="/camps">
          <p className={styles.title}>Camps</p>
          <p className={styles.text}>Despertar Oceánico</p>
        </a>
        <p className={styles.title}>Lessons</p>
        <div style={{ display: "flex" }}>
          <p className={styles.text}>
            <a href="/lessons/surf">Surf</a>
          </p>
          <p className={styles.text}>
            <a href="/lessons/kitesurf">Kitesurf</a>
          </p>
          <p className={styles.text}>
            <a href="/lessons/wingfoil">Wingfoil</a>
          </p>
        </div>

        <p className={styles.title}>
          <a href="/about">About</a>
        </p>
        <p className={styles.title}>
          <a href="/">Blog</a>
        </p>
      </div>
      {/* <div>
        <ul className={styles.footerUl}>
          <li className={styles.text}>Surf Glimpse</li>
          <li className={styles.text}>Wind Glimpse</li>
          <li className={styles.text}>Paddle Glimpse</li>
        </ul>
      </div> */}
      <div>
        <p className={styles.title}>Contact</p>
        <p className={styles.text}>
          Email: <a href="mailto:info@maripocean.com">info@maripocean.com</a>
        </p>
        <p className={styles.text}>
          <a href="https://wa.me/message/KCVNME7YYHBSA1">
            Whatsapp: +57-305 893 2429
          </a>
        </p>
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
