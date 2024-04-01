"use client";
import QuickLinks from "./quick-links";
import { motion } from "framer-motion";
import { BsSend } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
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

export default function ContactContent() {
  return (
    <section className="my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-9 flex flex-col gap-4">
            <p>Please Fill the form below to get in touch with us</p>
            <form className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Full Name *</label>
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
                <label htmlFor="name">Phone Number *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Message *</label>
                <textarea
                  name="message"
                  id="name"
                  className=" resize-none h-32 border-[1px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter your full name"
                  required
                ></textarea>
              </div>
              <div>
                <motion.button
                  className="border-[1px] border-brand-700 font-title text-brand-700 text-sm px-8 py-3 md:px-10 md:py-4 mt-6 rounded-sm flex items-center justify-center"
                  variants={button}
                  initial="hidden"
                  animate="show"
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Send message <BsSend className="text-xl ml-2" />
                </motion.button>
              </div>
            </form>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex gap-4">
                <CiLocationOn className="text-2xl" />{" "}
                <p>#4345A, Calder Ave, BeaumontTexas- 77706</p>
              </div>
              <div className="flex gap-4">
                <MdOutlineAlternateEmail className="text-2xl" />{" "}
                <p>
                  <Link
                    href={"mailto:support@annapurna-tiffins.com"}
                    className="hover:underline transition duration-300"
                  >
                    support@annapurna-tiffins.com
                  </Link>
                </p>
              </div>
              <div className="flex gap-4">
                <IoTimeOutline className="text-2xl" />{" "}
                <p>Monday - Sunday (10:30am - 9:00pm)</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <QuickLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
