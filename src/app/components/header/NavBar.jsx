import React from "react";
import styles from "./../../styles/Header.module.css";

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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Camps</a>
                    </li>
                    <li>
                        <a href="#">Lessons</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
