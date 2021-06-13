import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';
import styled  from 'styled-components';

const LabelForm = styled.label`
    color: ${props => props.theme.fontColor};
    transition: all .5s ease;
`;

const InputBox = styled.input`
    width: 69%;
    color: ${props => props.theme.fontColor};
    border-radius: 3px;
    background-color: ${props => props.theme.inputBackgrounds};
    box-sizing: border-box;
    padding: 2px 7px;
    border: none;
    border-bottom: ${props => props.theme.inputBorderBottom};
    transition: all .5s ease;
    &:focus{
        border: none;
        border-bottom: 2px solid #5a5a5a;
        outline: none;
    }
`;
const ButtonForm = styled.button`
    width: 43%;
    background-color: ${props => props.theme.inputBottomBackground};
    color: ${props => props.theme.titleColor};
    border-radius: 4px;
    margin-left: 45%;
    border: 2px solid #B73225;
    text-decoration: none;
    border-color: #B73225;
    height: 44px;
    box-shadow: 0 6px #999;
    transition: all .5s ease;
    &:hover{
        color: white;
        background-color: #B73225;
    }
    &:active{
        box-shadow: 0 2px #666;
        transition: all .1s ease;
        transform: translateY(4px);
    }
`;
const InputTextAreaBox = styled.textarea`
    width: 69%;
    height: 55px;
    border-radius: 5px;
    resize: none;
    box-sizing: border-box;
    padding: 8px 7px;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.inputBackgrounds};
    transition: all .5s ease;
    &:focus{
        width: 69%;
        height: 75px;
        border: none;background-color: transparent;
        resize: none;
        outliene:none;
    }
`;
const TittleH1 = styled.h1`
    position: relative;
    border-left: 5px solid #B73225;
    margin: 0 0 35px;
    padding: 31px 92px 21px 17px;
    color: ${props => props.theme.tittleColorForm};
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
`;
const PContainer = styled.p`
    color: ${props => props.theme.fontColor};
    font-size: 14px;
    margin-bottom: 20px;
`;
function ContactForm() {
    const [state, handleSubmit] = useForm("xdoyabrd");
    if (state.succeeded ) {
        return <PContainer>Thank you for contacting me, I will answer your message as soon as possible!</PContainer>;
    }
    return (
        <div data-aos="zoom-in" className="formContainer">
            <div className="contact-wrapper animated bounceInUp">
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                    <TittleH1>Contact me</TittleH1>
                        <div className="Emaildiv">
                            <p>
                                <LabelForm>Email Address:</LabelForm>
                            </p>
                            <p>
                                <InputBox
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Example@gmail.com"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </p>
                        </div>
                        <div className="messagediv">
                            <p>
                                <LabelForm>
                                    Message:
                                </LabelForm>
                            </p>
                            <p>
                                <InputTextAreaBox
                                    id="message"
                                    name="message"
                                    placeholder="write your message reason..."
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </p>
                        </div>
                        <div>

                            <ButtonForm type="submit" disabled={state.submitting}>
                            <i className="fab fa-telegram-plane"></i> Send message.
                            </ButtonForm>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactForm;