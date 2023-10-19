import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Components
import Navbar from './Layout/components/Navbar';
import Sidebar from './Layout/components/Sidebar';

// Pages
import MainList from './Layout/pages/MainList';
import SearchList from './Layout/pages/SearchList';
import WatchList from './Layout/pages/WatchList';
import LoginPage from './Layout/pages/LoginPage';

// Channel Page Components
import ChannelList from './Layout/pages/ChannelList';
import ChannelPlaylist from './Layout/pages/Channel_Items/ChannelPlaylist';
import ChannelVideo from './Layout/pages/Channel_Items/ChannelVideo';
import ChannelAbout from './Layout/pages/Channel_Items/ChannelAbout';

export default function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  function handleToggleSidebar() {
    console.log("sidebar clicked");
    setToggleSidebar((value) => !value);
  }

  function Layout() {
    return (
      <>
        <Navbar handleToggleSidebar={handleToggleSidebar} />
        <Sidebar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} />
        <Outlet /> {/* Outlet to render nested routes */}
      </>
    );
  }

  return (
    <div className="app-main h-screen w-screen">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />


          <Route path='/main/*' element={<Layout />}>
            <Route index element={<MainList />} />
            <Route element={<MainList />} />
            <Route path='search/:query' element={<SearchList />} />
            <Route path='watch/:video_id' element={<WatchList />} />

            <Route path='channel/:channel_id/*' element={<ChannelList />}>
              <Route index element={<ChannelAbout />} path='about' />
              <Route element={<ChannelVideo />} path='videos' />
              <Route element={<ChannelPlaylist />} path='playlist' />

            </Route>
          </Route>


          <Route path='*' element={<h1>Sorry Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
