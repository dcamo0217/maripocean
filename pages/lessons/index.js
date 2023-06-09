import React, { useState } from "react";

import NavBar from "@/components/header/NavBar";
import Button from "@/components/Button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SimpleCard from "@/components/lessons/SimpleCard";
import LessonCard from "@/components/lessons/LessonCard";

import styles from "../../styles/lessons/Lessons.module.css";
import campsStyles from "../../styles/camps/Camps.module.css";
import FaqNavBar from "@/components/lessons/FaqNavBar";
import FaqContent from "@/components/lessons/FaqContent";

const cards = [
  {
    image: "/pictures/lessons/lesson-simple-card-image-1.png",
    alt: "lessons-card-1",
    title: "Active and fit:",
    text: "Surfing requires a certain level of physical fitness, as it involves paddling, balance, and endurance. Being in good shape and having a good level of strength and flexibility is important. ",
  },
  {
    image: "/pictures/lessons/lesson-simple-card-image-2.png",
    alt: "lessons-card-2",
    title: "Adventurous and open-minded:",
    text: "You’re willing to embrace the unpredictable nature of the waves. You have a sense of adventure, a desire to explore spots, and an open mind to try new techniques. ",
  },
  {
    image: "/pictures/lessons/lesson-simple-card-image-3.png",
    alt: "lessons-card-3",
    title: "Patient and persistent:",
    text: "Learning to surf takes time and practice. Progress may be slow at times. You're persistent, willing to face challenges, and committed to improving your skills.",
  },
];

const lessonsCard = [
  {
    title: "Private lessons",
    titleBackground: "#E9609E",
    img: "/pictures/lessons/lesson-card-image-1.png",
    numStudents: "1",
    cost: "$120.000 COP / $28 USD",
    includes: ["Coach", "Surfboard rental", "2 hours per lesson"],

    details:
      "Private lessons are the best way to fast track your surfing skills. You can't beat one-on-one instruction from the top surf coaches in Pradomar . Our coaches will set you up with the right gear and get you to the best waves in Puerto Colombia to provide you with a truly unique surfing experience.",
    urlButton: "/lessons",
  },
  {
    title: "Semi-private lessons",
    titleBackground: "#4CB278",
    img: "/pictures/lessons/lesson-card-image-2.png",
    numStudents: "2",
    cost: "$100.000 COP / $22 USD",
    includes: [
      "Coach",
      "Surfboard rental for two people",
      "2 hours per lesson",
    ],

    details:
      "If you want to share time on the water with a friend or family member, semi-private surfing lessons are the way to go. Our coaches will set you and your friend up with the right gear and get you to the best waves in Puerto Colombia to provide you with a fun unique tandem surfing experience.",
    urlButton: "/lessons",
  },
  {
    title: "Group lessons",
    titleBackground: "#3AABE2",
    img: "/pictures/lessons/lesson-card-image-3.png",
    numStudents: "3-5",
    cost: "$80.000 COP / $18 USD",
    includes: [
      "Coach",
      "Surfboard rental for 3-5 people",
      "2 hours per lesson",
    ],

    details:
      "If you want to share time with a few friends traveling together or a big size family, group surfing lessons are perfect for you. Our coaches will set you all up with the right gear and get you to the best waves in Puerto Colombia to provide you with a fun unique group surfing experience.",
    urlButton: "/lessons",
  },
];

const Lessons = () => {
  const [selectedFAQ, setSelectFAQ] = useState("option1");

  // Este handle es para el nav de contenidos de la sección de FAQ de camps
  const handleOptionSelectFAQ = (option) => {
    setSelectFAQ(option);
  };
  return (
    <div
      className={styles.lessonsBody}
      style={{ backgroundColor: "#FFF8EF", color: "#fff" }}
    >
      {/* Header */}
      <div className={styles.lessonsHeaderContainer}>
        <NavBar />
        <h1 className={styles.lessonsHeaderTitle}>
          Connect with the power of the ocean wave at colombian caribbean
        </h1>
        <p className={styles.lessonsHeaderText}>
          From private to group lessons we match you with top certified local
          instructors for your surfing adventure in Colombia
        </p>
        <Button textButton="Book now" typeBtn="primary" url={""} />
      </div>

      {/* Who is surf for?  */}
      <div className={styles.lessonsContainer}>
        <h2 className={`${styles.lessonsTitle} ${styles.blueText}`}>
          Who is surf for?
        </h2>
        <p className={`${styles.lessonsText} ${styles.blueText}`}>
          The ideal person for surfing is someone who has a passion for the
          ocean, a love for adventure, and a desire to challenge themselves
          physically and mentally. While surfing can be enjoyed by people of all
          ages and skill levels, here are some traits that are found in the
          ideal surfer:
        </p>
        <div className={styles.lessonsCardsContainer}>
          {cards.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>
        <div className={styles.lessonsBtnContainer}>
          <Button textButton="Book now" typeBtn="primary" url={""} />
        </div>
      </div>

      {/* ¿Looking for surfing lessons in Colombia?  */}
      <div
        className={styles.lessonsImgContainer}
        style={{
          backgroundImage: 'url("/pictures/lessons/lessons-surfing-image.png")',
        }}
      >
        <div className={styles.lessonsContent}>
          <h2
            className={`${styles.lessonsTitle} ${styles.whiteText} ${styles.textShadow}`}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            ¿Looking for surfing lessons in Colombia?
          </h2>
          <p
            className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
            style={{ padding: "0 2rem" }}
          >
            If you’re searching for the best surf spots in Colombia, you’re in
            the right place. Puerto Colombia, located 20 min north from
            Barranquilla is the most suitable colombian surf town, for all
            levels of surfing and styles. <br />
            <br /> We have a bunch of options for you. From private and group
            surf lessons our certified ISA instructors are here to teach you to
            ride your first wave the right and safe way.
          </p>
          <div className={styles.lessonsCardContainer}>
            {lessonsCard.map((card, index) => (
              <LessonCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Plan your visit */}
      <div
        className={styles.lessonsImgContainer}
        style={{
          backgroundImage: 'url("/pictures/lessons/lessons-visit-image.png")',
        }}
      >
        <div className={styles.lessonsContent}>
          <h2
            className={`${styles.lessonsTitle} ${styles.whiteText} ${styles.textShadow}`}
            style={{ marginBottom: "2rem" }}
          >
            Plan your visit
          </h2>
          <div className={styles.lessonsVisitRow}>
            <div className={styles.lessonsVisitColumn}>
              <p
                className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
                style={{ paddingBottom: "2rem" }}
              >
                Our surfing sessions will take place at Pradomar, Puerto
                Colombia, one of the most noble beaches to learn all types of
                surfing in Colombia. Pradomar is located 20 km north of
                Barranquilla and you can get here by car, by bus or by taxi,
                Uber or Indriver. <br />
                <br />
                The school is located inside Hotel Pradomar. You can reach by
                requesting entrance from the Hotel main entrance or find the
                nearest beach access after the Farmavida Drugstore, turning to
                your right and walking up the beach.
              </p>
              {/* <Map /> */}
            </div>
            <div className={styles.lessonsVisitColumn}>
              <div className={styles.lessonVisitTitleDiv}>
                <img
                  className={styles.lessonsVisitIcon}
                  src="/pictures/lessons/car-icon.png"
                  alt="car icon"
                />
                <h4
                  className={`${styles.lessonsVisitTitle} ${styles.textShadow}`}
                >
                  By car:
                </h4>
              </div>
              <p
                className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
                style={{ paddingBottom: "2rem" }}
              >
                The drive from Barranquilla to Pradomar takes about 23 minutes.
                Take the Vía 40 highway south and follow the signs to Puerto
                Colombia. Once you reach Puerto Colombia, follow the signs to
                Hotel Pradomar.
              </p>
              <div className={styles.lessonVisitTitleDiv}>
                <img
                  className={styles.lessonsVisitIcon}
                  src="/pictures/lessons/bus-icon.png"
                  alt="bus icon"
                />
                <h4
                  className={`${styles.lessonsVisitTitle} ${styles.textShadow}`}
                >
                  By bus:
                </h4>
              </div>
              <p
                className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
                style={{ paddingBottom: "2rem" }}
              >
                There are several bus companies that offer service from
                Barranquilla to Pradomar. The bus ride takes about 30 minutes.
                The bus fare is about $2 USD. Ask to be left in front of Hotel
                Pradomar
              </p>
              <div className={styles.lessonVisitTitleDiv}>
                <img
                  className={styles.lessonsVisitIcon}
                  src="/pictures/lessons/taxi-icon.png"
                  alt="taxi icon"
                />
                <h4
                  className={`${styles.lessonsVisitTitle} ${styles.textShadow}`}
                >
                  By taxi:
                </h4>
              </div>
              <p
                className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
                style={{ paddingBottom: "2rem" }}
              >
                An Indriver from Barranquilla to Pradomar will cost about $6
                USD. Taxi and Uber might get a bit more pricey but not more than
                $10 USD based on availability. The ride should take about 20
                minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking process  */}
      <div className={styles.lessonsContainer}>
        <h2
          className={`${styles.lessonsTitle} ${styles.blueText}`}
          style={{ marginBottom: "1.5rem" }}
        >
          Booking process
        </h2>
        <p className={`${styles.lessonsBookingText} ${styles.blueText}`}>
          Once you send us your inquiry via whatsapp we’ll proceed to check
          availability for the date and hour you request with our surf school
          and coaches. We only guarantee your booking if you pay in full 24
          hours before your lesson and during our business hours 8am-6pm COL
          time. You need to send proof of payment via whatsapp to guarantee your
          spot.
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
            style={{ width: "20px" }}
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
              Make your full payment thru our payment methods during our
              business hours, from 8am to 6pm COL time
            </p>
          </div>
          <img
            style={{ width: "20px" }}
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
            <h3
              className={`${styles.lessonsBookingSubtitle} ${styles.blueText}`}
            >
              Payment Methods:
            </h3>
            <p className={`${styles.lessonsBookingText} ${styles.blueText}`}>
              Credit card, bank transfer to Davivienda and Bancolombia, Paypal
              and Nequi. Banking fees depending on the method might apply. We
              don’t accept payments in cash or at the surf spot.
            </p>
          </div>
          <div className={styles.lessonsBookingColumn}>
            <h3
              className={`${styles.lessonsBookingSubtitle} ${styles.blueText}`}
            >
              Cancellation Policy:
            </h3>
            <p className={`${styles.lessonsBookingText} ${styles.blueText}`}>
              We can reschedule your session 12 hours in advance in case you
              can’t make it, if you give us proper notice by whatsapp. We don’t
              do any refunds if you want to cancel your class unless it is for
              justified medical reasons.
            </p>
          </div>
        </div>
      </div>

      {/* ¿Interested in a surf course?  */}
      <div
        className={`${styles.lessonsImgContainer} ${styles.lessonsInterestedContainer}`}
        style={{
          backgroundImage:
            'url("/pictures/lessons/lesson-interested-image.png")',
        }}
      >
        <div className={styles.lessonsContent}>
          <h2
            className={`${styles.lessonsTitle} ${styles.whiteText} ${styles.textShadow}`}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            ¿Interested in a surf course?
          </h2>
          <p
            className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
            style={{ padding: "0 2rem" }}
          >
            Did your first lesson and you’re in love with surfing? Coming back
            from another spot, camp or surf school and you want to get a course
            adjusted to your level and objectives? We’ve got you covered.
            Inquire about our surfing courses, methodology and instructors here.
          </p>
          <div className={styles.lessonsBtnContainer}>
            <Button
              textButton="About Surf Courses"
              typeBtn="primary"
              url={""}
            />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className={campsStyles.faqContainer}>
        <h3 className={campsStyles.campsTitle} style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </h3>
        <FaqNavBar
          onSelect={handleOptionSelectFAQ}
          selectedOption={selectedFAQ}
        />
        <FaqContent selectedOption={selectedFAQ} />
      </div>

      {/* Contact */}
      <Contact image="/pictures/lessons/lessons-contact-image.png" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Lessons;
