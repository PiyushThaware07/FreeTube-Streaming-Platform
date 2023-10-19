import React, { useEffect, useState } from 'react'
// Icons
import { AiFillCode } from "react-icons/ai"


// React Router DOM
import { useParams } from 'react-router-dom'

// Compoennets
import WatchItem from './WatchItem'
import WatchSidebar from './WatchSidebar'
import { useDispatch, useSelector } from 'react-redux'
// Redux
import { setVideos } from '../../Redux/Slices/VideoSlice'

const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function WatchList() {
    const [videoDetails, setVideoDetails] = useState(null)
    // Handling Url
    const { video_id } = useParams();
    // Fetching Video Detail
    async function fetchDetails() {
        try {
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


    // Section (2) =========================================================
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.videoReducer.videoArray);

    async function fetchVideos() {
        try {
            const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            dispatch(setVideos(data.items));
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }
    useEffect(() => {
        fetchVideos();
    }, [dispatch]);
    console.log("Watch Sidebar : ", videos);




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
                                    {
                                        videos.map((video, index) => {
                                            return (
                                                <WatchSidebar key={index} video={video} />
                                            )
                                        })
                                    }
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
