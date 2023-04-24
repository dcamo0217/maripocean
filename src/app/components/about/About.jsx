import React from "react";
import styles from "./../../styles/About.module.css";
import Button from "../Button";

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.divTextAbout}>
                <h2 className={styles.tittleAbout}>What makes us special</h2>
                <p className={styles.textAbout}>
                    Maripocean is an ecosystem focused on bringing balance to
                    your mental and physical health through the practice of
                    surf, kitesurf and wingfoil. We connect fun and exclusive
                    tourism experiences with people looking to find a new
                    connection with the ocean with like minded people. <br />
                    <br /> We not only connect visitors with adventure and
                    adrenaline at the ocean. We partner with top certified
                    schools in surf, kitesurf and wingfoil to keep your
                    experience fun but safe. Plus it's not only about sports. Is
                    about local tourism. Our top restaurants, exclusive
                    accommodations and unique spots are waiting for you.{" "}
                </p>
                <Button textButton="More about us" />
            </div>
        </div>
    );
};

export default About;
