import Image from "next/image";
import * as food from "./illustrations";

export default function Items() {
  return (
    <div className="py-8 px-10 hidden md:flex">
      <div className="flex text-brand-50">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.baji} alt="Bajji" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibol">Bajji</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {
              <Image
                src={food.biryani}
                alt="Biryani"
                width={150}
                height={150}
              />
            }
          </div>
          <h2 className="text-xl font-semibold">Biryani</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.dosa} alt="Bajji" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold">Dosa</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.eggcurry} alt="Bajji" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-50">Egg Curry</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.halwa} alt="Bajji" width={120} height={120} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-50">Halwa</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.idly} alt="idly" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-50">Idly</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.kebab} alt="Kebab" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-50">Kebab</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.poori} alt="Poori" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-50">Poori</h2>
        </div>
      </div>
    </div>
  );
}
