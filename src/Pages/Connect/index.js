import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import './index.css'
import pokebola from '../../Assets/Images/pokebola-go.png'
import Footer from "../../Components/Footer";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../Services/Hooks/useAuth";
import facebookIcon from '../../Assets/Icons/facebook-round-color-icon.webp'
import googleIcon from '../../Assets/Icons/google-color-icon.webp'
import Header from "../../Components/Header";

const Connect = () => {

    const {setLoggedInUser, setUserNotLogged, setAlreadyRegisteredUse} = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    function goToRegister() {
        navigate("/registrar")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Informe o Email e a Senha antes de prosseguir");
            return;
        }
        setUserNotLogged(false)
        setLoggedInUser(true)
        setAlreadyRegisteredUse(false)
        goToHome()

    }

    return (
        <>
            <div className='hiddenMobile'>
                <Header/>
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
                                        <button style={{backgroundColor: '#4267B2', border: '1px solid black'}}>
                                            <img src={facebookIcon} alt=""/> Facebook
                                        </button>
                                        <button style={{backgroundColor: '#898F9C', border: '1px solid black'}}>
                                            <img src={googleIcon} alt=""/> Google
                                        </button>
                                    </div>

                                    <p className='separatorLogin'>-ou-</p>

                                    <div className='containerConnectRight'>
                                        <form action="">
                                            <label htmlFor="">
                                                <div className="containerEmail">
                                                    <input type="email" required="required"
                                                           onChange={e => setEmail(e.target.value)}/>
                                                    <label>Email</label>
                                                    <i/>
                                                </div>
                                            </label>
                                            <label htmlFor="">
                                                <div className="containerPassword">
                                                    <input type="password" required="required"
                                                           onChange={e => setPassword(e.target.value)}/>
                                                    <label>senha</label>
                                                    <i/>
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
                                                <button className='loginButton' onClick={handleSubmit}>Login</button>
                                                <button className='loginButton'>Cadastrar
                                                </button>
                                            </div>
                                            <div className="Terms">
                                                <p>Ao se inscrever, você concorda com os <p>
                                                    <Link>Termos e Condições</Link> & <Link
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
            </div>
            <div className='hiddenDesktop'>
                <div className="connectMobile">
                    <Header/>
                    <div className="containerMobile">
                        <div className="backgroundConnectGray">
                            <div className="titleConnectPage">
                                <h1>Bem vindo novamente, Por gentileza<h1> fazer login na sua conta.</h1></h1>
                                <span className='loginSocialNetworksMobile'>
                                 <button style={{backgroundColor: '#4267B2', border: '1px solid black'}}>
                                     <img src={facebookIcon} alt=""/> Facebook
                                </button>

                               <button style={{backgroundColor: '#898F9C', border: '1px solid black'}}>
                                   <img src={googleIcon} alt=""/> Google
                                </button>
                            </span>
                                <h3 className='separatorLoginMobile'>-ou-</h3>

                                <div className="emailAndPassword">
                                    <label htmlFor="">
                                        <div className="containerEmailMobile">
                                            <input type="email" required="required"
                                                   onChange={e => setEmail(e.target.value)}/>
                                            <label>Email</label>
                                            <i/>
                                        </div>
                                    </label>
                                    <label htmlFor="">
                                        <div className="containerPasswordMobile">
                                            <input type="password" required="required"
                                                   onChange={e => setPassword(e.target.value)}/>
                                            <label>senha</label>
                                            <i/>
                                        </div>
                                    </label>
                                </div>
                                <div className='RememberAndForgotMobile'>
                                    <label htmlFor="">
                                        <input type="radio"
                                               style={{color: 'darkred', backgroundColor: 'darkred'}}/>
                                        <span>Lembrar minha conta.</span>
                                    </label>
                                    <label htmlFor="">
                                        <Link>Esqueci minha senha ou login.</Link>
                                    </label>
                                </div>
                                <div className='boxLoginAndRegisterButtons'>
                                    <button className='loginButtonMobile' onClick={handleSubmit}>Login</button>
                                    <button className='loginButtonMobile' onClick={goToRegister}>Cadastrar</button>
                                </div>
                                <div className="TermsMobile">
                                    <p>Ao se inscrever, você concorda com os</p>
                                    <p>
                                        <Link>Termos e Condições</Link> &
                                        <Link> Politica de privacidade</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default Connect
