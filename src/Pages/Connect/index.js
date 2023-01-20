import React, {useEffect} from 'react'
import './index.css'
import Header from "../../Components/Header";
import pokebola from '../../Assets/Images/pokebola-go.png'
import Footer from "../../Components/Footer";

const Connect = () => {
    useEffect(() => {
        goToTop()
    }, {})

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className="connect">
            <Header/>
            <div className='connectBox'>
                <div className="containerConnect">
                    <div className="infoConnect">
                        <div className={'containerConnectLeft'}>
                            <img src={pokebola} alt=""/>
                            <h1>Bem vindo novamente, Faça login <h1>na sua conta.</h1></h1>
                        </div>
                        <div className="loginSocialNetworks">
                            <button>Facebook</button>
                            <button>Google</button>
                        </div>

                        <p className={'separatorLogin'}>-ou-</p>

                        <div className={'containerConnectRight'}>
                            <form action="">
                                <label htmlFor="">
                                    <input type="text" placeholder={'email'}/>
                                </label>
                                <label htmlFor="">
                                    <input type="password" placeholder={'password'}/>
                                </label>
                                <div className="RememberAndForgot">
                                    <label htmlFor="">
                                        <input type="radio"/>
                                        <span>Lembrar minha conta.</span>
                                    </label>
                                    <label htmlFor="">
                                        <input type="radio"/>
                                        <span>Esqueci minha senha ou login.</span>
                                    </label>
                                </div>
                                <div className="loginandRegister">
                                    <button>Login</button>
                                    <button>Cadastrar</button>
                                </div>
                                <div className="Terms">
                                    <p>Ao se inscrever, você concorda com os <p>
                                        <a href="/">termos e Condições</a> &  <a
                                        href="/">Politica de privacidade</a>
                                    </p>
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div className={'boxOfImage'}>
                    <div className="contentImg">
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Connect
