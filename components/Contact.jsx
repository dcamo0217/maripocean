import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/Contact.module.css";
import Button from "./Button";

const Contact = ({ image }) => {
  return (
    <div
      className={styles.contactContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className={styles.contactTitle}>Contact</h2>
      <p className={styles.contactText}>
        If you’ve got any questions before booking we’re happy to help. Reach us
        out at our office hours, Monday to Friday 9:00 am COL to 6:00 pm COL,
        through email or whatsapp
      </p>
      <div className={styles.contactButtonDiv}>
        <Button
          textButton={"Send Email"}
          typeBtn={"second"}
          url={"mailto:info@maripocean.com"}
        />
        <Button
          textButton={"Whatsapp"}
          typeBtn={"second"}
          url={"https://wa.me/message/KCVNME7YYHBSA1"}
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Contact;
