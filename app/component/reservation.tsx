"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import reservation from "@/public/images/illustration/Biryani.png";

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

export default function Reservation() {
  return (
    <section className="my-20">
      <div className="container md:max-w-screen-lg mx-auto bg-gradient-to-l from-brand-600 to-brand-800 backdrop-blur-lg relative p-4 rounded-sm">
        <div className="grid md:grid-cols-5">
          <div className="flex flex-col gap-4 items-center justify-center md:col-span-3 p-4 text-brand-50">
            <h2 className="text-xl font-title font-semibold text-center">
              Catering
            </h2>
            <p className="text-center">
              Book a catering service for your event and make it memorable
            </p>
            <Link href="tel:+13462855562">
              <motion.button
                className="border-[1px] border-brand-60 font-title text-brand-50 text-sm px-8 py-3 md:px-10 md:py-4 rounded-full"
                variants={button}
                initial="hidden"
                animate="show"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Call now
              </motion.button>
            </Link>
          </div>
          <div className="flex items-center justify-center col-span-2">
            <Image src={reservation} alt="reservation" />
          </div>
        </div>
      </div>
    </section>
  );
}
