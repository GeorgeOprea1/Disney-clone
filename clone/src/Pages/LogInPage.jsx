import Footer from "../Components/Footer";
import CallToAction from "../Components/LogInComponents/CallToAction.jsx";
import Availability from "../Components/LogInComponents/Availability.jsx";

const LogInPage = ({ handleSubscribeClicked }) => {
  return (
    <div className="flex flex-col gap-4">
      <CallToAction handleSubscribeClicked={handleSubscribeClicked} />
      <Availability />
      <Footer />
    </div>
  );
};

export default LogInPage;
