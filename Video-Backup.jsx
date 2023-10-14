import React, { useEffect, useState } from 'react'
// Library
import moment from 'moment/moment'
import numeral from 'numeral'


export default function Video(props) {
    // Duration handling
    const seconds = moment.duration(props.videoContentDetails.duration).asSeconds()
    const formated_duration = moment.utc(seconds * 1000).format("mm:ss")

    // ChannelIcon Handling
    // const [channelIcon,setChannelIcon]= useState(null)
    // async function handleChannelIcon() {
    //     const ApiKey = 'AIzaSyBSlKb7J9_f6n-MsoOpjBfhsrqvFcs6xX0';
    //     const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoSnippet.channelId}&key=${ApiKey}`
    //     const fetchData = fetch(url);
    //     const request = await fetchData;
    //     const response = await request.json();
    //     setChannelIcon(response.items)
    //     console.log("Channel Icons : ", response.items[0]);
    // }
    // useEffect(() => {
    //     handleChannelIcon()
    // }, [])


    return (
        <>
            <div className="video-card p-5">
                <div className="video-thumbnail h-[180px] rounded-xl hover:rounded-none relative" style={{ background: `url('${props.videoSnippet.thumbnails.standard.url}') no-repeat center`, backgroundSize: "cover" }}>
                    <div className="text-[11px] font-semibold text-white bg-black inline absolute bottom-3 right-3 p-1">{formated_duration}</div>
                </div>
                <div className="video-content flex flex-nowrap items-start flex-1 mt-3">
                    <div className="video-channel-thumbnail h-[40px] w-[40px] rounded-full ms-2" style={{ background: `url("https://images.pexels.com/photos/1261823/pexels-photo-1261823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") no-repeat center`, backgroundSize: "cover" }}></div>
                    <div className="video-details flex-1 ps-4 sm:px-6" >
                        <h1 className='text-sm font-semibold'>{props.videoSnippet.title}</h1>
                        <h1 className='text-[12px] font-medium text-gray-600'>{props.videoSnippet.channelTitle}</h1>
                        <h1 className='text-[12px] font-medium text-gray-600'><span className='uppercase'>{numeral(props.videoStatistics.viewCount).format("0.a")}</span> views . <span className='capitalize'>{moment(props.videoSnippet.publishedAt).fromNow()}</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}
