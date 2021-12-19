import React, { useState, useEffect } from 'react'

function Creators() {
    const [creator, setCreator] = useState('');
    const [subCount, setSubCount] = useState(0);

    // do not push this file with sensitive information 
    const youtubeKey = '';
    const youtubeUser = 'UCO1ITICo8MLHGAXR1uzFwjA'; // channel id

    const youtubeData = async (creator) => {
        let data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${creator}&key=${youtubeKey}`);
        data = await data.json(); 
        console.log(data);

        setSubCount(data["items"][0].statistics.subscriberCount);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(creator);
        youtubeData(creator);
    }

    return (
        <React.Fragment>
            <h1>Creators List</h1>
            <h3>{subCount}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={creator} 
                onChange={(e) => setCreator(e.target.value)}/>
                <button>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Creators 