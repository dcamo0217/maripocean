import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const BeforeTravel = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What are the visa and medical requirements to travel to Colombia?
          </Accordion.Header>
          <Accordion.Body>
            In order to travel to Colombia you can check the visa and other
            requirements in this{" "}
            <a
              href="https://colombia.travel/en/practical-information/visas-and-embassies"
              target="_blank"
              rel="noopener noreferrer external"
            >
              link
            </a>{" "}
            . If you’re staying less than 90 days usually you don’t need a visa
            to enter. If you're 18 years of age or older, you must be fully
            vaccinated against COVID-19 at least 14 days before you enter
            Colombia. If you're not fully vaccinated, you must present a
            negative COVID-19 (PCR) test result taken no more than 72 hours
            before your departure, or a COVID-19 (RAT) test taken no more than
            48 hours before your departure. As well make sure to complete an
            online form before entering or exiting Colombia called{" "}
            <a
              href="https://www.migracioncolombia.gov.co/check-mig"
              target="_blank"
              rel="noopener noreferrer external"
            >
              Check Mig
            </a>{" "}
            from Migración Colombia.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Is airfare included?</Accordion.Header>
          <Accordion.Body>
            Our camp prices don’t include airplane tickets. This might be cover
            for you. We recommend checking apps as{" "}
            <a
              href="https://hopper.com/"
              target="_blank"
              rel="noopener noreferrer external"
            >
              Hopper
            </a>{" "}
            and{" "}
            <a
              href="https://www.skyscanner.net/"
              target="_blank"
              rel="noopener noreferrer external"
            >
              Skyscanner
            </a>{" "}
            to check for the most convenient flight, and if possible choosing
            Avianca or Latam as your Colombian airline if travelling from
            Colombia.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How do I get to Barranquilla? What international airport should I
            fly into?
          </Accordion.Header>
          <Accordion.Body>
            You need to fly to Ernesto Cortissoz International Airport in
            Barranquilla if coming by airplane. If you are in Cartagena you take
            a bus from the bust station looking for companies as Berlinas or
            Marsol to reach Puerto Colombia. I’d be a 2 hour drive. If you’re
            coming from Santa Marta, likewise, reach out to the bus terminal
            that will drop you to the north of Barranquilla or the airport.
            We’ll find the proper transfer to bring you to Puerto Colombia our
            hosting town.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Do you recommend getting travel and medical insurance?
          </Accordion.Header>
          <Accordion.Body>
            A travel insurance that covers emergency medical coverage, including
            COVID-19 medical coverage is required to participate in the
            experience. Lots of credit cards offer coverage for short holidays.
            We advise you to check with your bank. When purchasing your travel
            insurance, also make sure that surfing is an activity covered by
            your insurer. We suggest adding the trip cancellation coverage in
            the case that you’d unfortunately be unable to attend your trip.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How much money do I need to bring?
          </Accordion.Header>
          <Accordion.Body>
            The COP colombian peso is the official currency in Colombia. This
            trip is an all-inclusive adventure, but probably you might need to
            bring some cash money for further expenses or meals or beverages not
            included in our menu, or needed if you arrive earlier or later from
            our official schedule. We recommend arriving with around $200 USD of
            extra cash money plus your international credit cards.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            What time should I book my arrival and departure flights?
          </Accordion.Header>
          <Accordion.Body>
            For the first day you can check-in at the hootelafter noon on day
            one if you arrive early, just make sure that you arrive on time to
            attend our sunset welcome starting at 5pm. Our end-of-camp will be
            with a yoga and breakfast on day four, so plan to book your flight
            if possible from noon onwards to have enough time to join our
            closure.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BeforeTravel;
