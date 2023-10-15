import React from 'react'
// Icons
import { LuShare2 } from "react-icons/lu"
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import { AiFillCode } from "react-icons/ai"

export default function WatchItem() {
    return (
        <>
            <div className='watch-main h-[88%] overflow-y-scroll' style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="watch-content h-full w-full  md:flex flex-nowrap items-start p-5 sm:p-12">


                    {/* Section - 1 ===================================================== */}
                    <div className="watch-section-1 w-full md:w-[65%] lg:w-[60%] " >
                        <div className="thumbnail h-[200px] sm:h-[260px] md:h-[300px] lg:h-[400px] rounded-2xl relative" style={{ background: `url('https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center`, backgroundSize: "cover" }}>
                            <div className="bg-slate-900 text-white text-[10px] font-semibold p-1 absolute bottom-5 right-5">00:00:00</div>
                        </div>
                        <div className="my-3">
                            <h1 className='text-sm sm:text-md md:text-lg  font-bold md:font-semibold ms-2 sm:ms-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores provident.</h1>
                            <div className="flex flex-nowrap items-center justify-between my-2">
                                <div className="flex flex-nowrap items-center">
                                    <div className="channel-thumbnail h-[40px] w-[40px] bg-blue-500 rounded-full"></div>
                                    <div className="channel-details ms-2 ">
                                        <h1 className='text-sm font-semibold'>Channel Name</h1>
                                        <h1 className='text-sm font-semibold'>27M <span className='hidden sm:inline'>Subscriber</span></h1>
                                    </div>
                                </div>
                                <div className="flex flex-nowrap items-center gap-2">
                                    <button className='btn-join border-[1.2px] border-slate-500 font-semibold text-sm px-5 py-2 rounded-full hidden sm:inline'>Join</button>
                                    <button className='btn-subscribe bg-black text-white font-semibold text-[12px] sm:text-sm px-5 py-2 rounded-full'>Subscriber</button>
                                    <div className="hidden sm:flex flex-nowrap items-center">
                                        <button className='btn-like bg-slate-200 font-semibold text-sm px-5 py-2 rounded-s-full flex flex-nowrap items-center gap-1'><FaRegThumbsUp className='mt-1 lg:mt-0' /><span className='hidden lg:inline'>Like</span></button>
                                        <button className='btn-dislike bg-slate-200 font-semibold text-sm px-5 py-2 rounded-e-full flex flex-nowrap items-center gap-1 border-s border-slate-400'><FaRegThumbsDown className='mt-1' /><span className='hidden lg:inline'>Dislike</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 border-b border-slate-300 sm:hidden">
                                <div className="flex flex-nowrap items-center gap-4">
                                    <button className='btn-like bg-slate-100 font-semibold text-sm px-5 py-2 rounded-full flex flex-nowrap items-center gap-1'><FaRegThumbsUp className='mt-1 lg:mt-0' /><span>Like</span></button>
                                    <button className='btn-dislike bg-slate-100 font-semibold text-sm px-5 py-2 rounded-full flex flex-nowrap items-center gap-1'><FaRegThumbsDown className='mt-1' /><span>Dislike</span></button>
                                    <button className='btn-share bg-slate-100 font-semibold text-sm px-5 py-2 rounded-full flex flex-nowrap items-center gap-1'><LuShare2 className='mt-1' /><span>Share</span></button>
                                </div>
                            </div>

                            <div className="watch-video-content bg-slate-200 p-5 my-8 rounded-xl">
                                <div className="watch-section-1 sm:flex flex-nowrap items-center">
                                    <div className="flex flex-nowrap items-center gap-3">
                                        <div className="view-count text-sm font-semibold"><h1>233K views</h1></div>
                                        <div className="video-publishDate text-sm font-semibold"><h1>2 Months Ago</h1></div>
                                    </div>
                                    <div className="video-tag sm:ms-5">
                                        <ul className='list-unstyled flex flex-nowrap items-center gap-2 text-[13px] font-semibold text-slate-600'>
                                            <li>#tag1</li>
                                            <li>#tag2</li>
                                            <li>#tag3</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="watch-section-2 mt-5">
                                    <div className="text-[13px] font-medium">
                                        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores hic et doloremque, ipsa natus eaque quidem eligendi ipsam optio beatae est accusamus quia adipisci tempore sed odit culpa sunt sit? Minima quae repellendus praesentium, maiores officiis quo ut excepturi eos nesciunt expedita sunt laborum dignissimos reiciendis, laboriosam libero placeat iure!</h1>
                                        <button type='button' className='text-blue-600 mt-2'>show more</button>
                                    </div>
                                </div>
                            </div>


                            <div className="watch-section-3">
                                <div className="">
                                    <h1 className='text-[13px] font-medium'>Comments : 500</h1>
                                    <hr className='my-3' />
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Section - 2 ===================================================== */}
                    <div className="watch-section-2 w-full md:w-[40%] ps-4 lg:ps-8">
                        <div className="watch-card h-[80px] sm:h-[110px] lg:h-[100px] w-full flex flex-nowrap items-start gap-2 mb-3">
                            <div className="w-[40%] h-full rounded-xl" style={{ background: `url('https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center`, backgroundSize: "cover" }}></div>
                            <div className="details flex-1">
                                <h1 className='text-sm md:text-[12px] font-semibold'>Lorem ipsum, dolor sit amet consectetur.</h1>
                                <h1 className='text-[12px] md:text-[10px] text-slate-600 font-semibold mt-1'>Channel Name</h1>
                                <h1 className='text-[10px] font-semibold'>255K views . 2 Months Ago</h1>
                            </div>
                        </div>
                        <div className="watch-card h-[80px] sm:h-[110px] lg:h-[100px] w-full flex flex-nowrap items-start gap-2 mb-3">
                            <div className="w-[40%] h-full rounded-xl" style={{ background: `url('https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center`, backgroundSize: "cover" }}></div>
                            <div className="details flex-1">
                                <h1 className='text-sm md:text-[12px] font-semibold'>Lorem ipsum, dolor sit amet consectetur.</h1>
                                <h1 className='text-[12px] md:text-[10px] text-slate-600 font-semibold mt-1'>Channel Name</h1>
                                <h1 className='text-[10px] font-semibold'>255K views . 2 Months Ago</h1>
                            </div>
                        </div>
                        <hr />
                        <div className="my-6 pb-6 flex flex-nowrap items-center justify-center gap-1 text-md font-bold capitalize"><AiFillCode size={25} />Code By @Piyush Thaware</div>
                    </div>



                </div>
            </div >
        </>
    )
}
