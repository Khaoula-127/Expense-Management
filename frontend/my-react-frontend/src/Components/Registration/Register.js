import React, { useState } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [currency, setCurrency] = useState('USD')
    const [fullName, setFullName] = useState('')
    const { register, error } = useGlobalContext()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await register(fullName, username, email, currency, password)
        if (success) {
            navigate('/dashboard')
        }
    }

    return (
        <RgeisterStyled>
            <div className="register-container">
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <input 
                    type="text" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                    placeholder="Full Name" 
                    required 
                    />
                    </div>
                    <div className="form-group">
                    <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                required 
            />
            </div>
            <div className="form-group">
            <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email Address" 
                    required 
                    />
                    </div>
                    <div className="form-group">
            <label htmlFor="currency">Currency Preference</label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="GBP">AU</option>
            </select>
          </div>
            <div className="form-group">
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            </div>
            <button type="submit" className="register-button">Register</button>
            {error && <p>{error}</p>}
        </form>
        </div>
        </RgeisterStyled>
    )
}
const RgeisterStyled = styled.div`
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }

  .register-form {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .register-form h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group input,
  .form-group select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
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
export default Register