import underline from "@/public/images/heading-main-design.svg";
import Image from "next/image";

import * as b from "@/app/component/brand-images";

export default function Brands() {
  return (
    <section className="my-20">
      <div className="container flex flex-col mx-auto gap-7">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-title text-3xl font-semibold text-brand-800">
            Other Brands
          </h1>
          <Image src={underline} alt="underline" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between mt-4">
            <Image src={b.brandOne} alt="Brand" className="scale-75" />
            <Image src={b.brandTwo} alt="Brand" className="scale-75" />
            <Image src={b.brandThree} alt="Brand" className="scale-75" />
            <Image src={b.brandFour} alt="Brand" className="scale-75" />
            <Image src={b.brandFive} alt="Brand" className="scale-75" />
          </div>
          <div className="flex items-center justify-center gap-10 mt-4">
            <Image src={b.brandSix} alt="Brand" className="scale-75" />
            <Image src={b.brandSeven} alt="Brand" className="scale-75" />
            <Image src={b.brandEight} alt="Brand" className="scale-75" />
            <Image src={b.brandNine} alt="Brand" className="scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
}
