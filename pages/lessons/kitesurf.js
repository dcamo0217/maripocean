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

import campsStyles from "../../styles/camps/Camps.module.css";
import styles from "../../styles/lessons/Lessons.module.css";
import Header from "@/components/lessons/Header";
import HeadPages from "@/components/Head";

const kitesurfCards = [
  {
    image: "/pictures/lessons/kitesurf/lesson-simple-card-image-1.png",
    alt: "lessons-card-1",
    title: "Active and fit:",
    text: "Kitesurfing requires a certain level of physical fitness and strength, particularly in the arms, legs, and core. Being in good shape and having a good level of strength and flexibility is important.",
  },
  {
    image: "/pictures/lessons/kitesurf/lesson-simple-card-image-2.png",
    alt: "lessons-card-2",
    title: "Adventurous and challenge lover:",
    text: "You’re willing to embrace the power of wind and waves. You have a sense of adventure, a desire to enjoy the adrenaline rush, and an open mind to try and master new skills.",
  },
  {
    image: "/pictures/lessons/kitesurf/lesson-simple-card-image-3.png",
    alt: "lessons-card-3",
    title: "Community-oriented:",
    text: "Kitesurfing fosters a vibrant community of like-minded individuals. Joining kitesurfing schools, clubs, or attending events allows you to meet new people, share experiences, and build lasting connections.",
  },
];

const kitesurfLessonsCard = [
  {
    title: "Private lessons",
    titleBackground: "#E9609E",
    img: "/pictures/lessons/kitesurf/lesson-card-image-1.png",
    numStudents: "1",
    cost: "$500.000 COP / $110 USD",
    includes: [
      "IKO Certified Instructor",
      "Kitesurf certified equipment",
      "Zodiac or support boat for safety",
      "2 hours per lesson",
    ],

    details:
      "Private lessons are the best way to fast track your kitesurfing skills. You can't beat one-on-one instruction from the top certified IKO kitesurf lessons in Bocas de Ceniza . Our instructors will set you up with the right gear and get you to the best downwinds and upwinds in Bocas de Ceniza.",
    urlButton: "https://wa.link/frp6ic",
  },
  {
    title: "Semi-private lessons",
    titleBackground: "#4CB278",
    img: "/pictures/lessons/kitesurf/lesson-card-image-2.png",
    numStudents: "2",
    cost: "$130.000 COP /$33 USD",
    includes: [
      "IKO Certified Instructor",
      "Kitesurf certified equipment",
      "Zodiac or support boat for safety",
      "2 hours per lesson",
    ],

    details:
      "If you want to share time on the water with a friend or family member, semi-private kitesurfing lessons are the way to go. Our instructors will set you and your friend up with the right gear and get you to the best kitesurf experience in Bocas de Ceniza.",
    urlButton: "https://wa.link/frp6ic",
  },
  {
    title: "Group lessons",
    titleBackground: "#3AABE2",
    img: "/pictures/lessons/kitesurf/lesson-card-image-3.png",
    numStudents: "3",
    cost: "$100.000 COP / $22 USD",
    includes: [
      "IKO Certified Instructor",
      "Kitesurf certified equipment",
      "Zodiac or support boat for safety",
      "2 hours per lesson",
    ],

    details:
      "If you want to share time with a few friends traveling together or a big size family, group kitesurfing lessons are perfect for you. Our instructors will set you all up with the right gear and get you to the best kitesurf group experience in Bocas de Ceniza.",
    urlButton: "https://wa.link/frp6ic",
  },
];

const kitesurfHeader = {
  backgroundImg: "/pictures/lessons/kitesurf/lesson-header-image.png",
  title: "Connect with the power of the ocean wind at colombian caribbean",
  description:
    "From private to group lessons we match you with top certified local instructors for kitesurfing in Colombia",
  url: "https://wa.link/frp6ic",
};

const kitesurf = () => {
  const [kitesurfSelectedFAQ, setKitesurfSelectFAQ] = useState("option1");

  // Este handle es para el nav de contenidos de la sección de FAQ de camps
  const handleOptionSelectFAQ = (option) => {
    setKitesurfSelectFAQ(option);
  };
  return (
    <div
      className={styles.lessonsBody}
      style={{ backgroundColor: "#FFF8EF", color: "#fff" }}
    >
      <HeadPages />
      {/* Header */}
      <Header {...kitesurfHeader} />

      {/* Who is kitesurf for?  */}
      <div className={styles.lessonsContainer}>
        <h2 className={`${styles.lessonsTitle} ${styles.blueText}`}>
          Who is kitesurf for?
        </h2>
        <p className={`${styles.lessonsText} ${styles.blueText}`}>
          The ideal person for kitesurfing is someone who has a passion for
          nature and outdoor activities, a love for adventure, and a desire to
          challenge themselves physically and mentally. It offers a unique
          combination of surfing, windsurfing, and paragliding elements,
          providing an adrenaline rush on the water. While kitesurfing can be
          enjoyed by people of all ages and skill levels, here are some traits
          that are found in the ideal kitesurfer:
        </p>
        <div className={styles.lessonsCardsContainer}>
          {kitesurfCards.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>
        <div className={styles.lessonsBtnContainer}>
          <Button
            textButton="Book now"
            typeBtn="primary"
            url={"https://wa.link/frp6ic"}
          />
        </div>
      </div>

      {/* ¿Looking for kitesurf lessons in Colombia?  */}
      <div
        className={styles.lessonsImgContainer}
        style={{
          backgroundImage:
            'url("/pictures/lessons/kitesurf/lessons-kitesurfing-image.png")',
        }}
      >
        <div className={styles.lessonsContent}>
          <h2
            className={`${styles.lessonsTitle} ${styles.whiteText} ${styles.textShadow}`}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            ¿Looking for kitesurf lessons in Colombia?
          </h2>
          <p
            className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
            style={{ padding: "0 2rem" }}
          >
            If you’re searching for the best kitesurf spots in Colombia, you’re
            in the right place. Bocas de Ceniza, located 30 min north from
            Barranquilla is the hidden gem for kitesurf beginners in Atlántico.
            You’ll enjoy riding your kite with the amazing Barranquilla skyline
            with a very friendly spot not crowded with more advanced kiters
            which makes your practice safe.
            <br />
            <br />
            We have a bunch of options for you. From private and group kitesurf
            lessons our certified IKO instructors are here to teach you to ride
            your first wave the right and safe way.
          </p>
          <div className={styles.lessonsCardContainer}>
            {kitesurfLessonsCard.map((card, index) => (
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
            'url("/pictures/lessons/kitesurf/lessons-visit-image.png")',
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
                Our kitesurfing sessions will take place at Puerto Mocho in
                Bocas de Ceniza, Barranquilla, one of the most noble beaches for
                beginners and intermediate kitesurfing in Colombia. Puerto Mocho
                is located 8 km north of Barranquilla and you can get here by
                car, by bus or by taxi, Uber or Indriver. If you need help and
                want private transportation for you, share via whatsapp and
                we’ll help you get there safe and comfortable with a round trip
                suited for you for an extra cost. <br />
                <br />
                There are important instructions you need to know prior to reach
                us out:
                <br />
                <br />
                Warning: Puerto Mocho and Boca de Ceniza access are not paved by
                now and it might seem pretty adventurous at first, doing this
                trip. The road is safe and plain, but is just a bit bumpy and
                under construction. The amazing Tren Turístico de las Flores is
                being built and hopes to be finished by the end of 2023.
              </p>
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
                Definitely is the most safe and comfortable option. The drive
                from Barranquilla to Puerto Mocho takes about 30 minutes. Take
                the Avenida Circunvalar and then Calle 110 looking for the
                access to Las Flores Neighborhood. Once you reach the
                conjunction next to Supermercado Ara, follow the road straight
                to Bocas de Ceniza until you find the first beach at your left.
                Turn left and follow the instructions we sent you to locate the
                kitesurf school.
              </p>
            </div>
            <div className={styles.lessonsVisitColumn}>
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
                An Indriver or taxi from Barranquilla to Puerto Mocho will cost
                about $12-15 USD. The ride should take about 30 minutes. Your
                challenge here is getting a cab or Indriver to accept to take
                you to Bocas de Ceniza, as many prefer not to since the road is
                not paved. You can ask them to leave you at Las Flores entrance
                where you can get a moto taxi and head your way down to Puerto
                Mocho.
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
                There are several bus companies that offer service from
                Barranquilla to Las Flores. The bus ride takes about 40 minutes.
                The bus fare is about $2 USD. You’ll be left in Las Flores,
                please beware of your safety if you choose this journey. Then
                ask for a moto taxi to take you to Puerto Mocho, to the kitesurf
                school. Keep your whatsapp at hand only to reach us out if you
                get lost finding your way. Beware of your personal belongings if
                you choose the bus adventure.
              </p>
              <p
                className={`${styles.lessonsText} ${styles.whiteText} ${styles.textShadow}`}
                style={{ paddingBottom: "2rem" }}
              >
                We can make things simple for you and arrange private
                transportation and a round trip to pick you up from home and
                leave you there after your session for an extra cost. This
                shouldn’t stop your wingfoil adventure. Inquire about our
                options via whatsapp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking process  */}
      <BookingProcess />

      {/* ¿Interested in a kitesurf course?  */}
      <InterestedCourse
        backgroundImg={"/pictures/lessons/kitesurf/lesson-interested-image.png"}
        title={"¿Interested in a kitesurf course?"}
        description={
          "Did your first lesson and you’re in love with wingfoil? Coming back from another spot, camp or wingfoil school and you want to get a course adjusted to your level and objectives? We’ve got you covered. Inquire about our wingfoil courses, methodology and certified IKO instructors here."
        }
        url={"https://wa.link/p99967 "}
      />

      {/* FAQ */}
      <div className={campsStyles.faqContainer}>
        <h3 className={campsStyles.campsTitle} style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </h3>
        <FaqNavBar
          onSelect={handleOptionSelectFAQ}
          selectedOption={kitesurfSelectedFAQ}
        />
        <FaqContent selectedOption={kitesurfSelectedFAQ} />
      </div>

      {/* Contact */}
      <Contact image="/pictures/lessons/kitesurf/lessons-contact-image.png" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default kitesurf;
