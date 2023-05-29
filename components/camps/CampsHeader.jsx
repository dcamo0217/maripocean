import React from "react";
import NavBar from "../header/NavBar";
import Button from "../Button";

import styles from "../../styles/home/Header.module.css";

const CampsHeader = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <video
          src="/video/camps/camps-banner.mp4"
          autoPlay
          muted
          loop
          className={styles.myVideo}
        ></video>
        <div className={styles.headerContent}>
          <NavBar />
          <img
            className={styles.campsLogo}
            src="/pictures/camps/despertar-oceanico.png"
            alt=""
          />
          <h1 className={styles.titleHeader}>
            The first exclusive all-inclusive weekend experience to try surf,
            kitesurf and wingfoil in Colombia
          </h1>
          <div className={styles.headerItemsContainer}>
            <p
              style={{
                backgroundColor: "rgba(255 248 239 / 0.4)",
                padding: "8px",
                margin: "5px",
                color: "#ffffff",
                textShadow: "0px 0px 5px #000",
              }}
            >
              July - August 2023
            </p>
            <p
              style={{
                backgroundColor: "rgba(255 248 239 / 0.4)",
                padding: "8px",
                margin: "5px",
                color: "#ffffff",
                textShadow: "0px 0px 5px #000",
              }}
            >
              2 dates
            </p>
            <p
              style={{
                backgroundColor: "rgba(255 248 239 / 0.4)",
                padding: "8px",
                margin: "5px",
                color: "#ffffff",
                textShadow: "0px 0px 5px #000",
              }}
            >
              Doors open!
            </p>
          </div>
          <div className={styles.divBttn}>
            <Button textButton="Book now" typeBtn="primary" url="#book-now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CampsHeader;
