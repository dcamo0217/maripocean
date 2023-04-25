import React from "react";
import Button from "../Button";
import styles from "./../../styles/Services.module.css";
import PropTypes from "prop-types";

const CardServices = ({ textTitle, textBttn, urlImg }) => {
    return (
        <div
            className={styles.cardContainer}
            style={{ backgroundImage: `url(${urlImg})` }}
        >
            <div className={styles.cardContent}>
                <p className={styles.titleCard}>{textTitle}</p>
                <div className={styles.buttonDivCard}>
                    <Button textButton={textBttn} />
                </div>
            </div>
        </div>
    );
};

CardServices.propTypes = {
    textTitle: PropTypes.string.isRequired,
    textBttn: PropTypes.string.isRequired,
    urlImg: PropTypes.string.isRequired,
};

export default CardServices;
