import menuOne from "@/public/images/menu/A4 Menu.png";
import menuTwo from "@/public/images/menu/A4 Menu page 1.png";
import menuThree from "@/public/images/menu/A4 Menu page 2.png";
import menuFour from "@/public/images/menu/A4 Menu page 3.png";
import menuFive from "@/public/images/menu/A4 Menu page 4.png";
import Image from "next/image";

export default function MenuContent() {
  return (
    <section className="my-28">
      <div className="container md:max-w-screen-lg mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center">
          <div>
            <Image src={menuOne} alt="menuOne" />
          </div>
          <div>
            <Image src={menuTwo} alt="menuTwo" />
          </div>
          <div>
            <Image src={menuThree} alt="menuThree" />
          </div>
          <div>
            <Image src={menuFour} alt="menuFour" />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Image src={menuFive} alt="menuFive" />
          </div>
        </div>
      </div>
    </section>
  );
}
