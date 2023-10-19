import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router-dom';
// Library 
import numeral from 'numeral';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
// Navigator
const navLinks = ["About", "Videos", "Playlist", "Shorts"]
export default function ChannelList() {
    const navigate = useNavigate();
    // Handle navigation when the buttons are clicked
    const handleNavigation = (navLink) => {
        navigate(`/main/channel/${channel_id}/${navLink.toLowerCase()}`);
    };



    // Fetching Channel Related Data ==============================================
    const { channel_id } = useParams();
    const [channelDetails, setChannelDetails] = useState(null);
    async function fetchChannelData() {
        try {
            const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${channel_id}&key=${ApiKey}`;
            const fetching = fetch(url);
            const request = await fetching;
            const response = await request.json();
            setChannelDetails(response.items[0]);
            console.log("Channel List : ", response.items[0]);
        }
        catch (error) {
            console.log("Failed to fetch channel details", error);
        }
    }
    useEffect(() => {
        fetchChannelData();
    }, [channel_id])




    return (
        <>
            {
                channelDetails ? (
                    <div className="channel-main" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <div className="channel-thumbnail bg-slate-300 h-[190px] w-full" style={{ backgroundImage: `url('${channelDetails.brandingSettings.image.bannerExternalUrl}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                        <div className="channel-details my-6 md:flex flex-nowrap items-center px-4 sm:px-8 md:px-16">
                            <div className="channel-section-1 h-[120px] w-[120px] bg-slate-300 rounded-full block mx-auto md:inline shadow-lg" style={{ backgroundImage: `url('${channelDetails.snippet.thumbnails.default.url}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                            <div className="channel-section-2 md:ms-5 flex-1 text-center md:text-start">
                                <h1 className='text-xl font-bold tracking-[1.4px] mt-5 md:mt-0'>{channelDetails.snippet.localized.title}</h1>
                                <div className="flex flex-nowrap items-center gap-3 text-gray-600 justify-center md:justify-start">
                                    <h1 className='font-bold text-sm'>{channelDetails.snippet.customUrl}</h1>
                                    {
                                        channelDetails.statistics.hiddenSubscriberCount ?
                                            ("") : (<h1 className='font-semibold text-[13px] mt-1'><span className='uppercase'>{numeral(channelDetails.statistics.subscriberCount).format("0.a")}</span> Subscribers</h1>)
                                    }
                                    <h1 className='font-semibold text-[13px] mt-1'><span className='uppercase'>{numeral(channelDetails.statistics.videoCount).format("0.a")}</span> Videos</h1>
                                </div>
                                <div className="channel-description font-medium text-[12px] my-2 text-gray-600 md:me-5">{channelDetails.snippet.localized.description.slice(0, 100) ? channelDetails.snippet.localized.description.slice(0, 150) : channelDetails.snippet.localized.description.slice(0,)}</div>
                            </div>
                            <div className="channel-section-3 ms-auto mt-5 md:mt-0">
                                <div className="flex flex-nowrap items-center justify-center md:justify-start gap-2">
                                    <button className='bg-black text-white px-5 py-3 rounded-full font-semibold text-sm flex-1'>Subscribe</button>
                                    <button className='border-[1.5px] border-black px-5 py-3 rounded-full font-semibold text-sm flex-1'>Join</button>
                                </div>
                            </div>
                        </div>

                        <div className="channel-content mt-12">
                            <div className="channel-content-section-1 border-b-[1.3px] border-gray-300">
                                <ul className="list-unstyled flex flex-nowrap items-center justify-around text-sm font-semibold text-black">
                                    {
                                        navLinks.map((navLink, index) => (
                                            <button
                                                className={`uppercase py-3 flex-1 `}
                                                key={index}
                                                onClick={() => handleNavigation(navLink)}
                                            >
                                                {navLink}
                                            </button>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="channel-content-section-2">
                                {/* Content for Home, Videos, Shorts, Playlist, or About can be rendered here based on the current route */}
                                <Outlet />
                            </div>
                        </div>
                    </div>
                ) : "Loading..."
            }
        </>
    )
}
