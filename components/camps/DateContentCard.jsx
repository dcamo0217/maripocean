import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from "../../styles/camps/CampsCard.module.css";

const DateContentCard = ({ title, available, level }) => {
  return (
    <div className={styles.dateCardContent}>
      <div className={styles.dateCardColumn}>
        <img
          style={{ width: "16px", height: "16px", margin: "6px 10px" }}
          src="/pictures/camps/check-icon.png"
          alt="check icon"
        />
        <div>
          <h4 className={styles.dateCardTitle}>Availability</h4>
          <p className={styles.dateCardText}>{available}</p>
        </div>
      </div>
      <div className={styles.dateCardColumn}>
        <img
          style={{ width: "16px", height: "16px", margin: "6px 10px" }}
          src="/pictures/camps/level-icon.png"
          alt="level icon"
        />
        <div>
          <h4 className={styles.dateCardTitle}>Level</h4>
          <p className={styles.dateCardText}>{level}</p>
        </div>
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        <Button textButton="Book now" typeBtn="second" />
      </div>
    </div>
  );
};

DateContentCard.propTypes = {
  available: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default DateContentCard;
