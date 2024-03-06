import Footer from "../Components/Footer.jsx";
import CallToAction from "../Components/StartPageComponents/CallToAction.jsx";
import Availability from "../Components/StartPageComponents/Availability.jsx";
import FAQ from "../Components/StartPageComponents/FAQ.jsx";
import Watch from "../Components/StartPageComponents/Watch.jsx";
import Only from "../Components/StartPageComponents/Only.jsx";

const StartPage = ({ handleSubscribeClicked }) => {
  return (
    <div className=" w-full flex flex-col items-center bg-gray-950">
      <CallToAction handleSubscribeClicked={handleSubscribeClicked} />
      <Only />
      <Watch />
      <FAQ />
      <Availability />
      <Footer />
    </div>
  );
};

export default StartPage;
