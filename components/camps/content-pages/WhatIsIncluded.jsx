import Carousel from "@/components/camps/Carrusel";

import styles from "@/styles/camps/Camps.module.css";

const pictures = [
  {
    id: 1,
    src: "/pictures/camps/what-is-included/include-image-1.png",
    alt: "firts picture",
  },
  {
    id: 2,
    src: "/pictures/camps/what-is-included/include-image-2.png",
    alt: "second picture",
  },
  {
    id: 3,
    src: "/pictures/camps/what-is-included/include-image-3.png",
    alt: "third picture",
  },
  {
    id: 4,
    src: "/pictures/camps/what-is-included/include-image-4.png",
    alt: "fourth picture",
  },
  {
    id: 5,
    src: "/pictures/camps/what-is-included/include-image-5.png",
    alt: "fifth picture",
  },
  {
    id: 6,
    src: "/pictures/camps/what-is-included/include-image-6.png",
    alt: "sixth picture",
  },
];

const WhatIsIncluded = () => {
  return (
    <div style={{ backgroundColor: "#FFF8EF" }}>
      <div className={styles.campsContainer}>
        <div className={styles.campsContent}>
          <h3 className={styles.campsTitle}>What’s included?</h3>
          <div className={styles.campsText}>
            <ul>
              <li>4 day / 3 night accommodation</li>
              <li>2 person room / ensuite bathroom</li>
              <li>2 x double beds</li>
              <li>Solo travellers will be matched with a roommate</li>
              <li>
                3 semi-private surf, kitesurf and wingfoil lessons with
                certified IKO and ISA coaches and equipment (+12 years of
                experience)
              </li>
              <li>
                All deliciously caribbean fresh meals per day plus daily healthy
                snacks and hydration (breakfast, lunch and dinner with
                vegetarian options)
              </li>
              <li>Daily restorative yoga and meditation</li>

              <li>Fun professional photos from all the experience</li>
              <li>All transfers airport-hotel and between activities</li>
              <li>
                Additional fun trips to secret local tourism spots and
                restaurants
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.campsCarousel}>
          <Carousel images={pictures} />
        </div>
      </div>
    </div>
  );
};

export default WhatIsIncluded;
