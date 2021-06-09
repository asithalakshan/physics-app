import React from 'react';
import login from '../images/login.png';

function Login(){
    return(
      <div>
        <section className="py-4 bg-my">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h4>Log In</h4>
                    </div>
                    <div className="col-md-8 my-auto">
                        <h6 className="float-end">Home / Log In</h6>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section">
            <div className="container shadow bg-c-light">
                <div className="row container">
                    <div className="col-md-6 mb-3 py-5">
                        <img src={login} className="img-fluid" alt="image"/>
                    </div>
                    <div className="col-md-6 mb-3 py-5">
                        <h3 className="signin-text mb-3">Log In</h3>
                        <form>
                          <div className="form-row">
                            <div className="col-md-6 mb-3">
                              <label className="mb 1" for="validationServer01">User Name</label>
                              <input type="text" className="form-control " id="validationServer01" placeholder="Enter your user name" required/>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label className="mb 1" for="validationServer02" >Password</label>
                              <input type="password" className="form-control " id="validationServer02" placeholder="Enter your password" required/>
                              <div className="valid-feedback">
                                Looks good!
                              </div>
                            </div>
                          </div>
                         
                          <div className="form-group">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback"/>
                              <label className="form-check-label mb-1" for="invalidCheck3">Remember Me</label>
                              
                            </div>
                          </div>
                          <button className="btn btn-primary mt-1" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}

export default Login;