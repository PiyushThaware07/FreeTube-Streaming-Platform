import React, { useState } from 'react'
// Icons
import { BiMenu } from "react-icons/bi"
import { IoLogoYoutube, IoIosSearch } from "react-icons/io"
import { IoNotificationsCircleOutline, IoSearchCircleOutline, IoCloseSharp } from "react-icons/io5"
import { PiUserCircleDuotone } from "react-icons/pi"
// React Router Dom
import { Link, useNavigate, useLocation } from 'react-router-dom'


export default function Navbar(props) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate(`search/${inputValue}/`);
    setToggleSearch(false); // Close the search bar after searching
  }

  const [toggleSearch, setToggleSearch] = useState(false);
  function handleToggleSearch() {
    setToggleSearch((value) => !value);
  }

  // Auth Data Collector
  const location = useLocation();
  const receivedData = location.state;



  return (
    <>
      <div className="navbar-main flex flex-nowrap items-center justify-between bg-white px-3 sm:px-8 py-3 relative z-50 shadow-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="navbar-section-1 flex flex-nowrap items-center gap-3 sm:gap-5">
          <div className="navbar-menu p-2 hover:bg-slate-200 rounded-full" onClick={() => props.handleToggleSidebar()}><BiMenu className='text-2xl' /></div>
          <Link to='/main' className="navbar-logo flex flex-nowrap items-center gap-2 text-xl font-[600]"><IoLogoYoutube className='text-2xl text-[red]' />FreeTube</Link>
        </div>
        <div className="navbar-section-2 h-[40px] hidden md:flex flex-nowrap flex-1 md:px-12 lg:px-24">
          <form action="" className='flex flex-nowrap items-center h-full flex-auto' onSubmit={handleSubmit}>
            <input type="text" id='query' placeholder='Search here...' className='flex-1 h-full border-[2px] border-e-0 border-slate-600 rounded-s-full ps-6 focus:outline-none' onChange={(e) => setInputValue(e.target.value)} required />
            <button type='submit' className='h-full px-4 border-[2px] border-slate-600 bg-slate-200 rounded-e-full'><IoIosSearch size={23} /></button>
          </form>
        </div>

        <div className="navbar-section-3">
          <ul className='flex flex-nowrap items-center gap-0 sm:gap-3'>
            <li className='p-2 hover:bg-slate-200 rounded-full md:hidden inline'><button href="/" className='mt-[5.5px]' onClick={handleToggleSearch}><IoSearchCircleOutline className='text-3xl' /></button></li>
            <li className='p-2 hover:bg-slate-200 rounded-full'><a href="/"><IoNotificationsCircleOutline className='text-3xl' /></a></li>
            <li className={`p-2 hover-bg-slate-200 rounded-full ${receivedData && receivedData.picture ? "h-[25px] w-[25px]" : ""}`} style={{ backgroundImage: `url('${receivedData && receivedData.picture ? receivedData.picture : ""}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
              {receivedData && receivedData.picture ? null : (<a href="/"><PiUserCircleDuotone className='text-3xl' /></a>)}
            </li>
          </ul>
        </div>
      </div>

      <form action='' className={`${toggleSearch ? 'flex' : 'hidden'} flex-nowrap items-center justify-between flex-1 px-2 sm:px-8 py-3 h-[75px] absolute top-0 left-0 z-50 w-full`} onSubmit={handleSubmit}>
        <button type='button' className='h-full px-3 border-[2px] border-slate-600 bg-slate-200 rounded-s-full' onClick={handleToggleSearch}><IoCloseSharp size={23} /></button>
        <input type="text" id='query' placeholder='Search here...' className='flex-1 h-full border-[2px] border-x-0 border-slate-600 ps-6 focus:outline-none' onChange={(e) => setInputValue(e.target.value)} required />
        <button type='submit' className='h-full px-3 border-[2px] border-slate-600 bg-slate-200 rounded-e-full'><IoIosSearch size={23} /></button>
      </form>
    </>
  )
}
