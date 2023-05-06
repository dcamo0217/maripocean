import React, { useState } from "react";
import CampsHeader from "@/components/camps/CampsHeader";
import CampsNav from "@/components/camps/CampsNav";
import CampContent from "@/components/camps/CampContent";

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
    </div>
  );
};

export default camps;
