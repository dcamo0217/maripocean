import React from "react";
import Button from "../Button";
import styles from "./../../styles/Card.module.css";
import PropTypes from "prop-types";

const CardServices = ({ textTitle, textBttn }) => {
    return (
        <div className={styles.cardContainer}>
            <p className={styles.titleCard}>{textTitle}</p>
            <div className={styles.buttonDivCard}>
                <Button textButton={textBttn} />
            </div>
        </div>
    );
};

CardServices.propTypes = {
    textTitle: PropTypes.string.isRequired,
    textBttn: PropTypes.string.isRequired,
};

export default CardServices;
