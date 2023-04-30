import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/camps/CampsNav.module.css";

const CampsNav = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link
                    className={`${styles.navLink} ${
                        currentRoute === "/camps/overview"
                            ? styles.currentPage
                            : ""
                    }`}
                    href="/camps/overview"
                >
                    Overview
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link
                    className={`${styles.navLink} ${
                        currentRoute === "/camps/who-is-this-for"
                            ? styles.currentPage
                            : ""
                    }`}
                    href="/camps/who-is-this-for"
                >
                    Who is this for
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link
                    className={`${styles.navLink} ${
                        currentRoute === "/camps/location"
                            ? styles.currentPage
                            : ""
                    }`}
                    href="/camps/location"
                >
                    Location
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link
                    className={`${styles.navLink} ${
                        currentRoute === "/camps/dates"
                            ? styles.currentPage
                            : ""
                    }`}
                    href="/camps/dates"
                >
                    Dates
                </Link>
            </li>
            <li className={styles.navItem}>
                <Link
                    className={`${styles.navLink} ${
                        currentRoute === "/camps/what-is-included"
                            ? styles.currentPage
                            : ""
                    }`}
                    href="/camps/what-is-included"
                >
                    What's included
                </Link>
            </li>
            <li className={`${styles.navItem} ${styles.bookItem}`}>
                <Link className={styles.navLink} href="/camps/book">
                    Book
                </Link>
            </li>
        </ul>
    );
};

export default CampsNav;
