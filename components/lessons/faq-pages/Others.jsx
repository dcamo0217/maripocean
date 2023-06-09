import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const Others = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What else can I do after my surf lesson at Pradomar?
          </Accordion.Header>
          <Accordion.Body>
            If you pay your USD $5 pass at the Hotel Pradomar you can enjoy its
            entire menu and comfortable and wonderful facilities, access to
            showers and changing rooms and spend an unforgettable day on the
            beaches of Pradomar. We recommend you read this article on our blog
            about the top attractions you can do in Puerto Colombia.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Others;
