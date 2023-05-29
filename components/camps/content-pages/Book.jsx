import TitleCard from "@/components/camps/TitleCard";
import CheapBook from "@/components/camps/CheapBook";
import FullBook from "../FullBook";

import styles from "@/styles/camps/Camps.module.css";
import { useRouter } from "next/router";

const booksInfo = [
  {
    date: "June 30th - July 3rd",
    earlyBird: {
      title: "Early Bird",
      price: "$3.000.000 COP",
      dollarPrice: "$660 USD",
      valid: "May 31st ",
    },
    fullPrice: {
      title: "Full Price",
      price: "$3.200.000 COP",
      dollarPrice: "$707 USD",
      valid: "June 28th",
    },
  },
  {
    date: "August 4th - 7th",
    earlyBird: {
      title: "Early Bird",
      price: "$3.000.000 COP",
      dollarPrice: "$660 USD",
      valid: "June 30th",
    },
    fullPrice: {
      title: "Full Price",
      price: "$3.200.000 COP",
      dollarPrice: "$707 USD",
      valid: "Aug 2nd",
    },
  },
];
const promoInfo = [
  {
    date: "June 30th - July 3rd",
    earlyBird: {
      price: "$2.800.000 COP",
      valid: "May 15st",
    },
    fullPrice: {
      price: "$3.200.000 COP",
      valid: "thru June 28st",
    },
  },
  {
    date: "August 4th - 7th",
    earlyBird: {
      price: "$2.800.000 COP",
      valid: "May 15st",
    },
    fullPrice: {
      price: "$3.200.000 COP",
      valid: "thru June 28st",
    },
  },
];

const Book = () => {
  const router = useRouter();
  return (
    <div div style={{ backgroundColor: "#FFF8EF" }}>
      <h3
        className={styles.campsTitle}
        style={{ textAlign: "center", paddingTop: "2rem" }}
      >
        Choose your date in 2023
      </h3>
      <div className={styles.campsContainer}>
        {router.asPath === "/despertar-promo1"
          ? promoInfo.map((info) => (
              <div className={styles.campsContent}>
                <TitleCard title={info.date} />
                <div className={styles.bookContentContainer}>
                  <CheapBook {...info.earlyBird} />
                  <FullBook {...info.fullPrice} />
                </div>
              </div>
            ))
          : booksInfo.map((bookInfo) => (
              <div className={styles.campsContent}>
                <TitleCard title={bookInfo.date} />
                <div className={styles.bookContentContainer}>
                  <CheapBook {...bookInfo.earlyBird} />
                  <FullBook {...bookInfo.fullPrice} />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Book;
