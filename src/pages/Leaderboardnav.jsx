import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Leaderboardnav() {
  const [activeLink, setActiveLink] = useState('/leaderboard')

  const handleLinkClick = (path) => {
    setActiveLink(path)
  }

  return (
    <div>
      <div className="max-w-[1400px]  mx-auto">
        <div className="flex gap-5 flex-col lg:w-[930px] lg:flex-row items-center py-5 justify-between">
          <p className="text-5xl text-center text-white">Leaderboard</p>

          <div className="flex text-[10px] lg:text-[15px] gap-4 text-center">
            <Link 
              to="/leaderboard" 
              onClick={() => handleLinkClick('/leaderboard')}
              className={activeLink === '/leaderboard' ? "text-white" : "text-[#847575]"}>
              <p>all <sup>36</sup></p>
            </Link>
            <Link 
              to="/leaderboard/leaderboard2" 
              onClick={() => handleLinkClick('/leaderboard/leaderboard2')}
              className={activeLink === '/leaderboard/leaderboard2' ? "text-white" : "text-[#847575]"}>
              <p>yesterday <sup>12</sup></p>
            </Link>
            <Link 
              to="/leaderboard/leaderboard3" 
              onClick={() => handleLinkClick('/leaderboard/leaderboard3')}
              className={activeLink === '/leaderboard/leaderboard3' ? "text-white" : "text-[#847575]"}>
              <p>last week <sup>24</sup></p>
            </Link>
            <Link 
              to="/leaderboard/leaderboard4" 
              onClick={() => handleLinkClick('/leaderboard/leaderboard4')}
              className={activeLink === '/leaderboard/leaderboard4' ? "text-white" : "text-[#847575]"}>
              <p>last month <sup>24</sup></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboardnav
