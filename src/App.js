import './App.css';
import FetchFolderContent from "./hooks/FetchFolderContent";
import React, {useState} from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import DirectoryList from "./DirectoryList/DirectoryList";

function App() {
    const [currentFolder, setCurrentFolder] = useState([""]);
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

    const onClickDirectoryBackButton = () => {
        let currentFolderUpdated = [...currentFolder];
        currentFolderUpdated.pop();
        setCurrentFolder(currentFolderUpdated);
    };

    return (
        <div className="App">
            <header className="App-header">
                <DirectoryList
                    isVisible={currentFile === ""}
                    isBackButtonVisible={currentFolder.length > 1}
                    folderContent={folderContent}
                    onClickBackButton={onClickDirectoryBackButton}
                    onClickDirectoryButton={onClickDirectoryButton}
                />
                <VideoPlayer
                    isVisible={currentFile !== ""}
                    src={process.env.REACT_APP_HOST + "/videos" + currentFolder.join("/") + "/" + currentFile}
                    onClickBackButton={() => setCurrentFile("")}
                />
            </header>
        </div>
    );
}

export default App;
