import React, { useRef } from "react";
import NavBar from "./NavBar";
import AppContent from "./AppContent";

export default function App() {
  const faqRef = useRef(null);
  const admissionRef = useRef(null);
  const parentSpeakRef = useRef(null); // Reference for ParentSpeak

  const handleEnquireClick = () => {
    if (admissionRef.current) {
      admissionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTestimonialClick = () => { // Scroll to ParentSpeak
    if (parentSpeakRef.current) {
      parentSpeakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar onEnquireClick={handleEnquireClick} onTestimonialClick={handleTestimonialClick} />
      <AppContent admissionRef={admissionRef} faqRef={faqRef} parentSpeakRef={parentSpeakRef} />
    </>
  );
}
  