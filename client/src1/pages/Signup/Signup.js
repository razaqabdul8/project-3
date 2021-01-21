const Signup = function(){
    return <div class="container d-sm-flex mr-xs-0 ml-xs-0">
    <div class="row container">
      <div class="col-sm-3 justify-content-center"></div>
      <div class="col-sm-6 justify-content-center">       
        <img src="/img/GETogether-logo-full-SM.png" class="mx-auto d-block mt-5" alt="Logo" />        
        <div class="card bg-white border-0 mt-3">
          <div class="card-header text-info bg-white">
          </div>
          <div class="card-body">
            <form class="signup">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email-input" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password-input" placeholder="Create password" />
              </div>              
              <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span class="sr-only">Error:</span> <span class="msg"></span>
              </div>             
              <button type="submit" class="btn btn-light">Create account</button>
            </form>
            <br />            
            <p>Or log in <a href="/login">here</a></p>
          </div>
        </div>
      </div>
      <div class="col-sm-3 justify-content-center"></div>
    </div>
  </div>
}