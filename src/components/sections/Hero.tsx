"use client";
import { useActiveSection } from "@/context";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {};

const Hero = ({}: Props) => {
  const { push } = useRouter();
  const { setActiveSection } = useActiveSection();
  const homeRef = useRef(null);
  const isInView = useInView(homeRef, { amount: "some", margin: "-20%" });

  useEffect(() => {
    if (isInView) setActiveSection("Home");
  }, [isInView, setActiveSection]);

  return (
    <section id="home" ref={homeRef} className=" scroll-mt-[100rem]">
      <div className="relative mt-32 flex w-screen flex-col items-center justify-center gap-8 pt-2 font-raleway sm:mt-24 md:mt-32 lg:mt-80 lg:max-w-7xl lg:flex-row lg:px-12 lg:pt-0 xl:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
          }}
          className="relative aspect-square max-h-56 w-3/4 max-w-56 sm:max-h-72 sm:max-w-72 md:max-h-80 md:max-w-80 lg:max-h-96 lg:max-w-96"
        >
          <Image
            src={"avatar.svg"}
            fill
            priority
            alt="Arthur Andrade Avatar"
            className="rounded-full border-4 border-theme-mauve shadow-xl"
          />
          <div className="duration-6000 absolute -z-10 aspect-square h-full w-full animate-pulse rounded-full bg-theme-lavender blur" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 1.5,
          }}
          className="container flex flex-col items-center justify-center gap-8 py-4 lg:gap-12 xl:gap-14"
        >
          <div className="prose prose-sm flex max-w-72 flex-col break-normal text-center lg:gap-2 lg:text-left xl:max-w-md">
            <h2 className="text-wrap text-xl font-bold text-theme-text md:text-2xl lg:text-3xl xl:text-4xl">
              Hi! I'm <span className="font-bold text-theme-mauve">Arthur</span>
            </h2>
            <h3 className="text-md font-medium text-theme-subtext1 md:text-base lg:text-xl xl:text-2xl">
              Crafting <span className="font-bold">cool</span> software and{" "}
              <span className="font-bold">innovative</span> solutions has been
              my passion for more than{" "}
              <span className="text-theme-lavender">15 years</span>...
            </h3>
            <h4 className="text-sm font-light italic text-theme-overlay2 lg:text-lg xl:text-xl">
              and I'm loving every minute of it!
            </h4>
          </div>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => push("/#contact")}
              className="text-md flex h-10 items-center gap-2 rounded-md bg-theme-lavender px-3 font-bold text-theme-base hover:bg-theme-mauve lg:h-12 lg:text-xl xl:h-14 xl:px-8"
            >
              <span>Contact Me!</span>
            </button>
            <button className="text-md flex h-10 items-center gap-2 rounded-md bg-theme-crust px-3 text-theme-text hover:bg-theme-text hover:text-theme-base lg:h-12 lg:text-xl xl:h-14 xl:px-8">
              <span className="xl:hidden">Resumée</span>
              <span className="hidden xl:inline-block">Curriculum Vitae</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
