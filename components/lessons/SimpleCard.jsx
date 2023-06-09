import React from "react";
import styles from "../../styles/lessons/Lessons.module.css";

const SimpleCard = ({ image, alt, title, text }) => {
  return (
    <div className={styles.simpleCardContainer}>
      <img className={styles.simpleCardImg} src={image} alt={alt} />
      <div className={styles.simpleCardTextContainer}>
        <h3 className={styles.simpleCardTitle}>{title}</h3>
        <p className={styles.simpleCardText}>{text}</p>
      </div>
    </div>
  );
};

export default SimpleCard;
