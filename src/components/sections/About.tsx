"use client";
import { useActiveSection } from "@/context";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {};

const About = ({}: Props) => {
  const { setActiveSection } = useActiveSection();
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { amount: "some", margin: "-20%" });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setActiveSection("About");
      animationControls.start("visible");
    }
  }, [isInView, setActiveSection]);
  return (
    <section
      id="about"
      className="container w-full scroll-mt-32"
      ref={aboutRef}
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
        <h1 className="text-theme-lavender">About</h1>
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

export default About;
