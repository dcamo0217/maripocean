import CheapBook from "@/components/camps/CheapBook";
import TitleCard from "@/components/camps/TitleCard";

import styles from "@/styles/camps/Camps.module.css";

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
        style={{ textAlign: "center", padding: "2rem 0" }}
      >
        Choose your date in 2023
      </h3>
      <div className={styles.campsContainer}>
        <div className={styles.campsContent}>
          {booksInfo.map((bookInfo) => (
            <div>
              <TitleCard title={bookInfo.date} />
              <div>
                <CheapBook {...bookInfo.earlyBird} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
