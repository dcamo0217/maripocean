import React, { useState } from "react";
import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";
import CampContent from "@/components/camps/CampContent";
import Button from "@/components/Button";
import Footer from "@/components/footer/Footer";

import styles from "../styles/camps/Camps.module.css";

const camps = () => {
  const [selectedOption, setSelectOption] = useState("option1");

  const handleOptionSelect = (option) => {
    setSelectOption(option);
  };

  return (
    <div style={{ backgroundColor: "#FFF8EF" }}>
      <CampsHeader />
      <CampsNav onSelect={handleOptionSelect} selectedOption={selectedOption} />
      <CampContent selectedOption={selectedOption} />
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <p className={styles.contactText}>
          If you’ve got any questions before booking we’re happy to help. Reach
          us out at our office hours, Monday to Friday 9:00 am COL to 6:00 pm
          COL, through email or whatsapp
        </p>
        <div className={styles.contactButtonDiv}>
          <Button textButton={"Send Email"} typeBtn={"second"} url={"#"} />
          <Button
            textButton={"Whatsapp"}
            typeBtn={"second"}
            url={"https://wa.me/message/KCVNME7YYHBSA1"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default camps;
