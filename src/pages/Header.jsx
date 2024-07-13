import React, { useState } from "react";
import { Link } from "react-router-dom";
import first from "../assets/twit.svg"
import snd from "../assets/2.svg"
import wallet from "../assets/walet.svg"
import logo from "../assets/logo.svg"
import third from "../assets/last.svg"

import {Link as NavLink} from "react-scroll"


import "../App.css"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="clash bg-[#0F1018]">
      <nav className="HEADER max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center  text-white h-auto lg:h-[102px] p-4 ">
        <div className="flex justify-between items-center w-full lg:w-auto ">
        <Link to="/">  <img src={logo} className="w-[150px] lg:w-[222px] h-12 lg:h-[51.79px]" alt="logo" /></Link>
          <button className="block lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>

        </div>

        <ul className={`flex-col lg:flex-row gap-6 mt-4  lg:mt-0 ${isMenuOpen ? "flex text-center " : "hidden"} lg:flex`}>
          <li>
            <Link onClick={toggleMenu}   to="/leaderboard" className="cursor-pointer">Leaderboard</Link>
          </li>
          <li>
            <NavLink  onClick={toggleMenu} spy="true"  smooth="true" className="cursor-pointer" to="tickets">Tickets</NavLink>

          </li>
          <li>
            <NavLink onClick={toggleMenu}  spy="true"  smooth="true"  className="cursor-pointer" to="faq">FAQ</NavLink>
          </li>
        </ul>

        <div className={`flex-col lg:flex-row items-center gap-[50px] mt-4 lg:mt-0 ${isMenuOpen ? "flex mt-10" : "hidden"} lg:flex`}>
          <div className="flex gap-4 items-center">
            <a className="hover:cursor-pointer" href="#">
              <img src={first} className="w-[24px] sm:w-[40px] transition-all ease-in  duration-200 hover:scale-125 h-auto sm:h-[46px]" alt="twitter" />
            </a>
            <a className="hover:cursor-pointer" href="#">
              <img src={snd} className="w-[24px] sm:w-[40px] transition-all ease-in  duration-200 hover:scale-125  h-auto sm:h-[46px]" alt="discord" />
            </a>
            <a className="hover:cursor-pointer" href="#">
              <img src={third} className="w-[24px] sm:w-[40px] transition-all ease-in  duration-200 hover:scale-125  h-auto sm:h-[46px]" alt="telegram" />
            </a>
          </div>

          <div className="flex justify-center items-center">
            <Link
              to="/profile"
              className="w-auto button connect md:w-[210px] h-[46px] rounded-lg flex items-center justify-center gap-2 md:gap-[10px] shadow-md p-2 md:p-[10px]  bg-cover"
            >
              <img src={wallet} className="w-[20px] h-auto md:h-[22.05px]" alt="wallet" />
              <span className=" md:inline">connect wallet</span>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

