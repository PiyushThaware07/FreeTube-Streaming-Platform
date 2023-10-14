import React from 'react'
// React Router DOM
import { Link } from 'react-router-dom'

// Icons
import { BiMenu } from "react-icons/bi"
import { IoLogoYoutube } from "react-icons/io"
import { LiaHomeSolid } from "react-icons/lia"
import { BiMusic, BiMoviePlay, BiLike } from "react-icons/bi"
import { BsCameraReels, BsFire, BsNewspaper, BsLightbulb, BsTrophy } from "react-icons/bs"
import { FiRadio } from "react-icons/fi"
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater } from "react-icons/md"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { SiYoutubegaming } from "react-icons/si"
import { VscRadioTower } from "react-icons/vsc"
import { CgPlayList } from "react-icons/cg"



const icon_Pack_01 = [
    {
        "icon_name": "Reels",
        "icon_image": <BsCameraReels />
    },
    {
        "icon_name": "Music",
        "icon_image": <BiMusic />
    },
    {
        "icon_name": "Movies",
        "icon_image": <BiMoviePlay />
    },
    {
        "icon_name": "Live",
        "icon_image": <FiRadio />
    },
]

const icon_Pack_02 = [
    {
        "icon_name": "Subscriptions",
        "icon_image": <MdOutlineSubscriptions />
    },
    {
        "icon_name": "Playlist",
        "icon_image": <CgPlayList />
    },
    {
        "icon_name": "Library",
        "icon_image": <MdOutlineVideoLibrary />
    },
    {
        "icon_name": "Hisroty",
        "icon_image": <MdHistory />
    },
    {
        "icon_name": "Liked Videos",
        "icon_image": <BiLike />
    },
    {
        "icon_name": "Watch Later",
        "icon_image": <MdOutlineWatchLater />
    },
]

const icon_Pack_03 = [
    {
        "icon_name": "Trending",
        "icon_image": <BsFire />
    },
    {
        "icon_name": "Shopping",
        "icon_image": <HiOutlineShoppingBag />
    },
    {
        "icon_name": "Gaming",
        "icon_image": <SiYoutubegaming />
    },
    {
        "icon_name": "News",
        "icon_image": <BsNewspaper />
    },
    {
        "icon_name": "Learning",
        "icon_image": <BsLightbulb />
    },
    {
        "icon_name": "Sports",
        "icon_image": <BsTrophy />
    },
    {
        "icon_name": "Podcasts",
        "icon_image": <VscRadioTower />
    },
]

export default function Sidebar(props) {

    return (
        <>
            <div className={`sidebar-main bg-[#00000099] absolute top-0 left-0 z-50 w-screen h-screen ${props.toggleSidebar ? '' : 'hidden'} `} style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="sidebar-content w-[65%] sm:w-[40%] md:w-1/3 lg:w-1/4 h-full bg-white">
                    <div className="sidebar-section-1 flex flex-nowrap items-center px-3 sm:px-8 py-4 gap-3 sm:gap-5">
                        <div className="sidebar-menu p-2 hover:bg-slate-200 rounded-full" onClick={() => props.handleToggleSidebar()}><BiMenu className='text-2xl' /></div>
                        <div className="sidebar-logo flex flex-nowrap items-center gap-2 text-xl font-[600]"><IoLogoYoutube className='text-2xl text-[red]' />FreeTube</div>
                    </div>
                    <hr />
                    <div className="sidebar-section-2 w-full h-[88%] overflow-y-scroll">
                        <ul>
                            <li className='py-4 px-9'><a href="/" className='flex flex-none items-center gap-2 text-[14px] font-[500] tracking-[1px]'><LiaHomeSolid className='text-xl' />Home</a></li>
                            <hr />
                            {
                                icon_Pack_01.map((icon, index) => {
                                    return (
                                        <li className='py-4 px-9' key={index}><a href={`/feed/${icon["icon_name"]}`} className='flex flex-none items-center gap-2 text-[14px] font-[500] tracking-[1px]'><span className='text-xl'>{icon["icon_image"]}</span>{icon["icon_name"]}</a></li>
                                    )
                                })
                            }
                            <hr />
                            {
                                icon_Pack_02.map((icon, index) => {
                                    return (
                                        <li className='py-4 px-9' key={index}><a href={`/feed/${icon["icon_name"]}`} className='flex flex-none items-center gap-2 text-[14px] font-[500] tracking-[1px]'><span className='text-xl'>{icon["icon_image"]}</span>{icon["icon_name"]}</a></li>
                                    )
                                })
                            }
                            <hr />
                            <h1 className='py-4 px-9 font-semibold'>Explore</h1>
                            {
                                icon_Pack_03.map((icon, index) => {
                                    return (
                                        <li className='py-4 px-9' key={index}><a href={`/feed/${icon["icon_name"]}`} className='flex flex-none items-center gap-2 text-[14px] font-[500] tracking-[1px]'><span className='text-xl'>{icon["icon_image"]}</span>{icon["icon_name"]}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
