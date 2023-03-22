"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import "../styles/Navbar.css";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(()=>{
    const nav = document.querySelectorAll(".nav-link-mobile");
    nav.forEach((link) => {
      console.log(link);
      link.addEventListener("click", () => {
        console.log("clicked");
        document.querySelector(".navbar").classList.remove("opened");
      });
    })
  },[])
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`${styles.xPaddings} py-3 fixed navbar w-full z-50`}
    >
      <div className="absolute w-full inset-0 gradient-dark background-image border-gradient shadow" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-1 w-[70%] max-[1200px]:w-[80%] max-[782px]:w-[95%] max-[674px]:w-[100%] max-[550px]:flex-col`}
      >
        <a href="#home" className="nav-link">
          HOME
        </a>
        <a href="#events" className="nav-link">
          EVENTS
        </a>
        <a href="#" className="nav-link">
          PRO-SHOWS
        </a>
        <div className="max-[550px]:flex justify-between items-center max-[550px]:w-full z-30">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-[50px] h-[50px] object-contain"
            width={50}
            height={50}
            priority="true"
            draggable="false"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-[#ffc265] w-10 h-10 min-[550px]:hidden"
            onClick={() => {
              document.querySelector(".navbar").classList.toggle("opened");
            }}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <a href="#" className="nav-link">
          SHIELD
        </a>
        <a href="#" className="nav-link">
          SYAHI
        </a>
        <a href="#" className="nav-link">
          RULES
        </a>

        <div className="z-30 flex-col h-full min-[550px]:hidden link-container">
          <a href="#home" className="nav-link-mobile">
            HOME
          </a>
          <a href="#events" className="nav-link-mobile">
            EVENTS
          </a>
          <a href="#" className="nav-link-mobile">
            PRO-SHOWS
          </a>
          <a href="#" className="nav-link-mobile">
            SHIELD
          </a>
          <a href="#" className="nav-link-mobile">
            SYAHI
          </a>
          <a href="#" className="nav-link-mobile">
            RULES
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
