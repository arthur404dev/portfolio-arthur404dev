"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { CgScrollV } from "react-icons/cg";

type Props = {};

const Divider = ({}: Props) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", () => {
    setScrolled(true);
  });

  return (
    <div className="relative my-12 sm:my-14 md:my-16 lg:my-24">
      <motion.div
        className={cn(
          "hidden h-16 w-1 rounded-full bg-theme-surface2 ease-in-out dark:bg-theme-surface0 md:block",
          { "animate-bounce": !scrolled },
        )}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {!scrolled && (
          <motion.div
            className="absolute left-4 top-[25%] animate-pulse"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5 }}
          >
            <CgScrollV className="h-8 w-8 text-theme-surface2 dark:text-theme-surface0" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Divider;
