import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', // fetches videos
        maxResults: 5, // fetches only 5 videos
        key: 'AIzaSyBeqEYKQMDMhfPeCmpIL7Fvkcl3rfmcyVY'
    }
})