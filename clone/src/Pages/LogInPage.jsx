import Footer from "../Components/Footer";
import CallToAction from "../Components/LogInComponents/CallToAction.jsx";
import Availability from "../Components/LogInComponents/Availability.jsx";
import FAQ from "../Components/LogInComponents/FAQ.jsx";
import Watch from "../Components/LogInComponents/Watch.jsx";

const LogInPage = ({ handleSubscribeClicked }) => {
  return (
    <div className="flex flex-col gap-6 bg-gray-950">
      <CallToAction handleSubscribeClicked={handleSubscribeClicked} />
      <Watch />
      <FAQ />
      <Availability />
      <Footer />
    </div>
  );
};

export default LogInPage;
