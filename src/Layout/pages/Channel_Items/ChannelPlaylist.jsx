import React from 'react'
// Icons
import { CgPlayList } from "react-icons/cg";


export default function ChannelPlaylist() {
  return (
    <>
      <div className="playlist-main p-6 sm:p-8 md:p-12" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="playlist-content">
          <h1 className='text-sm font-semibold pb-3 border-b border-gray-300'>Created Playlist</h1>
          <div className="playlist-row grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-5">


            <div className="playlist-card h-[160px] sm:h-[180px] md:h-[200px] flex-1  p-3">
              <div className="playlist-thumbnail h-[60%] sm:h-[70%] md:h-[80%] w-full rounded-xl relative bg-slate-400 cursor-pointer hover:bg-[#00000094]" style={{ backgroundImage: `url()`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="playlist-thumbnail-details absolute bottom-0 left-0 w-full bg-[#00000080] text-sm p-1 sm:p-2 capitalize text-white rounded-b-xl px-2 flex flex-nowrap items-center justify-between">
                  <CgPlayList className='text-[20px]' />
                  <h1 className='text-[10px] font-semibold'>14 Videos</h1>
                </div>
              </div>
              <h1 className='text-[12px] font-semibold m-1'>Playlist Name</h1>
              <h1 className='text-[12px] font-medium m-1 text-gray-500 cursor-pointer'>View Full Playlist</h1>
            </div>
            <div className="playlist-card h-[160px] sm:h-[180px] md:h-[200px] flex-1 p-3">
              <div className="playlist-thumbnail h-[60%] sm:h-[70%] md:h-[80%] w-full rounded-xl relative bg-slate-400 cursor-pointer hover:bg-[#00000094]" style={{ backgroundImage: `url()`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="playlist-thumbnail-details absolute bottom-0 left-0 w-full bg-[#00000080] text-sm p-1 sm:p-2 capitalize text-white rounded-b-xl px-2 flex flex-nowrap items-center justify-between">
                  <CgPlayList className='text-[20px]' />
                  <h1 className='text-[10px] font-semibold'>14 Videos</h1>
                </div>
              </div>
              <h1 className='text-[12px] font-semibold m-1'>Playlist Name</h1>
              <h1 className='text-[12px] font-medium m-1 text-gray-500 cursor-pointer'>View Full Playlist</h1>
            </div>
            <div className="playlist-card h-[160px] sm:h-[180px] md:h-[200px] flex-1 p-3">
              <div className="playlist-thumbnail h-[60%] sm:h-[70%] md:h-[80%] w-full rounded-xl relative bg-slate-400 cursor-pointer hover:bg-[#00000094]" style={{ backgroundImage: `url()`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="playlist-thumbnail-details absolute bottom-0 left-0 w-full bg-[#00000080] text-sm p-1 sm:p-2 capitalize text-white rounded-b-xl px-2 flex flex-nowrap items-center justify-between">
                  <CgPlayList className='text-[20px]' />
                  <h1 className='text-[10px] font-semibold'>14 Videos</h1>
                </div>
              </div>
              <h1 className='text-[12px] font-semibold m-1'>Playlist Name</h1>
              <h1 className='text-[12px] font-medium m-1 text-gray-500 cursor-pointer'>View Full Playlist</h1>
            </div>
            <div className="playlist-card h-[160px] sm:h-[180px] md:h-[200px] flex-1 p-3">
              <div className="playlist-thumbnail h-[60%] sm:h-[70%] md:h-[80%] w-full rounded-xl relative bg-slate-400 cursor-pointer hover:bg-[#00000094]" style={{ backgroundImage: `url()`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="playlist-thumbnail-details absolute bottom-0 left-0 w-full bg-[#00000080] text-sm p-1 sm:p-2 capitalize text-white rounded-b-xl px-2 flex flex-nowrap items-center justify-between">
                  <CgPlayList className='text-[20px]' />
                  <h1 className='text-[10px] font-semibold'>14 Videos</h1>
                </div>
              </div>
              <h1 className='text-[12px] font-semibold m-1'>Playlist Name</h1>
              <h1 className='text-[12px] font-medium m-1 text-gray-500 cursor-pointer'>View Full Playlist</h1>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
