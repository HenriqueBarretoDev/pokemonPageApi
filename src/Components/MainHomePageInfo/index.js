import React from 'react'
import './index.css'
import introPokemon from '../../Assets/Vídeo/Pokemón Opening 1 BR HD 1080p.mp4'
import pokemonHomePage from '../../Assets/Images/2400x1200_Games_landing_page-v4.avif'
import poster from '../../Assets/Images/poster.jpg'

const MainHomePageInfo = () => {
    return (
        <div className="mainHomePageInfo">
            <div className="containerHome">
                <img className='hiddenDesktop' src={pokemonHomePage} alt=""/>
                <div style={{float: "left"}} className='detailVideo'>
                    <h1>
                        Seus Pokémon preferidos estão prontos para competir com ataques poderosos e Habilidades únicas.
                        Qual Pokémon você levará para a batalha?
                    </h1>
                </div>

                <img className='hiddenMobile' src={pokemonHomePage} alt=""/>
            </div>

            <div className='subContainerHome'>
                <div className='video' style={{float: "right"}}>
                    <video src={introPokemon} controls autoPlay loop muted poster={poster}/>
                </div>
                <div className='infoVideoLeft'>
                    <h1>Explore o mundo de Pokémon
                    </h1>
                    <h2>Quer você seja novo na série ou um Treinador de Pokémon experiente, há muitos pokémons fascinantes
                        para descobrir.</h2>
                </div>
            </div>
        </div>
    )
}
export default MainHomePageInfo
