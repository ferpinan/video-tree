import "./directoryList.scss";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder, faFileVideo} from '@fortawesome/free-regular-svg-icons'
import React from "react";

function DirectoryList(props) {
	const {folderContent, isVisible, onClickDirectoryButton} = {...props};

	if (!isVisible) {
		return "";
	}

	const isDirectory = folderElement => folderElement.type === "directory";
	const isVideoFile = folderElement => !isDirectory(folderElement) && folderElement.name.split('.').pop().toLowerCase() === "mp4";

	return (
		<div className={"directoryList"}>
			<ul>{
				folderContent.map((folderElement, i) => {
					return (
						<li key={folderElement.name.replaceAll(" ", "_") + i}
							onClick={() => onClickDirectoryButton(folderElement)}>
							{isDirectory(folderElement) &&
							<FontAwesomeIcon onClick={props.onClickHomeIcon} icon={faFolder}/>}
							{isVideoFile(folderElement) &&
							<FontAwesomeIcon onClick={props.onClickHomeIcon} icon={faFileVideo}/>}
							{folderElement.name}
						</li>
					)
				})
			}
			</ul>
		</div>
	);
}

DirectoryList.propTypes = {
	onClickDirectoryButton: PropTypes.func,
	isVisible: PropTypes.bool,
	folderContent: PropTypes.arrayOf(PropTypes.object)
};

export default DirectoryList;
