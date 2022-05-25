const isDirectory = folderElement => folderElement.type === "directory";
const isVideoFile = folderElement => !isDirectory(folderElement) && folderElement.name.split('.').pop().toLowerCase() === "mp4";
const isPdfFile = folderElement => !isDirectory(folderElement) && folderElement.name.split('.').pop().toLowerCase() === "pdf";

export {isDirectory, isVideoFile, isPdfFile};