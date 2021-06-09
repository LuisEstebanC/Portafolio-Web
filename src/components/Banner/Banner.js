import React from 'react'
import Header from '../Banner/Header';
import BannerImage from './BannerImage';
import IconsGroup from './IconsGroup';

const Banner = () => {
    return (
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
    )
}

export default Banner;
