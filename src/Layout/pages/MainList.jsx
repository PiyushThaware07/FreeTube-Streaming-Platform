import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../../Redux/Slices/VideoSlice';
import MainItem from './MainItem';

export default function MainList() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videoReducer.videoArray);

  async function fetchVideos() {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
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

  return (
    <div className='main overflow-y-scroll h-[88%]'>
      <div className="main-card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {
          videos.map((video) => {
            return (
              <MainItem key={video.id} videoID={video.id} videoContentDetails={video.contentDetails} videoSnippet={video.snippet} videoStatistics={video.statistics} />
            )
          })
        }
      </div>
    </div>
  );
}
