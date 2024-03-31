"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import reservation from "@/public/images/illustration/reservation.png";

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
      <div className="container mx-auto bg-gradient-to-l from-brand-400 to-brand-200 backdrop-blur-lg relative p-4 rounded-sm">
        <div className="grid grid-cols-5">
          <div className="flex flex-col gap-4 items-center justify-center col-span-3 p-4">
            <h2 className="text-xl font-title font-semibold">Reservation</h2>
            <p>
              Reserve a spot for you and your loved ones, and take a trip down
              memory lane, in the most indulgent ways possible.
            </p>
            <Link href="mailto:nwikeodigwe@outlook.com">
              <motion.button
                className="border-[1px] border-brand-700 font-title text-brand-700 text-sm px-8 py-3 md:px-10 md:py-4 rounded-full"
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
