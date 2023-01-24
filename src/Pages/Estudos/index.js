import React, {useState} from 'react'
import './index.css'
import {alertTitleClasses} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Estudos = () => {
    // const [nome, setNome] = useState('')
    // const [numeros, setNumeros] = useState(null)
    // const [senha, setSenha] = useState()
    // const [email, setemail] = useState('')
    // const [cpf, setCpf] = useState(null)
    //
    // const [dados, setDados] = useState({})
    //
    // const [currentRadioValue, setCurrentValue] = React.useState('on');
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
    // const handleRadioChange = value => {
    //     setCurrentValue(value);
    // };
    //
    // function pegarDadosForm(e) {
    //     e.preventDefault()
    //     // alert('Dados enviados')
    //     setDados({[e.target.name]: e.target.value})
    //     console.log('hit', dados)
    //
    // }
    //
    // function pararEnvio(e) {
    //     // e.preventDefault()
    //     alert('cliquei')
    // }
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    //
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     localStorage.setItem('name', name);
    //     localStorage.setItem('password', password);
    //     localStorage.setItem('email', email);
    // }
    const [formData, setFormData] = useState({});

    const handleSubmit = (values, { setSubmitting }) => {
        setFormData(values);
        localStorage.setItem('formData', JSON.stringify(formData));
        setSubmitting(false);
    }

    return (
        <div className="inp">


            {/*<div className="maneiraFacil">*/}
            {/*    <p>Informe seus dados para cadastrar</p>*/}

            {/*    <form action="" className='form' onSubmit={pegarDadosForm}>*/}
            {/*        <input type="text" onChange={pegarDadosForm} placeholder={'Nome'} name='nome'/>*/}
            {/*        <input type="text" onChange={pegarDadosForm} placeholder={'Sobrenome'} name='sobrenome'/>*/}
            {/*        <input type="number" onChange={pegarDadosForm} placeholder={'CPF'} name={'cpf'}/>*/}
            {/*        <input type="email" onChange={pegarDadosForm} placeholder={'Email'} name={'email'}/>*/}
            {/*        <input type="email" onChange={pegarDadosForm} placeholder={'Confirmar email'}*/}
            {/*               name={'repetirEmail'}/>*/}
            {/*        <input type="password" onChange={pegarDadosForm} placeholder={'senha'} name={'senha'}/>*/}
            {/*        <input type="password" onChange={pegarDadosForm} placeholder={'confirmar senha'}*/}
            {/*               name={'repetirSenha'}/>*/}
            {/*        <span>*/}

            {/*       </span>*/}


            {/*        <div style={{display: 'flex', flexDirection: 'row'}}>*/}
            {/*            <div>*/}
            {/*                <input*/}
            {/*                    // name="radio-item-1"*/}
            {/*                    name={'sim'}*/}
            {/*                    value="on"*/}
            {/*                    type="radio"*/}
            {/*                    onChange={e => handleRadioChange(e.target.value)}*/}
            {/*                    defaultChecked={currentRadioValue === 'on'}*/}

            {/*                />*/}
            {/*                <label htmlFor="radio-item-1">Sim</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input*/}
            {/*                    // name="radio-item-1"*/}
            {/*                    name={'sim'}*/}
            {/*                    value="off"*/}
            {/*                    type="radio"*/}
            {/*                    onChange={e => setCurrentValue(e.target.value)}*/}
            {/*                    defaultChecked={currentRadioValue === 'off'}*/}
            {/*                />*/}
            {/*                <label htmlFor="radio-item-2">Não</label>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <input type="submit"/>*/}
            {/*    </form>*/}
            {/*</div>*/}

            {/*<div className="dadosEnviados">*/}
            {/*    <span><strong>Dados Enviados</strong></span>*/}
            {/*    <p>campo nome: <strong>{dados.nome}</strong></p>*/}
            {/*    <p>campo número: <strong>{dados?.sobrenome}</strong></p>*/}
            {/*    <p>campo cpf: <strong>{dados.cpf}</strong></p>*/}
            {/*    <p>campo email: <strong>{dados.email}</strong></p>*/}
            {/*    <p>campo senha: <strong>{dados.senha}</strong></p>*/}
            {/*</div>*/}

            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <label>*/}
            {/*        Nome:*/}
            {/*        <input type="text" value={name} onChange={event => setName(event.target.value)} />*/}
            {/*    </label>*/}
            {/*    <br />*/}
            {/*    <label>*/}
            {/*        Senha:*/}
            {/*        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />*/}
            {/*    </label>*/}
            {/*    <br />*/}
            {/*    <label>*/}
            {/*        Email:*/}
            {/*        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />*/}
            {/*    </label>*/}
            {/*    <br />*/}
            {/*    <input type="submit" value="Enviar" />*/}
            {/*</form>*/}
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Name is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(8, 'Password must be at least 8 characters')
                        .required('Password is required')
                })}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field name="name" type="text" placeholder="Name" />
                        <ErrorMessage name="name" component="div" />

                        <Field name="email" type="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" />

                        <Field name="password" type="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Estudos
