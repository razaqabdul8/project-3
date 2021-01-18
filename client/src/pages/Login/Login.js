import React, { useEffect, useState } from "react";
const Login = function(){
  return <div className="container d-sm-flex mr-xs-0 ml-xs-0">
  <div className="row container">
    <div className="col-sm-3 justify-content-center"></div>
    <div className="col-sm-6 justify-content-center">      
      <img src="/img/GETogether-logo-full-SM.png" className="mx-auto d-block mt-5" alt="Logo" />
      {/* login form  */}
      <div className="card bg-white border-0 mt-3">
        <div className="card-header text-info bg-white">        
        </div>
        <div className="card-body">
          <form className="login">
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email-input" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password-input" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-light">Login</button>
          </form>
          <br />          
          <p>Or sign up <a href="/">here</a></p>
        </div>
      </div>
    </div>
    <div className="col-sm-3 justify-content-center"></div>
  </div>
</div>;  
}
export default Login