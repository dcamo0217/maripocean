import Carousel from "@/components/camps/Carrusel";

import styles from "@/styles/camps/Camps.module.css";

const pictures = [
  {
    id: 1,
    src: "/pictures/camps/who-is-this-for/who-is-1.png",
    alt: "firts picture",
  },
  {
    id: 2,
    src: "/pictures/camps/who-is-this-for/who-is-2.png",
    alt: "second picture",
  },
  {
    id: 3,
    src: "/pictures/camps/who-is-this-for/who-is-3.png",
    alt: "third picture",
  },
  {
    id: 4,
    src: "/pictures/camps/who-is-this-for/who-is-4.png",
    alt: "fourth picture",
  },
  {
    id: 5,
    src: "/pictures/camps/who-is-this-for/who-is-5.png",
    alt: "fifth picture",
  },
  {
    id: 6,
    src: "/pictures/camps/who-is-this-for/who-is-6.png",
    alt: "sixth picture",
  },
];

const WhoIsThisFor = () => {
  return (
    <div style={{ backgroundColor: "#FFF8EF" }}>
      <div className={styles.campsContainer}>
        <div className={styles.campsCarousel}>
          <Carousel images={pictures} />
        </div>
        <div className={styles.campsContent}>
          <h3 className={styles.campsTitle}>Who is this experience for?</h3>
          <div className={styles.campsText}>
            <ul>
              <li>
                Adventurous souls in search of freedom and connection with
                nature
              </li>
              <li>People looking to disconnect from stress and routine</li>
              <li>
                People in search of a passion that brings well-being and balance
                to their lives
              </li>
              <li>
                Travelers looking for a fun and different weekend discovering
                trendy water sports in Colombia
              </li>
            </ul>
            <p
              style={{
                fontStyle: "italic",
                fontSize: "11px",
                color: "#00ABAB",
              }}
            >
              This experience requires you to have basic swimming skills and
              confidence with the ocean. You don’t need to have previous
              experience with water sports, as it’s for beginners. If you can’t
              swim or panic with the ocean this might not be for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsThisFor;
