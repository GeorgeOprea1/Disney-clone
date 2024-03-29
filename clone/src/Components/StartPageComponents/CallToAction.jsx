import loginBackground from "../../assets/Images/loginBackground.avif";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="h-[100vh] w-full  ">
      <img
        src={loginBackground}
        alt="start page background image"
        className="w-full max-h-screen min-h-[60%] "
      />
      {/* you have to figure out how to add a linear gradient for a better transition between background and images  */}
      <Link to="/login">
        <button
          id="login"
          className="w-[100px] lg:w-[150px] text-base text-white border-white border-[2px] bg-transparent absolute top-5 right-10 hover:text-black hover:bg-white hover:border-none cursor-pointer "
        >
          Log in
        </button>
      </Link>
      <div className="w-[60%] flex flex-col items-center justify-center  gap-5 absolute top-[30%] right-[20%] text-center">
        <h1 className="text-white  font-bold text-[30px] lg:text-[50px] ">
          Enjoy original productions, famous movies, unmissable series and much
          more.
        </h1>
        <p className="text-white font-bold text-lg lg:text-xl">
          All at no extra cost. Cancel anytime.*
        </p>
        <Link to="/signup">
          <button
            id="subscribe"
            className=" w-[300px] lg:w-[400px] text-sm lg:text-2xl text-white bg-blue-600 cursor-pointer hover:bg-blue-700 py-3"
          >
            Sign Up Now
          </button>
        </Link>

        <h2 className="text-white text-sm lg:text-base">
          Get 12 months for the price of 10 months by opting for an annual
          subscription instead of paying monthly.{" "}
        </h2>
        <p className="text-white text-xs lg:text-sm ">
          {" "}
          *Applies after the end of the billing period. A subscription is
          required.
        </p>
      </div>
      <IoIosArrowDown className="text-white text-3xl absolute bottom-5  right-[45%] lg:right-[50%]  animate-bounce" />
    </div>
  );
};

export default CallToAction;
