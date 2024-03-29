import Link from "next/link";
import style from "../styles.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import logo from "@/public/logo.png";
import Image from "next/image";

const navLinks = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#about",
    title: "About Us",
  },
  {
    href: "#whoweare",
    title: "Who We Are",
  },
  {
    href: "#location",
    title: "Location",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

export default function Footer() {
  return (
    <footer className={style.background}>
      <div className="container flex flex-col gap-14 relative mx-auto text-white p-12">
        <div className="absolute top-10 right-10">
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
        <div>
          <ul className="flex justify-between uppercase text-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 text-md justify-center">
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>|</li>
            <li>
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
