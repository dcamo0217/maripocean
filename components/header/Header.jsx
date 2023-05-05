import React from "react";
import NavBar from "./NavBar";
import styles from "./../../styles/home/Header.module.css";
import Button from "../Button";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <video
        src="/video/home/videobanner.mp4"
        autoPlay
        muted
        loop
        className={styles.myVideo}
      ></video>
      <div className={styles.headerContent}>
        <NavBar />
        <h1 className={styles.titleHeader}>
          Escape from your routine with exclusive tourism experiences in surf,
          kitesurf and wingfoil in Colombia
        </h1>
        <div className={styles.divBttn}>
          <Button textButton="Learn more" typeBtn="primary" />
        </div>
      </div>
    </div>
  );
}

export default Header;
