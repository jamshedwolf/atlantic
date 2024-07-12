import React, { Children } from 'react'

import Leaderboardnav from './pages/Leaderboardnav'
import { Outlet } from 'react-router-dom'

function Layout2({Children}) {
  return (
    <div>

<Leaderboardnav/>

<Outlet/>






    </div>
  )
}

export default Layout2