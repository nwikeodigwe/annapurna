import Image from "next/image";
import * as food from "./illustrations";

export default function Items() {
  return (
    <div className="py-8 px-10">
      <div className="flex">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.baji} alt="Bajji" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-800">Bajji</h2>
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
          <h2 className="text-xl font-semibold text-brand-800">Biryani</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.dosa} alt="Bajji" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-800">Dosa</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.eggcurry} alt="Bajji" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-800">Egg Curry</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.halwa} alt="Bajji" width={120} height={120} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-800">Halwa</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.idly} alt="idly" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-800">Idly</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.kebab} alt="Kebab" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-800">Kebab</h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            {<Image src={food.poori} alt="Poori" width={150} height={150} />}
          </div>
          <h2 className="text-xl font-semibold text-brand-800">Poori</h2>
        </div>
      </div>
    </div>
  );
}
