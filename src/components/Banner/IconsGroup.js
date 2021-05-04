import React from 'react'
import{FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope, } from "react-icons/fa";

function IconsGroup() {
    return (
        <div className="header__content2">
        <ul className="header__ul">
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
            </ul>
    </div>
    )
}

export default IconsGroup;
