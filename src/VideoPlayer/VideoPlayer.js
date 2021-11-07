import PropTypes from 'prop-types';
import BackButton from "../BackButton/BackButton";

function VideoPlayer(props) {
    const {onClickBackButton, src, isVisible} = {...props};

    if(!isVisible){
        return "";
    }

    return (
        <>
            <video controls style={{"width": "50%"}} src={src} />
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
