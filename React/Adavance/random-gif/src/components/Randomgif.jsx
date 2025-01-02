// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import useGif from '../hooks/usegif';
import Spinner from './Spinner';

// const API_KEY = "1ghhYpBjyrRqDlF1Ue2LPtGwKKgytNd9";
// // const API_KEY = process.env.REACT_APP_GIP_URL;
// // console.log(API_KEY);


const Randomgif = () => {
//     const [gif, setGif] = useState("");
//     const [loading, setLoading] = useState(false)

// async function fetchData() {
//         try {
//             setLoading(true)
//             const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//             const { data } = await axios.get(url);
//             const imageSource = `${data.data.images.downsized_large.url}`; // Add unique query parameter
//             setGif(imageSource);
//             console.log(imageSource);
//             setLoading(false)
//         } catch (error) {
//             console.error("Error fetching the GIF:", error);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

const {gif, loading, fetchData} = useGif();

    return (
        <div>
            <h1>Random Gif</h1>
            {loading ? (<Spinner/>) : <img src={gif} alt="Random Gif" width="450" />}
            <button onClick={fetchData}>Get New Random Gif</button>
        </div>
    );
};

export default Randomgif;
