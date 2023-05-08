import React from "react";
import PropTypes from "prop-types";
import styles from "./../../../styles/home/Reviews.module.css";

const CardReview = ({ cardInfo }) => {
  return (
    <>
      {cardInfo.map((card) => {
        return (
          <div key={card.key} className={styles.cardContainer}>
            {" "}
            <div className={styles.userInfoDiv}>
              <div
                className={styles.iconUser}
                style={{ backgroundColor: `${card.iconColor}` }}
              >
                {card.name.substr(0, 1)}
              </div>
              <div>
                <h3 className={styles.userName}>{card.name}</h3>
                <p className={styles.dateReview}>{card.date}</p>
              </div>
            </div>
            <h3 className={styles.startsReview}>
              {card.stars === 1
                ? "⭐"
                : card.stars == 2
                ? "⭐⭐"
                : card.stars === 3
                ? "⭐⭐⭐"
                : card.stars === 4
                ? "⭐⭐⭐⭐"
                : card.stars === 5
                ? "⭐⭐⭐⭐⭐"
                : null}
            </h3>
            <p className={styles.descriptionReview}>{card.description}</p>{" "}
          </div>
        );
      })}
    </>
  );
};

CardReview.propTypes = {
  cardInfo: PropTypes.array.isRequired,
};

export default CardReview;
