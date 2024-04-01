"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

const children = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    delay: 1,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Jumbotron({ title, subtitle }: Props) {
  return (
    <section className="h-[30vh] flex flex-col justify-end md:p-0 bg-gradient-to-bl from-brand-400 to-brand-200 backdrop-blur-lg relative">
      {/* <div className="absolute top-0 right-16">
        <Image src={image} alt="logo" className="" />
      </div> */}
      <motion.div
        className="container mx-auto flex flex-col gap-4 py-5 px-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-3xl  font-title font-bold text-brand-800 "
          variants={children}
        >
          {title}
        </motion.h1>
        <motion.h2
          className="text-2xl text-zinc-100 font-bold "
          variants={children}
        >
          {subtitle}
        </motion.h2>
      </motion.div>
    </section>
  );
}
