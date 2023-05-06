import Carousel from "@/components/camps/Carrusel";

import styles from "@/styles/camps/Camps.module.css";

const pictures1 = [
  {
    id: 1,
    src: "/pictures/camps/location/location-image-1.png",
    alt: "firts picture",
  },
  {
    id: 2,
    src: "/pictures/camps/location/location-image-2.png",
    alt: "second picture",
  },
  {
    id: 3,
    src: "/pictures/camps/location/location-image-3.png",
    alt: "third picture",
  },
  {
    id: 4,
    src: "/pictures/camps/location/location-image-4.png",
    alt: "fourth picture",
  },
];

const pictures2 = [
  {
    id: 1,
    src: "/pictures/camps/location/location-image-5.png",
    alt: "firts picture",
  },
  {
    id: 2,
    src: "/pictures/camps/location/location-image-6.png",
    alt: "second picture",
  },
  {
    id: 3,
    src: "/pictures/camps/location/location-image-7.png",
    alt: "third picture",
  },
  {
    id: 4,
    src: "/pictures/camps/location/location-image-8.png",
    alt: "fourth picture",
  },
];

const Location = () => {
  return (
    <div style={{ backgroundColor: "#FFF8EF" }}>
      <div className={styles.campsContainer} style={{ paddingBottom: "1rem" }}>
        <div className={styles.campsContent}>
          <h3 className={styles.campsTitle}>Our watersports highway</h3>
          <p className={styles.campsText}>
            If you haven’t heard of Atlántico watersports highway, you’ll be
            glad to know you’ll be one of the first people to experience it
            while doing three sports on a weekend. You’ll need to fly or get to
            Barranquilla however is possible for you. Just 20 minutes north of
            Barranquilla, we’ll find our camp base, Puerto Colombia. This is
            where we’ll stay as a tribe. <br />
            <br /> But it’s not the only place you’ll visit. You’ll get the
            chance to learn kitesurf and wingfoil, in Bocas de Ceniza, the
            safest top spot for beginners in wind sports. Our surfing sessions
            will take place at Pradomar, Puerto Colombia, one of the most noble
            beaches to learn all types of surfing in Colombia. <br />
            <br /> Explore the idyllic all these places and hidden spots while
            you enjoy unforgettable sunsets and a lots of adventure.
          </p>
        </div>
        <div className={styles.campsCarousel}>
          <Carousel images={pictures1} />
        </div>
      </div>
      <div className={styles.campsContainer}>
        <div className={styles.campsCarousel}>
          <Carousel images={pictures2} />
        </div>
        <div className={styles.campsContent}>
          <h3 className={styles.campsTitle}>Lodging</h3>
          <p className={styles.campsText}>
            Despertar Oceánico The Experience is hosted in a private brand new
            house, fully private at a short walk from the front beach at
            Pradomar. Wake up with the sound of wind and birds, surrounded by
            fruit trees and an awesome ocean view. Our house can accommodate 12
            people in double rooms each with private bathrooms and A/C. There is
            a beautiful swimming pool, a sundeck amazing for sunset, yoga and
            ocean views and a hang-out area to enjoy tribe conversations or
            siestas. Our house is set for the perfect rest and comfort you need
            for a perfect week of adventure, sports and mental health balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
