import React, { useEffect } from 'react';
// Components
import Video from '../components/Video';
// Redux Setup
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../../Redux/Slices/VideoSlice';

export default function MainList() {
  const dispatch = useDispatch();
  async function fetchVideos() {
    const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=${ApiKey}`;
    const fetchData = fetch(url);
    const request = await fetchData;
    const response = await request.json();
    // console.log("All Videos : ", response.items);
    dispatch(setVideos(response.items));
  }
  useEffect(() => {
    fetchVideos();
  }, [dispatch]);

  // Retrieve the videos from the Redux store
  const videos = useSelector((state) => state.videoReducer.videoArray);

  return (
    <div className='main overflow-y-scroll h-[88%]'>
      <div className="main-card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {
          videos.map((video) => {
            return (
              <Video key={video.id} videoContentDetails={video.contentDetails} videoSnippet={video.snippet} videoStatistics={video.statistics} />
            )
          })
        }
      </div>
    </div >
  );
}
