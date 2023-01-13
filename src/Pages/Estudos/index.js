import React, {useState} from 'react'
import './index.css'
import {alertTitleClasses} from "@mui/material";

const Estudos = () => {
    const [nome, setNome] = useState('')
    const [numeros, setNumeros] = useState(null)
    const [senha, setSenha] = useState()
    const [email, setemail] = useState('')
    const [cpf, setCpf] = useState(null)

    const [dados, setDados] = useState({})

    const [currentRadioValue, setCurrentValue] = React.useState('on');
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

    /// maneira mais clean
    const handleRadioChange = value => {
        setCurrentValue(value);
    };

    function pegarDadosForm(e) {
        e.preventDefault()
        // alert('Dados enviados')
        setDados({[e.target.name]: e.target.value})
        console.log('hit', dados)

    }

    function pararEnvio(e) {
        // e.preventDefault()
        alert('cliquei')
    }

    return (
        <div className="inp">
            {/*<button onChange={pegarDadosDoNome.e.target.value}> next</button>*/}

            {/*<form action="">*/}
            {/*<input type="text" onChange={pegarDadosDoNome} placeholder={'digite seu nome'}/>*/}
            {/*<input type="number" onChange={pegarNumeros} placeholder={'digite um número'}/>*/}
            {/*<input type="password" onChange={pegarSenha} placeholder={'digite sua senha'}/>*/}
            {/*<input type="email" onChange={pegarEmail} placeholder={'digite seu email'}/>*/}


            {/*</form>*/}

            {/*maneira mais simples abaixo */}
            <div className="maneiraFacil">
                <p>Informe seus dados para cadastrar</p>

                <form action="" className={'form'} onSubmit={pegarDadosForm}>
                    <input type="text" onChange={pegarDadosForm} placeholder={'Nome'} name='nome'/>
                    <input type="text" onChange={pegarDadosForm} placeholder={'Sobrenome'} name='sobrenome'/>
                    <input type="number" onChange={pegarDadosForm} placeholder={'CPF'} name={'cpf'}/>
                    <input type="email" onChange={pegarDadosForm} placeholder={'Email'} name={'email'}/>
                    <input type="email" onChange={pegarDadosForm} placeholder={'Confirmar email'}
                           name={'repetirEmail'}/>
                    <input type="password" onChange={pegarDadosForm} placeholder={'senha'} name={'senha'}/>
                    <input type="password" onChange={pegarDadosForm} placeholder={'confirmar senha'}
                           name={'repetirSenha'}/>
                    <span>
                       {/*Sim<input type="radio" onChange={pegarDadosForm} name={'sim'}/>*/}
                        {/* Não<input type="radio" onChange={pegarDadosForm} name={'não'}/>*/}

                   </span>

                    {/*aqui*/}
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div>
                            <input
                                // name="radio-item-1"
                                name={'sim'}
                                value="on"
                                type="radio"
                                onChange={e => handleRadioChange(e.target.value)}
                                defaultChecked={currentRadioValue === 'on'}

                            />
                            <label htmlFor="radio-item-1">Sim</label>
                            {/*{currentRadioValue === 'on' && <div>sim</div>}*/}
                        </div>
                        <div>
                            <input
                                // name="radio-item-1"
                                name={'sim'}
                                value="off"
                                type="radio"
                                onChange={e => setCurrentValue(e.target.value)}
                                defaultChecked={currentRadioValue === 'off'}
                            />
                            <label htmlFor="radio-item-2">Não</label>
                            {/*{currentRadioValue === 'off' && <div> não</div>}*/}
                        </div>
                    </div>
                    {/*até aqui*/}
                    <input type="submit"/>
                </form>
            </div>

            <div className="dadosEnviados">
                <span><strong>Dados Enviados</strong></span>
                <p>campo nome: <strong>{dados.nome}</strong></p>
                <p>campo número: <strong>{dados?.sobrenome}</strong></p>
                <p>campo cpf: <strong>{dados.cpf}</strong></p>
                <p>campo email: <strong>{dados.email}</strong></p>
                <p>campo senha: <strong>{dados.senha}</strong></p>
            </div>

        </div>
    )
}
export default Estudos
