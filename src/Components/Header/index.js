import React from "react";
import './index.css'

import iconPokemon from '../../Assets/Icons/icon-pokemon-header.webp'
import searcher from '../../Assets/Icons/search.svg'


const Header = () => {

    let contador = 1

    function pararEnvio(elemento) {
        elemento.preventDefault()
        console.log(`Form não foi enviado ${contador}`)
        contador++
    }


    return (
        <div className='header'>
            <div className="ContentLeft">
                <p>
                    <img src={iconPokemon} alt="ícone pokémon" className='iconPokemon'/>
                </p>
                <a href='http://localhost:3000/'> Pokémons</a>
                <a>Pokédex</a>
                <a>Filmes</a>
                <a>Wallpapers</a>
            </div>
            <div className="contentRight">
                <div>
                    <form action="" className='searcher'>
                        <input type="text" placeholder='Pesquisar...'/>
                        <label htmlFor="" onClick={pararEnvio}>
                            <img className='lupa' src={searcher} alt=""/>
                        </label>
                    </form>
                </div>

                <button type={"button"} className='logIn'>Conecte-se</button>
                <button type={"button"} className='SignUp'>Inscrever-se</button>
            </div>

        </div>
    )
}
export default Header
