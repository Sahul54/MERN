import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = "1ghhYpBjyrRqDlF1Ue2LPtGwKKgytNd9";
// const API_KEY = process.env.REACT_APP_GIP_URL;
// console.log(API_KEY);


const useGif = () => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false)

async function fetchData() {
        try {
            setLoading(true)
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            const { data } = await axios.get(url);
            const imageSource = `${data.data.images.downsized_large.url}`; // Add unique query parameter
            setGif(imageSource);
            console.log(imageSource);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching the GIF:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {gif, loading, fetchData}
}

export default useGif;