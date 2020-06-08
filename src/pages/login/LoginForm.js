import React, { useState } from 'react'
import './login.css'
import { login } from '../../services/Api'
import {notification} from 'antd'
import {useHistory } from 'react-router-dom';
import {ACCESS_TOKEN} from '../common/Constantes'
const LoginForm = props => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
	const history = useHistory();

    function handleLogin(e) {
        e.preventDefault()
        const data = {
            userName,
            password
        }

        login(data)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                history.push("/clientes")
            }).catch(error => {
                if(error.status === 401) {
                    notification.error({
                        message: 'Cliente App',
                        description: 'Seu usuário ou senha estão incorretos. Por favor tente novamente!'
                    });                    
                } else {
                    notification.error({
                        message: 'Cliente App',
                        description: error.message || 'Desculpe! Algo errado aconteceu.  Por favor tente novamente!'
                    });                                            
                }
            });

    }
    return (

        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input placeholder="Usuário" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
                    <input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <button className="button" type="submit">Login</button>
                </form>
            </section>
        </div>

    )
}

export default LoginForm