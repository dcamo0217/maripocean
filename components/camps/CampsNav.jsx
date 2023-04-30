import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/camps/CampsNav.module.css";

const CampsNav = () => {
    return (
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link className={`${styles.navLink}`} href="/camps/overview">
                    Overview
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} href="/camps/who-is-this-for">
                    Who is this for
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} href="/camps/location">
                    Location
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} href="/camps/dates">
                    Dates
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} href="/camps/what-is-included">
                    What's included
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link className={styles.navLink} href="/camps/book">
                    Book
                </Link>
            </li>
        </ul>
    );
};

export default CampsNav;
