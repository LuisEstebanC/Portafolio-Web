import React from 'react'
import Icons from '../Banner/IconsGroup';
import ContactForm from '../Form/ContactForm';
import styled  from 'styled-components';

const ContactC = styled.div`
    padding: 10px 0;
    background-color:${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const Contact = () => {
    return (
        <ContactC>
            <div className="container">
                <div className="contactSection">
                    <div className="row justifyconter">
                            <div className="common2">
                                <div className="contactFormDiv">
                                    <ContactForm/>
                                </div>
                                <div className="contacIconsDiv">
                                    <Icons/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </ContactC>
    )
}

export default Contact;
