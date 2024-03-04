import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoIosLaptop } from "react-icons/io";
import { FaTabletAlt } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";

const Availability = () => {
  return (
    <div className=" w-[90%] flex items-center justify-center flex-col gap-5">
      <h1 className="text-white text-2xl lg:text-5xl font-bold text-center">
        Available on your favorite devices
      </h1>
      <div className="w-full grid lg:flex grid-cols-2  lg:flex-row justify-around  gap-2">
        <div className="flex flex-col items-center justify-start text-white gap-4  text-center">
          <div className="w-full h-[200px] flex items-center justify-center">
            <PiTelevisionSimpleLight className="w-[200px] h-[180px]" />
          </div>
          <h1 className="text-2xl font-bold">TV</h1>
          <p>Amazon Fire TV</p>
          <p>Android TV</p>
          <p>Apple TV</p>
          <p>Hisense</p>
          <p>LG</p>
          <p>Panasonic</p>
          <p>Samsung</p>
        </div>
        <div className=" flex flex-col items-center justify-start text-white gap-4 text-center">
          <div className="w-full h-[200px]  flex items-center justify-center">
            <IoIosLaptop className="w-[200px] h-[130px]" />
          </div>
          <h1 className="text-2xl font-bold">Computer</h1>
          <p>Chrome OS</p>
          <p>MacOS</p>
          <p>Windows PC</p>
        </div>
        <div className=" flex flex-col items-center justify-start text-white gap-4 text-center">
          <div className="w-full h-[200px]  flex items-center justify-center">
            <FaTabletAlt className="w-[80px] h-[80px]" />
          </div>
          <h1 className="text-2xl font-bold">Mobile phone and tablet</h1>
          <p>Amazon Fire tablets</p>
          <p>Android tablets & phones</p>
          <p>iPhone and iPad</p>
        </div>
        <div className="flex flex-col items-center justify-start text-white gap-4 text-center">
          <div className="w-full h-[200px]  flex items-center justify-center">
            <GiConsoleController className="w-[80px] h-[80px]" />
          </div>
          <h1 className="text-2xl font-bold ">Gaming consoles</h1>
          <p>PS4</p>
          <p>PS5</p>
          <p>Xbox Series X</p>
          <p>Xbox Series S</p>
        </div>
      </div>
    </div>
  );
};

export default Availability;
