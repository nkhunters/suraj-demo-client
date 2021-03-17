import React from 'react';
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";

const ResetPassword = () => {
    return (
        <div className="container-fluid lgn-cntnr-fld justify-center">
           <div className="row login-rw1 justify-center">
               <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <h6 className="login-rw1-col-1-gsnow text-center">Reset Password<br/>
                    <span className="gsnow-span-text">Enter your new password to continue</span><br/>
                    <div className="line1"></div>
                    </h6>
                    <form className="form-inpts-login">
                        <div class="mb-3">
                            <input type="email" placeholder="Password" class="form-control lgn-inpts rst-pswrd-inpt" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3 lgn-btn-head">
                            <input type="password"  placeholder="Confirm password" class="form-control lgn-inpts rst-pswrd-inpt" id="exampleInputPassword1"/>
                        </div>                    
            </form>
            <div className="btn-login-and-text">
            <button class="lgn-btn frgt-pswrd-btn">Submit</button>
            </div>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
            <img className="designed-img" src={DesignImg} alt=""/>
               </div>
               </div> 
        </div>
    )
}

export default ResetPassword;
