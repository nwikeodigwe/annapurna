import Link from "next/link";
import style from "../styles.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import logo from "@/public/logo.png";
import Image from "next/image";

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
    href: "/contact",
    title: "Contact",
  },
];

export default function Footer() {
  return (
    <footer className={style.background}>
      <div className="container flex flex-col gap-14 relative mx-auto text-white p-12">
        <div className="absolute top-10 right-16">
          <ul className="flex gap-4">
            <li>
              <Link href="">
                <FaFacebookF className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="">
                <FiInstagram className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image src={logo} alt="logo" className="w-40 h-24" />
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col md:flex-row gap-10 justify-between uppercase text-md font-title font-bold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-5 text-md justify-between md:w-1/2 mx-auto">
            <li className="">
              <Link href="/#">Terms & Conditions</Link>
            </li>
            <li className="hidden md:flex">|</li>
            <li className="">
              <Link href="#">Privacy Policies</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center">© 2024 annapurna. , All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
