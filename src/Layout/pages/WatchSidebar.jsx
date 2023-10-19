import React from 'react'
// Library
import numeral from 'numeral'
import moment from 'moment'
// React Router Dom
import { Link } from 'react-router-dom'


export default function WatchSidebar(props) {
  return (
    <>
      <div className="watch-card h-[80px] sm:h-[110px] lg:h-[100px] w-full flex flex-nowrap items-start gap-2 mb-3">
        <Link to={`/main/watch/${props.video.id}/`} className="w-[40%] h-full rounded-xl" style={{ background: `url('${props.video.snippet.thumbnails.default.url}') no-repeat center`, backgroundSize: "cover" }}></Link>
        <div className="details flex-1">
          <Link to={`/main/watch/${props.video.id}/`} className='text-sm md:text-[12px] font-semibold'>{props.video.snippet.title}</Link>
          <h1 className='text-[12px] md:text-[10px] text-slate-600 font-semibold mt-1'>{props.video.snippet.channelTitle}</h1>
          <h1 className='text-[10px] font-semibold'><span className='uppercase'>{numeral(props.video.statistics.viewCount).format("0.a")}</span>  views . <span className='capitalize'>{moment(props.video.snippet.publishedAt).fromNow()}</span></h1>
        </div>
      </div>
    </>
  )
}
