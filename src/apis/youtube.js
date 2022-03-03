import axios from "axios";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyAeOK9LJAAlFDMpkdvCk5t1J6xnE6i3h-E'
    }
});