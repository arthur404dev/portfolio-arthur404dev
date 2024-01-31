"use client";

import { socials } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  socialClassName?: string | undefined;
  containerClassName?: string | undefined;
}

const socialAnimationVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1 + 0.15 * index,
    },
  }),
};

const Socials = ({ className, containerClassName, socialClassName }: Props) => {
  return (
    <div className={className}>
      <ul className={containerClassName}>
        {socials.map(({ icon, name, url }, index) => (
          <motion.li
            key={name}
            className={socialClassName}
            custom={index}
            variants={socialAnimationVariants}
            initial={"initial"}
            animate={"animate"}
          >
            <Link href={url} target="_blank">
              {icon}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
