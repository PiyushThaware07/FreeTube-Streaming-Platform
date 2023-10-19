import React, { useEffect, useState } from 'react';
import { TbWorldSearch } from "react-icons/tb";
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchItem from './SearchItem';

export default function SearchList() {
  const { query } = useParams();
  const [videoArray, setVideoArray] = useState([]);
  const [pageToken, setPageToken] = useState(''); // Initialize with an empty page token

  async function fetchVideos(nextPageToken) {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${apiKey}&pageToken=${nextPageToken}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log('Search Videos:', data.items);
      setVideoArray([...videoArray, ...data.items]);
      setPageToken(data.nextPageToken);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  useEffect(() => {
    fetchVideos('');
  }, [query]);

  // Handle infinite scroll
  function fetchMoreData() {
    fetchVideos(pageToken);
  }

  return (
    <>
      <div className="search-main px-6 md:px-12 py-8">
        <div className="search-content">
          <h1 className='flex flex-nowrap items-center gap-2 text-[12px] sm:text-[14px]' style={{ fontFamily: "'Pacifico', cursive" }}>
            <TbWorldSearch size={20} /> Search Result: {query}
          </h1>
          <hr className='my-3' />
          <InfiniteScroll
            dataLength={videoArray.length}
            next={fetchMoreData}
            hasMore={pageToken !== undefined} // Check if there's a next page
            loader={<p>Loading...</p>}

            className='overflow-y-scroll h-[88%]'
          >
            {videoArray.map((video, index) => (
              <span key={index}>
                <SearchItem videoId={video.id} videoSnippet={video.snippet} />
              </span>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
