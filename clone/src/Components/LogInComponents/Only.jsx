import only from "../../assets/Images/only.avif";

const Only = () => {
  return (
    <div className="w-full lg:relative flex flex-col items-center gap-8">
      <div className=" text-white flex flex-col text-center lg:w-[30%]  w-[80%] lg:absolute top-[20%] left-20  gap-8 ">
        <h1 className="font-bold text-3xl lg:text-4xl">Only on Disney+</h1>
        <p className="text-gray-400 text-base lg:text-xl ">
          Exclusive series and Originals you won&apos;t find on any other
          streaming service.
        </p>
      </div>{" "}
      <img
        src={only}
        alt="an image showing part of the continent exclusively available on disney+"
        className="w-full"
      />
    </div>
  );
};

export default Only;
