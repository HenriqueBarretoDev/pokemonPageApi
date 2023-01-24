import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import './index.css'
import pokebola from '../../Assets/Images/pokebola-go.png'
import Footer from "../../Components/Footer";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../Services/Hooks/useAuth";
import facebookIcon from '../../Assets/Icons/facebook-round-color-icon.webp'
import googleIcon from '../../Assets/Icons/google-color-icon.webp'
import HeaderMobile from "../../Components/Header";

const Connect = () => {

    const {setLoggedInUser, setUserNotLogged, setAlreadyRegisteredUse} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        goToTop()
    }, {})

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const confirmLogin = (e) => {
        setUserNotLogged(false)
        setLoggedInUser(true)
        setAlreadyRegisteredUse(false)
        goToHome()
    }

    function goToHome() {
        navigate("/")
    }

    return (
        <>
            <HeaderMobile/>
            <div className="connect">
                <div className='connectBox'>
                    <div className="containerConnect">
                        <div className="infoConnect">
                            <div className="backgroundContainerLeftLogin">
                                <div className='containerConnectLeft'>
                                    <img src={pokebola} alt=""/>
                                    <h1>Bem vindo novamente, Por gentileza<h1> fazer login na sua conta.</h1></h1>
                                </div>
                                <div className="loginSocialNetworks">
                                    <button style={{backgroundColor: '#4267B2', border: '1px solid black'}}><img
                                        src={facebookIcon} alt=""/> Facebook
                                    </button>
                                    <button style={{backgroundColor: '#898F9C', border: '1px solid black'}}><img
                                        src={googleIcon} alt=""/> Google
                                    </button>
                                </div>

                                <p className='separatorLogin'>-ou-</p>

                                <div className='containerConnectRight'>
                                    <form action="">
                                        <label htmlFor="">
                                            <div className="containerEmail">
                                                <input type="text" required="required"/>
                                                <label>Email</label>
                                                <i></i>
                                            </div>
                                        </label>
                                        <label htmlFor="">
                                            <div className="containerPassword">
                                                <input type="password" required="required"/>
                                                <label>senha</label>
                                                <i></i>
                                            </div>
                                        </label>
                                        <div className="RememberAndForgot">
                                            <label htmlFor="">
                                                <input type="radio"
                                                       style={{color: 'darkred', backgroundColor: 'darkred'}}/>
                                                <span>Lembrar minha conta.</span>
                                            </label>
                                            <label htmlFor="">
                                                <Link>Esqueci minha senha ou login.</Link>
                                            </label>
                                        </div>
                                        <div className="loginAndRegister">
                                            <button className='loginButton' onClick={confirmLogin}>Login</button>
                                            <button className='loginButton'>Cadastrar</button>
                                        </div>
                                        <div className="Terms">
                                            <p>Ao se inscrever, você concorda com os <p>
                                                <Link>termos e Condições</Link> & <Link
                                                to="/">Politica de privacidade</Link>
                                            </p>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='boxOfImage'>
                        <div className="contentImg">
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Connect
