import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Hero from "./Hero";
import Features from "./Features";
import ParentSpeak from "./ParentSpeak"; // Ensure this is imported
import Faq from "./Faq";
import Admission from "./Admission";
import Gallery from "./Gallery";
import Footer from "./footer";
import PicFlowGallery from "./PicFlowGallery";
import Readmore from "./Readmore";

function AppContent({ admissionRef, faqRef, parentSpeakRef }) {
  const location = useLocation();
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/Features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/Gallery" && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/Admission" && admissionRef.current) {
      admissionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/Testimonial" && parentSpeakRef.current) {
      parentSpeakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, admissionRef, parentSpeakRef]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features ref={featuresRef} />
              <ParentSpeak ref={parentSpeakRef} /> {/* Pass ref to ParentSpeak */}
              <Gallery ref={galleryRef} />
              <Faq ref={faqRef} />
              <Admission ref={admissionRef} />
            </>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={
          <>
            <Hero />
            <Features ref={featuresRef} />
            <ParentSpeak ref={parentSpeakRef} />
            <Gallery ref={galleryRef} />
            <Faq ref={faqRef} />
            <Admission ref={admissionRef} />
          </>
        } />
        <Route path="/Features" element={
          <>
            <Hero />
            <Features ref={featuresRef} />
            <ParentSpeak ref={parentSpeakRef} />
            <Gallery ref={galleryRef} />
            <Faq ref={faqRef} />
            <Admission ref={admissionRef} />
          </>
        } />
        <Route path="/Testimonial" element={
          <>
            <Hero />
            <Features ref={featuresRef} />
            <ParentSpeak ref={parentSpeakRef} />
            <Gallery ref={galleryRef} />
            <Faq ref={faqRef} />
            <Admission ref={admissionRef} />
          </>
        } />
        <Route path="/Testimonial" element={<ParentSpeak ref={parentSpeakRef} />} /> {/* Route for Testimonial */}
        <Route path="/Faq" element={<Faq ref={faqRef} />} />
        <Route path="/Admission" element={<Admission ref={admissionRef} />} />
        <Route path="/PicflowGallery" element={<PicFlowGallery />} />
        <Route path="/Readmore" element={<Readmore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppContent;
