"use client";
import Image from "next/image";
import image from "@/public/images/illustration/Kitchen.png";
import underline from "@/public/images/heading-main-design.svg";
import { motion } from "framer-motion";

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
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-5 gap-10">
          <div className="flex col-span-2 items-center justify-center">
            <Image src={image} alt="Wheel" width={400} height={200} />
          </div>
          <div className="flex flex-col col-span-3 gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-title text-3xl font-semibold">Our Story</h1>
              <Image src={underline} alt="underline" />
            </div>

            <p>
              Annapurna was born from the deep-rooted desire to share our
              cherished culinary traditions with everyone, served on a silver
              platter. Our restaurant offers an array of delectable cuisines
              that are not only local and authentic but also prepared with an
              abundance of love. These are dishes that have been cherished
              and&amp;apos; revered, evoking a sense of nostalgia with every
              bite. It&apos;s more than just a meal; it&apos;s a journey through
              the flavors of our heritage, a taste of the memories we&apos;ve
              grown up with and held dear.
            </p>
            <div>
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
                Read more
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
