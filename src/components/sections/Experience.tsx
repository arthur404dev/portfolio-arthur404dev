"use client";
import { useActiveSection } from "@/context";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {};

const Experience = ({}: Props) => {
  const { setActiveSection } = useActiveSection();
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { amount: "some", margin: "-20%" });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setActiveSection("Experience");
      animationControls.start("visible");
    }
  }, [isInView, setActiveSection]);
  return (
    <section
      id="experience"
      className="container w-full scroll-mt-32"
      ref={experienceRef}
    >
      <motion.div
        className="prose prose-2xl text-theme-text"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{
          duration: 1,
        }}
      >
        <h1 className="text-theme-lavender">Experience</h1>
        <p className="w-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          quas nihil non debitis ipsum assumenda ipsa tempore quo mollitia cum
          libero velit itaque. Magnam ut temporibus ex aut harum natus. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, quas
          nihil non debitis ipsum assumenda ipsa tempore quo mollitia cum libero
          velit itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Suscipit, quas nihil non
          debitis ipsum assumenda ipsa tempore quo mollitia cum libero velit
          itaque. Magnam ut temporibus ex aut harum natus.
        </p>
      </motion.div>
    </section>
  );
};

export default Experience;
