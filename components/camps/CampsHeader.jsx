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
            style={{
              width: "100%",
              maxWidth: "350px",
              margin: "0 auto",
            }}
            src="/pictures/camps/despertar-oceanico.png"
            alt=""
          />
          <h1 className={styles.titleHeader}>
            The first exclusive all-inclusive weekend experience to try surf,
            kitesurf and wingfoil in Colombia
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                backgroundColor: "rgba(255 248 239 / 0.4)",
                padding: "8px",
                margin: "0 5px",
              }}
            >
              July - August 2023
            </p>
            <p
              style={{
                backgroundColor: "rgba(255 248 239 / 0.4)",
                padding: "8px",
                margin: "0 5px",
              }}
            >
              2 dates
            </p>
            <p
              style={{
                backgroundColor: "rgba(255 248 239 / 0.4)",
                padding: "8px",
                margin: "0 5px",
              }}
            >
              Doors open!
            </p>
          </div>
          <div className={styles.divBttn}>
            <Button textButton="Book now" typeBtn="primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CampsHeader;
