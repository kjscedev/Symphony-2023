'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import "../styles/Navbar.css";
import {navVariants} from "../utils/motion";

const Navbar = () => {
  return (
  <motion.nav
  variants={navVariants}
  initial="hidden"
  animate="visible"
  whileInView="show"
  className={`${styles.xPaddings} py-6 relative `}
  >
    <div 
    className="absolute w-full inset-0  gradient-dark background-image border-gradient shadow "
    />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <a href="#" className="nav-link">HOME</a>
      <a href="#" className="nav-link">EVENTS</a>
      <a href="#" className="nav-link">PRO-SHOWS</a>
      <img src="http://kjsce-symphony.org/2022/assets/slogo.png" alt="logo" className="w-[50px] h-[50px] object-contain z-10" />
      <a href="#" className="nav-link">SHIELD</a>
      <a href="#" className="nav-link">SYAHI</a>
      <a href="#" className="nav-link">RULES</a>
    </div>
  </motion.nav>
  )
}

export default Navbar