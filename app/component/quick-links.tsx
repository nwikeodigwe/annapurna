import Link from "next/link";

export default function QuickLinks() {
  return (
    <div>
      <h1 className="font-title text-3xl font-semibold">Quick Links</h1>
      <ul className="flex flex-col gap-3 mt-4">
        <li>
          <Link
            href="/reservation"
            className="hover:underline transition duration-300"
          >
            Make A reservation
          </Link>
        </li>
        <li>
          <Link
            href="/menu"
            className="hover:underline transition duration-300"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:underline transition duration-300"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/privacy"
            className="hover:scale-110 transition duration-300"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}
