import './App.scss';
import FetchFolderContent from "./hooks/FetchFolderContent";
import React, {useState} from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import DirectoryList from "./DirectoryList/DirectoryList";
import NavBar from "./NavBar/NavBar";
import {isDirectory, isPdfFile} from "./utils/folderElementUtils";

function App() {
	const [currentFolder, setCurrentFolder] = useState([]);
	const [currentFile, setCurrentFile] = useState("");

	const folderContent = FetchFolderContent(currentFolder.join("/") + "/");

	const getFileAbsolutePath = file => {
		return process.env.REACT_APP_HOST + "/videos/" + currentFolder.join("/") + "/" + file;
	}
	const onClickElementButton = element => {
		const {name} = {...element};
		if (isDirectory(element)) {
			setCurrentFolder([...currentFolder, element.name]);
			return;
		}
		if (isPdfFile(element)) {
			let fileAbsolutePath = getFileAbsolutePath(element.name);
			window.open(fileAbsolutePath, '_blank').focus();
			return;
		}

		setCurrentFile(name);
	};

	const onClickHomeButton = () => {
		setCurrentFolder([]);
		setCurrentFile("");
	};

	const onClickBreadcrumbButton = index => {
		setCurrentFolder([...currentFolder].slice(0, index + 1));
		setCurrentFile("");
	};

	const onClickBackButton = () => {
		if (currentFile !== "") {
			setCurrentFile("");
		} else {
			let currentFolderUpdated = [...currentFolder];
			currentFolderUpdated.pop();
			setCurrentFolder(currentFolderUpdated);
		}
	};

	return (
		<div className="App">
			<NavBar
				isBackButtonVisible={currentFolder.length > 0 || currentFile !== ""}
				onClickBackButton={onClickBackButton}
				onClickHomeButton={onClickHomeButton}
				onClickBreadcrumbsButton={onClickBreadcrumbButton}
				currentFolder={currentFolder}
				currentFile={currentFile}
			/>
			<main>
				<DirectoryList
					isVisible={currentFile === ""}
					isBackButtonVisible={currentFolder.length > 1}
					folderContent={folderContent}
					onClickBackButton={onClickBackButton}
					onClickElementButton={onClickElementButton}
				/>
				<VideoPlayer
					isVisible={currentFile !== ""}
					src={getFileAbsolutePath(currentFile)}
					onClickBackButton={() => setCurrentFile("")}
				/>
			</main>
		</div>
	);
}

export default App;
