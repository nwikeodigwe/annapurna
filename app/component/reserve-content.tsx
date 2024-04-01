"use client";
import QuickLinks from "./quick-links";
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

export default function ReserveContent() {
  return (
    <section className="my-20">
      <div className="container mx-auto px-10">
        <div className="grid  grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-9 flex flex-col gap-4">
            <form className="grid grid-cols-1 gap-6">
              <h2 className="font-title text-3xl">Book A Table</h2>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Date *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px] md:w-1/2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Time *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px] w-full md:w-1/2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Party *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px] md:w-32 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder=""
                  required
                />
              </div>
              <h2 className="font-title text-2xl">Contact Details</h2>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Full name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Email Address *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Phone *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
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
                  Make reservation
                </motion.button>
              </div>
            </form>
          </div>
          <div className="hidden md:flex col-span-3">
            <QuickLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
