import { useState, useEffect } from 'react';
import API from '../utils/API';
import {useLoginContext} from '../utils/GlobalState';
import {useHistory} from 'react-router-dom';

const useLogin = (callback, validate) => {
    const [state, dispatch] = useLoginContext(); 
    // This is new addition
    const history = useHistory();
    const [values, setValues ] = useState({
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        setIsSubmitting(true)
            API.login({
              email: values.email,
              password: values.password
            })
              .then((res) => {
                  console.log(res);
                  dispatch({type:"login", res});
                  history.push("/User");
                  setIsSubmitting(true)
                })
            
              .catch(err => console.log(err));
       

        // setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])

    return { handleChange, values, handleSubmit, errors };
};

export default useLogin;