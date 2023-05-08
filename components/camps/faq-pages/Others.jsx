import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const Others = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Can I come to the camp if travelling alone?
          </Accordion.Header>
          <Accordion.Body>
            Yes, absolutely! You’ll fit right in. Our camps have a mix of solo
            travelers, couples, or friends so you will definitely have fun. We
            take care of community activities so you can get to meet people from
            different backgrounds and life stages and experience adventure
            together at water and outside. You’ll potentially grab some friends
            for life and future trips.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What should I bring?</Accordion.Header>
          <Accordion.Body>
            The weather in Puerto Colombia and Barranquilla is hot and tropical
            by the months of July and August (between 28°C and 33°C), therefore
            you should dress lightly and comfortable. <br />
            <br />
            Packing list:
            <ul>
              <li>Yoga/sports clothes</li>
              <li>
                Bathing suits ideally with good coverage for women not tiny
                bikinis
              </li>
              <li>Beachwear</li>
              <li>A rash-guard or surf suit</li>
              <li>A hat/cap</li>
              <li>A reusable water bottle</li>
              <li>Flip flops or comfortable sandals</li>
              <li>A beach towel</li>
              <li>Sunscreen with a high SPF +50 ideally ocean friendly</li>
              <li>Insect repellent</li>
              <li>Hygiene products</li>
              <li>
                Sneakers (for our local tours around the area, beware there are
                very sandy spots)
              </li>
              <li>Small notebook and pen (for some activities we’ll host)</li>
              <li>
                Optional: Windbreaker or long sleeve Ear plugs (in case your
                roomie snores😜)
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What’s the difference between doing this camp and getting private
            lessons for these sports?
          </Accordion.Header>
          <Accordion.Body>
            Despertar Oceánico is an experience that goes beyond a sportive
            class only. Is a trip that looks into connection, fun, balance and
            health. All-inclusive. Is targeting foreign travellers and locals
            that don’t usually live in the area and can’t access these sports
            easily. Or that are locals and need a push to try them. At the same
            time, the opportunity to do the three sports in an balanced way on
            just a long weekend is something that requires motivation and tons
            of logistics, so we take that from you, so you just focus on having
            fun and connecting with nature and others.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Others;
