import React, { useState } from 'react'
import SignUp from './Signup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        
   <div className='form-container'>
       <span className='close-btn'>x</span>
       <div className='form-content-left hidden'>
           <img src='img/img-2.svg' alt='spaseship' className='form-img' />
       </div>
       {!isSubmitted ? (<SignUp submitForm={submitForm} />) : (<FormSuccess />)}
   </div>
    </>
    )
}

export default Form
