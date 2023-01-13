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
// modelo de uso
// import {useAxios} from "../../Services/Hooks/useAxios";

// const {response, loading, error, setResponse} = useAxios({
//     method: 'get',
//     url: '/pokemon/',
//     // headers: { // no need to stringify
//     //     accept: '*/*'
//     // },
//     // data vai ser necessário quando for fazer post ou put, não tem sentido usar data no get
//     // data: {  // no need to stringify
//     //     userId: 1,
//     //     id: 19392,
//     //     title: 'title',
//     //     body: 'Sample text',
//     // },
// });

// const pagination = async (url) => {
//     const result = await axios.request(url);
//     setResponse(result.data)
// }
// const next = async (url) => {
//     if (!url) {
//         return
//     }
//     await pagination(url)
//     // const result = await axios.request(url);
//     // setResponse(result.data)
// }
// const previous = async (url) => {
//     if (!url) {
//         return
//     }
//     await pagination(url)
//     // const result = await axios.request(url);
//     // setResponse(result.data)
// }

// abaixo do return
// <div className='cardsHomePage'>
//     <h1>Pegando Dados API </h1>
//     {loading ? (<p>loading...</p>) : (
//         <div>
//             {error ? (
//                 <div>
//                     <p>{error.message}</p>
//                 </div>) : (
//                 <ul>
//                     {response.results.map((item, key) => {
//                         return (
//                             <li key={key}>{item.name}</li>
//                         )
//                     })}
//
//                     <button onClick={() => previous(response.previous)}>voltar</button>
//                     <button onClick={() => next(response.next)}>avançar</button>
//                 </ul>
//
//             )}
//             <div className="cards">
//                 <div className="boxCardLeft">esquerda</div>
//                 <div className="boxCardRight">direita</div>
//             </div>
//         </div>
//
//     )}
// </div>
