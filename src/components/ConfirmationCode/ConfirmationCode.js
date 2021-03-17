import React from 'react';
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";

const ConfirmationCode = () => {
    return (
        <div className="container-fluid lgn-cntnr-fld justify-center">
           <div className="row login-rw1 justify-center">
               <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <h6 className="login-rw1-col-1-gsnow text-center">Confirmation Code<br/>
                    <span className="gsnow-span-text">Please enter the confirmation code received on axxxb@test.com</span><br/>
                    <div className="line1"></div>
                    </h6>
                    <form className="form-inpts-login">
                        <div class="mb-3">
                            <input type="email" placeholder="Confirmation Code" class="form-control lgn-inpts fgt-pswrd-inpt" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>                   
            </form>
            <div className="btn-login-and-text">
            <button class="lgn-btn frgt-pswrd-btn">Submit</button>
            </div>
            <div className="lng-btm">
                    <p>Didn't receive the email? <span className="lng-btm-span-text">Resend Email</span></p>
                </div>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
            <img className="designed-img" src={DesignImg} alt=""/>
               </div>
               </div> 
        </div>
    )
}

export default ConfirmationCode
