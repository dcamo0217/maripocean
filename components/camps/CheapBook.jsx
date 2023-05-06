import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from "../../styles/camps/CampsCard.module.css";

const CheapBook = ({ price, valid }) => {
  return (
    <div className={styles.dateCardContent}>
      <div className={styles.dateCardColumn}>
        <h4>Early Bird</h4>
      </div>
      <div className={styles.dateCardColumn}>
        <h3>{price}</h3>
      </div>
      <div className={styles.dateCardColumn}>
        <h4>Valid {valid}</h4>
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        <Button textButton="Book via wiretransfer" typeBtn="second" />
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        <Button textButton="Book via credit card" typeBtn="second" />
      </div>
    </div>
  );
};

CheapBook.propTypes = {
  price: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
};

export default CheapBook;
