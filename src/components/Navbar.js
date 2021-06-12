import React, { useState,  } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';
import styled  from 'styled-components';
import{ FaMoon} from "react-icons/fa";


// const Toggle = styled.button`
//     cursor: pointer;
//     height: 50px;
//     width: 50px;
//     border-radius: 50%;
//     border: none;
//     background-color:${props => props.theme.pageBackground};
//     color: ${props => props.theme.titleColor};
//     &:focus {
//         outline: none;
//     }
//     transition: all .5s ease;
// `;
const NavbarC = styled.nav`
    width: 100%;
    height: 74px;
    position: fixed;
    z-index: 1;
    top: 0;
    flex-wrap: wrap;
    background-color:${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const AnchorTags = styled.a`
    text-decoration: none;
    color: ${props => props.theme.titleColor};
    font-weight: 500;
    font-size: 15PX;
    padding: 0 9PX;
    transition: all .5s ease;

`;



function Navbar (props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    function changeTheme(){
        if(props.theme === 'light'){
            props.setTheme('dark');
        }else{
            props.setTheme('light');
        }
    }

    return (
        <NavbarC>
            <nav className="navbar">
                <ul className="navbar__left">
                    <div className="navbar__left-logo">
                        <img src="/images/logotipo.png" alt="Logo"/>
                    </div>

                </ul>
                <div className='menu-icon' onClick={handleClick}>
                        <li className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                <ul className={click ? 'nav-menu active navbar__right'  : 'nav-menu navbar__right'}>

                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={handleClick}>
                                <AnchorTags href={item.href}>{item.title}</AnchorTags>
                            </li>
                        )
                        })}
                            <div>
                                <FaMoon/>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round" onClick={changeTheme}></span>
                                </label>
                            </div>
                </ul>
            </nav>
        </NavbarC>
    )
}

export default Navbar;

