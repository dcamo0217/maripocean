import React from "react";
import styles from "./../../../styles/home/Reviews.module.css";
import CardReviews from "./CardReview";

const cardInfo = [
  {
    key: 1,
    name: "Paul Johnson",
    date: "December 4, 2023",
    stars: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    iconColor: "#00ABAB",
  },
  {
    key: 2,
    name: "Lina Gómez",
    date: "December 4, 2023",
    stars: 5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    iconColor: "#E9609E",
  },
  {
    key: 3,
    name: "Pedro Ríos",
    date: "December 4, 2023",
    stars: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    iconColor: "#4CB278",
  },
];

const Reviews = () => {
  return (
    <div className={styles.reviewsBackground}>
      <div className={styles.reviewsContainer}>
        <h2 className={styles.titleReviews}>Customer reviews</h2>
        <div className={styles.divCardsReviews}>
          <CardReviews cardInfo={cardInfo} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
