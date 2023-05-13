import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from "../../styles/camps/CampsCard.module.css";

const FullBook = ({ price, valid }) => {
  return (
    <div className={styles.fullPriceCardContent}>
      <h4 className={styles.fullPriceCardTitle}>Full price</h4>
      <h3 className={styles.fullPriceCardPrice}>{price}</h3>
      <h4 className={styles.fullPriceCardValid}>Valid {valid}</h4>

      <div style={{ padding: "0.5rem 0", filter: "grayscale(1)" }}>
        <Button
          textButton="Book via wiretransfer"
          typeBtn="second"
          url={"https://wa.me/message/KCVNME7YYHBSA1"}
        />
      </div>
      <div style={{ padding: "0.5rem 0", filter: "grayscale(1)" }}>
        <Button
          textButton="Book via credit card"
          typeBtn="second"
          url={"https://mpago.li/2XJ9BcH"}
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
