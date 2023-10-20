import React, { useEffect, useState } from 'react'
// Icons
import { LuShare2 } from "react-icons/lu"
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
// Library
import ReactShowMoreText from 'react-show-more-text'
import moment from 'moment'
import numeral from 'numeral'
// React Router DOM
import { useParams } from 'react-router-dom'

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default function WatchItem(props) {
    const { video_id } = useParams()
    // ChannelIcon Handling
    const [channelDetails, setChannelDetails] = useState([]);
    async function handleChannelDetails() {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoDetails.snippet.channelId}&key=${apiKey}`;
        const request = await fetch(url);
        const response = await request.json();
        setChannelDetails(response.items[0]);
        console.log("channel Details : ", response.items[0]);
    }
    useEffect(() => {
        handleChannelDetails()
    }, [video_id])



    // Handle Comment Section =========================
    const [toggleComment, setToggleComment] = useState(false);
    const [toggleReply, setToggleReply] = useState(false);
    function handleToggleComment() {
        setToggleComment((value) => !value)
    }
    function handleToggleReply() {
        setToggleReply((value) => !value)
    }

    // Fetching Comments -------------------------------
    async function fetchCommetsArray() {
        const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${video_id}&key=${apiKey}`
        const fetching = fetch(url)
        const request = await fetching;
        const response = await request.json();
        console.log("Comment Array : ", response);
    }

    useEffect(() => {
        fetchCommetsArray();
    }, [video_id])


    return (
        <>
            <div className="watch-section-1 w-full md:w-[65%] lg:w-[60%] " >
                <div className="thumbnail h-[200px] sm:h-[260px] md:h-[300px] lg:h-[400px] rounded-2xl relative">
                    <iframe
                        src={`https://www.youtube.com/embed/${props.videoDetails.id}`}
                        frameBorder="0"
                        allowFullScreen
                        title='My Video'
                        className='h-full w-full'>
                    </iframe>
                </div>
                {
                    channelDetails.length === 0 ? "Loading..." :
                        <div className="my-3">
                            <h1 className='text-sm sm:text-md md:text-lg  font-bold md:font-semibold ms-2 sm:ms-0'>{props.videoDetails && props.videoDetails.snippet ? props.videoDetails.snippet.title : 'N/A'}</h1>
                            <div className="flex flex-nowrap items-center justify-between my-2">
                                <div className="flex flex-nowrap items-center">
                                    <div className="channel-thumbnail h-[40px] w-[40px] bg-slate-200 rounded-full" style={{ backgroundImage: `url('${channelDetails.snippet.thumbnails.default.url}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
                                    <div className="channel-details ms-2 ">
                                        <h1 className='text-sm font-semibold'>{props.videoDetails && props.videoDetails.snippet ? props.videoDetails.snippet.channelTitle : 'N/A'}</h1>
                                        <h1 className='text-[12px] font-semibold text-slate-800'><span className='uppercase'>{numeral(channelDetails.statistics.subscriberCount).format("0.a")}</span><span className='hidden sm:inline ms-2'>Subscriber</span></h1>
                                    </div>
                                </div>
                                <div className="flex flex-nowrap items-center gap-2">
                                    <button className='btn-join border-[1.2px] border-slate-500 font-semibold text-sm px-5 py-2 rounded-full hidden sm:inline'>Join</button>
                                    <button className='btn-subscribe bg-black text-white font-semibold text-[12px] sm:text-sm px-5 py-2 rounded-full'>Subscriber</button>
                                    <div className="hidden sm:flex flex-nowrap items-center">
                                        <button className='btn-like bg-slate-200 font-semibold text-sm px-5 py-2 rounded-s-full flex flex-nowrap items-center gap-1'><FaRegThumbsUp className='mt-1 lg:mt-0' /><span className='hidden lg:inline'>{props.videoDetails.statistics.likeCount ? numeral(props.videoDetails.statistics.likeCount).format("0.a") : 'Like'}</span></button>
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
                                        <div className="view-count text-sm font-semibold"><h1><span className='uppercase'>{numeral(props.videoDetails && props.videoDetails.statistics?.viewCount || 0).format('0.a')}</span> views</h1></div>
                                        <div className="video-publishDate text-sm font-semibold"><h1><span className='capitalize'>{moment(props.videoDetails && props.videoDetails.snippet?.publishedAt).fromNow() || 'Published N/A'}</span></h1></div>
                                    </div>
                                </div>

                                <div className="watch-section-2 mt-5">
                                    <div className="text-[13px] font-medium">
                                        <div className="video-tag mb-3">
                                            {props.videoDetails && props.videoDetails.snippet && props.videoDetails.snippet.tags && Array.isArray(props.videoDetails.snippet.tags) ? (
                                                props.videoDetails.snippet.tags.map((tag, index) => (
                                                    <span key={index} className='me-3'>#{tag}</span>
                                                ))
                                            ) : (
                                                <span>No tags available</span>
                                            )}
                                        </div>
                                        <ReactShowMoreText lines={3} more={<div className='mt-3'><span className="text-blue-600">Show More</span></div>} less={<div className='mt-3'><span className="text-blue-600">Show Less</span></div>}>
                                            <div>
                                                {props.videoDetails && props.videoDetails.snippet.localized ? props.videoDetails.snippet.localized.description : 'N/A'}
                                            </div>
                                        </ReactShowMoreText>
                                    </div>
                                </div>
                            </div>


                            <div className="watch-section-3">
                                <div className="">
                                    <h1 className='text-[13px] font-medium'>Comments : {props.videoDetails && props.videoDetails.statistics ? props.videoDetails.statistics.commentCount : 'N/A'}</h1>
                                    <hr className='my-3' />
                                    {/* Comment Section => 1 for web */}
                                    <div className={`"w-full hidden md:flex flex-nowrap items-start gap-4 px-3 mb-5"`}>
                                        <div className="mt-1 user-profile h-[40px] w-[40px] p-6 bg-slate-700 rounded-full"></div>
                                        <div className="">
                                            <h1 className='text-sm font-[600]'>@username <span className='ms-3 text-[10px] font-normal'>1 Month Ago</span> </h1>
                                            <small className='text-[12px]'>User comment : Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos veniam dolores repellat aspernatur officia.</small>
                                            <br />
                                            <div className="ms-3">
                                                <button className='text-[13px] font-semibold px-5 py-3 my-3 rounded-full text-blue-600 hover:bg-blue-200 flex flex-nowrap items-center gap-2' onClick={() => handleToggleReply()}>{toggleReply ? (<BsFillCaretUpFill />) : (<BsFillCaretDownFill />)}<span>1 reply</span></button>
                                                <div className={`${toggleReply ? "flex" : "hidden"} flex-nowrap items-start gap-3`}>
                                                    <div className="mt-1 user-profile h-[40px] w-[40px] p-6 bg-slate-700 rounded-full"></div>
                                                    <div className="">
                                                        <h1 className='text-sm font-[600]'>@username <span className='ms-3 text-[10px] font-normal'>1 Month Ago</span> </h1>
                                                        <p className='text-[12px]'>User Reply : Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos veniam dolores repellat aspernatur officia.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comment Section => 2 for Android */}
                                    <div className={`${toggleComment ? "" : "hidden"}`}>
                                        <div className={`"w-full flex md:hidden flex-nowrap items-start gap-4 px-3 mb-5"`}>
                                            <div className="mt-1 user-profile h-[40px] w-[40px] p-6 bg-slate-700 rounded-full"></div>
                                            <div className="">
                                                <h1 className='text-sm font-[600]'>@username <span className='ms-3 text-[10px] font-normal'>1 Month Ago</span> </h1>
                                                <small className='text-[12px]'>User comment : Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos veniam dolores repellat aspernatur officia.</small>
                                                <br />
                                                <div className="ms-3">
                                                    <button className='text-[13px] font-semibold px-5 py-3 my-3 rounded-full text-blue-600 hover:bg-blue-200 flex flex-nowrap items-center gap-2' onClick={() => handleToggleReply()}>{toggleReply ? (<BsFillCaretUpFill />) : (<BsFillCaretDownFill />)}<span>1 reply</span></button>
                                                    <div className={`${toggleReply ? "flex" : "hidden"} flex-nowrap items-start gap-3`}>
                                                        <div className="mt-1 user-profile h-[40px] w-[40px] p-6 bg-slate-700 rounded-full"></div>
                                                        <div className="">
                                                            <h1 className='text-sm font-[600]'>@username <span className='ms-3 text-[10px] font-normal'>1 Month Ago</span> </h1>
                                                            <p className='text-[12px]'>User Reply : Lorem ipsum dolor sit amet consectetur adipisicing elit.Eos veniam dolores repellat aspernatur officia.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className='show-comments bg-slate-300 px-5 py-2 text-sm rounded-full md:hidden block mx-auto my-6' onClick={handleToggleComment}>{toggleComment ? (<span className='flex flex-nowrap items-center gap-2'><AiOutlineUpCircle />Hide Comments</span>) : (<span className='flex flex-nowrap items-center gap-2'><AiOutlineDownCircle />Show Comments</span>)}</button>
                                    <hr className='mt-5' />
                                </div>


                            </div>
                        </div>

                }
            </div>
        </>
    )
}
