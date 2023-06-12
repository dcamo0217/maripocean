import React from "react";

import styles from "../../styles/lessons/Lessons.module.css";

const BookingProcess = () => {
  return (
    <div className={styles.lessonsContainer}>
      <h2
        className={`${styles.lessonsTitle} ${styles.blueText}`}
        style={{ marginBottom: "1.5rem" }}
      >
        Booking process
      </h2>
      <p className={`${styles.lessonsBookingText} ${styles.blueText}`}>
        Once you send us your inquiry via whatsapp we’ll proceed to check
        availability for the date and hour you request with our surf school and
        coaches. We only guarantee your booking if you pay in full 24 hours
        before your lesson and during our business hours 8am-6pm COL time. You
        need to send proof of payment via whatsapp to guarantee your spot.
      </p>
      <div className={styles.lessonsBookingContent}>
        <div className={styles.lessonsBookingColumnContent}>
          <h3 className={styles.lessonsBookingTitle}>
            Send us your inquiry via WhatsApp
          </h3>
          <img
            style={{ width: "70px", paddingBottom: "8px" }}
            src="/pictures/lessons/lessons-whatsapp-icon.png"
            alt=""
          />
          <p className={styles.lessonsBookingDescription}>
            We will check availability for the date and hour you request with
            our surf school and coaches.
          </p>
        </div>
        <img
          className={styles.lessonsBookingArrow}
          src="/pictures/lessons/right-arrow-icon.png"
          alt=""
        />
        <div className={styles.lessonsBookingColumnContent}>
          <h3 className={styles.lessonsBookingTitle}>
            Make your payment 24 hours before your lesson
          </h3>
          <img
            style={{ width: "70px", paddingBottom: "8px" }}
            src="/pictures/lessons/lessons-check-icon.png"
            alt=""
          />
          <p className={styles.lessonsBookingDescription}>
            Make your full payment thru our payment methods during our business
            hours, from 8am to 6pm COL time
          </p>
        </div>
        <img
          className={styles.lessonsBookingArrow}
          src="/pictures/lessons/right-arrow-icon.png"
          alt=""
        />
        <div className={styles.lessonsBookingColumnContent}>
          <h3 className={styles.lessonsBookingTitle}>
            Complete your registration form
          </h3>
          <img
            style={{ width: "70px", paddingBottom: "8px" }}
            src="/pictures/lessons/lessons-profile-icon.png"
            alt=""
          />
          <p className={styles.lessonsBookingDescription}>
            Complete a short form to gather your contact info so we’re able to
            contact you for your lesson
          </p>
        </div>
      </div>
      <div className={styles.lessonsBookingRow}>
        <div className={styles.lessonsBookingColumn}>
          <h3 className={`${styles.lessonsBookingSubtitle} ${styles.blueText}`}>
            Payment Methods:
          </h3>
          <p className={`${styles.lessonsBookingText} ${styles.blueText}`}>
            Credit card, bank transfer to Davivienda and Bancolombia, Paypal and
            Nequi. Banking fees depending on the method might apply. We don’t
            accept payments in cash or at the surf spot.
          </p>
        </div>
        <div className={styles.lessonsBookingColumn}>
          <h3 className={`${styles.lessonsBookingSubtitle} ${styles.blueText}`}>
            Cancellation Policy:
          </h3>
          <p className={`${styles.lessonsBookingText} ${styles.blueText}`}>
            We can reschedule your session 12 hours in advance in case you can’t
            make it, if you give us proper notice by whatsapp. We don’t do any
            refunds if you want to cancel your class unless it is for justified
            medical reasons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
