import React from "react";
import Link from "next/link";

import styles from "./../../styles/home/Header.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.navBarContainer}>
        <a href="/">
          <img className={styles.logo} src="/pictures/logo.png" alt="" />
        </a>
        <ul className={styles.navBar}>
          <li>
            <Link href="/" style={{ padding: "0 1rem" }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/camps" style={{ padding: "0 1rem" }}>
              Camps
            </Link>
          </li>
          {/* <li>
            <Link href="/lessons" style={{ padding: "0 1rem" }}>
              Lessons
            </Link>
          </li> */}
          <li>
            <Link href="/about" style={{ padding: "0 1rem" }}>
              About
            </Link>
          </li>
          {/* <li>
            <Link href="/blog" style={{ padding: "0 1rem" }}>
              Blog
            </Link>
          </li> */}
          {/* <li>
            <Link href="/contact" style={{ padding: "0 1rem" }}>
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
