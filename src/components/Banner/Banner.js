import React from 'react'
import Header from '../Banner/Header';
import BannerImage from './BannerImage';
import IconsGroup from './IconsGroup';
import styled  from 'styled-components';

const HeaderC = styled.nav`
    width: 100%;
    overflow: hidden;
    min-height: 700px;
    background-color:${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const Banner = () => {
    return (
        <HeaderC>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6col-xl-6  imageHeader ">
                                <BannerImage/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-xl-6 ">
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
