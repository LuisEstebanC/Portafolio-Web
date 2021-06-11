import React from 'react'
import{FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope, } from "react-icons/fa";
import styled  from 'styled-components';

const ColorIcons = styled.div`
list-style: none;
    display: flex;
    margin: 0px 0px 0px 35%;
 color: ${props => props.theme.iconsColor};
 transition: all .5s ease;
`

function IconsGroup(props) {
    return (
        <div className="header__content2">
        <ul className="header__ul">
            <ColorIcons>
                <li>
                    <FaFacebookF/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedinIn/>
                </li>
                <li>
                    <FaGithub/>
                </li>
                <li>
                    <FaEnvelope/>
                </li>
            </ColorIcons>
            </ul>
    </div>
    )
}

export default IconsGroup;
