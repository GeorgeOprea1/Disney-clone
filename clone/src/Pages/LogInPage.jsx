import Footer from "../Components/Footer";
import logo from "../assets/Images/logo.png";
import InputBox from "../Components/LogInComponents/InputBox";
import { useState } from "react";

const LogInPage = () => {
  const [emailValid, setEmailValid] = useState(false);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-between ">
      <img src={logo} alt="disney plus logo" className="w-[200px] mt-10" />
      {emailValid ? (
        <InputBox
          stepNumber={1}
          inputTitle={"Enter your email address to continue"}
          inputPara={
            "Log in to your account. If you don’t have one, you will beprompted to create one."
          }
          btnText={"Continue"}
        />
      ) : (
        <InputBox
          stepNumber={2}
          inputTitle={"Enter your password"}
          inputPara={"Log into your account with your email: email@email.com"}
          btnText={"Log In"}
        />
      )}

      <Footer />
    </div>
  );
};

export default LogInPage;
