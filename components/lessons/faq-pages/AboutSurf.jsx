import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const AboutSurf = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Do I need lessons?</Accordion.Header>
          <Accordion.Body>
            Absolutely yes! Surfing is a technical sport, and the ocean can be a
            dangerous place. With lessons, you will learn how to understand and
            read the waves and enjoy surfing safely. Lessons will also
            drastically speed up your progression. <br />
            <br />
            If you are already surfing, lessons will push your progression to
            the next level. Whether you want to learn how to ride down the line
            or surf green waves and be autonomous, our coaches can break down
            the skill sets into small, concrete steps and then provide instant
            feedback to help you advance faster.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Do I need to be in great shape to surf?
          </Accordion.Header>
          <Accordion.Body>
            Surfing is a combination of balance and flow. We will assist you
            with reading the waves and technique, you will just have to pop up.
            Being in better shape may help you learn a little faster, but we
            have taught people of all ages, shapes, and sizes. You should be
            comfortable in the water and be able to swim.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What can I do to prepare for my lessons?
          </Accordion.Header>
          <Accordion.Body>
            Surfing uses large muscle groups so working your legs, core and back
            will help you stay fresh for your time with us. Yoga and anything
            you can do to improve your flexibility is also recommended.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How long does it take to learn to surf?
          </Accordion.Header>
          <Accordion.Body>
            In general, we will get you up and riding your first wave on your
            first lesson. After a couple lessons you could practice on your own
            safely, but we suggest planning for 3-4 lessons for better autonomy.
            Practicing on a balance board or skateboarding will increase your
            learning curve. The more time you have on the water with a coach the
            farther up the learning curve you will get.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AboutSurf;
