"use client";
import { useActiveSection } from "@/context";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsScrolling } from "react-use-is-scrolling";
import NavLabel from "../common/NavLabel";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const NavBar = ({}: Props) => {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState("");
  const [clicked, setClicked] = useState(false);
  const { isScrolling } = useIsScrolling();
  const { push } = useRouter();
  const { activeSection, setActiveSection } = useActiveSection();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleMobileClick = (section: typeof activeSection, hash: string) => {
    if (clicked && activeSection !== section) {
      setActiveSection(section);
      push(hash);
    }
    setClicked(!clicked);
  };

  const staggeredAnimate = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      trasition: {
        delay: 0.15 * index,
      },
    }),
  };

  return (
    <>
      <motion.nav
        className="fixed bottom-0 top-0 z-40 mt-auto hidden h-max w-full flex-col items-center gap-y-4 font-raleway lg:right-[2%] lg:flex lg:h-screen lg:w-16 lg:max-w-md lg:justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div className="flex h-[20px] w-full items-center justify-between gap-x-4 gap-y-10 bg-gradient-to-b from-theme-text/5 to-theme-crust/5 px-4 py-8 text-2xl shadow-sm shadow-theme-crust backdrop-blur-sm md:px-40 lg:h-max lg:flex-col lg:justify-center lg:rounded-full lg:px-0 lg:text-xl">
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
      {/* Small Screens */}
      <motion.nav
        className="fixed bottom-4 right-4 z-40 mt-auto flex-col items-center gap-y-4 font-raleway lg:hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div className="group flex-col items-center justify-center gap-8 p-2">
          {navigation.map(({ name, hash, icon }, index) => {
            if (activeSection === name || clicked) {
              return (
                <motion.div
                  variants={staggeredAnimate}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  key={hash}
                >
                  <div
                    onClick={() => handleMobileClick(name, hash)}
                    className={cn(
                      "duration-800 flex h-12 w-12 items-center justify-center rounded-full border-4 border-theme-lavender bg-theme-base text-3xl text-theme-text shadow-md outline-none transition-all hover:text-theme-lavender ",
                      {
                        flex: activeSection === name,
                        "text-md h-9 w-9 border-none bg-transparent text-theme-text/20 shadow-none":
                          isScrolling,
                      },
                    )}
                  >
                    {icon}
                  </div>
                </motion.div>
              );
            }
          })}
        </div>
      </motion.nav>
      {clicked && (
        <div
          className="fixed inset-0 z-30 h-screen w-screen overflow-y-auto overflow-x-hidden bg-theme-crust/20 backdrop-blur-sm"
          onClick={() => {
            setClicked(false);
          }}
        />
      )}
      <div>
        <ThemeSwitcher className="fixed right-6 top-6 z-50 flex items-center justify-center rounded-full bg-transparent text-3xl text-theme-text outline-none hover:text-theme-lavender"></ThemeSwitcher>
      </div>
    </>
  );
};

export default NavBar;
