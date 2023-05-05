import React from "react";
import PropTypes from "prop-types";
import styles from "./../styles/home/Button.module.css";

const Button = ({ textButton, typeBtn }) => {
  return (
    <button className={`${styles.mainButton} ${styles[typeBtn]}`}>
      {textButton}
    </button>
  );
};

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
};

export default Button;
