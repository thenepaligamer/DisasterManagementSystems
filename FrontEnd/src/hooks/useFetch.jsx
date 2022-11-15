import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData();
    }, [url]);

    async function getData() {
        const data = await fetch(url);
        const dataJson = await data.json();
        setData(dataJson);
    }
    return { data, isLoading, error };
};

export default useFetch;
