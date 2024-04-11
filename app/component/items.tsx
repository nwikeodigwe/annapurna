import Image from "next/image";
import * as food from "./illustrations";

export default function Items() {
  return (
    <div className="py-8 px-10 hidden md:flex">
      <div className="flex text-brand-50">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.baji} alt="Bajji" width={400} height={400} />}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {
              <Image
                src={food.biryani}
                alt="Biryani"
                width={400}
                height={400}
              />
            }
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.dosa} alt="Bajji" width={400} height={400} />}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.eggcurry} alt="Bajji" width={400} height={400} />}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.halwa} alt="Bajji" width={400} height={400} />}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.idly} alt="idly" width={400} height={400} />}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.kebab} alt="Kebab" width={400} height={400} />}
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.poori} alt="Poori" width={400} height={400} />}
          </div>
        </div>
      </div>
    </div>
  );
}
