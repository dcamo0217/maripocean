import React from "react";
import PropTypes from "prop-types";
import styles from "./../../styles/Reviews.module.css";

const CardReviews = ({ cardInfo }) => {
    return (
        <>
            {cardInfo.map((card) => {
                return (
                    <div className={styles.cardContainer}>
                        {" "}
                        <div className={styles.userInfoDiv}>
                            <div className={styles.iconUser}>
                                {card.name.substr(0, 1)}
                            </div>
                            <div>
                                <h3 className={styles.userName}>{card.name}</h3>
                                <p className={styles.dateReview}>{card.date}</p>
                            </div>
                        </div>
                        <h3 className={styles.startsReview}>⭐⭐⭐⭐⭐</h3>
                        <p className={styles.descriptionReview}>
                            {card.description}
                        </p>{" "}
                    </div>
                );
            })}
        </>
    );
};

CardReviews.propTypes = {
    cardInfo: PropTypes.array.isRequired,
};

export default CardReviews;
