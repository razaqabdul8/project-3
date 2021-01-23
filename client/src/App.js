import React from 'react';
import Home from './Pages';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './Pages/Form.js';
import LoginForm from './Pages/LoginForm.js';
import Lists from './components/Lists';

function App() {

  return (<BrowserRouter>
    <>
      <Route path='/' component={Home} exact />
      <Route path='/signup' component={Form} exact />
      <Route path='/login' component={LoginForm} exact />
      <Route path='/Lists' component={Lists} exact />
    </>
  </BrowserRouter>)

}

export default App;
