"use client";
import Image from "next/image";
import image from "@/public/images/illustration/Farming.png";
import underline from "@/public/images/heading-main-design.svg";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function About() {
  return (
    <section className="my-20 text-brand-800">
      <div className="container mx-auto md:max-w-screen-lg px-10">
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex">
            <Image src={image} alt="Wheel" width={400} height={200} />
          </div>
          <div className="flex flex-col gap-10 mt-10 md:mt-0 text-brand-50">
            <div className="flex flex-col gap-2">
              <h1 className="text-title text-3xl font-semibold">Our Story</h1>
              <Image src={underline} alt="underline" />
            </div>

            <p>
              Our food cart takes pride in honoring our cherished culinary
              traditions. We celebrate local authenticity and the flavors that
              are close to our hearts, with each dish crafted with love and
              care. With every bite, you savor a piece of nostalgia that has
              shaped our fondest memories.
            </p>
            <p>
              We pay homage to every aspect of our rich heritage, weaving
              together the stories of our land and its people. Our goal is to
              bridge the gap between our hearts and the essence of our
              motherland.
            </p>
            <div>
              <Link href="/who-we-are">
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
                  Read more
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
