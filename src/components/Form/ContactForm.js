import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xdoyabrd");
  if (state.succeeded ) {
      return <p>Thank you for contacting me, I will answer your message as soon as possible!</p>;
  }
  return (
        <div className="formContainer">
            <div class="contact-wrapper animated bounceInUp">
            
                <div className='form'>
                    
                    <form onSubmit={handleSubmit}>
                    <h1 className="title">Contact me</h1>
                        <div className="Emaildiv">
                            <p>
                                <label htmlFor="email">
                                    Email Address:
                                </label>
                            </p>
                            <p>
                                <input
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
                                <label>
                                    Message:
                                </label>
                            </p>
                            <p>
                                <textarea
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

                            <button className="button" type="submit" disabled={state.submitting}>
                            <i class="fab fa-telegram-plane"></i> Send message 
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>    
        </div>
  );    
}
export default ContactForm;