import React from "react";
import PropTypes from "prop-types";
import styles from "./../styles/home/Button.module.css";
import Link from "next/link";

const Button = ({ textButton, typeBtn, url }) => {
  return (
    <Link href={url} className={`${styles.mainButton} ${styles[typeBtn]}`}>
      {textButton}
    </Link>
  );
};

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  typeBtn: PropTypes.string.isRequired,
};

export default Button;
