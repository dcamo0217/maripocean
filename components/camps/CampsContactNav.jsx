import styles from "../../styles/camps/CampsNav.module.css";

const CampsContactNav = (props) => {
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
        Lodging
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option2" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option2")}
      >
        Before Travel
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option3" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option3")}
      >
        Booking / Cancellation
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option4" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option4")}
      >
        Sports
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option5" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleOptionClick("option5")}
      >
        Others
      </li>
    </ul>
  );
};

export default CampsContactNav;
