import React from "react";
import NavBar from "../header/NavBar";
import Button from "../Button";

import styles from "../../styles/lessons/Lessons.module.css";

const Header = ({ backgroundImg, title, description, url }) => {
  return (
    <div
      className={styles.lessonsHeaderContainer}
      style={{
        backgroundImage: ` url(${backgroundImg})`,
      }}
    >
      <NavBar />
      <h1 className={styles.lessonsHeaderTitle}>{title}</h1>
      <p className={styles.lessonsHeaderText}>{description}</p>
      <Button textButton="Book now" typeBtn="primary" url={url} />
    </div>
  );
};

export default Header;
