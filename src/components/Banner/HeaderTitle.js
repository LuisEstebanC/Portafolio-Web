import React,{useEffect} from 'react';
import styled  from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'

const Tittle = styled.div`
 color: ${props => props.theme.fontColor};
 transition: all .2s ease;
`;

function HeaderTitle() {

    useEffect(() => {
       Aos.init({duration: 2000});
       Aos.refresh();
    }, []);

    return (
        <div className="">
            <Tittle>
                <h1 data-aos="fade-left" className="hello">Hello,</h1>
            </Tittle>
            <div className="wrapper">
                <Tittle>
                    <h1 data-aos="fade-left">I'M  Luis Esteban</h1>
                </Tittle> 
            </div>
        </div>
    )
}

export default HeaderTitle;
