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
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
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
        <Link to="/">
          <img
            src={logo}
            className="w-[80px] 
        md:w-[115px] object-cover hover:scale-110 cursor-pointer"
          />
        </Link>
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
      <div
        className={`w-[150px] flex items-center justify-center flex-col relative p-4 ${
          toggleUser ? "bg-[#121212]" : ""
        }`}
      >
        <img
          src={avatar}
          alt="User Avatar"
          className="w-[40px] cursor-pointer hover:scale-110 "
          onClick={() => setToggleUser(!toggleUser)}
        />{" "}
        {toggleUser && (
          <div className="w-full border-t-2 flex flex-col gap-3 items-start  absolute z-10 top-[70px] bg-[#121212] p-4">
            <button
              id="profileBtn"
              className="text-lg text-white cursor-pointer border-none bg-[#121212]"
            >
              Profile
            </button>
            <button
              id="accountBtn"
              className="text-lg text-white cursor-pointer  border-none bg-[#121212]"
            >
              Account
            </button>
            <button
              id="helpBtn"
              className="text-lg text-white cursor-pointer  border-none bg-[#121212]"
            >
              Help
            </button>
            <button
              id="logoutBtn"
              className="text-lg text-white cursor-pointer  border-none bg-[#121212]"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
