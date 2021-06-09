import React, { useState, useEffect } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';

function Navbar (props) {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click);

    // const showButton =() =>{
    //     if(window.innerWidth <= 960) {
    //        // setButton(false);
    //     } else{
    //        // setButton(true);
    //     }
    // };

    // useEffect(()=>{
    //     showButton()
    // }, []);
    // window.addEventListener('resize', showButton);

    return (
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
                            <a href={item.href}>{item.title}</a>
                        </li>
                    )
                    })}
            </ul>
        </nav>
    )
}

export default Navbar;

