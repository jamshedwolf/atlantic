import React from 'react'
import foter from "../assets/foter.svg"
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='p-10 clash text-white bg-[#000000] '>
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 justify-around items-center">

        <div className="flex flex-col justify-center "> 
          <Link to="/" onClick={scrollToTop}>
            <img src={foter} alt="" className="" />
          </Link>
          <p>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. Qui,<br/> debitis!</p>
        </div>

        <div className="hidden lg:block">Copyright  © Rich People Game</div>

        <div className="">
          <ul className="flex-col lg:flex-row gap-6 mt-4 text-center lg:mt-0 lg:flex">
            <li>
              <Link to="/leaderboard" onClick={scrollToTop}>Leaderboard</Link>
            </li>
            <li>
              <ScrollLink to="tickets" onClick={scrollToTop}>Tickets</ScrollLink>
            </li>
            <li>
              <ScrollLink to="faq" onClick={scrollToTop}>FAQ</ScrollLink>
            </li>
          </ul>
        </div>

        <div className="block lg:hidden ">Copyright  © Rich People Game</div>
      </div>
    </div>
  )
}

export default Footer
