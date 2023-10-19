import React, { useEffect, useState } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link, useParams } from 'react-router-dom';

export default function SearchItem(props) {
    const { query } = useParams();

    // ChannelIcon Handling
    const [channelIcon, setChannelIcon] = useState(null);

    async function handleChannelIcon() {
        try {
            const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
            const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoSnippet.channelId}&key=${apiKey}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setChannelIcon(data.items[0].snippet.thumbnails.default.url);
        } catch (error) {
            console.error('Error fetching channel icon:', error);
            // Handle the error here, e.g., show an error message to the user
        }
    }

    useEffect(() => {
        handleChannelIcon();
    }, [query, props.videoSnippet.channelId]);

    // Single Video Data
    const [duration, setDuration] = useState(null);
    const [views, setViews] = useState(null);

    async function handleSingleVideo() {
        try {
            if (props.videoId && props.videoId.videoId) {
                const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
                const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoId.videoId}&key=${apiKey}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    setDuration(data.items[0].contentDetails.duration);
                    setViews(data.items[0].statistics.viewCount);
                } else {
                    console.error('No video data found for videoId:', props.videoId.videoId);
                }
            } else {
                console.error('Invalid videoId data:', props.videoId);
            }
        } catch (error) {
            console.error('Error fetching single video data:', error);
            // Handle the error here, e.g., show an error message to the user
        }
    }

    useEffect(() => {
        handleSingleVideo();
    }, [query, props.videoId]);

    // Duration handling
    const seconds = moment.duration(duration).asSeconds();
    const formated_duration = moment.utc(seconds * 1000).format('mm:ss');
    return (
        <>
            <div className="search-card h-auto sm:h-[200px] w-full sm:flex flex-nowrap items-start gap-6 mb-7">

                <Link  to={`/main/watch/${props.videoId.videoId}/`} className="search-thumbnail block sm:inline h-[160px] sm:h-full w-full sm:w-1/2 lg:w-1/3 rounded-2xl relative" style={{ backgroundImage: `url('${props.videoSnippet.thumbnails.high.url}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div className="absolute bottom-3 right-3 text-sm font-semibold bg-slate-950 text-white p-1">{formated_duration}</div>
                </Link>

                <div className="search-video-details mt-1">
                    <div className="flex flex-nowrap items-start gap-2 sm:gap-3">
                        <div className="logo h-[40px] w-[40px] rounded-full sm:hidden p-4 mt-2 sm:mt-0 bg-blue-500" style={{ backgroundImage: `url('${channelIcon}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                        <div className="flex-1">
                            <Link to={`/main/watch/${props.videoId.videoId}/`} className='text-sm md:text-lg font-bold md:font-semibold flex-1'>{props.videoSnippet.title}</Link>
                            <h1 className='text-sm sm:text-md font-semibold text-slate-500 sm:hidden inline'>{props.videoSnippet.channelTitle}</h1>
                            <h1 className='text-sm sm:text-md font-semibold text-slate-500'>{numeral(views).format("0.a")} views . <span className='capitalize'>{moment(props.videoSnippet.publishedAt).fromNow()}</span></h1>

                            <div className="channel-details hidden sm:flex flex-nowrap items-center gap-3 my-3">
                                <Link to={`/main/channel/${props.videoSnippet.channelId}/`} className="channel_thumbnail h-[26px] w-[26px] bg-blue-500 rounded-full" style={{ backgroundImage: `url('${channelIcon}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></Link>
                                <Link to={`/main/channel/${props.videoSnippet.channelId}/`} className="channel_name text-sm font-semibold">{props.videoSnippet.channelTitle}</Link>
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
    );
}
