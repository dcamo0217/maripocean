import React from "react";
import styles from "./../../styles/home/Services.module.css";
import CardServices from "./CardService";

const cardInfo = [
  {
    key: 1,
    textTitle: "Despertar Oceánico The Camp Experience",
    textBttn: "Check our dates",
    urlImg: "/pictures/home/card-services-image-1.png",
    urlBttn: "/camps",
  },
  {
    key: 2,
    textTitle: "Clases y cursos con escuelas certificadas",
    textBttn: "Book now",
    urlImg: "/pictures/home/card-services-image-2.png",
    urlBttn: "/camps",
  },
  {
    key: 3,
    textTitle: "Daytrips y viajes de surf",
    textBttn: "Coming soon",
    urlImg: "/pictures/home/card-services-image-3.png",
    urlBttn: "https://wa.me/message/KCVNME7YYHBSA1",
  },
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContent}>
        <h2 className={styles.titleServices}>
          Looking for camps, courses, daytrips or just a lesson in surf,
          kitesurf and wingfoil in Colombia?
        </h2>
        <p className={styles.textServices}>
          Maripocean is the meeting point for all experiences that will get you
          started in nautic sports. From a private lesson in surf, a basic
          course in kitesurf to all-inclusive camps we’ve got you.
        </p>
        <div className={styles.divCardsServices}>
          {cardInfo.map((card) => {
            return (
              <CardServices
                key={card.key}
                textTitle={card.textTitle}
                textBttn={card.textBttn}
                urlImg={card.urlImg}
                urlBttn={card.urlBttn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
