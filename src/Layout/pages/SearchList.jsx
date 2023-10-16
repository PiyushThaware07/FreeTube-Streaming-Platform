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
  // Getting URL Value
  const { query } = useParams();

  const dispatch = useDispatch();

  async function fetchVideos() {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${query}&key=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Search Videos:', data.items);
      dispatch(setVideos(data.items));
    } catch (error) {
      console.error('Error fetching videos:', error);
      // Handle the error here, e.g., show an error message to the user
    }
  }

  useEffect(() => {
    fetchVideos();
  }, [query, dispatch]);

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
