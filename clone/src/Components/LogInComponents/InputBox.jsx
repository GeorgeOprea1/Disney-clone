const InputBox = ({ stepNumber, inputTitle, inputPara, btnText }) => {
  return (
    <div className="bg-white w-[90%] md:w-[50%]  rounded-3xl flex flex-col items-start justify-around gap-4 p-20">
      <h1 className="text-sm md:text-base font-semibold">STEP {stepNumber}</h1>
      <h1 className=" text-2xl md:text-4xl font-semibold">{inputTitle}</h1>
      <p>{inputPara}</p>
      <input
        type="text"
        placeholder="Email"
        className="bg-gray-200 w-full p-4 rounded-xl "
      />
      <button className="w-full bg-blue-600 hover:bg-blue-500 p-4 text-white rounded-full">
        {btnText}
      </button>
    </div>
  );
};

export default InputBox;
