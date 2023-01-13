import React from 'react';
import {useNavigate} from "react-router-dom"
import './index.css'

const ContentHomePage = () => {
    const navigate = useNavigate();

    function gotoPokemon() {
        navigate("/pokemons")
    }

    return (
        <div className="contentHomePage">
            <main>
                <h1 className="title">Super Pokémon</h1>
                <p className="text">
                    Comece sua nova aventura na região de Pallet, nesta aventura de mundo aberto para o Nintendo Switch.
                    Pronto para ser o melhor treinador pokemon do mundo?
                </p>
                <button onClick={gotoPokemon}>Conhecer pokemons</button>
            </main>
        </div>
    )
}
export default ContentHomePage
