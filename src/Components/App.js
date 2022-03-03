import React, {useEffect, useState} from "react";
import useVideos from '../hooks/useVideos';
import './App.css';
import SearchBar from './SearchBar';
import VideoDetail from "./VideoDetail";
import VideoList from './VideoList';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('batman');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column ">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;