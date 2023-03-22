"use client"
import { Footer, Navbar, Pillar } from "../components";
import { About, Home, Events } from "../sections";

const Page = () => (
  <>
    <Pillar />
    <Navbar />
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <Home />
      <Events />
      {/* <About />
      <Cards />
      <Footer /> */}
    </div>
  </>
);

export default Page;
