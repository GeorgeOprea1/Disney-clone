import { useState } from "react";

const InputBox = ({
  stepNumber,
  inputTitle,
  inputPara,
  btnText,
  placeholder,
  inputType,
  handleContinueClick,
  createPara1,
  createPara2,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleContinueButtonClick = () => {
    handleContinueClick(inputValue);
    setInputValue(" ");
  };

  return (
    <div className="bg-white w-[90%] md:max-w-[600px]   rounded-3xl flex flex-col items-start justify-around gap-4 lg:p-20 p-5 ">
      <h1 className="text-sm md:text-base font-semibold">STEP {stepNumber}</h1>
      <h1 className=" text-2xl md:text-4xl font-semibold">{inputTitle}</h1>
      <p>{inputPara}</p>
      <p>{createPara1}</p>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="bg-gray-200 w-full p-4 rounded-xl "
      />
      <p className="text-sm">{createPara2}</p>
      <button
        className="w-full bg-blue-600 hover:bg-blue-500 p-4 text-white rounded-full"
        onClick={handleContinueButtonClick}
      >
        {btnText}
      </button>
      {}
    </div>
  );
};

export default InputBox;
