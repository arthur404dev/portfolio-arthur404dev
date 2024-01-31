"use client";
import { motion } from "framer-motion";
type Props = {
  label: string;
};

const NavLabel = ({ label }: Props) => {
  return (
    <motion.div
      className="absolute right-[180%] -z-20 hidden h-9 w-auto items-center justify-center text-nowrap rounded-full bg-theme-lavender pl-6 pr-8 text-lg font-bold capitalize text-theme-crust shadow-lg shadow-black/40 lg:flex"
      initial={{ opacity: 0, right: "50%" }}
      animate={{ opacity: 1, right: "180%" }}
      transition={{ duration: 0.15 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.15 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default NavLabel;
