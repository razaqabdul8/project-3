import React from 'react';
import Home from './Pages';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './Pages/Form.js';
import LoginForm from './Pages/LoginForm.js';
import Lists from './components/Lists';
import User  from './components/User';
import {LoginProvider} from './utils/GlobalState'
function App() {

  return (<BrowserRouter>
    <>
    <LoginProvider>
      <Route path='/' component={Home} exact />
      <Route path='/signup' component={Form} exact />
      <Route path='/login' component={LoginForm} exact />
      <Route path='/Lists' component={Lists} exact />
      <Route path='/User' component={User} exact />
      </LoginProvider>
    </>
  </BrowserRouter>)

}

export default App;
