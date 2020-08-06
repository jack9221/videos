import axios from 'axios';

const KEY = 'AIzaSyDSkYxp931b35w0trGjhr8WCl0Sc5ubFLE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})