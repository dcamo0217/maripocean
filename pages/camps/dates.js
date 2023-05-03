import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";
import TitleCard from "@/components/camps/TitleCard";

import styles from "@/styles/camps/Camps.module.css";

export default function dates() {
    return (
        <div div style={{ backgroundColor: "#FFF8EF" }}>
            <CampsHeader />
            <CampsNav />
            <h3
                className={styles.campsTitle}
                style={{ textAlign: "center", padding: "2rem 0" }}
            >
                Dates
            </h3>
            <div className={styles.campsContainer}>
                <div className={styles.campsContent}>
                    <TitleCard title="June 30th - July 3rd " />
                </div>
            </div>
        </div>
    );
}
