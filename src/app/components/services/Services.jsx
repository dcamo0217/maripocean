import React from "react";
import styles from "./../../styles/Services.module.css";
import CardServices from "./CardServices";

const Services = () => {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesContent}>
                <h2 className={styles.titleServices}>
                    Looking for camps, courses, daytrips or just a lesson in
                    surf, kitesurf and wingfoil in Colombia?
                </h2>
                <p className={styles.textServices}>
                    Maripocean is the meeting point for all experiences that
                    will get you started in nautic sports. From a private lesson
                    in surf, a basic course in kitesurf to all-inclusive camps
                    we’ve got you.
                </p>
                <div className={styles.divCardsServices}>
                    <CardServices
                        textTitle="Despertar Oceánico The Camp Experience"
                        textBttn="Proximas fechas"
                    />
                    <CardServices
                        textTitle="Clases y cursos con escuelas certificadas"
                        textBttn="Agenda tu clase"
                    />
                    <CardServices
                        textTitle="Maripocean daytrips"
                        textBttn="Más información"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
