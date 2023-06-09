import styles from "../../styles/camps/CampsNav.module.css";

const FaqNavBar = (props) => {
  const handleClick = (option) => {
    props.onSelect(option);
  };
  return (
    <ul className={styles.navList}>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option1" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleClick("option1")}
      >
        Booking/Cancellation
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option2" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleClick("option2")}
      >
        Before your lesson
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option3" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleClick("option3")}
      >
        About surf
      </li>
      <li
        className={`${styles.navItem} ${
          props.selectedOption === "option4" ? `${styles.selected}` : ""
        }`}
        onClick={() => handleClick("option4")}
      >
        Others
      </li>
    </ul>
  );
};

export default FaqNavBar;
