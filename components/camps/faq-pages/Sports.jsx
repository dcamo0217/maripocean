import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const Sports = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            I have never done surf, kitesurf or wing foil, do I need any
            experience?
          </Accordion.Header>
          <Accordion.Body>
            You don’t need any experience as these camps are for beginners, or
            people that have experienced just one of the three sports. Our
            recommendation is that you have basic swimming skills to hold your
            breath at water properly and you feel confident and inspired by the
            ocean. If you have ocean fear or panic this experience might not be
            for you.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Are these sports safe?</Accordion.Header>
          <Accordion.Body>
            Surf, kitesurf and wingfoil can be safe if proper safety precautions
            are taken and proper equipment is used. However, like any other
            physical activity, there are inherent risks involved, and accidents
            can happen. Some of the risks associated with water sports include
            injuries from falling and hitting with the sand, or the board, or
            any other potential collisions. These are the most common.You might
            drink or get a bit of salted water in your eyes. Is totally normal
            don't worry. Our certified ISA instructors will keep you safe and
            you won’t be far from there.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Do I need to be a good swimmer to do these sports?
          </Accordion.Header>
          <Accordion.Body>
            Not necessarily for this camp and this level as a beginner. You need
            to be able to hold your breath properly according to swimming and
            basic floatation skills. Besides swimming and surfing have
            transferable skills, your surfboard will keep you floating above
            water most of the time, so you'll need your arms strength mostly for
            paddling in surf. For kitesurf and wingfoil, the same logic applies.
            You'll need to be able to come back up from water and hold your
            breath correctly.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Sports;
