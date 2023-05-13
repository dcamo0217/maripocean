import React from "react";
import styles from "./../../../styles/home/Reviews.module.css";
import CardReviews from "./CardReview";

const cardInfo = [
  {
    key: 1,
    name: "Alejandro Carreño",
    date: "April 2023",
    stars: 5,
    description:
      "I always dreamed that my daughter would connect with coming to Puerto Colombia often. Carole managed to convince me to open the doors to surfing so that my daughter could enjoy Pradomar and find a healthy way to have fun. Now every Saturday we are surfing with Maripocean and its partner schools in Puerto Colombia.",
    iconColor: "#00ABAB",
  },
  {
    key: 2,
    name: "Natalia Alandette",
    date: "January 2023",
    stars: 5,
    description:
      "I loved my class!!!  I felt super safe and accompanied in every wave we were on!! I would not have been able to pop-up if it wasn't for Carole’s  guidance and trust!",
    iconColor: "#E9609E",
  },
  {
    key: 3,
    name: "Alex Koziak",
    date: "March 2023",
    stars: 5,
    description:
      "My girlfriend and I had an amazing time with Maripocean at Pradomar during our stay. Carole made such a wonderful connection making sure our instructors were the best possible to teach us in english and make us feel safe while having a lot of fun. This time was the first I could pop up in so many waves. Pradomar is just so cool for beginners!",
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
