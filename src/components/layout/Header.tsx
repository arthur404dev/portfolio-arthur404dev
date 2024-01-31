"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "../common/Socials";

type Props = {};

const Header = ({}: Props) => {
  return (
    <motion.header
      className="absolute z-30 flex w-full items-center bg-gradient-to-b from-theme-mantle to-transparent px-16 lg:h-[90px] lg:px-0"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-2 py-4 sm:py-5 md:py-6 lg:flex-row lg:py-8">
          <Link href="/">
            <h1 className="font-jetbrains text-xl font-black uppercase tracking-tight text-theme-text sm:text-2xl md:text-3xl">
              &lt;Arthur
              <span className="font-thin lowercase text-theme-lavender">
                404dev
              </span>
              &gt;
            </h1>
          </Link>
          <Socials
            className=""
            containerClassName="flex gap-4"
            socialClassName="text-md lg:text-2xl hover:text-theme-lavender transition-all duration-300"
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
