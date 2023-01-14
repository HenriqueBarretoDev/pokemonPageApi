import React from 'react';
import {useNavigate} from "react-router-dom"
import './index.css'

const ContentHomePage = () => {
    const navigate = useNavigate();

    function gotoPokemon() {
        navigate("/logar")
    }

    return (
        <div className="contentHomePage">
            <main>
                <h1 className="titleHomePage">Super Pokémon</h1>
                <p className="textHomePage">
                    Comece sua nova aventura na região de Pallet, nesta aventura de mundo aberto para o Nintendo Switch.
                    Pronto para ser o melhor treinador pokemon do mundo?
                </p>
                <div className={'alignButtonStartJourney'}>
                <button className={'startJourney'} onClick={gotoPokemon}>Iniciar jornada</button>
                </div>
            </main>
        </div>
    )
}
export default ContentHomePage
