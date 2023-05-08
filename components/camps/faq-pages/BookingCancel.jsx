import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "../../../styles/camps/CampsContact.module.css";

const BookingCancel = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What’s included in the camp?</Accordion.Header>
          <Accordion.Body>
            Please check the What’s included section of the page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            If I change my mind, can I cancel my trip?
          </Accordion.Header>
          <Accordion.Body>
            We understand things might get in your way and life is
            unpredictable. Cancelling your trip at the moment means we left
            someone behind, so our approach will be working with you to
            reschedule your camp for the next one we have available. There might
            be price adjustments if it's hosted in the high season. But we’ll do
            our best. Please check our cancellation policy as it varies
            according to the date you cancel.
            <br />
            <br />
            <ul>
              <li>
                60-30 days prior to arrival: we will offer 75% of the value of
                your trip as a travel credit, valid for 12 months.
              </li>
              <li>
                15-29 days prior to arrival: we will offer 50% of the value of
                your trip as a travel credit, valid for 12 months.
              </li>
              <li>
                10-15 days prior to arrival:we will offer 25% of the value of
                your trip as a travel credit, valid for 12 months.
              </li>
            </ul>
            <small>
              <i>
                *For cancellations made less than 10 days before arrival,
                unfortunately we can’t offer any credit, unless you find a
                person can participate on behalf of you. <br /> *We highly
                suggest purchasing a travel insurance with a trip cancellation
                coverage in order to get a refund in the case that you’d
                unfortunately be unable to attend your trip.
              </i>
            </small>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Can I stay extra days in case I want to book a course right away?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely. If you’re able to plan a little extra time, coming a day
            early or staying a day later is a great way to transition in and out
            of our camp. If you want to book a course right away and stay longer
            is also possible. Make sure to contact us to check lodging
            availability.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BookingCancel;
