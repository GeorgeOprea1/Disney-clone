import Footer from "../Components/Footer";
import logo from "../assets/Images/logo.png";
import InputBox from "../Components/LogInComponents/InputBox";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [emailValid, setEmailValid] = useState(false);

  const handleContinueClick = (email) => {
    if (email.trim() !== "") {
      setEmailValid(true);
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-between ">
      <Link to="/">
        <img
          src={logo}
          alt="disney plus logo"
          className="w-[200px] mt-10 hover:scale-110 cursor-pointer"
        />
      </Link>
      {!emailValid ? (
        <InputBox
          stepNumber={1}
          inputTitle={"Enter your email address to continue"}
          inputPara={
            "Log in to your account. If you don’t have one, you will be prompted to create one."
          }
          btnText={"Continue"}
          placeholder={"Email"}
          inputType={"email"}
          handleContinueClick={handleContinueClick}
          emailValid={emailValid}
        />
      ) : (
        <InputBox
          stepNumber={2}
          inputTitle={"Enter your password"}
          inputPara={"Log into your account with your email: email@email.com"}
          btnText={"Log In"}
          placeholder={"Password"}
          inputType={"password"}
          handleContinueClick={handleContinueClick}
          emailValid={emailValid}
        />
      )}
      <Footer />
    </div>
  );
};

export default LogInPage;
