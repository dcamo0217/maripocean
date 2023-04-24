import React from "react";
import styles from "./../../styles/Header.module.css";

const NavBar = () => {
    return (
        <>
            <div className={styles.navBarContainer}>
                <h1>Header</h1>
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
