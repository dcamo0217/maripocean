import React from "react";
import BookingCancel from "./faq-pages/BookingCancel";
import BeforeLesson from "./faq-pages/BeforeLesson";
import AboutSurf from "./faq-pages/AboutSurf";
import Others from "./faq-pages/Others";

const FaqContent = (props) => {
  if (props.selectedOption === "option1") {
    return <BookingCancel />;
  } else if (props.selectedOption === "option2") {
    return <BeforeLesson />;
  } else if (props.selectedOption === "option3") {
    return <AboutSurf />;
  } else if (props.selectedOption === "option4") {
    return <Others />;
  }
};

export default FaqContent;
