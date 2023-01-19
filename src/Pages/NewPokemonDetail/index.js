// import React, {useEffect, useState} from 'react'
// import './index.css'
//
// import boxImageVertical from '../../Assets/Images/pokemonLogoPretoVertical.png'
// import Footer from "../../Components/Footer";
// import Header from "../../Components/Header";
// import SeparatorBlack from "../../Components/Separators/SeparatorBlack";
// import api from "../../Services/api";
//
// const NewPokemonDetail = (props) => {
//
//     const [pokemons, setPokemons] = useState({
//         count: 0,
//         next: null,
//         previous: null,
//         results: []
//     });
//
//     useEffect(() => {
//         getAll("pokemon/")
//     }, []);
//
//     function getAll(url) {
//         api
//             .get(url)
//             .then((response) => {
//                 const pokemonsList = response.data.results.map(async (pokemon) => {
//                     console.log(pokemon)
//                     return await getPokemon(pokemon.url)
//                 })
//                 Promise.all(pokemonsList).then((result) => {
//                     setPokemons({
//                         count: response.data.count,
//                         next: response.data.next,
//                         previous: response.data.previous,
//                         results: result
//                     })
//                 })
//             })
//             .catch((err) => {
//                 console.error("ops! ocorreu um erro" + err);
//             });
//         // console.log('hitaaaaa', pokemons?.results)
//     }
//
//     // console.log('hiteee', pokemons?.results)
//     async function getPokemon(url) {
//         return api
//             .get(url)
//             .then((response) => {
//                 return response.data
//             })
//     }
//
//     return (
//         <div>
//             <Header/>
//             <div className='containerCarrossel'>
//                 <div className='contentCarrossel'>
//                     <div className="boxVerticalCarrossel">
//                         <img src={boxImageVertical} alt=""/>
//                     </div>
//
//                     <div className="productSliderCarrossel">
//                         <div className="productDescription">
//                             <h1>n°1-{pokemons?.results?.name?.filter((currentName) => {
//                                 return currentName
//                                 console.log('asdasd', currentName)
//                             })}</h1>
//                         </div>
//
//                         <div className="product-slider">
//                             <div className="productSliderCard">
//                                 <img
//                                     // src={currentPokemon.sprites && currentPokemon.sprites.other.dream_world.front_default}
//                                     src={''}
//                                     alt=""/>
//                                 <h2 className='productInfoType'>Tipo: </h2>
//                             </div>
//                             <div className="productInfo">
//
//                                 <p>
//
//                                     Power: </p>
//                                 <p>Skills:</p>
//                                 <p>Skills: Chlorophyll</p>
//
//                                 <p>Height: </p>
//
//                                 <p>Weight:</p>
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="previousAndNextCards">
//                         <div className="previousCard">
//                             <button>VOLTAR</button>
//                         </div>
//                         <div className="nextCard">
//                             <button>AVANÇAR</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <SeparatorBlack/>
//             <Footer/>
//         </div>
//
//     )
// }
// export default NewPokemonDetail
