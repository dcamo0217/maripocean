import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from "../../styles/lessons/Lessons.module.css";

const LessonCard = ({
  title,
  titleBackground,
  img,
  numStudents,
  cost,
  includes,
  details,
  urlButton,
}) => {
  return (
    <div className={styles.lessonCardContainer}>
      <div
        className={styles.lessonCardTitleCont}
        style={{ backgroundColor: `${titleBackground}` }}
      >
        <h2>{title}</h2>
      </div>
      <img className={styles.lessonCardImg} src={img} alt="lesson-card" />
      <div style={{ padding: "1rem 2.4rem", width: "100%" }}>
        <div className={styles.lessonCardInfo}>
          <img src="/pictures/lessons/lesson-card-icon-1.png" alt="icon-1" />
          <p>Students per coach: {numStudents}</p>
        </div>
        <div className={styles.lessonCardInfo}>
          <img src="/pictures/lessons/lesson-card-icon-2.png" alt="icon-2" />
          <p>Lession duration: 2 hours</p>
        </div>
        <div className={styles.lessonCardInfo}>
          <img src="/pictures/lessons/lesson-card-icon-3.png" alt="icon-3" />
          <p>Cost: {cost}</p>
        </div>
      </div>
      <div className={styles.lessonCardSkillsIncludes}>
        <div>
          <h3>SKILL LEVELS</h3>
          <ul>
            <li>Beginner</li>
            <li>intermediate</li>
          </ul>
        </div>
        <div>
          <h3>INCLUDES</h3>
          <ul>
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.lessonCardDetails}>
        <h3>Details</h3>
        <p>{details}</p>
      </div>
      <div className={styles.lessonCardButton}>
        <Button textButton="Book now" typeBtn="second" url={urlButton} />
      </div>
    </div>
  );
};

LessonCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleBackground: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  numStudents: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  includes: PropTypes.array.isRequired,
  details: PropTypes.string.isRequired,
};

export default LessonCard;
