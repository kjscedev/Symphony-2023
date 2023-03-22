"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import "../styles/Navbar.css";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`${styles.xPaddings} py-3 fixed navbar w-full z-50`}
    >
      <div className="absolute w-full inset-0 gradient-dark background-image border-gradient shadow" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-1 w-[70%]`}
      >
        <a href="#" className="nav-link">
          HOME
        </a>
        <a href="#events" className="nav-link">
          EVENTS
        </a>
        <a href="#" className="nav-link">
          PRO-SHOWS
        </a>
        <Image
          src="/logo.png"
          alt="logo"
          className="w-[50px] h-[50px] object-contain z-10"
          width={50}
          height={50}
          priority="true"
          draggable="false"
        />
        <a href="#" className="nav-link">
          SHIELD
        </a>
        <a href="#" className="nav-link">
          SYAHI
        </a>
        <a href="#" className="nav-link">
          RULES
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
