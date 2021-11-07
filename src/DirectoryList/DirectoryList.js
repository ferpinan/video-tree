import PropTypes from 'prop-types';
import BackButton from "../BackButton/BackButton";

function DirectoryList(props) {
    const {folderContent, isVisible, isBackButtonVisible, onClickBackButton, onClickDirectoryButton} = {...props};

    if (!isVisible) {
        return "";
    }

    return (
        <>{
            folderContent.map((folderElement, i) => {
                return <a key={folderElement.name.replaceAll(" ", "_") + i}
                          onClick={() => onClickDirectoryButton(folderElement)}>{folderElement.name}</a>
            })
        }
            <BackButton onClick={onClickBackButton} isVisible={isBackButtonVisible}/>
        </>
    );
}

DirectoryList.propTypes = {
    onClickBackButton: PropTypes.func,
    onClickDirectoryButton: PropTypes.func,
    isVisible: PropTypes.bool,
    isBackButtonVisible: PropTypes.bool,
    folderContent: PropTypes.arrayOf(PropTypes.string)
};

export default DirectoryList;
