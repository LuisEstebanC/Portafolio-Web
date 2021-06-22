import React,{useState} from 'react';
import Icons from './IconsSkill';


const About = () => {
    const [header] = useState({
        subHeader: "About me",
        text:"My name is Luis Esteban, I am a software developer, I like to be in constant learning and improve every time I can, I try to keep myself informed about new technologies and utilities, my desire is to become an excellent software developer, able to translate any idea into reality with my code, while I meet and learn from people with the same desire to improve. "
    })
    return (
        <div className="About">
            <div className="container">
                <div className="row theRow">
                    <div className="col-12 col-md-12">
                        <div className="common">
                            <h1 data-aos="fade-up" className="mainHeader">{header.subHeader}</h1>
                            <p data-aos="fade-up" className="mainContent">{header.text}</p>
                            <div className="commonBorder"></div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-6">
                        <div className="common">
                            <h1 data-aos="fade-up" className="mainHeader">{header.subHeader}</h1>
                            <p data-aos="fade-up" className="mainContent">{header.text}</p>
                            <div className="commonBorder"></div>
                        </div>
                    </div> */}
                </div>
                <Icons/>
            </div>
        </div>
    )
}

export default About;
