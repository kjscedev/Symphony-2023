"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Flags(props) {
  let [cflag, setCflag] = React.useState(props.flag);
  useEffect(() => {
    let flag = document.querySelectorAll(".flag");
    flag.forEach((f) => {
      if (f.classList.contains("enter_flag")) {
        f.classList.add("exit_flag");
        f.classList.remove("enter_flag");
      }
    });
    flag.forEach((f) => {
      f.classList.add("enter_flag");
      setTimeout(() => {
        setCflag(props.flag);
        f.classList.remove("exit_flag");
      }, 300);
    });
  }, [props.flag]);

  return (
    <motion.div
      className="z-20 absolute top-[2.6rem] left-[50%] -translate-x-1/2 flex justify-between pointer-events-none w-[100%] h-[calc(100vh_-_3rem)] max-[680px]:hidden"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      animate={{ opacity: 1 }}
    >
      {props.flag !== "home" ? (
        <>
          <Image
            src={`/${cflag}.png`}
            alt="pillar"
            height={400}
            width={200}
            priority={true}
            className="w-auto h-[30vh] pointer-events-none flag transition-all duration-300"
          />
          <Image
            src={`/${cflag}.png`}
            alt="pillar"
            height={400}
            width={200}
            priority={true}
            className="w-auto h-[30vh] pointer-events-none flag transition-all duration-300"
          />
        </>
      ) : (
        <></>
      )}
    </motion.div>
  );
}