import styles from "../../styles/camps/CampsNav.module.css";

const CampsNav = (props) => {
  const handleOptionClick = (option) => {
    props.onSelect(option);
  };

  return (
    <ul className={styles.navList}>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option1" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option1")}
      >
        Overview
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option2" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option2")}
      >
        Who is this for
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option3" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option3")}
      >
        Location
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option4" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option4")}
      >
        Dates
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option5" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option5")}
      >
        What's included
      </li>
      <li
        onClick={() => handleOptionClick("option6")}
        className={`${styles.navItem} ${styles.bookItem}`}
      >
        Book
      </li>
    </ul>
  );
};

export default CampsNav;
