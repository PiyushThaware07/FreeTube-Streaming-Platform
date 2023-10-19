import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default function ChannelVideo() {
  const { channel_id } = useParams();
  const [videoArray, setVideoArray] = useState(null);
  async function handleVideoArray() {
    try {
      // Fetch Channel Videos
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id}&maxResults=100&key=${ApiKey}`;
      const fetching = fetch(url);
      const request = await fetching;
      const response = await request.json();
      setVideoArray(response)
      // console.log("Video Of Specific Channel : ", response);
    }
    catch (error) {
      console.log("Failed to fetch related to channels", error);
    }
  }
  useEffect(() => {
    handleVideoArray();
  }, [channel_id])


  // Fetch Views and other details 
  const [duration, setDuration] = useState({});
  const [viewCount, setViewCount] = useState({});
  async function fetchReminingVideoArrayData(video_id) {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${ApiKey}`;
      const fetching = fetch(url);
      const request = await fetching;
      const response = await request.json();
      // Views Handling
      const views = numeral(response.items[0].statistics.viewCount).format("0.a");
      setViewCount(prevViewCount => ({
        ...prevViewCount,
        [video_id]: views
      }));
      // Duration Handling
      const seconds = moment.duration(response.items[0].contentDetails.duration).asSeconds();
      const videoDuration = moment.utc(seconds * 1000).format('mm:ss');
      setDuration((prevDuration) => ({
        ...prevDuration,
        [video_id]: videoDuration
      }));
    }
    catch (error) {
      console.log("Failed to fetch remining data for videos", error);
    }
  }
  useEffect(() => {
    if (videoArray) {
      videoArray.items.forEach((video) => {
        fetchReminingVideoArrayData(video.id.videoId);
      });
    }
  }, [videoArray]);

  return (
    <>
      <div className="channel-video-main p-6 sm:p-12">
        <div className="channel-video-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {
            videoArray ?
              (
                videoArray.items.map((video, index) => (
                  <div className="channel-video-card p-2 mb-3" key={index}>
                    <Link to={`/main/watch/${video.id.videoId}`}>
                      <div className="video-thumbnail h-[150px] w-full bg-slate-100 rounded-2xl relative mb-3" style={{ backgroundImage: `url('${video.snippet.thumbnails.high.url ? video.snippet.thumbnails.high.url : video.snippet.thumbnails.default.url}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="absolute bottom-3 right-3 bg-black text-white font-medium text-[11px] p-1 rounded-sm tracking-[1px]"> {duration[video.id.videoId] || "00:00"}</div>
                      </div>
                    </Link>

                    <Link to={`/main/watch/${video.id.videoId}`} className='font-semibold text-sm'>{video.snippet.title.slice(0, 35)}</Link>
                    <h1 className='font-semibold text-[12px] text-gray-600'>
                      <span className='uppercase'>
                        {viewCount[video.id.videoId] || "0"}</span> views .
                      <span className='capitalize'>{moment(video.snippet.publishedAt).fromNow()}</span></h1>
                  </div>
                ))
              )
              : "Loading..."
          }
        </div>
      </div>
    </>
  )
}
