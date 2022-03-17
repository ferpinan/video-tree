import PropTypes from 'prop-types';
import BackButton from "../BackButton/BackButton";
import React, {useState} from "react";

function VideoPlayer(props) {
    const {onClickBackButton, src, isVisible} = {...props};
    const [currentPlaybackRate, setCurrentPlaybackRate] = useState(1);
    const videoRef = React.createRef();

    const onClickSlowerButton = () => {
        if(videoRef.current.playbackRate>0.1) {
            videoRef.current.playbackRate = videoRef.current.playbackRate - 0.1;
            setCurrentPlaybackRate(videoRef.current.playbackRate);
        }
    }
    const onClickFasterButton = () => {
        if(videoRef.current.playbackRate<3) {
            videoRef.current.playbackRate = videoRef.current.playbackRate + 0.1;
            setCurrentPlaybackRate(videoRef.current.playbackRate);
        }
    }
    const onClickResetButton = () => {
        videoRef.current.playbackRate = 1;
        setCurrentPlaybackRate(videoRef.current.playbackRate);
    }

    if(!isVisible){
        return "";
    }

    return (
        <>
            <video controls style={{"width": "50%"}} src={src} ref={videoRef} />
            <button onClick={onClickSlowerButton}>Slower</button>
            <button onClick={onClickFasterButton}>Faster</button>
            <button onClick={onClickResetButton}>Reset Playback Rate</button>
            <p>Current playback rate: {currentPlaybackRate}</p>
            <BackButton onClick={onClickBackButton} />
        </>
    );
}

VideoPlayer.propTypes = {
    onClickBackButton: PropTypes.func,
    src: PropTypes.string,
    isVisible: PropTypes.bool
};

export default VideoPlayer;
