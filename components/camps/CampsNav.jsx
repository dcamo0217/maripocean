import styles from "../../styles/camps/CampsNav.module.css";
import { useRouter } from "next/router";

const CampsNav = (props) => {
  const router = useRouter();

  const handleOptionClick = (option) => {
    props.onSelect(option);
  };

  return (
    <ul className={styles.navList}>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option1" ? `${styles.selected}` : ""
        }`}
        onClick={() => {
          handleOptionClick("option1");
          router.push("/camps", undefined, { shallow: true });
        }}
      >
        Overview
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option2" ? `${styles.selected}` : ""
        }`}
        onClick={() => {
          handleOptionClick("option2");
          router.push("/camps", undefined, { shallow: true });
        }}
      >
        Who is this for
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option3" ? `${styles.selected}` : ""
        }`}
        onClick={() => {
          handleOptionClick("option3");
          router.push("/camps", undefined, { shallow: true });
        }}
      >
        Location
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option4" ? `${styles.selected}` : ""
        }`}
        onClick={() => {
          handleOptionClick("option4");
          router.push("/camps", undefined, { shallow: true });
        }}
      >
        Dates
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option5" &&
          router.asPath !== "/camps#book-now"
            ? `${styles.selected}`
            : ""
        }`}
        onClick={() => {
          handleOptionClick("option5");
          router.push("/camps", undefined, { shallow: true });
        }}
      >
        What's included
      </li>
      <li
        onClick={() => {
          handleOptionClick("option6");
          router.push("/camps", undefined, { shallow: true });
        }}
        className={`${styles.navItem} ${styles.bookItem} ${
          props.selectedOption === "option6" ? `${styles.selectedBook}` : ""
        } ${
          props.isBook === "/camps#book-now" ? `${styles.selectedBook}` : ""
        }`}
      >
        Book
      </li>
    </ul>
  );
};

export default CampsNav;
