import React from "react";
import {Link} from 'react-router-dom'
import './index.css'
import iconGloboFooter from '../../Assets/Icons/globocom-footer-icon.svg'
import pokebolaIcon from '../../Assets/Icons/icon-pokemon-header.webp'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="contentTop">
                <div className="contentTopLeft">
                    <a href='#home'>Pokemon Super</a>
                </div>

                <div className="contentTopRight">
                    <Link to="/">Pokémons</Link>
                    <Link to="/">Filmes</Link>
                    <Link to="/">Política de privacidade</Link>
                    <Link to="/">Minha conta</Link>

                </div>
            </div>

            <div className="contentDown">
                <img src={pokebolaIcon} alt="ícone-globo"/>
                <p>© Copyright 2000-{new Date().getFullYear()} Pokemon Super S.A.</p>

            </div>

        </div>
    )
}

export default Footer
