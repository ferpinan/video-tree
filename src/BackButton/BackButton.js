import PropTypes from 'prop-types';

function BackButton(props) {
    const {onClick, isVisible} = {...props};

    return (
        <a
            className="App-link"
            onClick={onClick}
        >
            Back
        </a>
    );
}

BackButton.propTypes = {
    onClick: PropTypes.func,
    isVisible: PropTypes.bool
};

BackButton.defaultProps = {
    isVisible: true
};

export default BackButton;
