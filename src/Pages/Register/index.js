import React, {useEffect, useState} from 'react'
import {Link, useHistory, useLocation, useNavigate} from 'react-router-dom';
import './index.css'

import HeaderMobile from '../../Components/Header'
import {alertTitleClasses} from "@mui/material";
import Button from '../../Components/Button'
import Footer from "../../Components/Footer";
import successRegisterIcon from '../../Assets/Icons/sucessRegister.webp'
import {useAuth} from "../../Services/Hooks/useAuth";
import Forms from '../../Components/Forms'
import pokebola from '../../Assets/Images/pokebola-go.png'

const Register = () => {

    const [dados, setDados] = useState({})
    const [currentRadioValue, setCurrentValue] = React.useState('on');
    const navigate = useNavigate();

    const handleRadioChange = value => {
        setCurrentValue(value);
    };
    const {successRegister, userNotRegister, time, setTime} = useAuth()

    const timer = () => {
        return setTimeout(() => {
            const currentTime = time - 1;
            setTime(currentTime);
        }, 1000)
    }

    function pegarDadosForm(e) {
        e.preventDefault()
        setDados({[e.target.name]: e.target.value})
    }

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        goToTop();
    }, [])

    useEffect(() => {
        const timeout = timer();

        if (time === 0) {
            clearTimeout(timeout);
            goToConnect()
        }
    });

    function goToConnect() {
        navigate("/logar")
    }

    return (
        <div className="register">
            <HeaderMobile/>
            <div className="contentRegister">
                {userNotRegister && (
                    <>
                        <h1>Informe seus dados para cadastrar</h1>
                        <Forms/>
                    </>
                )}

                {successRegister && (
                    <div className='successRegister'>
                        <div>
                            <h2>Cadastro feito com sucesso</h2>
                        </div>
                        <img src={successRegisterIcon} alt="cadastro feito com sucesso"/>
                        <p>Você será redirecionado para sua jornada, aguarde...{time}</p>
                        <img src={pokebola} alt="" className='loading'/>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default Register
