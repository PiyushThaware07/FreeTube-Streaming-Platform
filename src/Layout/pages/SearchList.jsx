import React, { useEffect } from 'react'
// Icons
import { TbWorldSearch } from "react-icons/tb"

// Pages
import SearchItem from './SearchItem'

// React Router Dom
import { useParams } from 'react-router-dom'

// Redux Setup
import { useDispatch, useSelector } from 'react-redux'
import { setVideos } from '../../Redux/Slices/VideoSlice'

export default function SearchList() {
  // Geeting Url Value
  const { query } = useParams()

  // Fetch Search Data 
  const dispatch = useDispatch();
  async function fetchVideos() {
    // const ApiKey = "AIzaSyB23J1V_QWm8j-dYePTudg8mEke6d0GaFc";
    const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${query}&key=${ApiKey}`;
    const fetchData = fetch(url);
    const request = await fetchData;
    const response = await request.json();
    console.log("Search Videos : ", response.items);
    dispatch(setVideos(response.items));
  }
  useEffect(() => {
    fetchVideos();
  }, [query, dispatch]);


  // Retrieve the videos from the Redux store
  const videos = useSelector((state) => state.videoReducer.videoArray);


  return (
    <>
      <div className="search-main overflow-y-scroll h-[88%] px-6 md:px-12 py-8">
        <div className="search-content">
          <h1 className='flex flex-nowrap items-center gap-2 text-[12px] sm:text-[14px]' style={{ fontFamily: "'Pacifico', cursive" }}><TbWorldSearch size={20} /> Search Result : {query}</h1>
          <hr className='my-3' />
          {
            videos.map((video, index) => (
              <span key={index} >
                <SearchItem videoId={video.id} videoSnippet={video.snippet} />
              </span>
            ))
          }

        </div>
      </div>
    </>
  )
}
