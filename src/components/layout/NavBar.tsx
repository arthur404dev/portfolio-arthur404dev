"use client";
import { navigation } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLabel from "../common/NavLabel";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const NavBar = ({}: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.nav
      className="fixed bottom-0 top-0 z-40 mt-auto flex h-max w-full flex-col items-center gap-y-4 font-jetbrains lg:right-[2%] lg:h-screen lg:w-16 lg:max-w-md lg:justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <div className="shadow-xs flex h-[80px] w-full items-center justify-between gap-x-4 gap-y-10 bg-gradient-to-b from-theme-text/5 to-theme-crust/5 px-4 py-8 text-2xl shadow-theme-crust backdrop-blur-md md:px-40 lg:h-max lg:flex-col lg:justify-center lg:rounded-full lg:px-0 lg:text-xl">
        {navigation.map(({ name, hash, icon }) => (
          <Link
            key={hash}
            href={hash}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-theme-text outline-none hover:border-2 hover:border-theme-lavender hover:bg-theme-surface0 hover:text-theme-lavender focus:text-theme-lavender focus:ring-1 focus:ring-theme-lavender focus:ring-offset-0"
          >
            {icon}
            <NavLabel label={name} />
          </Link>
        ))}
        <ThemeSwitcher className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-theme-text outline-none hover:border-2 hover:border-theme-lavender hover:bg-theme-surface0 hover:text-theme-lavender focus:text-theme-lavender focus:ring-1 focus:ring-theme-lavender focus:ring-offset-0">
          <NavLabel label={`Toggle Theme`} />
        </ThemeSwitcher>
      </div>
    </motion.nav>
  );
};

export default NavBar;
