import React from "react";
import Button from "../Button";
import styles from "./../../styles/home/Services.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

const CardService = ({ textTitle, textBttn, urlImg, urlBttn }) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundImage: `url(${urlImg})` }}
    >
      <div className={styles.cardContent}>
        <p className={styles.titleCard}>{textTitle}</p>
        <div className={styles.buttonDivCard}>
          <Button textButton={textBttn} typeBtn="second" url={urlBttn} />
        </div>
      </div>
    </div>
  );
};

CardService.propTypes = {
  textTitle: PropTypes.string.isRequired,
  textBttn: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
};

export default CardService;
