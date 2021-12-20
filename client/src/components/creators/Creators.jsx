import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Creators() {
    const [creators, setCreators] = useState([
        {
            channelId: 'UCO1ITICo8MLHGAXR1uzFwjA', 
            channelName: 'OneyPlays',
            subscribers: '',
            viewCount: '',
            // hasMerch: null,
        }, 
        {
            channelId: 'UCIyIoM_Nd8HtY19fuR_ov2A',
            channelName: 'TigerBelly', 
            subscribers: '',
            viewCount: '',
            // hasMerch: null,
        }, 
        {
            channelId: 'UCsgv2QHkT2ljEixyulzOnUQ', 
            channelName: 'AngryJoeShow',
            subscribers: '',
            viewCount: '',
            // hasMerch: null,
        }, 
        {
            channelId: 'UC4PooiX37Pld1T8J5SYT-SQ', 
            channelName: 'GoodMythicalMorning',
            subscribers: '',
            viewCount: '',
            // hasMerch: null,
        }, 
    ]);

    // do not push this file with sensitive information 
    // const youtubeKey = 'AIzaSyDlVO0_QYZOBmqxWPpuMQJe91OCtL38K00';
    // const youtubeUser = 'UCO1ITICo8MLHGAXR1uzFwjA'; // channel id

    // const youtubeData = async (creator) => {
    //     let data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${creator}&key=${youtubeKey}`);
    //     data = await data.json(); 
    //     console.log(data);

    //     setSubCount(data["items"][0].statistics.subscriberCount);
    // }

    return (
        <React.Fragment>
            <h1>Creators List</h1>
            <ul>
                {creators.map(creator => {
                    return (
                        <h1 key={creator.channelId}>
                            <Link to={`/creators/products/${creator.channelName}`}>{creator.channelName}</Link>
                        </h1>
                    );
                })}
            </ul>
        </React.Fragment>
    )
}

export default Creators 