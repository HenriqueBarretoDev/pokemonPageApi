import React, {useEffect, useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './index.css'
import {useAuth} from "../../Services/Hooks/useAuth";

const Forms = () => {

    const {
        setSuccessRegister,
        setUserNotRegister,
        setUserNotLogged,
        setAlreadyRegisteredUse,
        setTime
    } = useAuth()

    const [formData, setFormData] = useState({});

    const handleSubmit = (values, {setSubmitting}) => {
        localStorage.setItem('formData', JSON.stringify(values));
        setSubmitting(false);
        setFormData(values);
        setSuccessRegister(true)
        setUserNotRegister(false);
        setTime(4)
        setUserNotLogged(false)
        setAlreadyRegisteredUse(true)
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Digite o seu nome.")
            .min(3, "Mínimo de 3 letras"),
        email: Yup.string()
            .email("Endereço de e-mail inválido")
            .required("E-mail é obrigatório"),
        confirmEmail: Yup.string()
            .oneOf(
                [Yup.ref("email"), null],
                "Os endereços de e-mail devem ser idênticos"
            )
            .required("Confirme o e-mail"),
        password: Yup.string()
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .required("Senha é obrigatória"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "As senhas devem ser idênticas")
            .required("Confirme a sua senha."),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                confirmEmail: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({errors, touched}) => (
                <Form className={"formContainer"}>
                    <div>
                        <Field name="name" placeholder="Digite o seu nome."/>
                        <ErrorMessage
                            name="name"
                            component="div"
                            className="erroRegisterMsg"
                        />
                    </div>
                    <div>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Digite o seu e-mail."
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className='erroRegisterMsg'
                        />
                    </div>
                    <div>
                        <Field
                            name="confirmEmail"
                            type="email"
                            placeholder="Confirme o seu e-mail."
                        />
                        <ErrorMessage
                            name="confirmEmail"
                            component="div"
                            className="erroRegisterMsg"
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            type="password"
                            placeholder="Digite a sua senha."
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="erroRegisterMsg"
                        />
                    </div>
                    <div>
                        <Field
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirme a sua senha."
                        />
                        <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="erroRegisterMsg"
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </Form>
            )}
        </Formik>
    );
};

export default Forms;
