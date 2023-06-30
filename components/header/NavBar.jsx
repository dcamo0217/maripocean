import React, { useState } from "react";
import Link from "next/link";

import styles from "./../../styles/home/Header.module.css";
import GoogleTranslate from "../GoogleTranslate";
// import toggleDropdown from "../../utils/dropdown.js";
import Dropdown from "react-bootstrap/Dropdown";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "surf", label: "Surf" },
    { value: "kitesurf", label: "Kitesurf" },
    { value: "wingfoil", label: "Wingfoil" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
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
              <div className={styles.dropdownStyle}>
                <button className={styles.toggleStyle} onClick={toggleDropdown}>
                  Lessons▾
                </button>
                {isOpen && (
                  <ul className={styles.menuStyle}>
                    {options.map((option) => (
                      <li
                        key={option.value}
                        className={styles.listItemStyle}
                        onClick={() => selectOption(option)}
                      >
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#00b0bd",
                            textShadow: "none",
                          }}
                          href={`/lessons/${option.value}`}
                        >
                          {option.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
            <li style={{ padding: "5px 0" }}>
              <Link
                href="/camps"
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "5px",
                  color: "white",
                  textDecoration: "none",
                  textShadow: "none",
                  backgroundColor: "#08B4C0",
                  border: "0",
                }}
              >
                Camps
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
