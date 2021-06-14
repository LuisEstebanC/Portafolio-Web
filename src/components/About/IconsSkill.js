import React from 'react'
import './IconsSkill.css';

import {IoLogoHtml5,IoLogoCss3,IoLogoJavascript,IoLogoReact } from 'react-icons/io5';
import { DiMsqlServer,DiMysql,DiSqllite, DiPhp,DiJava, DiAndroid } from "react-icons/di";
import { SiCsharp } from "react-icons/si";

export default function IconsSkill(){
    return(<>

                <div data-aos="fade-up" className="iconList">
                    <ul className="ulIcons">
                        <li className="jsLogo"><IoLogoJavascript size={60}/></li>
                        <li className="reactLogo"><IoLogoReact size={60}/></li>
                        <li className="htmlLogo"><IoLogoHtml5 size={60}/></li>
                        <li className="cssLogo"><IoLogoCss3 size={60}/></li>
                        <li className="cssLogo"><DiJava size={60}/></li>
                        <li className="cssLogo"><SiCsharp size={60}/></li>
                        <li className="cssLogo"><DiAndroid size={60}/></li>
                        <li className="cssLogo"><DiPhp size={60}/></li>
                        <li className="cssLogo"><DiMsqlServer size={60}/></li>
                        <li className="cssLogo"><DiMysql size={60}/></li>
                        <li className="cssLogo"><DiSqllite size={60}/></li>
                    </ul>
                </div>
    </>)
}

