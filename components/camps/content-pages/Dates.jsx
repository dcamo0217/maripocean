import TitleCard from "@/components/camps/TitleCard";
import DateContentCard from "@/components/camps/DateContentCard";

import styles from "@/styles/camps/Camps.module.css";

const datesInfo = [
  {
    key: 1,
    date: "June 30th - July 3rd",
    available: "12 spots",
    level: "Beginners",
  },
  {
    key: 2,
    date: "August 4th - 7th",
    available: "12 spots",
    level: "Beginners",
  },
];

const Dates = () => {
  return (
    <div style={{ backgroundColor: "#FFF8EF" }}>
      <h3
        className={styles.campsTitle}
        style={{ textAlign: "center", paddingTop: "2rem" }}
      >
        Dates
      </h3>

      <div className={styles.campsContainer}>
        {datesInfo.map((dateInfo) => (
          <div key={dateInfo.key} className={styles.campsContent}>
            <TitleCard title={dateInfo.date} />
            <DateContentCard {...dateInfo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dates;
