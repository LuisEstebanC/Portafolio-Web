import React from 'react';
import {CardsItem} from './CardsItems';
import styled  from 'styled-components';
import Card from './CardsUI';


const CardContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    background: ${props => props.theme.pageBackground};
    background-attachment: fixed;
    transition: all .5s ease;
`;
const CardAndTitleContainer = styled.div`
   background: ${props => props.theme.pageBackground};

`;
const TittleContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    color: ${props => props.theme.fontColor}
`;




function Cards (props){

        return(
                <CardAndTitleContainer>
                    <TittleContainer>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className='common3'>
                                        <h1 className="mainHeader2">Proyects</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TittleContainer>
                        <CardContainer>
                            <div className="containerr">
                                    {CardsItem.map((item, index) => {
                                        return (
                                                    <div className={props.theme === 'light'? "card" : "cardDark"} key={index}>
                                                        <Card imgsrc={item.img} title={item.title} description={item.description} url={item.urlButton} alt={item.imageAlt} classNames={item.Style}/>
                                                    </div>
                                        )
                                    })}
                            </div>
                        </CardContainer>
                </CardAndTitleContainer>
        );
}
export default Cards;