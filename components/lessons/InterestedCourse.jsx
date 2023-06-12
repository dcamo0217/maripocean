import React from "react";
import Button from "../Button";

import styles from "../../styles/lessons/Lessons.module.css";

const InterestedCourse = ({ backgroundImg, title, description }) => {
  return (
    <div
      className={`${styles.lessonsImgContainer} ${styles.lessonsInterestedContainer}`}
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className={styles.lessonsContent}>
        <h2
          className={`${styles.lessonsTitle} ${styles.whiteText} ${styles.textShadow}`}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          {title}
        </h2>
        <p
          className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
          style={{ padding: "0 2rem" }}
        >
          {description}
        </p>
        <div className={styles.lessonsBtnContainer}>
          <Button textButton="About Surf Courses" typeBtn="primary" url={""} />
        </div>
      </div>
    </div>
  );
};

export default InterestedCourse;
