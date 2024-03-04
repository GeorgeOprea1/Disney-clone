import Footer from "../Components/Footer";
import CallToAction from "../Components/LogInComponents/CallToAction.jsx";
import Availability from "../Components/LogInComponents/Availability.jsx";
import FAQ from "../Components/LogInComponents/FAQ.jsx";
import Watch from "../Components/LogInComponents/Watch.jsx";
import Only from "../Components/LogInComponents/Only.jsx";

const LogInPage = ({ handleSubscribeClicked }) => {
  return (
    <div className=" w-full flex flex-col items-center  bg-gray-950">
      <CallToAction handleSubscribeClicked={handleSubscribeClicked} />
      <Only />
      <Watch />
      <FAQ />
      <Availability />
      <Footer />
    </div>
  );
};

export default LogInPage;
