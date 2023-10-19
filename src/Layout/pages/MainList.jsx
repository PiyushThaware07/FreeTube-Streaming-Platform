import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../../Redux/Slices/VideoSlice';
import MainItem from './MainItem';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function MainList() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videoReducer.videoArray);

  const [pageToken, setPageToken] = useState(''); // Initialize with an empty page token

  async function fetchVideos(pageToken) {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&pageToken=${pageToken}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setVideos([...videos, ...data.items])); // Append new videos to the existing list
      setPageToken(data.nextPageToken); // Update the page token for the next request
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  useEffect(() => {
    fetchVideos('');
  }, [dispatch]);

  // Handle infinite scroll
  function fetchMoreData() {
    fetchVideos(pageToken);
  }

  console.log("Videos : ", videos);

  return (
    <div className='main h-[88%]'>
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
            <h4 className="text-center text-sm font-semibold">loading...</h4>
          }
          className="overflow-y-scroll main-card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {
            videos.map((video) => {
              return (
                <MainItem key={video.id} videoID={video.id} videoContentDetails={video.contentDetails} videoSnippet={video.snippet} videoStatistics={video.statistics} />
              )
            })
          }
        </InfiniteScroll>
      </div>
    </div>
  );
}
