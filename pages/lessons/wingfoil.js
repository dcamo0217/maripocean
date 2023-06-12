import React, { useState } from "react";

import Button from "@/components/Button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SimpleCard from "@/components/lessons/SimpleCard";
import LessonCard from "@/components/lessons/LessonCard";
import FaqNavBar from "@/components/lessons/FaqNavBar";
import FaqContent from "@/components/lessons/FaqContent";
import InterestedCourse from "@/components/lessons/InterestedCourse";
import BookingProcess from "@/components/lessons/BookingProcess";
import Header from "@/components/lessons/Header";

import campsStyles from "../../styles/camps/Camps.module.css";
import styles from "../../styles/lessons/Lessons.module.css";

const wingfoilCards = [
  {
    image: "/pictures/lessons/wingfoil/lesson-simple-card-image-1.png",
    alt: "lessons-card-1",
    title: "Fan of water sports:",
    text: "Wingfoiling requires a certain level of comfort and experience in water sports. Individuals who have previous experience in activities like windsurfing, kitesurfing, surfing, or paddleboarding tend to adapt well to wingfoiling.",
  },
  {
    image: "/pictures/lessons/wingfoil/lesson-simple-card-image-2.png",
    alt: "lessons-card-2",
    title: "Adventurous and challenge lover:",
    text: "You’re willing to embrace the power of the wingfoil gliding above water and waves. You have a sense of adventure, a desire to enjoy the wind power, and patience and persistance to try and master new skills.",
  },
  {
    image: "/pictures/lessons/wingfoil/lesson-simple-card-image-3.png",
    alt: "lessons-card-3",
    title: "Active and fit:",
    text: "Wingfoiling requires a certain level of physical fitness and strength, particularly strength to hold and control the wing and endurance to stay on the board for extended periods of time. Good balance and coordination are essential for wingfoil.",
  },
];

const wingfoilLessonsCard = [
  {
    title: "Private lessons",
    titleBackground: "#E9609E",
    img: "/pictures/lessons/wingfoil/lesson-card-image-1.png",
    numStudents: "1",
    cost: "$500.000 COP / $110 USD",
    includes: [
      "IKO Certified Instructor",
      "Wingfoil certified equipment",
      "Zodiac or support boat for safety",
      "2 hours per lesson",
    ],

    details:
      "Private lessons are the best way to fast track your wingfoiling skills. You can't beat one-on-one instruction from the top certified IKO wingfoil lessons in Bocas de Ceniza . Our instructors will set you up with the right gear and get you to glide over Caribbean water.",
    urlButton: "/camps/#book-now",
  },
  {
    title: "Semi-private lessons",
    titleBackground: "#4CB278",
    img: "/pictures/lessons/wingfoil/lesson-card-image-2.png",
    numStudents: "2",
    cost: "$130.000 COP /$33 USD",
    includes: [
      "IKO Certified Instructor",
      "Wingfoil certified equipment",
      "Zodiac or support boat for safety",
      "2 hours per lesson",
    ],

    details:
      "If you want to share time on the water with a friend or family member, semi-private wingfoil lessons are the way to go. Our instructors will set you and your friend up with the right gear and get you to the best wingfoil experience in Bocas de Ceniza.",
    urlButton: "/camps/#book-now",
  },
  {
    title: "Group lessons",
    titleBackground: "#3AABE2",
    img: "/pictures/lessons/wingfoil/lesson-card-image-3.png",
    numStudents: "3",
    cost: "$100.000 COP / $22 USD",
    includes: [
      "IKO Certified Instructor",
      "Wingfoil certified equipment",
      "Zodiac or support boat for safety",
      "2 hours per lesson",
    ],

    details:
      "If you want to share time with a few friends traveling together or a big size family, group wingfoil lessons are perfect for you. Our instructors will set you all up with the right gear and get you to the best kitesurf group experience in Bocas de Ceniza.",
    urlButton: "/camps/#book-now",
  },
];

const wingfoilHeader = {
  backgroundImg: "/pictures/lessons/wingfoil/lesson-header-image.png",
  title:
    "Connect with the power of the wingfoil gliding over the ocean at colombian caribbean",
  description:
    "From private to group lessons we match you with top certified local instructors for wingfoil Colombia",
};

const wingfoil = () => {
  const [wingfoilSelectedFAQ, setWingfoilSelectFAQ] = useState("option1");

  // Este handle es para el nav de contenidos de la sección de FAQ de camps
  const handleOptionSelectFAQ = (option) => {
    setWingfoilSelectFAQ(option);
  };
  return (
    <div
      className={styles.lessonsBody}
      style={{ backgroundColor: "#FFF8EF", color: "#fff" }}
    >
      {/* Header */}
      <Header {...wingfoilHeader} />

      {/* Who’s wingfoil for?  */}
      <div className={styles.lessonsContainer}>
        <h2 className={`${styles.lessonsTitle} ${styles.blueText}`}>
          Who’s wingfoil for?
        </h2>
        <p className={`${styles.lessonsText} ${styles.blueText}`}>
          The ideal person for wingfoiling is someone who has a passion for
          nature and outdoor activities, a love for adventure, and a desire to
          challenge themselves physically and mentally. It offers a unique
          combination of surfing, kitesurfing, and paddleboarding elements.
          While wingfoiling can be enjoyed by people of all ages and skill
          levels, here are some traits that are found in the ideal wingfoiler:
        </p>
        <div className={styles.lessonsCardsContainer}>
          {wingfoilCards.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>
        <div className={styles.lessonsBtnContainer}>
          <Button
            textButton="Book now"
            typeBtn="primary"
            url={"/camps/#book-now"}
          />
        </div>
      </div>

      {/* ¿Looking for wingfoil lessons in Colombia?  */}
      <div
        className={styles.lessonsImgContainer}
        style={{
          backgroundImage:
            'url("/pictures/lessons/wingfoil/lessons-wingfoil-image.png")',
        }}
      >
        <div className={styles.lessonsContent}>
          <h2
            className={`${styles.lessonsTitle} ${styles.whiteText} ${styles.textShadow}`}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            ¿Looking for wingfoil lessons in Colombia?
          </h2>
          <p
            className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
            style={{ padding: "0 2rem" }}
          >
            Do you live in Barranquilla or are travelling for a few days and
            want to try that cool surfing class to escape from routine or
            stress? We have a bunch of options for you. From private and group
            surf lessons our certified ISA instructors are here to teach you to
            ride your first wave the right and safe way.
          </p>
          <div className={styles.lessonsCardContainer}>
            {wingfoilLessonsCard.map((card, index) => (
              <LessonCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* Plan your visit */}
      <div
        className={styles.lessonsImgContainer}
        style={{
          backgroundImage:
            'url("/pictures/lessons/wingfoil/lessons-visit-image.png")',
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
      <BookingProcess />

      {/* ¿Interested in a surf course?  */}
      <InterestedCourse
        backgroundImg={"/pictures/lessons/wingfoil/lesson-interested-image.png"}
        title={"¿Interested in a kitesurf course?"}
        description={
          "Did your first lesson and you’re in love with wingfoil? Coming back from another spot, camp or wingfoil school and you want to get a course adjusted to your level and objectives? We’ve got you covered. Inquire about our wingfoil courses, methodology and certified IKO instructors here."
        }
      />

      {/* FAQ */}
      <div className={campsStyles.faqContainer}>
        <h3 className={campsStyles.campsTitle} style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </h3>
        <FaqNavBar
          onSelect={handleOptionSelectFAQ}
          selectedOption={wingfoilSelectedFAQ}
        />
        <FaqContent selectedOption={wingfoilSelectedFAQ} />
      </div>

      {/* Contact */}
      <Contact image="/pictures/lessons/wingfoil/lesson-contact-image.png" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default wingfoil;
