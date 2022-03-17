import "./videoPlayer.scss";
import PropTypes from 'prop-types';
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
	faBackward,
	faForward,
	faArrowRotateBackward,
} from '@fortawesome/free-solid-svg-icons'

function VideoPlayer(props) {
	const {src, isVisible} = {...props};
	const videoRef = React.createRef();

	const onClickSlowerButton = () => {
		if (videoRef.current.playbackRate > 0.1) {
			videoRef.current.playbackRate = videoRef.current.playbackRate - 0.1;
			console.log("playbackRate" + videoRef.current.playbackRate);
		}
	}
	const onClickFasterButton = () => {
		if (videoRef.current.playbackRate < 3) {
			videoRef.current.playbackRate = videoRef.current.playbackRate + 0.1;
			console.log("playbackRate" + videoRef.current.playbackRate);
		}
	}
	const onClickResetButton = () => {
		videoRef.current.playbackRate = 1;
	}

	if (!isVisible) {
		return "";
	}

	return (
		<div className={"video-player"}>
			<video controls src={src} ref={videoRef}/>
			<div className={"playback-rate-controls"}>
				<FontAwesomeIcon onClick={onClickSlowerButton} icon={faBackward}/>
				<FontAwesomeIcon onClick={onClickFasterButton} icon={faForward}/>
				<FontAwesomeIcon onClick={onClickResetButton} icon={faArrowRotateBackward}/>
			</div>
		</div>
	);
}

VideoPlayer.propTypes = {
	onClickBackButton: PropTypes.func,
	src: PropTypes.string,
	isVisible: PropTypes.bool
};

export default VideoPlayer;
