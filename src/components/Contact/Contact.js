import React from 'react'
import Icons from '../Banner/IconsGroup';
import ContactForm from '../Form/ContactForm';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                    <div className="row justifyconter">
                           
                            <div className="common">
                            <div className="contactSectionLogo">
                               {/* <img src="/images/logotipo.png" alt="Logo"/>*/ }
                            </div>
                            <ContactForm/>
                                <div className="contactSectionText">
                                   {/*  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. 
                                    </p>*/}
                                </div>
                            </div>
                            <Icons/>  
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Contact;
