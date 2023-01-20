import React, {useEffect, useState} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom';
import './index.css'

import Header from '../../Components/Header'
import {alertTitleClasses} from "@mui/material";
import Button from '../../Components/Button'
import Footer from "../../Components/Footer";

const Register = () => {

    const [nome, setNome] = useState('')
    const [numeros, setNumeros] = useState(null)
    const [senha, setSenha] = useState()
    const [email, setemail] = useState('')
    const [cpf, setCpf] = useState(null)
    const [dados, setDados] = useState({})
    const [currentRadioValue, setCurrentValue] = React.useState('on');
    const location = useLocation();

    // function pegarDadosDoNome(e) {
    //     e.preventDefault()
    //     setNome(e.target.value)
    // }

    //
    // function pegarNumeros(e) {
    //     setNumeros(e.target.value)
    // }

    // function pegarSenha(e) {
    //     setSenha(e.target.value)
    // }

    // function pegarEmail(e) {
    //     setemail(e.target.value)
    // }

    const handleRadioChange = value => {
        setCurrentValue(value);
    };

    function pegarDadosForm(e) {
        e.preventDefault()
        setDados({[e.target.name]: e.target.value})
    }

    function pararEnvio(e) {
        // e.preventDefault()
        alert('hit')
    }


    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    useEffect(()=>{
        goToTop()
    },{})

    return (
        <div className="register">
            <Header/>
            <div className="contentRegister">
                <h1>Informe seus dados para cadastrar</h1>
                <form action="" className={'form'} onSubmit={pegarDadosForm}>
                    <label htmlFor="" className={'textRegisterAndNewAcc'}>
                        <input type="text" onChange={pegarDadosForm} placeholder={'Nome'} name='nome'/>
                    </label>
                    <label htmlFor="" className={'textRegisterAndNewAcc'}>
                        <input type="email" onChange={pegarDadosForm} placeholder={'Email'} name={'email'}/>
                    </label>
                    <label htmlFor="" className={'textRegisterAndNewAcc'}>
                        <input type="email" onChange={pegarDadosForm} placeholder={'Confirmar Email'}
                               name={'repetirEmail'}/>
                    </label>
                    <label htmlFor="" className={'textRegisterAndNewAcc'}>
                        <input type="password" onChange={pegarDadosForm} placeholder={'senha'} name={'senha'}/>
                    </label>
                    <label htmlFor="" className={'textRegisterAndNewAcc'}>
                        <input type="password" onChange={pegarDadosForm} placeholder={'confirmar senha'}
                               name={'repetirSenha'}/>
                    </label>

                    <label htmlFor="" className={'textRegisterAndNewAccTerms'}>
                        <a>Aceita os termos de uso</a>
                        <div className={'terms'}>
                            <input
                                name={'sim'}
                                value="on"
                                type="radio"
                                onChange={e => handleRadioChange(e.target.value)}
                                defaultChecked={currentRadioValue === 'on'}

                            />
                            <span
                                className={'acceptTerms'} htmlFor="radio-item-1">Sim</span>
                            <input
                                name={'sim'}
                                value="off"
                                type="radio"
                                onChange={e => setCurrentValue(e.target.value)}
                                defaultChecked={currentRadioValue === 'off'}
                            />
                            <span className={'acceptTerms'}
                                  htmlFor="radio-item-2">Não</span>
                        </div>
                    </label>
                    <label htmlFor="">
                        <input type="submit" className={'send'}/>
                    </label>
                </form>

            </div>
            <Footer/>
        </div>
    )
}
export default Register
