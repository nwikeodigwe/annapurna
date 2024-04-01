import underline from "@/public/images/heading-main-design.svg";
import Image from "next/image";
import * as gallery from "@/app/component/gallery-images";

const images = [
  gallery.imageOne,
  gallery.imageTwo,
  gallery.imageThree,
  gallery.imageFour,
  gallery.imageFive,
  gallery.imageSix,
  gallery.imageSeven,
  gallery.imageEight,
];

export default function Gallery() {
  return (
    <section className="my-28">
      <div className="container flex flex-col gap-7 mx-auto p-10 md:p-0">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-title text-3xl font-semibold text-brand-800">
            Gallery
          </h1>
          <Image src={underline} alt="underline" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-4">
          {images.map((image, index) => (
            <Image key={index} src={image} alt="Gallery" />
          ))}
        </div>
      </div>
    </section>
  );
}
