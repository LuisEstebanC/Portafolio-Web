import React from 'react';
import './textAnimated.css';
import styled  from 'styled-components';

const Tittle = styled.div`
 color: ${props => props.theme.fontColor};
 transition: all .5s ease;
`;

function HeaderTitle() {
    return (
        <div className="">
            <Tittle>
                <h1 className="hello">Hello,</h1>
            </Tittle>
            <div className="wrapper">
                <Tittle>
                    <h1>I'M  Luis Esteban</h1>
                </Tittle> 
            </div>
        </div>
    )
}

export default HeaderTitle;
