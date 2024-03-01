import logo from "../assets/Images/logo.png";

const Footer = () => {
  const footerData = [
    { id: 1, text: "Privacy Policy" },
    { id: 2, text: "Cookie Policy" },
    { id: 3, text: "Privacy Rights in the UK and EU" },
    { id: 4, text: "Subscription Agreement" },
    { id: 5, text: "Help" },
    { id: 6, text: "Compatible Devices" },
    { id: 7, text: "About Us" },
    { id: 8, text: "Interest-Based Policy" },
    { id: 9, text: "Manage Privacy Preferences" },
  ];

  return (
    <div className="py-6 mt-6 w-full flex flex-col items-center justify-center gap-6 bg-gray-950">
      <img
        src={logo}
        alt="disney+ logo"
        className="w-[80px] 
        md:w-[115px] object-cover"
      />
      <div className=" w-full flex gap-4 flex-wrap  justify-center items-center ">
        {footerData.map((item) => (
          <p key={item.id} className="text-white md:text-[14px] text-[10px]">
            {item.text}
          </p>
        ))}
      </div>
      <div className="text-white md:text-[12px] text-[8px]">
        ©Disney.All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
