import PropTypes from 'prop-types';

function DirectoryList(props) {
    const {folderContent, isVisible, onClickDirectoryButton} = {...props};

    if (!isVisible) {
        return "";
    }

    return (
        <ul>{
            folderContent.map((folderElement, i) => {
                return <li key={folderElement.name.replaceAll(" ", "_") + i}
                          onClick={() => onClickDirectoryButton(folderElement)}>{folderElement.name}</li>
            })
        }
        </ul>
    );
}

DirectoryList.propTypes = {
    onClickDirectoryButton: PropTypes.func,
    isVisible: PropTypes.bool,
    folderContent: PropTypes.arrayOf(PropTypes.object)
};

export default DirectoryList;
