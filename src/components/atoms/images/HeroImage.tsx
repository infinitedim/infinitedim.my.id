"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";
import Hero from "@/public/hero.svg";
import { cn } from "@/utils";
import { HeroImageProps } from "@/interfaces";

function HeroImage({ ...props }: HeroImageProps) {
  return (
    <motion.div {...props}>
      <Image
        src={Hero}
        alt="Hero"
        className={cn("h-3/5 w-3/5")}
        priority
      />
    </motion.div>
  );
}

export default memo(HeroImage);
