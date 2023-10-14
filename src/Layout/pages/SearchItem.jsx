import React, { useEffect, useState } from 'react'
// Library 
import moment from 'moment'
import numeral from 'numeral';
import { useParams } from 'react-router-dom';


export default function SearchItem(props) {
    const { query } = useParams()
    // ChannelIcon Handling
    const [channelIcon, setChannelIcon] = useState(null)
    async function handleChannelIcon() {
        // const ApiKey = "AIzaSyB23J1V_QWm8j-dYePTudg8mEke6d0GaFc";
        const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoSnippet.channelId}&key=${ApiKey}`
        const fetchData = fetch(url);
        const request = await fetchData;
        const response = await request.json();
        setChannelIcon(response.items[0].snippet.thumbnails.default.url)
    }
    useEffect(() => {
        handleChannelIcon()
    }, [query, props.videoSnippet.channelId])


    // Fetch Single Video Data -----------------------------------------------
    const [duration, setDuration] = useState(null)
    const [views, setViews] = useState(null)
    async function handleSingleVideo() {
        try {
            // const ApiKey = "AIzaSyB23J1V_QWm8j-dYePTudg8mEke6d0GaFc";
            const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoId.videoId}&maxResults=100&key=${ApiKey}`
            const fetchData = fetch(url);
            const request = await fetchData;
            const response = await request.json();
            // Setting Data
            setDuration(response.items[0].contentDetails.duration)
            setViews(response.items[0].statistics.viewCount)
        } catch {
            
        }
    }
    useEffect(() => {
        handleSingleVideo()
    }, [query, props.videoId.videoId])


    // Duration handling
    const seconds = moment.duration(duration).asSeconds()
    const formated_duration = moment.utc(seconds * 1000).format("mm:ss")


    return (
        <>
            <div className="search-card h-auto sm:h-[200px] w-full sm:flex flex-nowrap items-start gap-6 mb-7">
                <div className="search-thumbnail h-[160px] sm:h-full w-full sm:w-1/2 lg:w-1/3 rounded-2xl relative" style={{ backgroundImage: `url('${props.videoSnippet.thumbnails.high.url}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute bottom-3 right-3 text-sm font-semibold bg-slate-950 text-white p-1">{formated_duration}</div>
                </div>
                <div className="search-video-details mt-1">
                    <div className="flex flex-nowrap items-start gap-2 sm:gap-3">
                        <div className="logo h-[40px] w-[40px] rounded-full sm:hidden p-4 mt-2 sm:mt-0 bg-blue-500" style={{ backgroundImage: `url('${channelIcon}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                        <div className="flex-1">
                            <h1 className='text-sm md:text-lg font-bold md:font-semibold flex-1'>{props.videoSnippet.title}</h1>
                            <h1 className='text-sm sm:text-md font-semibold text-slate-500 sm:hidden inline'>{props.videoSnippet.channelTitle}</h1>
                            <h1 className='text-sm sm:text-md font-semibold text-slate-500'>{numeral(views).format("0.a")} views . <span className='capitalize'>{moment(props.videoSnippet.publishedAt).fromNow()}</span></h1>



                            <div className="channel-details hidden sm:flex flex-nowrap items-center gap-3 my-3">
                                <div className="channel_thumbnail h-[26px] w-[26px] bg-blue-500 rounded-full" style={{ backgroundImage: `url('${channelIcon}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                                <div className="channel_name text-sm font-semibold">{props.videoSnippet.channelTitle}</div>
                            </div>



                            <div className="">
                                <hr className='my-0 sm:my-2' />
                                <h1 className='text-[13px] font-semibold hidden sm:inline'>{props.videoSnippet.description}</h1>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
