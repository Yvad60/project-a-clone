import Image from "next/image";
import sennderTruck from "/public/images/2020_sennder_truck_image_2__1_.png";
import dog from "/public/images/dog.png";
import drSophieChung from "/public/images/Dr-Sophie-Chung-Qunomedical.png";
import electricGamebox from "/public/images/Electric_Gamebox.png";
import joinpolitics from "/public/images/gro___joinpolitics_-1.png";
import pakcon from "/public/images/Pakcon_2019.png";
import platformVisual from "/public/images/Platform_Visuals___Unmind___3.png";
import carstenBeier21 from "/public/images/Project-A-byCarstenBeier-21.png";

const row1Images = [carstenBeier21, electricGamebox, dog, platformVisual];
const row2Images = [joinpolitics, pakcon, sennderTruck, drSophieChung];

export default function HeroGridBg() {
  return (
    <section className="space-y-4 -skew-y-1 absolute h-screen top-0 z-[-1] bg-black overflow-hidden">
      <div className="w-full h-full absolute top-0 bg-black-transparent-gradient z-10"></div>
      <div className="-translate-x-56 space-y-4">
        <div className="flex gap-4">
          {row1Images.map((image, index) => (
            <Image
              src={image}
              alt=""
              key={index}
              className={`h-[300px] object-cover flex-shrink-0 object-top ${
                index !== 0 && index !== row1Images.length - 1 && "w-[450px]"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          {row2Images.map((image, index) => (
            <Image
              src={image}
              alt=""
              key={index}
              className={`h-[350px] object-cover flex-shrink-0 object-top ${
                index !== 0 && index !== row1Images.length - 1 && "w-[400px]"
              }`}
            />
          ))}
        </div>
        <div className="flex">
          {row1Images.map((image, index) => (
            <Image
              src={image}
              alt=""
              key={index}
              className={`h-[400px] object-cover object-top ${
                index !== 0 && index !== row1Images.length - 1 && "w-[500px]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
