import { useState, useEffect } from 'react';
import API from '../utils/API';
import {useLoginContext} from '../utils/GlobalState';

const useLogin = (callback, validate) => {
    const [values, setValues ] = useState({
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();

            setErrors(validate(values));

        //This is where we modify
       
            API.login({
              email: values.email,
              password: values.password
            })
              .then(() => setIsSubmitting(true))
              .then(() => setIsAuthenticated(true))
              .catch(err => console.log(err));
       

        // setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])

    return { handleChange, values, handleSubmit, errors, isAuthenticated };
};

export default useLogin;