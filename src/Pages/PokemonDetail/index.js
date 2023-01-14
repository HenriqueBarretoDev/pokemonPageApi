import React, {useEffect, useState} from 'react'
import './index.css'

import {useAxios} from "../../Services/Hooks/useAxios";
import axios from "axios";
import boxImageVertical from '../../Assets/Images/pokemonLogoPretoVertical.png'
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SeparatorBlack from "../../Components/Separators/SeparatorBlack";
import api from "../../Services/api";

const PokemonDetail = (props) => {

    const [currentPokemon, setCurrentPokemon] = useState({})
    const [currentIndex, setCurrentIndex] = useState(1)
    const [sprites, setSprites] = useState({})
    const [abilities, setAbilities] = useState([])

    const {response, loading, error, setResponse} = useAxios({
        method: 'get',
        url: '/pokemon/',

    });

    useEffect(() => {
        (async () => {
            if (response.results.length) {
                await getPokemon(currentIndex)
            }
        })()

    }, [response])

    useEffect(() => {
        (async () => {
            if (response.results.length) {
                await getPokemon(currentIndex)
            }

        })()
    }, [currentIndex])

    const pagination = async (url) => {
        const result = await axios.request(url);
        setResponse(result.data)
    }

    const next = async () => {
        setCurrentIndex(currentIndex === response.count ? currentIndex : currentIndex + 1)
    }

    const previous = async () => {
        setCurrentIndex(currentIndex === 1 ? 1 : currentIndex - 1)
    }


    const getPokemon = async (index) => {
        const result = await axios.request(`https://pokeapi.co/api/v2/pokemon/${index}/`);
        setCurrentPokemon(result.data)

        console.log('hitttt', result?.data)
        // setAbilities(results.data.abilities.map(() => abilities.name))
        // console.log(result.data)
        const assets = await axios.request(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        setSprites(result.data.sprites.other.dream_world.front_default)
        // console.log(result.data.sprites.other.dream_world.front_default)
        return result.data
    }


    ////////////daqui para baixo


    //daqui p cima
    return (
        <div>
            <Header/>
            <div className='containerCarrossel'>
                <div className='contentCarrossel'>
                    <div className="boxVerticalCarrossel">
                        <img src={boxImageVertical} alt=""/>
                    </div>

                    <div className="productSliderCarrossel">
                        <div className="productDescription">
                            <h1>n°{currentPokemon.id} -{currentPokemon.name}</h1>
                        </div>

                        <div className="product-slider">
                            <div className="productSliderCard">
                                <img
                                    src={currentPokemon.sprites && currentPokemon.sprites.other.dream_world.front_default}
                                    alt=""/>
                                <h2 className='productInfoType'>Tipo: </h2>
                            </div>
                            <div className="productInfo">
                                {/*<h2 className='productInfoType'>Tipo: Poison </h2>*/}
                                <p>
                                    Power: {currentPokemon.base_experience}</p>
                                <p>Skills:</p>
                                <p>Skills: Chlorophyll</p>
                                <p>Height: {currentPokemon.height} </p>
                                <p>Weight: {currentPokemon.weight}</p>
                            </div>
                        </div>
                    </div>

                    <div className="previousAndNextCards">
                        <div className="previousCard">
                            <button onClick={() => previous()}>VOLTAR</button>
                        </div>
                        <div className="nextCard">
                            <button onClick={() => next()}>AVANÇAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <SeparatorBlack/>
            <Footer/>
        </div>

    )
}
export default PokemonDetail
