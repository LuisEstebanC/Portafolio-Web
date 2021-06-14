import React from 'react';
// import imgPlaceHolder from '../../assets/images/imgPlaceHolder.png';
import './CardsStyle.css';
import './CardsStyleDark.css'



const CardsUI = (props) => {
    return (
        <div>
            <div className={props.classNames}>
                <div className="imgC ">
                    <img src={props.imgsrc} alt={props.alt} />
                </div>
            </div>
                <div className="contentC">
                    <h4 className="black-text">{props.title}</h4>
                    <p className="">{props.description}</p>
                    <a href={props.url} target="_blank" rel="noreferrer">{props.buttonContent}</a>
                </div>
        </div>
    );
}

export default CardsUI
