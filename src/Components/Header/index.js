import React, {useEffect} from "react";
import './index.css'

import {BsSearch} from 'react-icons/bs';
import iconPokemon from '../../Assets/Icons/icon-pokemon-header.webp'
import {Link, useNavigate} from "react-router-dom";

const Header = (backgroundImage, backgroundImageStyle) => {

    const navigate = useNavigate();
        let contador = 1

    function pararEnvio(elemento) {
        elemento.preventDefault()
        console.log(`Form não foi enviado ${contador}`)
        contador++
    }

    function goToConnect() {
        navigate("/logar")
    }

    function goToRegister() {
        navigate("/registrar")
    }

    function controlScroll() {
        let menu = document.getElementById('header'); // colocar em cache
        window.addEventListener('scroll', function () {
            if (window.scrollY > 180) menu.classList.add('fixedMenu'); // > 0 ou outro valor desejado
            else menu.classList.remove('fixedMenu');
        });
    }

    useEffect(() => {
        controlScroll()
    }, [])

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log('hit', data)
    }
    const handleInputChange = (e) => {
        console.log('hit',handleInputChange, e.target.value)
    }

    return (
        <nav className='header' id='header'>
            <div className="ContentLeft">
                <Link to='/' >
                    <img className="iconPokemon is-animating" src={iconPokemon} alt="ícone pokémon"/>
                </Link>
                <Link to='/' onClick={goToTop}>Home</Link>
                <Link to='/pokedex'>Pokédex</Link>
                <a href='https://www.google.com/search?hl=pt-BR&sxsrf=ALiCzsYZ9O2tQIaP74eQ2c3egpq625tK1g:1672961843664&q=filmes+pok%C3%A9mon&spell=1&sa=X&ved=2ahUKEwje86fDzLH8AhX3mZUCHStmDnAQBSgAegQICBAB&biw=1280&bih=913&dpr=1'>Filmes</a>
                <a href='https://www.google.com/search?sxsrf=ALiCzsZFfPgo57PQoYzqH5oSD_WjvFUNnw:1672961785086&source=univ&tbm=isch&q=wallpaper+pokemon+4k&fir=qkU_O7dclmm1SM%252C6D6DeahR5SUnMM%252C_%253BnFp1tKbywUmPVM%252CMDw6CoTgSJfHQM%252C_%253BHrygFPzj0_qQsM%252CVIXzhgmOxgpphM%252C_%253BroC_HE8gFCNLnM%252Cund0Ijec3sAmCM%252C_%253BvSBh2nIELguB9M%252CqLii63vCzRC9gM%252C_%253BNhqCpQ4oGLOjJM%252C3bBwOAXpeKnRyM%252C_%253B3_QkBweVVd2ouM%252Cdc8J9zSNqWPg1M%252C_%253BDsKepQZMy1FceM%252CJ9MKoTzVoMewYM%252C_%253BVu0M7H8AWZ99nM%252CNRtMcOJNFyeNAM%252C_%253B9MHxy9jC_wojwM%252Cund0Ijec3sAmCM%252C_%253BfzaCb_YqevtwiM%252CjLGb2-gSpvJYiM%252C_%253B0X5JAo1ZRyRTAM%252ChPTCNiAvXls5tM%252C_&usg=AI4_-kQYo4x3QkzRpiGMLsvc2Z4fQQRI8A&sa=X&ved=2ahUKEwi81LCnzLH8AhXSq5UCHaRyDoQQjJkEegQICRAC&biw=1280&bih=913&dpr=1'>Wallpapers</a>
            </div>

            <form className="contentRight" onSubmit={handleSubmit}>
                <div className={'inputGroup'}>
                    <label htmlFor="">
                        <input type="text" placeholder='Pesquisar...' className={'search'} onChange={handleInputChange}/>
                        <BsSearch style={{padding: '0 10px', cursor: 'pointer'}} id={'send'}/>
                    </label>
                </div>
                <button type={"submit"} onClick={goToConnect}>Conecte-se</button>
                <button type={"button"} onClick={goToRegister}>Inscrever-se</button>
            </form>
        </nav>
    )
}

export default Header
