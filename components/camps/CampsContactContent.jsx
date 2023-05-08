import React from "react";
import Lodging from "./faq-pages/Lodging";
import BeforeTravel from "./faq-pages/BeforeTravel";
import BookingCancel from "./faq-pages/BookingCancel";
import Sports from "./faq-pages/Sports";
import Others from "./faq-pages/Others";

const CampsContactContent = (props) => {
  if (props.selectedOption === "option1") {
    return <Lodging />;
  } else if (props.selectedOption === "option2") {
    return <BeforeTravel />;
  } else if (props.selectedOption === "option3") {
    return <BookingCancel />;
  } else if (props.selectedOption === "option4") {
    return <Sports />;
  } else if (props.selectedOption === "option5") {
    return <Others />;
  }
};

export default CampsContactContent;
