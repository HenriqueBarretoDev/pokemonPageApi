import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import './index.css'
import iconGloboFooter from '../../Assets/Icons/globocom-footer-icon.svg'
import pokebolaIcon from '../../Assets/Icons/icon-pokemon-header.webp'

const Footer = () => {

    const navigate = useNavigate();

    function goToPokedex() {
        navigate("/pokedex")
    }

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className='footer'>

            <div className="contentTop">
                <div className="contentTopLeft">
                    <Link to="/" onClick={goToTop}>Pokemon Super</Link>
                </div>

                <div className="contentTopRight">
                    <Link to="/pokedex">Pokémons</Link>
                    <Link to="/">Filmes</Link>
                    <Link to="/">Política de privacidade</Link>
                    <Link to="/logar" >Minha conta</Link>

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
