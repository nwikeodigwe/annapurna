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
    <section className="min-h-screen flex flex-col justify-center p-10 bg-gradient-to-bl from-brand-500 to-brand-700 backdrop-blur-lg relative">
      <div className="absolute hidden md:flex top-10 right-16">
        <Image src={illustration} alt="logo" className="" />
      </div>
      <motion.div
        className="container md:max-w-screen-lg pt-28 md:pt-10 flex flex-col mx-auto gap-5 mt-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="md:tracking-wide text-sm md:text-md text-md text-brand-50"
          variants={children}
        >
          Why people choose us as their go to?
        </motion.p>
        <motion.h1
          className="text-2xl md:text-3xl font-title font-bold text-zinc-100"
          variants={children}
        >
          We take pride in our commitment to quality
        </motion.h1>
        {/* <motion.h2
          className="text-xl md:text-2xl text-zinc-100 font-title font-bold md:w-2/3"
          variants={children}
        >
          Annapurna is the perfect place to order all your favourite Indian food
        </motion.h2> */}
        <motion.p
          className="text-md font-light md:text-md text-zinc-100 md:w-2/3"
          variants={children}
        >
          Annapurna Tiffins serves top-quality South Indian Cuisine with a
          smile, prioritizing customer satisfaction. Expect exceptional service
          and delicious Indian dishes whenever you order from us. We&apos;re
          dedicated to brightening your day with our passion for food and
          hospitality.
        </motion.p>
        <div>
          <Link href="/menu">
            <motion.button
              className="border-[1px] border-brand-50 font-title text-brand-50 text-sm px-8 py-3 md:px-10 md:py-4 mt-6 rounded-sm"
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
