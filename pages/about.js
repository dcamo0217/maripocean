import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/services/Services";

import styles from "../styles/about/About.module.css";
import NavBar from "@/components/header/NavBar";
import Button from "@/components/Button";
import AboutCard from "@/components/about/AboutCard";

const aboutCardData = [
  {
    key: 1,
    image: "/pictures/about/about-card-image-1.png",
    title: "Sports, tourism and wellbeing in community",
    text: "It's not just a sports trip. We balance it with wellbeing. We take you to meet and connect with the places, restaurants and people that add a local and magical touch to our trips.",
  },
  {
    key: 2,
    image: "/pictures/about/about-card-image-2.png",
    title: "Experiences All-inclusive",
    text: "We provide you with everything so that you only have to worry about bringing your good energy and enjoying connecting with the sea in an active way. The rest leave it to us.",
  },
  {
    key: 3,
    image: "/pictures/about/about-card-image-3.png",
    title: "Certified schools",
    text: "We only work with schools and instructors certified by the ISA and IKO, providing you with safe environments and quality classes to practice these sports.",
  },
];

export default function about() {
  return (
    <>
      <div className={styles.aboutHeaderContainer}>
        <NavBar />
        <h1 className={styles.aboutHeaderTitle}>
          Water sports are an endless ocean of transformation
        </h1>
        <Button textButton="Read our story" typeBtn="primary" url={""} />
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutRowContent}>
          <div className={styles.aboutColumnContent}>
            <h2 className={styles.aboutColumnTitle}>
              The ocean and my surfboard brought me back to life{" "}
            </h2>
            <p className={styles.aboutColumnText}>
              Carole Franco, Maripocean Founder, has been an ocean soul since
              she was conceived. Her DNA comes from Caribbean Providence Island
              waters. She has chased the ocean her entire life. While travelling
              to around 4 continents to connect with ocean healing, Caro has
              found her place of peace, balance and transformation in salted
              water. <br />
              <br />
              Caro is a digital marketing executive, she has had the chance to
              lead very challenging roles as Marketing Vice President and as
              well to launch four ventures as an entrepreneur. From big
              corporations like IBM to amazing talent platforms as Toptal and
              Terminal, Caro has grown a very remarkable career. This time of
              her professional career was amazing and looked like success but
              silently Caro was struggling with life speed, lack of work life
              balance which turned into long periods of stress and anxiety with
              high levels of cortisol. Ultimately Caro was burned out from 10
              years of very demanding roles in technology. She had to face
              different immune depressive episodes for 3 years in a row from
              respiratory, stomach and spine issues.
            </p>
          </div>
          <div className={styles.aboutColumnContent}>
            <img
              className={styles.aboutImageContent}
              src="/pictures/about/about-image-1.png"
              alt="about-image"
            />
          </div>
        </div>
        <div className={styles.aboutRowContent}>
          <div className={styles.aboutColumnContent}>
            <img
              className={styles.aboutImageContent}
              src="/pictures/about/about-image-2.png"
              alt="about-image"
            />
          </div>
          <div className={styles.aboutColumnContent}>
            <p className={styles.aboutColumnText}>
              The way Caro connected with water sports was through surfing. As
              Caro, says in words “surf saved my life”. Caro initially explored
              a new connection with the ocean by diving in San Andrés where
              unlucky she got injured because of water pressure, leaving her
              with motion sickness disease. Inspite that, she didn’t stop her
              quest. “If is not below the water, it will be above it” she said.
              <br />
              <br />
              That was where she tried surfing for the first time in Isla
              Fuerte, Colombia, actually not being a great experience for her.
              Her body wasn't ready and diving issues were there . Then she had
              a second try, in Costa Rica where she clicked instantly and was
              sure that was the sport she was waiting for. She chased surfing
              for a third time in Pacific Mexican waters, where her true passion
              was revealed. In Sayulita, Mexico. <br />
              <br />
              She absolutely loved it. Not only because of her positive response
              to the skills the sport needed but because of the balance and
              lifestyle change this sport brought her. She extended a month trip
              to two with her family to keep her surf journey that since July
              2021, hasn’t stopped.
            </p>
          </div>
        </div>
        <div className={styles.aboutRowContent}>
          <div className={styles.aboutColumnContent}>
            <p className={styles.aboutColumnText}>
              From Mexico she found her way to Puerto Colombia, Atlántico, in
              the north of Barranquilla, Colombia, that she didn’t know about,
              travelling non stop for two consecutive years in the waves season
              from Bogotá. She has fallen in love with this surf town. She
              connected with top schools and instructors that have propelled her
              skills at this sport and expanded her curiosity for wind water
              sports, as well. <br />
              <br /> Caro has documented all her mental, physical and emotional
              transformation since surf and wind sports came to her life. Not
              only her physical health and lifestyle changed dramatically, but
              her relation with stress and anxiety. It was that transformation
              and positive outcomes that inspired Caro to share with others what
              the ocean has given to her. So she created Maripocean, an
              ecosystem of transformation of mental and physical health through
              new sportive and wellbeing connections with the ocean.
            </p>
          </div>
          <div className={styles.aboutColumnContent}>
            <img
              className={styles.aboutImageContent}
              src="/pictures/about/about-image-3.png"
              alt="about-image"
            />
          </div>
        </div>
      </div>
      <div className={styles.aboutBackground}>
        <h2 className={styles.aboutTitle}>What makes us different?</h2>
        <div className={styles.cardAboutContainer}>
          {aboutCardData.map((card) => (
            <AboutCard
              key={card.key}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <Services />
      <Contact image="/pictures/about/about-contact-image.png" />
      <Footer />
    </>
  );
}
