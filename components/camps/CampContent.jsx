import React from "react";
import Overview from "@/components/camps/content-pages/Overview";
import WhoIsThisFor from "./content-pages/WhoIsThisFor";
import Location from "./content-pages/Location";
import Dates from "./content-pages/Dates";
import WhatIsIncluded from "./content-pages/WhatIsIncluded";
import Book from "./content-pages/Book";

const CampContent = (props) => {
  if (props.isBook === "/camps/#book-now") {
    return <Book />;
  } else if (props.selectedOption === "option1") {
    return <Overview />;
  } else if (props.selectedOption === "option2") {
    return <WhoIsThisFor />;
  } else if (props.selectedOption === "option3") {
    return <Location />;
  } else if (props.selectedOption === "option4") {
    return <Dates />;
  } else if (props.selectedOption === "option5") {
    return <WhatIsIncluded />;
  } else if (props.selectedOption === "option6") {
    return <Book />;
  }
};

export default CampContent;
