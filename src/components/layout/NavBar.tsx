"use client";
import { useActiveSection } from "@/context";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLabel from "../common/NavLabel";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const NavBar = ({}: Props) => {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState("");
  const { activeSection, setActiveSection } = useActiveSection();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  console.log(hovered);

  return (
    <motion.nav
      className="fixed bottom-0 top-0 z-40 mt-auto flex h-max w-full flex-col items-center gap-y-4 font-raleway lg:right-[2%] lg:h-screen lg:w-16 lg:max-w-md lg:justify-center"
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
            onClick={() => setActiveSection(name)}
            onMouseOver={() => setHovered(hash)}
            onMouseOut={() => setHovered("")}
            className={cn(
              "group relative flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-theme-text outline-none hover:text-theme-lavender",
              {
                "text-theme-mauve": activeSection === name,
              },
            )}
          >
            {icon}
            {activeSection === name && (
              <motion.div
                className="absolute inset-0 -z-10"
                layoutId="acitveSection"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 50,
                }}
              >
                <div className="h-full w-full rounded-full border-2 border-theme-mauve bg-theme-surface0"></div>
                <div className="absolute inset-0 -z-10 h-full w-full animate-spin rounded-full bg-gradient-to-br from-theme-mauve to-theme-blue blur-sm"></div>
              </motion.div>
            )}
            {hovered === hash && <NavLabel label={name} />}
          </Link>
        ))}
        <div
          onMouseOver={() => setHovered("theme")}
          onMouseOut={() => setHovered("")}
        >
          <ThemeSwitcher className="relative flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-theme-text outline-none hover:text-theme-lavender">
            {hovered === "theme" && <NavLabel label={"Theme"} />}
          </ThemeSwitcher>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
