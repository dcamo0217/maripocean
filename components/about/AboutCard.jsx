import React from "react";
import PropTypes from "prop-types";

import styles from "./../../styles/about/About.module.css";

const AboutCard = ({ image, title, text }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt="" className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

AboutCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutCard;
