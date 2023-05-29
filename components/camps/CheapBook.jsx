import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from "../../styles/camps/CampsCard.module.css";

const CheapBook = ({ title, price: colombianPrice, dollarPrice, valid }) => {
  return (
    <div className={styles.cheapBookCardContent}>
      <h4 className={styles.cheapBookCardTitle}>{title}</h4>
      <h3 className={styles.cheapBookCardPrice}>{colombianPrice}</h3>
      <h3 className={styles.cheapBookCardPrice}>{dollarPrice}</h3>
      <h4 className={styles.cheapBookCardValid}>Valid {valid}</h4>

      <div style={{ padding: "0.5rem 0" }}>
        <Button
          textButton="Book via wiretransfer"
          typeBtn="second"
          url={"https://wa.me/message/KCVNME7YYHBSA1"}
        />
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        <Button
          textButton="Book via credit card"
          typeBtn="second"
          url={"https://mpago.li/2XJ9BcH"}
        />
      </div>
    </div>
  );
};

CheapBook.propTypes = {
  price: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
};

export default CheapBook;
