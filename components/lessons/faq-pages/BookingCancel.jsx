import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../../../styles/camps/CampsContact.module.css";

const BookingCancel = () => {
  return (
    <div className={styles.faqContentContainer}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I book a lesson?</Accordion.Header>
          <Accordion.Body>
            Contact Maripocean by whatsapp sending a message here or texting to
            this whatsapp +57-305-893-2429. Inquire about lesson availability
            according to your day and time of interest. We just book 100% of
            your payment 24 hrs prior to your lesson and during our business
            hours 8am-6pm COL time. Once you pay, please fill in the quick form
            to register successfully.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can I pay for my lesson?</Accordion.Header>
          <Accordion.Body>
            Payment methods: Payment methods: Credit card, bank transfer to
            Davivienda and Bancolombia, Paypal and Nequi. Banking fees depending
            on the method might apply. We don’t accept payments in cash or at
            the surf spot. You need to send proof (screenshot) of payment via
            whatsapp to guarantee your reservation.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Are any cancell​​ations allowed?</Accordion.Header>
          <Accordion.Body>
            We can reschedule your session 12 hours in advance in case you can’t
            make it, if you give us proper notice by whatsapp. We don’t do any
            refunds if you want to cancel your class unless it is for justified
            medical reasons. We’ll do our best to solve it another way if that
            applies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Who can join me for a semi-private or group lesson?
          </Accordion.Header>
          <Accordion.Body>
            During a Semi-Private lesson, you and your friend or family members
            will be using boards specifically picked for your ability level and
            weight. Semi-Private Lessons are booked in groups of two or more
            students with a maximum student coach ratio at 3:1 to maximize
            progression and safety. Semi-Privates are a great way to make the
            lesson extra fun by sharing it with someone else. It is also really
            helpful for your learning process to watch someone learning similar
            skills while talking with the coach; it helps you get a better
            understanding of the sport.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BookingCancel;
