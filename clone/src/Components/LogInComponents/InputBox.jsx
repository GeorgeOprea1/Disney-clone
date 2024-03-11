import { useState } from "react";

const InputBox = ({
  inputTitle,
  inputName1,
  inputName2,
  inputPara,
  btnText,
  placeholder1,
  placeholder2,
  inputType1,
  inputType2,
  handleCredentials,
  createPara1,
  createPara2,
  handleSignup,
  handleLogin,
  errorLogIn,
  error,
}) => {
  const handleClick = (event) => {
    if (btnText === "Log in") {
      handleLogin(event);
    } else if (btnText === "Sign up") {
      handleSignup(event);
    }
  };

  return (
    <div className="bg-white w-[90%] md:max-w-[600px] rounded-3xl flex flex-col items-start justify-around gap-4 lg:p-20 p-5 ">
      <h1 className="text-2xl md:text-4xl font-semibold">{inputTitle}</h1>
      <p>{inputPara}</p>
      <p>{createPara1}</p>
      <input
        type={inputType1}
        name={inputName1}
        placeholder={placeholder1}
        className="bg-gray-200 w-full p-4 rounded-xl "
        onChange={(e) => {
          handleCredentials(e);
        }}
      />
      <input
        type={inputType2}
        name={inputName2}
        placeholder={placeholder2}
        className="bg-gray-200 w-full p-4 rounded-xl "
        onChange={(e) => {
          handleCredentials(e);
        }}
      />
      {btnText === "Log in" ? (
        <p className="text-sm text-red-500 font-semibold">{errorLogIn}</p>
      ) : (
        <p className="text-sm text-red-500 font-semibold">{error}</p>
      )}
      <p className="text-sm">{createPara2}</p>
      <button
        className="w-full bg-blue-600 hover:bg-blue-500 p-4 text-white rounded-full"
        onClick={handleClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default InputBox;
