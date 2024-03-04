import watch from "../../assets/Images/watch.avif";
import { PiFilmReel } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";

const Watch = () => {
  return (
    <div className="text-white flex flex-col w-full items-center gap-10">
      <h1 className="font-bold  text-3xl lg:text-5xl text-center">
        Watch the way you want
      </h1>
      <h2 className="font-semibold text-lg lg:text-xl text-gray-400 text-center w-[80%]">
        Enjoy the world&apos;s greatest stories - anytime, anywhere.
      </h2>
      <img src={watch} alt="some random image" />
      <div className="flex flex-col lg:flex-row items-center lg:items  w-[90%] gap-6">
        <div className="flex flex-col items-center  text-center gap-6 h-full">
          <div className="border-[2px] border-blue-400 rounded-full p-6 ">
            <PiFilmReel className="text-blue-400 w-[50px] h-[50px] " />
          </div>
          <h1 className="text-white font-bold text-2xl">
            Endless entertainment
          </h1>
          <p className="text-lg text-gray-400">
            Explore thousands of hours of TV series, movies and originals.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-6">
          <div className="border-[2px] border-blue-400 rounded-full p-6">
            <MdDevices className="text-blue-400 w-[50px] h-[50px]" />
          </div>
          <h1 className="text-white font-bold text-2xl">
            Available on your favourite devices
          </h1>
          <p className="text-lg text-gray-400">
            Stream on up to four screens at once on compatible devices.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-6">
          <div className="border-[2px] border-blue-400 rounded-full p-6">
            <RiParentFill className="text-blue-400 w-[50px] h-[50px] " />
          </div>
          <h1 className="text-white font-bold text-2xl">
            Easy-to-use parental controls
          </h1>
          <p className="text-lg text-gray-400">
            Keep your family safe with our intuitive parental controls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
