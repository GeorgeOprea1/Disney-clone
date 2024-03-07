import Footer from "../Components/Footer";
import logo from "../assets/Images/logo.png";
import InputBox from "../Components/LogInComponents/InputBox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../src/firebase/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const LogInPage = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-between gap-4">
      <Link to="/">
        <img
          src={logo}
          alt="disney plus logo"
          className="w-[200px] mt-10 hover:scale-110 cursor-pointer"
        />
      </Link>
      <InputBox
        inputTitle={"Enter your email  and password to continue"}
        inputName1={"email"}
        inputName2={"password"}
        inputPara1={"Log in to your account with email and password"}
        btnText={"Log in"}
        placeholder1={"Email"}
        placeholder2={"Password"}
        inputType2={"password"}
        inputType1={"email"}
      />

      <Footer />
    </div>
  );
};

export default LogInPage;
