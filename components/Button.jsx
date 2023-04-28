import React from "react";
import PropTypes from "prop-types";
import styles from "./../styles/home/Button.module.css";

const Button = ({ textButton }) => {
    return <button className={styles.mainButton}>{textButton}</button>;
};

Button.propTypes = {
    textButton: PropTypes.string.isRequired,
};

export default Button;
