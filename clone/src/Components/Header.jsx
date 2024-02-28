import logo from "../assets/Images/logo.png";
import avatar from "../assets/Images/avatar.png";
import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiStar,
  HiTv,
  HiMagnifyingGlass,
  HiPlayCircle,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

const Header = () => {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center gap-8 justify-between p-6">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="disney plus logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
        ))}
      </div>
      <img src={avatar} alt="avatar icon" className="w-[40px]" />
    </div>
  );
};

export default Header;
