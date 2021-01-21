import React from 'react';
import Home from './Pages';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './Pages/Form.js';

function App() {
 
  return( <BrowserRouter> 
  <>
  <Route path='/' component={Home} exact /> 
  <Route path='/login' component={Form} exact /> 
  </>
  </BrowserRouter>  )

}

export default App;
