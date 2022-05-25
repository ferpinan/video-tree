import "./directoryList.scss";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder, faFileVideo, faFilePdf} from '@fortawesome/free-regular-svg-icons'
import React from "react";
import {isDirectory, isPdfFile, isVideoFile} from "../utils/folderElementUtils";

function DirectoryList(props) {
	const {folderContent, isVisible, onClickElementButton} = {...props};

	if (!isVisible) {
		return "";
	}

	return (
		<div className={"directoryList"}>
			<ul>{
				folderContent.map((folderElement, i) => {
					return (
						<li key={folderElement.name.replaceAll(" ", "_") + i}
							onClick={() => onClickElementButton(folderElement)}>
							{isDirectory(folderElement) &&
							<FontAwesomeIcon icon={faFolder}/>}
							{isVideoFile(folderElement) &&
							<FontAwesomeIcon icon={faFileVideo}/>}
							{isPdfFile(folderElement) &&
							<FontAwesomeIcon icon={faFilePdf}/>}
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
	onClickElementButton: PropTypes.func,
	isVisible: PropTypes.bool,
	folderContent: PropTypes.arrayOf(PropTypes.object)
};

export default DirectoryList;
