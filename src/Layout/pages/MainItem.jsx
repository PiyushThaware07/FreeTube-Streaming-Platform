import React, { useEffect, useState } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';


export default function Video(props) {
    // Duration handling
    const duration = moment.duration(props.videoContentDetails?.duration);
    const formatted_duration = duration
        ? `${duration.minutes()}:${duration.seconds()}`
        : 'N/A';

    // ChannelIcon Handling
    const [channelIcon, setChannelIcon] = useState(null);

    useEffect(() => {
        async function fetchChannelIcon() {
            try {
                const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
                const channelId = props.videoSnippet?.channelId;
                if (!channelId) {
                    console.error('Channel ID is missing.');
                    return;
                }
                const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;
                const response = await fetch(url);
                if (!response.ok) {
                    console.error('Network response was not ok');
                    return;
                }
                const data = await response.json();
                if (data.items && data.items[0] && data.items[0].snippet && data.items[0].snippet.thumbnails) {
                    setChannelIcon(data.items[0].snippet.thumbnails.default.url);
                } else {
                    console.error('Channel data is missing or incomplete.');
                }
            } catch (error) {
                console.error('Error fetching channel icon:', error);
            }
        }

        fetchChannelIcon();
    }, [props.videoSnippet?.channelId]);

    return (
        <div className="video-card p-5">
            <Link to={`watch/${props.videoID}/`} >
                <div
                    className="video-thumbnail h-[180px] rounded-xl hover:rounded-none relative"
                    style={{
                        background: `url('${props.videoSnippet?.thumbnails.standard?.url || ''}') no-repeat center`,
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="text-[11px] font-semibold text-white bg-black inline absolute bottom-3 right-3 p-1">
                        {formatted_duration}
                    </div>
                </div>
            </Link>

            <div className="video-content flex flex-nowrap items-start flex-1 mt-3">
                <Link to={`channel/${props.videoSnippet.channelId}`}
                    className="video-channel-thumbnail h-[40px] w-[40px] rounded-full ms-2"
                    style={{
                        backgroundImage: `url('${channelIcon || ''}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></Link>
                <div className="video-details flex-1 ps-4 sm:px-6">
                    <h1 className="text-sm font-semibold">{props.videoSnippet?.title || 'Title N/A'}</h1>
                    <h1 className="text-[12px] font-medium text-gray-600">
                        {props.videoSnippet?.channelTitle || 'Channel Title N/A'}
                    </h1>
                    <h1 className="text-[12px] font-medium text-gray-600">
                        <span className="uppercase">
                            {numeral(props.videoStatistics?.viewCount || 0).format('0.a')}
                        </span>{' '}
                        views .{' '}
                        <span className="capitalize">
                            {moment(props.videoSnippet?.publishedAt).fromNow() || 'Published N/A'}
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
