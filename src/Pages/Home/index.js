import React, {useEffect, useState} from "react";

import './index.css'
import api from '../../Services/api'
import Card from '@mui/material/Card';
import MediaCard from "../../Components/MediaCard";
import iconPokeboll from '../../Assets/Icons/icon-pokemon-header.webp'

export default function Home() {

    const [pokemons, setPokemons] = useState({
        count: 0,
        next: null,
        previous: null,
        results: []
    });

    useEffect(() => {
        getAll("pokemon/")
    }, []);

    function getAll(url) {
        api
            .get(url)
            .then((response) => {
                const pokemonsList = response.data.results.map(async (pokemon) => {
                    return await getPokemon(pokemon.url)
                })
                Promise.all(pokemonsList).then((result) => {
                    setPokemons({
                        count: response.data.count,
                        next: response.data.next,
                        previous: response.data.previous,
                        results: result
                    })
                })
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    async function getPokemon(url) {
        return api
            .get(url)
            .then((response) => {
                return response.data
            })
    }

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <div className="home">
            <div className='infoHomeCard'>
                <div className="separatorBlack"/>
                <h1>POKEDEX <img src={iconPokeboll} alt="icon-pokemon"/></h1>
            </div>

            <div className='cardsPokedex'>
                {pokemons.results.map((pokemon, key) => {
                    return (
                        <div className='cardHome' id='homePokedex' key={key}>
                            <MediaCard
                                name={pokemon.name}
                                types={pokemon.types[1]?.type?.name || pokemon.types[0].type.name}
                                url={pokemon.url}
                                image={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default}
                                imageBack={pokemon.sprites.front_default || pokemon.sprites.other.home.front_default}
                                imageBack2={pokemon.sprites.back_default || pokemon.sprites.other.home.front_default}
                                stats={pokemon.stats}
                                base_experience={pokemon.base_experience}
                                species={pokemon.species.name}
                                id={pokemon.id}
                                weight={pokemon.weight}
                                abilite1={pokemon.abilities[0].ability.name}
                                abilite2={pokemon.abilities[1]?.ability.name || pokemon.abilities[0].ability.name}
                            />
                        </div>
                    )
                })}
                <div className="buttonsNextAndPrevious">
                    <button disabled={!pokemons.previous}
                            onClick={() => getAll(pokemons.previous)}
                            className="button-73" role="button">Anterior
                    </button>
                    <button disabled={!pokemons.next}
                            onClick={() => getAll(pokemons.next)} className="button-73"
                            role="button">Próximo
                    </button>
                </div>
            </div>
        </div>
    );
}

