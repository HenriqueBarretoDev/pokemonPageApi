import React, {useEffect, useState} from 'react'
import './index.css'

import {useAxios} from "../../Services/Hooks/useAxios";
import axios from "axios";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Home from '../Home'

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
        const assets = await axios.request(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        setSprites(result.data.sprites.other.dream_world.front_default)
        return result.data
    }

    return (
        <div>
            <Header/>
            <Home/>
            <Footer/>
        </div>

    )
}
export default PokemonDetail
