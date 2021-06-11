import React from 'react'
import{FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, } from "react-icons/fa";
import styled  from 'styled-components';

const ColorIcons = styled.div`
list-style: none;
    display: flex;
    margin: 0px 0px 0px 35%;
 color: ${props => props.theme.iconsColor};
 transition: all .5s ease;
`;

const LiContainer = styled.li`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    box-shadow: ${props => props.theme.boxShadow};

`

function IconsGroup(props) {
    return (
        <div className="header__content2">
        <ul className="header__ul">
            <ColorIcons>
                <LiContainer>
                    <FaFacebookF/>
                </LiContainer>
                <LiContainer>
                    <FaInstagram/>
                </LiContainer>
                <LiContainer>
                    <FaLinkedinIn/>
                </LiContainer>
                <LiContainer>
                    <FaGithub/>
                </LiContainer>
            </ColorIcons>
            </ul>
    </div>
    )
}

export default IconsGroup;
