import React, {useState, useEffect} from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState({results: []});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            // console.log(result.data)

            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // array necessário para não dar loop infinito

    return {response, error, loading, setResponse};
}
