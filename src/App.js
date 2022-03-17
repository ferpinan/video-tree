import './App.css';
import FetchFolderContent from "./hooks/FetchFolderContent";
import React, {useState} from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import DirectoryList from "./DirectoryList/DirectoryList";
import NavBar from "./NavBar/NavBar";

function App() {
	const [currentFolder, setCurrentFolder] = useState([]);
	const [currentFile, setCurrentFile] = useState("");

	const folderContent = FetchFolderContent(currentFolder.join("/") + "/");

	const onClickDirectoryButton = element => {
		const {name, type} = {...element};
		if (type === "directory") {
			setCurrentFolder([...currentFolder, name]);
		} else {
			setCurrentFile(name);
		}
	};

	const onClickHomeButton = () => {
		setCurrentFolder([]);
		setCurrentFile("");
	};

	const onClickBreadcrumbButton = index => {
		console.log(index);
		setCurrentFolder([...currentFolder].slice(0, index+1));
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
			<header className="App-header">
				<DirectoryList
					isVisible={currentFile === ""}
					isBackButtonVisible={currentFolder.length > 1}
					folderContent={folderContent}
					onClickBackButton={onClickBackButton}
					onClickDirectoryButton={onClickDirectoryButton}
				/>
				<VideoPlayer
					isVisible={currentFile !== ""}
					src={process.env.REACT_APP_HOST + "/videos/" + currentFolder.join("/") + "/" + currentFile}
					onClickBackButton={() => setCurrentFile("")}
				/>
			</header>
		</div>
	);
}

export default App;
