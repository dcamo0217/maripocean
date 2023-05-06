import CheapBook from "@/components/camps/CheapBook";
import TitleCard from "@/components/camps/TitleCard";

import styles from "@/styles/camps/Camps.module.css";
import FullBook from "../FullBook";

const booksInfo = [
  {
    date: "June 30th - July 3rd",
    earlyBird: {
      price: "$3.000.000 COP",
      valid: "thru May 31st",
    },
    fullPrice: {
      price: "$3.200.000 COP",
      valid: "thru June 28st",
    },
  },
  {
    date: "August 4th - 7th",
    earlyBird: {
      price: "$3.000.000 COP",
      valid: "thru May 31st",
    },
    fullPrice: {
      price: "$3.200.000 COP",
      valid: "thru June 28st",
    },
  },
];

const Book = () => {
  return (
    <div div style={{ backgroundColor: "#FFF8EF" }}>
      <h3
        className={styles.campsTitle}
        style={{ textAlign: "center", paddingTop: "2rem" }}
      >
        Choose your date in 2023
      </h3>
      <div className={styles.campsContainer} style={{ maxWidth: "none" }}>
        <div style={{ width: "100%", display: "flex" }}>
          {booksInfo.map((bookInfo) => (
            <div className={styles.campsContent}>
              <TitleCard title={bookInfo.date} />
              <div style={{ display: "flex" }}>
                <CheapBook {...bookInfo.earlyBird} />
                <FullBook {...bookInfo.fullPrice} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
