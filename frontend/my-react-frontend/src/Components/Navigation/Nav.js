import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/gb.png'
import { logout, signout } from '../../utils/icons'
import { menuitems } from '../../utils/menuitems'
import { useNavigate } from 'react-router-dom'

function Navigation({active, setActive}) {

    const navigate = useNavigate(); 

    
    const logout = () => {
        // logout logic
        navigate('/login');
    };
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Ahmed</h2>
                    <p>Your money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuitems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <button onClick={logout} className="signout-btn">
                    {signout} Sign Out
                </button>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`

    padding: 2rem 1.5rem;
    width: 350px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 300;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
    .signout-btn {
        background-color: #FF5733; /* Change as needed */
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 5px; 
    }
    
    .signout-btn:hover {
        background-color: #c00; 
    }
    

   
`;

export default Navigation