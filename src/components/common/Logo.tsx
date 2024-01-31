"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Logo = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    >
      <Link href="/">
        <h1 className="font-jetbrains text-xl font-black uppercase tracking-tight text-theme-text sm:text-2xl md:text-3xl">
          &lt;Arthur
          <span className="font-thin lowercase text-theme-lavender">
            404dev
          </span>
          &gt;
        </h1>
      </Link>
    </motion.div>
  );
};

export default Logo;
