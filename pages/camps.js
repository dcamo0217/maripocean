import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";
import CampContent from "@/components/camps/CampContent";
import Footer from "@/components/Footer";
import styles from "../styles/camps/Camps.module.css";
import CampsContactContent from "@/components/camps/CampsContactContent";
import CampsContactNav from "@/components/camps/CampsContactNav";
import Contact from "@/components/Contact";

const camps = () => {
  const router = useRouter();
  const [isBook, setIsBook] = useState("");
  // Este use state es para el nav de contenidos de camps
  const [selectedOption, setSelectOption] = useState("option1");
  // Este use state es para el nav de contenidos de la sección de FAQ de camps
  const [selectedOptionFAQ, setSelectOptionFAQ] = useState("option1");

  // Este handle es para el nav de contenidos de camps
  const handleOptionSelect = (option) => {
    setSelectOption(option);
  };
  // Este handle es para el nav de contenidos de la sección de FAQ de camps
  const handleOptionSelectFAQ = (option) => {
    setSelectOptionFAQ(option);
  };

  useEffect(() => {
    setIsBook(router.asPath);
  }, [router.asPath]);

  return (
    <div style={{ backgroundColor: "#FFF8EF" }}>
      <CampsHeader />
      <CampsNav
        onSelect={handleOptionSelect}
        selectedOption={selectedOption}
        isBook={isBook}
      />
      <div id="book-now">
        <CampContent selectedOption={selectedOption} isBook={isBook} />
      </div>
      <div className={styles.faqContainer}>
        <h3 className={styles.campsTitle} style={{ textAlign: "center" }}>
          Frequently Asked Questions
        </h3>
        <CampsContactNav
          onSelect={handleOptionSelectFAQ}
          selectedOption={selectedOptionFAQ}
        />
        <CampsContactContent selectedOption={selectedOptionFAQ} />
      </div>
      <Contact image="/pictures/camps/camps-contact-image.png" />
      <Footer />
    </div>
  );
};

export default camps;
