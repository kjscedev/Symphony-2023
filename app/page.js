"use client";
import { useState, useEffect } from "react";
import Flags from "@/components/Flags";
import { Footer, Navbar, Pillar } from "../components";
import { About, Home, Events, Proshows } from "../sections";

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home");
  const handleScroll = () => {
    const scrollableDiv = document.querySelector('.scrollable-div');
    const scrollTop = scrollableDiv.scrollTop;
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        setCurrentSection(section.id);
      }
    });
  };
  return (
    <>
      <Pillar />
      <Navbar />
      <Flags flag={currentSection} />
      <div className="h-screen overflow-y-auto overflow-x-hidden scrollable-div" onScroll={handleScroll}>
        <Home className="section" onSectionChange={setCurrentSection} sectionChange={currentSection}/>
        <Events className="section" onSectionChange={setCurrentSection}/>
        <Proshows className="section" onSectionChange={setCurrentSection}/>
        {/* <About />
      <Cards />
    <Footer /> */}
      </div>
    </>
  );
}
