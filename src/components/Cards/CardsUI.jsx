import React from 'react';
import imgPlaceHolder from '../../assets/images/imgPlaceHolder.png';
import './CardsStyle.css';


const CardsUI = props => {
    return (
        <div>
            <div className="circle">
                <div className="imgC ">
                    <img src={props.imgsrc} alt="Imagen Placce Holder" />
                </div>
            </div>
                <div className="contentC">
                    <h4 className="black-text">{props.title}</h4>
                    <p className="">{props.description}</p>
                    
                    <a href={props.url} target="_blank" className="btn btn-outline-success">View source code</a>
                </div>
        </div>
    );
}

export default CardsUI
