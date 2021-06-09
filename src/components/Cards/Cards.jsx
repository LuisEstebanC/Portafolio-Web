import React,{Component} from 'react';
import {CardsItem} from './CardsItems';


import Card from './CardsUI';

function Cards (){
   
        return(
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className='common3'>
                                    <h1 className="mainHeader2">Proyects</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className='Ccards'>
                            <div className="containerr">
                                    {CardsItem.map((item, index) => {
                                        return (
                                            <div className="card" key={index}>
                                                <Card imgsrc={item.img} title={item.title} description={item.description} url={item.urlButton} alt={item.imageAlt} classNames={item.Style}/>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                </div>
        );
    
}
export default Cards;