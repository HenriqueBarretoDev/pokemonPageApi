import React, {useEffect} from 'react';
import {FaSignInAlt, FaPlusCircle} from 'react-icons/fa';
import './index.css';
import iconPokemon from '../../Assets/Icons/icon-pokemon-header.webp'
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../Services/Hooks/useAuth";
import avatarLogged from '../../Assets/Icons/avatarIcon.jpg'

const Header = () => {
    const navigate = useNavigate();
    const {loggedInUser} = useAuth()
    const {alreadyRegisteredUse, setAlreadyRegisteredUse} = useAuth()
    const {userNotLogged} = useAuth(true)

    function goToConnect() {
        navigate("/logar")
    }

    function goToRegister() {
        navigate("/registrar")
    }

    function controlScroll() {
        let menu = document.getElementById('header');
        window.addEventListener('scroll', function () {
            if (window.scrollY > 180) menu.classList.add('fixedMenu');
            else menu.classList.remove('fixedMenu');
        });
    }

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
    }
    const handleInputChange = (e) => {
    }

    useEffect(() => {
        controlScroll();

    }, [])


    return (
        <header className="header" id='header'>
            <div className="headerLeft">
                <img className="iconPokemon" src={iconPokemon} alt="ícone pokémon"/>

                <Link to='/' onClick={goToTop}>Home</Link>
                {loggedInUser && (<Link to='/pokedex'>Pokédex</Link>)}

                <a className='hiddenMobile' href='https://www.google.com/search?hl=pt-BR&sxsrf=ALiCzsYZ9O2tQIaP74eQ2c3egpq625tK1g:1672961843664&q=filmes+pok%C3%A9mon&spell=1&sa=X&ved=2ahUKEwje86fDzLH8AhX3mZUCHStmDnAQBSgAegQICBAB&biw=1280&bih=913&dpr=1'>Filmes</a>
                <a className='hiddenMobile' href='https://www.google.com/search?sxsrf=ALiCzsZFfPgo57PQoYzqH5oSD_WjvFUNnw:1672961785086&source=univ&tbm=isch&q=wallpaper+pokemon+4k&fir=qkU_O7dclmm1SM%252C6D6DeahR5SUnMM%252C_%253BnFp1tKbywUmPVM%252CMDw6CoTgSJfHQM%252C_%253BHrygFPzj0_qQsM%252CVIXzhgmOxgpphM%252C_%253BroC_HE8gFCNLnM%252Cund0Ijec3sAmCM%252C_%253BvSBh2nIELguB9M%252CqLii63vCzRC9gM%252C_%253BNhqCpQ4oGLOjJM%252C3bBwOAXpeKnRyM%252C_%253B3_QkBweVVd2ouM%252Cdc8J9zSNqWPg1M%252C_%253BDsKepQZMy1FceM%252CJ9MKoTzVoMewYM%252C_%253BVu0M7H8AWZ99nM%252CNRtMcOJNFyeNAM%252C_%253B9MHxy9jC_wojwM%252Cund0Ijec3sAmCM%252C_%253BfzaCb_YqevtwiM%252CjLGb2-gSpvJYiM%252C_%253B0X5JAo1ZRyRTAM%252ChPTCNiAvXls5tM%252C_&usg=AI4_-kQYo4x3QkzRpiGMLsvc2Z4fQQRI8A&sa=X&ved=2ahUKEwi81LCnzLH8AhXSq5UCHaRyDoQQjJkEegQICRAC&biw=1280&bih=913&dpr=1'>Wallpapers</a>

            </div>
            <div className="headerRight">
                {userNotLogged && (<>
                    <button className="headerBtn" onClick={goToConnect}>
                        <FaSignInAlt className="headerBtnIcon"/>
                        <span>Conectar</span>
                    </button>
                    <button className="headerBtn" onClick={goToRegister}>
                        <FaPlusCircle className="headerBtnIcon"/>
                        <span>Cadastrar</span>
                    </button>
                </>)}
            </div>

            {alreadyRegisteredUse && (
                <button className="headerBtn" onClick={goToConnect} style={{whiteSpace:'nowrap'}}>
                <FaSignInAlt className="headerBtnIcon"/>
                <span>Conectar</span>
                </button>
            )}

            {loggedInUser && (
                <div className='userLogged'>
                    <p className='hiddenMobile'>Henrique</p>
                    <img src={avatarLogged} alt=""/>
                </div>
            )}
        </header>
    );
};

export default Header;
