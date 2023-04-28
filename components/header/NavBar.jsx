import React from "react";
import Link from "next/link";

import styles from "./../../styles/home/Header.module.css";

const NavBar = () => {
    return (
        <>
            <div className={styles.navBarContainer}>
                <a href="/">
                    <img
                        className={styles.logo}
                        src="/pictures/logo.png"
                        alt=""
                    />
                </a>
                <ul className={styles.navBar}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/camps">Camps</Link>
                    </li>
                    <li>
                        <Link href="/lessons">Lessons</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
