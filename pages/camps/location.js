import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";
import Carousel from "@/components/camps/Carrusel";

import styles from "@/styles/camps/Camps.module.css";

const pictures = [
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

export default function location() {
    return (
        <div div style={{ backgroundColor: "#FFF8EF" }}>
            <CampsHeader />
            <CampsNav />
            <div className={styles.campsContainer}>
                <div className={styles.campsContent}>
                    <h3 className={styles.campsTitle}>
                        Our watersports highway
                    </h3>
                    <p className={styles.campsText}>
                        If you haven’t heard of Atlántico watersports highway,
                        you’ll be glad to know you’ll be one of the first people
                        to experience it while doing three sports on a weekend.
                        You’ll need to fly or get to Barranquilla however is
                        possible for you. Just 20 minutes north of Barranquilla,
                        we’ll find our camp base, Puerto Colombia. This is where
                        we’ll stay as a tribe. <br />
                        <br /> But it’s not the only place you’ll visit. You’ll
                        get the chance to learn kitesurf and wingfoil, in Bocas
                        de Ceniza, the safest top spot for beginners in wind
                        sports. Our surfing sessions will take place at
                        Pradomar, Puerto Colombia, one of the most noble beaches
                        to learn all types of surfing in Colombia. <br />
                        <br /> Explore the idyllic all these places and hidden
                        spots while you enjoy unforgettable sunsets and a lots
                        of adventure.
                    </p>
                </div>
                <div className={styles.campsCarousel}>
                    <Carousel images={pictures} />
                </div>
            </div>
        </div>
    );
}
