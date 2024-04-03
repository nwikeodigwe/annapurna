import underline from "@/public/images/heading-main-design.svg";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className="my-20">
      <div className="container md:max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-10 p-10 md:p-0 text-brand-50">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-title text-3xl font-semibold">Reviews</h1>
          <Image src={underline} alt="underline" />
        </div>
        <div className="w-2/3 mx-auto flex flex-col gap-6">
          <p className="text-center">
            Absolutely in love with the place, the aesthetic and the vibe.
            Delicious food and great service! Highly recommend.
          </p>
          <p className="font-bold text-center">-Srija Maddineni</p>
          <div className="flex items-center justify-center gap-2">
            <IoIosStar className="text-brand-50 text-2xl" />
            <IoIosStar className="text-brand-50 text-2xl" />
            <IoIosStar className="text-brand-50 text-2xl" />
            <IoIosStar className="text-brand-50 text-2xl" />
            <IoIosStar className="text-brand-50 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
