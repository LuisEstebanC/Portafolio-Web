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
        <div  className="header__content2">
        <ul className="header__ul">
            <ColorIcons>
                <a className="anchorIcons" href="https://www.facebook.com/luiss2030" target="blank">
                    <LiContainer>
                        <FaFacebookF/>
                    </LiContainer>
                </a>
                <a className="anchorIcons" href="https://www.instagram.com/luis_09_29/" target="blank">
                    <LiContainer>
                        <FaInstagram/>
                    </LiContainer>
                </a>
                <a className="anchorIcons" href="https://www.linkedin.com/in/luis-capellan-332a471b6/" target="blank">
                    <LiContainer>
                        <FaLinkedinIn/>
                    </LiContainer>
                </a>
                <a className="anchorIcons" href="https://github.com/LuisEstebanC" target="blank">
                    <LiContainer>
                        <FaGithub/>
                    </LiContainer>
                </a>
            </ColorIcons>
            </ul>
    </div>
    )
}

export default IconsGroup;
