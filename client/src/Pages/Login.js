import React from 'react'
import useLogin from './useLogin';
import validate from './validateInfo';
import './Form.css'

const Login = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useLogin(submitForm, validate);
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1> Login </h1>
                <div className='form-inputs'>
                    <label 
                    htmlFor='email' className='form-label'>Email</label>
                    <input
                     id='email'
                     type='email' 
                     name='email' className='form-input' placeholder='Enter your email address'
                    value={ values.email }
                    onChange={ handleChange }
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label 
                    htmlFor='password' className='form-label'>Password</label>
                    <input
                     id='password' 
                     type='password'
                     name='password' className='form-input' placeholder='Enter your password'
                    value={ values.password }
                    onChange={ handleChange }
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
