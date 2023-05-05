import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from "../../styles/camps/CampsCard.module.css";

const availableCard = ({ title, available, level }) => {
  return (
    <div className={styles.availableCardContent}>
      <div className={styles.availableCardColumn}>
        <img
          style={{ width: "16px", height: "16px", margin: "2px 10px" }}
          src="/pictures/camps/check-icon.png"
          alt="check icon"
        />
        <div>
          <h4>Availability</h4>
          <p>{available}</p>
        </div>
      </div>
      <div className={styles.availableCardColumn}>
        <img
          style={{ width: "16px", height: "16px", margin: "2px 10px" }}
          src="/pictures/camps/level-icon.png"
          alt="level icon"
        />
        <div>
          <h4>Level</h4>
          <p>{level}</p>
        </div>
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        <Button textButton="Book now" typeBtn="second" />
      </div>
    </div>
  );
};

availableCard.propTypes = {
  available: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default availableCard;
