import React from 'react'
import Header from '../Banner/Header';
import BannerImage from './BannerImage';
import IconsGroup from './IconsGroup';
import styled  from 'styled-components';
import './Banner.css'

const HeaderC = styled.div`
    width: 100%;
    overflow: hidden;
    min-height: 700px;
    background-color:${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
    @media (min-height: 900px) {
        height: 100vh;
        .header .container {
            margin-top: 9%;
        }
    }
    @media (min-height: 760px) {
        height: 100vh;
    }
`;

const Banner = () => {
    return (
        <HeaderC>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="imageHeader">
                                <BannerImage/>
                            </div>
                            <div className="contentHeader">
                                <Header/>
                                <IconsGroup/>
                            </div>
                        </div>
                    </div>
                </header>
        </HeaderC>
    )
}

export default Banner;
