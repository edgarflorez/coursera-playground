import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if(!url) return;

        fetch(url).then(response => response.json())
        .then((data) => setData(data));
    }, [url])

    return [data];
}

export default UseFetch
