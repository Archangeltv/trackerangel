import menu from "../images/bx-menu.svg";
import close from "../images/bx-x.svg";
import { useState } from "react";

function Header() {
  const [hamburger, setHamburger] = useState(true);

  function openNav() {
    setHamburger(false);
  }

  function closeNav() {
    setHamburger(true);
  }

  return (
    <header className=" max-w-screen-xl fixed z-10 top-0 w-full shadow flex items-center justify-between bg-[#0D0D2B] h-[60px] md:px-16 px-8 text-white">
      <h1 className="text-xl font-bold ">TRACKANGEL</h1>
      <nav
        className={`absolute bg-[#0D0D2B] ${
          hamburger ? "top-[-1000%]" : "top-[60px]"
        } w-full left-0 z-[1] p-8 duration-500 md:left-auto md:w-auto shadow md:shadow-none md:top-0 md:relative md:bg-transparent md:p-0 md:z-[0]`}
      >
        <ul className="flex gap-8 text-xl md:text-sm flex-col md:flex-row">
          <li className="hover:text-slate-300 duration-500">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-slate-300 duration-500">
            <a href="#why">Why Us?</a>
          </li>
          <li className="hover:text-slate-300 duration-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-slate-300 duration-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden block">
        <img
          src={menu}
          alt="Hamburger"
          onClick={openNav}
          className={`${hamburger ? "block" : "hidden"} duration-500 w-8`}
        />
        <img
          src={close}
          alt="Close"
          onClick={closeNav}
          className={`${hamburger ? "hidden" : "block"} duration-500 w-8`}
        />
      </div>
    </header>
  );
}

export default Header;
