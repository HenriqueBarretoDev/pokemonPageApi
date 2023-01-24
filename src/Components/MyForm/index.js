import React, { useState } from 'react';

function MyForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [repeatEmail, setRepeatEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        // Validações
        if (email !== repeatEmail) {
            alert('Os emails digitados não são iguais');
            return;
        }

        if (password !== repeatPassword) {
            alert('As senhas digitadas não são iguais');
            return;
        }

        // Salvar dados no Local Storage
        const formData = { name, email, password };
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Repetir Email:
                <input type="email" value={repeatEmail} onChange={e => setRepeatEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Senha:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <br />
            <label>
                Repetir Senha:
                <input type="password" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default MyForm;
