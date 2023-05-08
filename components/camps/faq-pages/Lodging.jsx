import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const Lodging = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0" className={styles.accordionItem}>
          <Accordion.Header className={styles.accordionHeader}>
            Is there wifi at the house?
          </Accordion.Header>
          <Accordion.Body>
            Definitely. You will have optic fiber wifi probably at normal speed.
            You need to know that Puerto Colombia is a town, and sometimes light
            goes off. But since we’ll be in outdoor activities most of time it
            shouldn’t be an issue, plus we invite you to disconnect.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className={styles.accordionItem}>
          <Accordion.Header className={styles.accordionHeader}>
            I have food restrictions, will I still be able to enjoy the included
            meals?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely! Once we’ve received your registration form, we will get
            in touch with you and invite you to tell us about your allergies or
            food restrictions. This way, we will be able to plan the meals
            consequently and offer you an option if there is a meal that doesn’t
            suit your needs.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Lodging;
