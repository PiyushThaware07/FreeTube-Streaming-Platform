import React, { useEffect, useState } from 'react'
// Icons
import { AiFillCode } from "react-icons/ai"


// React Router DOM
import { useParams } from 'react-router-dom'

// Compoennets
import WatchItem from './WatchItem'


export default function WatchList() {
    const [videoDetails, setVideoDetails] = useState(null)
    // Handling Url
    const { video_id } = useParams();
    // Fetching Video Detail
    async function fetchDetails() {
        try {
            const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${ApiKey}`;
            const fetching = fetch(url);
            const request = await fetching;
            const response = await request.json();
            console.log("Channel List : ", response);
            setVideoDetails(response.items[0]);
        }
        catch (error) {
            console.error('Failed to fetch channel details :', error);
        }
    }
    useEffect(() => {
        fetchDetails();
    }, [video_id])



    return (
        <>
            <div className='watch-main h-[88%] overflow-y-scroll' style={{ fontFamily: "'Poppins', sans-serif" }}>
                {
                    videoDetails === null ? "Loading"
                        :
                        (
                            <div className="watch-content h-full w-full  md:flex flex-nowrap items-start p-5 sm:p-12">
                                <WatchItem videoDetails={videoDetails} />

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
                        )
                }

            </div >
        </>
    )
}
