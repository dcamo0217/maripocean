import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";
import Carousel from "@/components/camps/Carrusel";

import styles from "@/styles/camps/Camps.module.css";

const pictures = [
    {
        id: 1,
        src: "/pictures/camps/overview/overview-image-1.png",
        alt: "firts picture",
    },
    {
        id: 2,
        src: "/pictures/camps/overview/overview-image-2.png",
        alt: "second picture",
    },
    {
        id: 3,
        src: "/pictures/camps/overview/overview-image-3.png",
        alt: "third picture",
    },
    {
        id: 4,
        src: "/pictures/camps/overview/overview-image-4.png",
        alt: "fourth picture",
    },
];

export default function overview() {
    return (
        <div div style={{ backgroundColor: "#FFF8EF" }}>
            <CampsHeader />
            <CampsNav />
            <div className={styles.campsContainer}>
                <div className={styles.campsContent}>
                    <h3 className={styles.campsTitle}>
                        Are you ready to connect with the ocean in a fun new way
                        learning surf, kitesurf and wingfoil all at once?
                    </h3>
                    <p className={styles.campsText}>
                        Have you always wanted to try surf, kitesurf or wingfoil
                        when watching your friends or travelers at amazing
                        spots? Have you always wanted to feel the water and the
                        wind in an exciting brand new way? Surf, kitesurf and
                        wingfoil are amazing watersports that connect you with
                        nature, balance and freedom. They transform your
                        physical and mental health in ways you’ve never
                        imagined. Come join us in an epic journey of adventure,
                        balance and connection. <br />
                        <br /> A wave of contagious good vibes awaits you.
                    </p>
                </div>
                <div className={styles.campsCarousel}>
                    <Carousel images={pictures} />
                </div>
            </div>
        </div>
    );
}
