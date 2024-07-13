import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Leaderboard from './pages/Leaderboard'
import Main from './pages/Main'
import Layout from './Layout'
import Leaderboard2 from './pages/Leaderboard2'
import Leaderboard3 from './pages/Leaderboard3'
import Leaderboard4 from './pages/Leaderboard4'
import Layout2 from './Layout2'
import Profile from './pages/Profile'
import Refer from './pages/Refer'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/refer' element={<Refer />} />
          <Route path='/leaderboard' element={<Layout2 />} >
          <Route path='/leaderboard' element={<Leaderboard />} ></Route>
          <Route path='/leaderboard/leaderboard2' element={<Leaderboard2 />} ></Route>
          <Route path='/leaderboard/leaderboard3' element={<Leaderboard3 />} ></Route>
          <Route path='/leaderboard/leaderboard4' element={<Leaderboard4 />} ></Route>



          </Route>



      </Route>



    )




  )

  return (
    <>
        <>
      <RouterProvider router={router} />

    </>
    </>
  )
}

export default App
