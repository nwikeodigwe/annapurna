"use client";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/who-we-are",
    title: "Who We Are",
  },
  {
    href: "/menu",
    title: "Menu",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, staggerDirection: 1 },
  },
};

const backdrop = {
  visible: { opacity: 1 },
  show: { opacity: 0 },
};

const menu = {
  hidden: { x: "100vw" },
  show: {
    x: 0,
    transition: { duration: 1, delay: 0.5 },
  },
};

const item = {
  hidden: { y: "-100vh" },
  show: {
    y: 0,
  },
  transition: {
    type: "spring",
    mass: 0.4,
    damping: 8,
  },
};

const button = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  show: {
    transition: {
      delay: 0.8,
      duration: 1.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      mass: 0.4,
      stiffness: 400,
      damping: 10,
    },
  },
};

const logo_variant = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  show: {
    transition: {
      delay: 0.2,
      duration: 1.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
    opacity: 1,
    y: 0,
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();
  return (
    <>
      <header className="font-mono text-sm static top-0 left-0">
        <div className="flex px-10 items-center justify-between text-brand-50 py-5 shadow-2xl">
          <motion.div variants={logo_variant} initial="hidden" animate="show">
            <Link href={"/"}>
              <Image src={logo} alt="logo" className="w-36 h-16" />
            </Link>
          </motion.div>
          <div>
            <HiOutlineMenuAlt1
              className="text-3xl md:hidden"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="hidden md:flex items-center gap-12">
            <motion.ul
              className="gap-12 list-none text-xl hidden md:flex items-center font-title"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={item}
                  whileHover={{
                    y: -5,
                    transition: {
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    className={`${
                      path === link.href
                        ? "text-brand-500"
                        : "hover:text-brand-500"
                    } transition duration-300`}
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <Link href={"/contact"}>
              <motion.button
                className="border-[1px] border-brand-500 font-title text-brand-500 px-5 py-3 rounded-sm"
                variants={button}
                initial="hidden"
                animate="show"
                whileHover="hover"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed flex justify-end w-full h-full top-0 backdrop-blur-sm overflow-hidden z-10"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-gradient-to-bl from-brand-400 to-brand-200 backdrop-blur-lg h-full w-[80%] flex flex-col justify-between p-10"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
              exit={{ x: "100vw" }}
            >
              <div className="flex justify-end">
                <motion.span
                  whileTap={{ rotate: -180 }}
                  transition={{ duration: 0.5 }}
                >
                  <RxCross1
                    className="text-3xl text-brand-500 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </motion.span>
              </div>
              <ul className="gap-8 text-white flex flex-col items-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-brand-500 transition duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={"reservation"}>
                <button className="border-[1px] border-brand-500 text-brand-500 px-8 py-2 rounded-sm">
                  Make Reservation
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
