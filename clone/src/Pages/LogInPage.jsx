import Footer from "../Components/Footer";
import logo from "../assets/Images/logo.png";
import InputBox from "../Components/LogInComponents/InputBox";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);

  const handleContinueClick = (email) => {
    if (email.trim() !== "") {
      setEmailValid(true);
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-between gap-4">
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
        <>
          {isSubscribed ? (
            <InputBox
              stepNumber={2}
              inputTitle={"Enter your password"}
              inputPara={
                "Log into your account with your email: email@email.com"
              }
              btnText={"Log In"}
              placeholder={"Password"}
              inputType={"password"}
              handleContinueClick={handleContinueClick}
              emailValid={emailValid}
            />
          ) : (
            <InputBox
              stepNumber={2}
              inputTitle={"Create an account to continue"}
              inputPara={
                "Enter a password to create your account with your email."
              }
              btnText={"Agree & Continue"}
              placeholder={"Password"}
              inputType={"password"}
              handleContinueClick={handleContinueClick}
              emailValid={emailValid}
              createPara1={
                "You’ll be able to log in to Disney+ with this email address and password."
              }
              createPara2={
                "Disney will use your data to personalize and improve your Disney+ experience and to send you information about Disney+. We may use your data as described in our Privacy Policy, including sharing it with The Walt Disney Family of Companies. By clicking 'Continue' you acknowledge that you have read our Privacy Policy, Cookies Policy, and UK & EU Privacy Rights."
              }
            />
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default LogInPage;
