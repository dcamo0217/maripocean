import React, { useState } from "react";
import Link from "next/link";

import styles from "./../../styles/home/Header.module.css";
import GoogleTranslate from "../GoogleTranslate";
import Dropdown from "react-bootstrap/Dropdown";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <div className={styles.navBarContainer}>
        <a href="/">
          <img className={styles.logo} src="/pictures/logo.png" alt="" />
        </a>
        <div className={styles.navbarTraslateDiv}>
          <ul className={styles.navBar}>
            <li>
              <Link
                href="/"
                style={{
                  padding: "0 0.5rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/camps"
                style={{
                  padding: "0 0.5rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Camps
              </Link>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Lessons</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="/lessons/surf"
                    style={{ color: "black", textShadow: "none" }}
                  >
                    Surf
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/lessons/kitesurf"
                    style={{ color: "black", textShadow: "none" }}
                  >
                    Kitesurf
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/lessons/wingfoil"
                    style={{ color: "black", textShadow: "none" }}
                  >
                    Wingfoil
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Link
                href="/about"
                style={{
                  padding: "0 0.5rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                About
              </Link>
            </li>
            {/* <li>
            <Link href="/blog" style={{ padding: "0 0.5rem", color: "white", textDecoration:"none" }}>
              Blog
            </Link>
          </li> */}
            {/* <li>
            <Link href="/contact" style={{ padding: "0 0.5rem", color: "white", textDecoration:"none" }}>
              Contact
            </Link>
          </li> */}
          </ul>
          <GoogleTranslate />
        </div>
      </div>
    </>
  );
};

export default NavBar;
