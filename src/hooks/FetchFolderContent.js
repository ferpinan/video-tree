import { useState, useEffect } from 'react';

function FetchFolderContent(currentFolder) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let input = process.env.REACT_APP_HOST + "/videos" + currentFolder;
        fetch(input)
            .then(response => response.json())
            .then(jsonData => setData(jsonData));
    }, [currentFolder]);

    return data;
}

export default FetchFolderContent;