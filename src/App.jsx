import React, { useState } from 'react'
// Components
import Navbar from './Layout/components/Navbar'
import Sidebar from './Layout/components/Sidebar'
// Pages
import MainList from './Layout/pages/MainList'
import SearchList from './Layout/pages/SearchList'
import WatchList from './Layout/pages/WatchList'

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  function handleToggleSidebar() {
    console.log("sidebar clicked");
    setToggleSidebar((value) => !value);
  }
  return (
    <>
      <div className="app-main h-screen w-screen ">
        <Router>
          <Navbar handleToggleSidebar={handleToggleSidebar} />
          <Sidebar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} />
          {/* React Router DOM Starts ---------------------------------------- */}
          <Routes>
            <Route path='/' element={<MainList />} />
            <Route path='/search/:query' element={<SearchList />} />
            <Route path='/watch/:video_id' element={<WatchList />} />
            <Route path='/*' element={<h1>Sorry Page not found</h1>} />
          </Routes>
          {/* React Router DOM Ends ------------------------------------------ */}
        </Router>
      </div>
    </>
  )
}
