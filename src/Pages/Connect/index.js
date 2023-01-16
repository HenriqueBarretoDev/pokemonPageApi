import React from 'react'
import './index.css'
import Header from "../../Components/Header";
import pokebola from '../../Assets/Images/pokebola-go.png'
import Footer from "../../Components/Footer";

const Connect = () => {
    return (
        <div className="connect">
            <Header/>
            <div className="containerConnect">
                <div className="infoConnect">
                    <div className={'containerConnectLeft'}>
                        <p>Bem vindo Treinador(a)!</p>
                        <img src={pokebola} alt=""/>
                    </div>
                    <div className={'containerConnectRight'}>
                        <form action="">
                            <div className="formInfo">
                                <input required="" placeholder="Name" className="formField" type="text"/>
                                <label className="form__label" htmlFor="name">Email</label>
                            </div>
                            <div className="formInfo">
                                <input required="" placeholder="Name" className="formField" type="password"/>
                                <label className="form__label" htmlFor="name">Senha</label>
                            </div>
                            <div className={'buttonConnect'}>
                                <button>
                                    Entrar
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Connect
