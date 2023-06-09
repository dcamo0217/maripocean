import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const BeforeLesson = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What can I do to prepare for my first lesson?
          </Accordion.Header>
          <Accordion.Body>
            You need to wear a very comfy bathing suit ideally one piece for
            women or bikini with high coverage. Look for a rashguard so you stay
            protected from the sun and avoid getting sunburn. Bring sunblock
            with 50+ SPF reef friendly, a hat and comfortable flip flops plus
            quick changing clothes for your way back. If you want to use the
            showers from Hotel Pradomar you can do that just be ready to pay in
            cash USD$5 for access pass. With your pass, you will also be able to
            rent a nice bunk on the beach front for any consumption.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Should I take private lessons or sign-up for a Maripocean Camp?
          </Accordion.Header>
          <Accordion.Body>
            Many of our customers appreciate the private attention of private
            and semi-private lessons. The privates will allow you to learn at
            your own pace and customize your experience. Also, privates and
            semi-privates will allow you to book your lessons starting any day
            of the week. <br />
            <br />
            Maripocean Camps take place in a semi-private only format. They are
            three to one student by instructor lessons in three different sports
            and take place in very specific times of the year. They address
            people who’s interested in a full immersion of the three water
            sports surf, kitesurf and wingfoil during a weekend, and target
            beginners or anyone interested in doing these sports in Colombia.{" "}
            <br />
            <br />
            To find out what options will be best for you, check the details of
            our camps here or please reach us out through whatsapp.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BeforeLesson;
