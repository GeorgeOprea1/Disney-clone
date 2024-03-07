import Footer from "../Components/Footer";
import logo from "../assets/Images/logo.png";
import InputBox from "../Components/LogInComponents/InputBox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../src/firebase/config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const LogInPage = (logIn) => {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  }

  function handleSignup(event) {
    event.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setError(errorMessage);
      });
  }

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
        inputTitle={"Create an account to continue"}
        inputName={"password"}
        btnText={"Sign up"}
        inputName1={"email"}
        inputName2={"password"}
        inputPara1={"Log in to your account with email and password"}
        btnText2={"Sign up"}
        placeholder1={"Email"}
        placeholder2={"Password"}
        placeholder={"Password"}
        inputType={"password"}
        handleCredentials={handleCredentials}
        createPara1={
          "You’ll be able to log in to Disney+ with this email address and password."
        }
        createPara2={
          "Disney will use your data to personalize and improve your Disney+ experience and to send you information about Disney+. We may use your data as described in our Privacy Policy, including sharing it with The Walt Disney Family of Companies. By clicking 'Continue' you acknowledge that you have read our Privacy Policy, Cookies Policy, and UK & EU Privacy Rights."
        }
        handleSignup={handleSignup}
        error={error}
      />

      <Footer />
    </div>
  );
};

export default LogInPage;
