import React from "react";
import Button from "../Button";
import styles from "./../../styles/home/Register.module.css";

const Register = () => {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerContentDiv}>
                <h2 className={styles.registerTitle}>
                    Stay up to date for new camp dates and great tips to improve
                    your nautical skills
                </h2>
                <form className={styles.registerForm}>
                    <input
                        className={styles.registerInput}
                        type="text"
                        placeholder="Enter name"
                        id="name"
                    />
                    <input
                        className={styles.registerInput}
                        type="text"
                        placeholder="Enter e-mail address"
                        id="email"
                    />
                </form>
                <Button textButton="Sign up now" />
            </div>
        </div>
    );
};

export default Register;
