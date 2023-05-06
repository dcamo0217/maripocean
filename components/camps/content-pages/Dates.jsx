import TitleCard from "@/components/camps/TitleCard";
import DateContentCard from "@/components/camps/DateContentCard";

import styles from "@/styles/camps/Camps.module.css";

const datesInfo = [
  {
    date: "June 30th - July 3rd",
    available: "12 spots",
    level: "Beginners",
  },
  {
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
        style={{ textAlign: "center", padding: "2rem 0" }}
      >
        Dates
      </h3>

      <div className={styles.campsContainer}>
        {datesInfo.map((dateInfo) => (
          <div className={styles.campsContent}>
            <TitleCard title={dateInfo.date} />
            <DateContentCard {...dateInfo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dates;
