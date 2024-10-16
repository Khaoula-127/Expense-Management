import React, { useState } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, error } = useGlobalContext()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await login(username, password)
        if (success) {
            navigate('/')
        }
    }
    const handleRegisterRedirect = () => {
        navigate('/register');  // Redirect to the register page
      };

    return (
        <LoginStyled>
        <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                
            <input 
                type="text" 
                id="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter Username" 
                required 
            />
            </div>
            <div className="form-group">
            <input 
                type="password" 
                id="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            </div>
            <button type="submit" className="login-button">Login</button>
            {error && <p className="error-message">{error}</p>}
            <button type="button" className="register-button" onClick={handleRegisterRedirect}>Register</button>
        </form>
        </div>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
    .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
    }

    .login-form {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    }

    .login-form h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
    }

    .form-group {
    margin-bottom: 1rem;
    }

    .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
    }

    .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    }

    .login-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #1877f2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    .login-button:hover {
    background-color: #166fe5;
    }

    .register-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #1877f2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }
    
    .register-button:hover {
    background-color: #166fe5;
    }

    .error-message {
    color: #ff3333;
    text-align: center;
    margin-top: 1rem;
    }
`;
export default Login;