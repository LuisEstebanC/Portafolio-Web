import React from 'react'
import Header from '../Banner/Header'; 
import BannerImage from './BannerImage';
import IconsGroup from './IconsGroup';

const Banner = () => {
    return ( 
              <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-xl-6 ">
                        <Header/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-xl-6 ">
                        <BannerImage/>
                        <IconsGroup/>
                    </div>
                </div>
            </div>
        </header>
    
      
    )
}

export default Banner;
