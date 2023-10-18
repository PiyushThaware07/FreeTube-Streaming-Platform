import React, { useState } from 'react'
// Components
import Navbar from './Layout/components/Navbar'
import Sidebar from './Layout/components/Sidebar'
// Pages
import MainList from './Layout/pages/MainList'
import SearchList from './Layout/pages/SearchList'
import WatchList from './Layout/pages/WatchList'
// Channel Page Compoenents
import ChannelList from './Layout/pages/ChannelList'
import ChannelPlaylist from './Layout/pages/Channel_Items/ChannelPlaylist'
import ChannelVideo from './Layout/pages/Channel_Items/ChannelVideo'


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


            <Route path='/channel/:channel_id' element={<ChannelList />}>
              {/* Nested routes within the channel */}
              <Route index element={<ChannelPlaylist />} path='playlist' />
              <Route element={<ChannelVideo />} path='videos' />
              {/* Add more routes related to channel if needed */}
            </Route>


            <Route path='/*' element={<h1>Sorry Page not found</h1>} />
          </Routes>
          {/* React Router DOM Ends ------------------------------------------ */}
        </Router>
      </div>
    </>
  )
}
