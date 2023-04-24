import React from "react";
import NavBar from "./NavBar";
import styles from "./../../styles/Header.module.css";
import Button from "../Button";

function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <NavBar />
                <h1 className={styles.titleHeader}>
                    Escape from your routine with exclusive tourism experiences
                    in surf, kitesurf and wingfoil in Colombia
                </h1>
                <div className={styles.divBttn}>
                    <Button textButton="Learn more" />
                </div>
            </div>
        </>
    );
}

export default Header;
