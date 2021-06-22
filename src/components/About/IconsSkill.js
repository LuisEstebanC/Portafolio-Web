import React from 'react'
import './IconsSkill.css';

import {IoLogoHtml5,IoLogoCss3,IoLogoJavascript,IoLogoReact } from 'react-icons/io5';
import { DiMsqlServer,DiMysql, DiPhp,DiJava, DiAndroid } from "react-icons/di";
import { SiCsharp } from "react-icons/si";

export default function IconsSkill(){
    return(<>
                <div className="iconsContent">
                    <div data-aos="fade-up" className="iconList">
                        <ul className=" containerIco float ulIcons">
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank">
                                <li className="item float-item jsLogo"><IoLogoJavascript size={60}/></li>
                            </a>
                            <a href="https://reactjs.org/" target="blank">
                                <li className="item float-item reactLogo"><IoLogoReact size={60}/></li>
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/html" target="blank">
                                <li className="item float-item  htmlLogo"><IoLogoHtml5 size={60}/></li>
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/css" target="blank">
                                <li className="item float-item  cssLogo"><IoLogoCss3 size={60}/></li>
                            </a>
                            <a href="https://java.com/download/help/whatis_java.html" target="blank">
                                <li className="item float-item  javaLogo"><DiJava size={60}/></li>
                            </a>
                            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target="blank">
                                <li className="item float-item  csharpLogo"><SiCsharp size={60}/></li>
                            </a>
                            <a href="https://developer.android.com/" target="blank">
                                <li className="item float-item  androidLogo"><DiAndroid size={60}/></li>
                            </a>
                            <a href="https://www.php.net/docs.php" target="blank">
                                <li className="item float-item  phpLogo"><DiPhp size={60}/></li>
                            </a>
                            <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="blank">
                                <li className="item float-item  SqlServerLogo"><DiMsqlServer size={60}/></li>
                            </a>
                            <a href="https://www.mysql.com/" target="blank">
                                <li className="item float-item  mySqlLogo"><DiMysql size={60}/></li>
                            </a>
                        </ul>
                    </div>
                </div>
    </>)
}

