"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Pillar() {
  return (
    <motion.div className="absolute top-[4.2rem] left-[50%] -translate-x-1/2 flex justify-between pointer-events-none w-[100%] h-[calc(100vh_-_4.2rem)] max-[680px]:hidden"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <Image src="/pillar_2.png" alt="pillar" height={1080} width={500} priority={true} className="h-full w-auto pointer-events-none"/>
      <Image src="/pillar_2.png" alt="pillar" height={1080} width={500} priority={true} className="h-full w-auto pointer-events-none"/>
    </motion.div>
  );
}
