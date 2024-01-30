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
  const isInView = useInView(homeRef, { amount: "some" });

  useEffect(() => {
    if (isInView) setActiveSection("Home");
  }, [isInView, setActiveSection]);

  return (
    <section id="home" ref={homeRef} className=" scroll-mt-[100rem]">
      <div className="relative flex w-screen flex-col items-center justify-center gap-8 lg:max-w-7xl lg:flex-row lg:px-12 xl:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
          }}
          className="relative aspect-square max-h-72 w-3/4 max-w-72 sm:max-h-80 sm:max-w-80 lg:max-h-96 lg:max-w-96"
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
          className="container flex flex-col items-center justify-center gap-8 py-8 lg:gap-12 xl:gap-14"
        >
          <div className="flex flex-col gap-2 text-center lg:gap-4 lg:text-left xl:gap-6">
            <h1 className="text-wrap font-raleway text-xl text-theme-text md:text-2xl lg:text-3xl xl:text-4xl">
              Hi! I'm{" "}
              <span className="font-bold text-theme-lavender">Arthur</span> and
              I like to create stuff.
            </h1>
            <h2 className="text-sm font-light text-theme-subtext0 md:text-base lg:text-xl xl:text-2xl">
              I've Been a Software Developer for over 15 years!
            </h2>
          </div>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => push("/#contact")}
              className="text-md flex h-10 items-center gap-2 rounded-md bg-theme-lavender px-3 font-bold text-theme-base hover:bg-theme-mauve lg:h-12 lg:text-xl xl:h-14 xl:px-8"
            >
              <span>Contact Me!</span>
            </button>
            <button className="text-md flex h-10 items-center gap-2 rounded-md border border-theme-text px-3 text-theme-text hover:bg-theme-text hover:text-theme-base lg:h-12 lg:text-xl xl:h-14 xl:px-8">
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
