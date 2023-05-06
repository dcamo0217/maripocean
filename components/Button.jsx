import React from "react";
import PropTypes from "prop-types";
import styles from "./../styles/home/Button.module.css";

const Button = ({ textButton, typeBtn, url }) => {
  return (
    <a href={url} className={`${styles.mainButton} ${styles[typeBtn]}`}>
      {textButton}
    </a>
  );
};

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  typeBtn: PropTypes.string.isRequired,
};

export default Button;
