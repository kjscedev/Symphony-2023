"use client"
import { useState } from "react";
import Flags from "@/components/Flags";
import { Footer, Navbar, Pillar } from "../components";
import { About, Home, Events, Proshows, Shield, Syahi , Parvaah} from "../sections";

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home");
  const handleScroll = () => {
    const scrollableDiv = document.querySelector('.scrollable-div');
    const scrollTop = scrollableDiv.scrollTop;
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollTop >= sectionTop && scrollTop < (sectionTop + sectionHeight+ 1000)) {
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
        <Shield className="section" onSectionChange={setCurrentSection}/>
      <Syahi className="section" onSectionChange={setCurrentSection}/>
      <Parvaah className="section" onSectionChange={setCurrentSection}/>
    <Footer className="section" onSectionChange={setCurrentSection} />
      </div>
    </>
  );
}
