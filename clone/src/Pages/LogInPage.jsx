import Footer from "../Components/Footer";
import logo from "../assets/Images/logo.avif";
import InputBox from "../Components/LogInComponents/InputBox";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../src/firebase/config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogInPage = () => {
  const [userCredentials, setUserCredentials] = useState({});
  const [errorLogIn, setErrorLogIn] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorLogIn("");

    try {
      await signInWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password
      );

      setLoginSuccess(true);
    } catch (error) {
      setErrorLogIn(error.message);
    }
  };

  if (loginSuccess) {
    return <Navigate to="/content" />;
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
        inputTitle={"Enter your email and password to continue"}
        inputName1={"email"}
        inputName2={"password"}
        inputPara1={"Log in to your account with email and password"}
        btnText={"Log in"}
        placeholder1={"Email"}
        placeholder2={"Password"}
        inputType2={"password"}
        inputType1={"email"}
        handleCredentials={handleCredentials}
        handleLogin={handleLoginSubmit}
        errorLogIn={errorLogIn}
      />

      <Footer />
    </div>
  );
};

export default LogInPage;
