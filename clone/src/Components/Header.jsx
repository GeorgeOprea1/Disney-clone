import { useState } from "react";
import logo from "./../assets/Images/logo.png";
import avatar from "./../assets/Images/avatar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle, setToggle] = useState(false);
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
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] 
        md:w-[115px] object-cover hover:scale-110 cursor-pointer"
        />
        <div className="hidden lg:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
        <div className="flex lg:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem name={""} Icon={item.icon} key={item.name} />
              )
          )}
          <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-4 bg-[#121212] 
            border-[1px] border-gray-700 p-3 md:p-4 px-2 md:px-4 md:py-4 py-2"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        name={item.name}
                        Icon={item.icon}
                        key={item.name}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={avatar} className="w-[40px] cursor-pointer hover:scale-110" />
    </div>
  );
}

export default Header;
