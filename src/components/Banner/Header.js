import React from 'react';
import Titlte from './HeaderTitle';
import styled  from 'styled-components';

const ContentColor = styled.div`
 color: ${props => props.theme.fontColor};
 transition: all .5s ease;
`;
const Header = () => {
    return (
        <div className = "header__content" >
            <div className = "header__section " >
                <Titlte / >
                <ContentColor>
                    <p data-aos="fade-right"> My name is Luis Esteban Capellan, I am a creative software developer with the desire to expand my knowledge in the world of development. </p>
                </ContentColor>
            </div>
        </div>
    )
}

export default Header;