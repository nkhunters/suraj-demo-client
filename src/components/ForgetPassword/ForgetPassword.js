import React, { useState } from "react";
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";
import axios from "../../axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  const sendResetRequest = () => {
    setDisabled(true);
    axios
      .post("forgotPassword", {email})
      .then((response) => {
        setDisabled(false);
        if (response.data.linkSent)
          alert(
            "A password reset link has been sent to your email, please check."
          );
        else alert("We didn't find any user with this email address.");
      })
      .catch((err) => {
        setDisabled(false);
        alert("We didn't find any user with this email address.");
      });
  };

  return (
    <div className="container-fluid lgn-cntnr-fld justify-center">
      <div className="row login-rw1 justify-center">
        <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
          <h6 className="login-rw1-col-1-gsnow text-center">
            Forget password
            <br />
            <span className="gsnow-span-text">
              Enter your email address to continue
            </span>
            <br />
            <div className="line1"></div>
            <p className="forgetpassword-detail-desc">
              Please enter your email address in hte field below. We will send
              you a confirmation code shortly. Enter the confirmation code to
              reset your password.
            </p>
          </h6>
          <form className="form-inpts-login">
            <div class="mb-3">
              <input
                type="email"
                placeholder="Email address"
                class="form-control lgn-inpts fgt-pswrd-inpt"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </form>
          <div className="btn-login-and-text">
            <button
              class="lgn-btn frgt-pswrd-btn"
              disabled={disabled}
              onClick={() => sendResetRequest()}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
          <img className="designed-img" src={DesignImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
