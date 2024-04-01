"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import illustration from "@/public/images/illustration/DrawKit-cooking-kitchen-food-vector-illustrations-15-removebg-preview.png";

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

const button = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.3,
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  },
};

export default function Hero() {
  return (
    <section className="h-3/4 md:h-screen flex flex-col md:justify-center p-10 md:p-0 bg-gradient-to-bl from-brand-400 to-brand-200 backdrop-blur-lg relative">
      <div className="absolute hidden md:flex top-0 right-16">
        <Image src={illustration} alt="logo" className="" />
      </div>
      <motion.div
        className="container flex flex-col mx-auto gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="md:tracking-wide text-sm md:text-md text-md text-brand-700"
          variants={children}
        >
          Why people choose us as their go to?
        </motion.p>
        <motion.h1
          className="text-4xl md:text-3xl font-title font-bold text-zinc-100"
          variants={children}
        >
          Prepare for first-class service
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-2xl text-zinc-100 font-title font-bold md:w-2/3"
          variants={children}
        >
          Annapurna is the perfect place to order all your favourite Indian food
        </motion.h2>
        <motion.p
          className="text-sm md:text-md text-zinc-100 md:w-2/3"
          variants={children}
        >
          Here at Annapurna, we ensure quality, customer satisfaction and
          variety; providing a range of Indian cuisine as well as a range of
          Arabic cuisine
        </motion.p>
        <div>
          <Link href="/menu">
            <motion.button
              className="border-[1px] border-brand-700 font-title text-brand-700 text-sm px-8 py-3 md:px-10 md:py-4 mt-6 rounded-sm"
              variants={button}
              initial="hidden"
              animate="show"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              View Menu
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
