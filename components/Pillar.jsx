"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Pillar() {
  return (
    <motion.div className="absolute top-[5rem]- left-0 flex justify-between pointer-events-none w-full h-[calc(100vh_-_5.2rem)]- h-screen top-0"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <Image src="/pillar_2.png" alt="pillar" height={1080} width={500} priority={true} className="h-full w-auto pointer-events-none"/>
      <Image src="/pillar_2.png" alt="pillar" height={1080} width={500} priority={true} className="h-full w-auto pointer-events-none"/>
    </motion.div>
  );
}
