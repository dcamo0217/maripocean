import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";
import TitleCard from "@/components/camps/TitleCard";
import AvailableCard from "@/components/camps/AvailableCard";

import styles from "@/styles/camps/Camps.module.css";

const datesInfo = [
  {
    title: "June 30th - July 3rd",
    available: "12 spots",
    level: "Beginners",
  },
  {
    title: "August 4th - 7th",
    available: "12 spots",
    level: "Beginners",
  },
];

export default function dates() {
  return (
    <div style={{ backgroundColor: "#FFF8EF" }}>
      <CampsHeader />
      <CampsNav />
      <h3
        className={styles.campsTitle}
        style={{ textAlign: "center", padding: "2rem 0" }}
      >
        Dates
      </h3>

      <div className={styles.campsContainer}>
        {datesInfo.map((date) => (
          <div className={styles.campsContent}>
            <TitleCard title={date.title} />
            <AvailableCard {...date} />
          </div>
        ))}
      </div>
    </div>
  );
}
