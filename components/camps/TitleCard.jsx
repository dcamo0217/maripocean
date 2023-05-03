import React from "react";
import PropTypes from "prop-types";

import styles from "../../styles/camps/CampsCard.module.css";

const TitleCard = ({ title }) => {
    return (
        <div className={styles.cardTitleContainer}>
            <h4 className={styles.cardTitleText}> {title}</h4>
        </div>
    );
};

TitleCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TitleCard;
