import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from "../../styles/camps/CampsCard.module.css";

const FullBook = ({ price: colombianPrice, dollarPrice, valid }) => {
  return (
    <div className={styles.fullPriceCardContent}>
      <h4 className={styles.fullPriceCardTitle}>Full price</h4>
      <h3 className={styles.fullPriceCardPrice}>{colombianPrice}</h3>
      <h3 className={styles.fullPriceCardPrice}>{dollarPrice}</h3>
      <h4 className={styles.fullPriceCardValid}>Valid {valid}</h4>

      <div
        style={{
          padding: "0.5rem 0",
          filter: "grayscale(1)",
          cursor: "default",
        }}
      >
        <Button
          textButton="Book via wiretransfer"
          typeBtn="second"
          url={"/camps#book-now"}
        />
      </div>
      <div
        style={{
          padding: "0.5rem 0",
          filter: "grayscale(1)",
          cursor: "default",
        }}
      >
        <Button
          textButton="Book via credit card"
          typeBtn="second"
          url={"/camps#book-now"}
        />
      </div>
    </div>
  );
};

FullBook.propTypes = {
  price: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
};

export default FullBook;
