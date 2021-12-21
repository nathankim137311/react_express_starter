import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../config';

const token = config.MY_API_KEY; 

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

    return (
        <React.Fragment>
            <h1>Creators List</h1>
            <ul>
                {creators.map(creator => {
                    return (
                        <h1 key={creator.channelId}>
                            <Link to={`/creators/${creator.channelName}/products`}>{creator.channelName}</Link>
                        </h1>
                    );
                })}
            </ul>
        </React.Fragment>
    )
}

export default Creators 