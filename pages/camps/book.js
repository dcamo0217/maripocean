import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";

import styles from "@/styles/camps/Camps.module.css";

export default function book() {
    return (
        <div div style={{ backgroundColor: "#FFF8EF" }}>
            <CampsHeader />
            <CampsNav />
            <h3
                className={styles.campsTitle}
                style={{ textAlign: "center", padding: "2rem 0" }}
            >
                Choose your date in 2023
            </h3>
            <div className={styles.campsContainer}>
                <div className={styles.campsContent}></div>
            </div>
        </div>
    );
}
