import React,{Component} from 'react';
import imgPlaceHolder from '../../assets/images/imgPlaceHolder.png';
import imgPlaceHolder2 from '../../assets/images/placeholder-image2.webp';
import {CardsItem} from './CardsItems';


import Card from './CardsUI';

class Cards extends Component{
    render(){
       

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
                                                <Card imgsrc={item.img} title={item.title} description={item.description} url={item.urlButton}/>
                                            </div>
                                        )
                                    })} 
                                    
                                    
                            </div>
                           
                        </div>
                </div>
               
        
           
        );
    }
}
export default Cards;