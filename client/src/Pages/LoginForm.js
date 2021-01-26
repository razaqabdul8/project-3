import React, { useState } from 'react';
import Login from './Login.js';
import FormSuccess from './FormSuccess'; //it has to go to List Item page
import './Form.css';
import useLogin from './useLogin';

const LoginForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {

        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>x</span>
                    <div classsName='form-content-left'>
                        <img src='img/img-1.svg' alt='form' className='form-img' />
            </div>
            {!isSubmitted ? (<Login submitForm={submitForm} />) : (<FormSuccess />)}
            </div>
        </>
    )
}

export default LoginForm;