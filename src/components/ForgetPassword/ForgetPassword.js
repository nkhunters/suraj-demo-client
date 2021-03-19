import React, { useState } from "react";
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";
import axios from "../../axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isOpen, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendResetRequest = () => {
    setDisabled(true);
    axios
      .post("forgotPassword", { email })
      .then((response) => {
        setDisabled(false);
        if (response.data.linkSent) {
          setSuccess(true);
          setResponseMsg(
            "A password reset link has been sent to your email, please check."
          );
        } else {
          setSuccess(false);
          setResponseMsg("We didn't find any user with this email address.");
        }
        setOpen(true);
      })
      .catch((err) => {
        setDisabled(false);
        setSuccess(false);
        setResponseMsg("We didn't find any user with this email address.");
        setOpen(true);
      });
  };

  return (
    <div className="container-fluid lgn-cntnr-fld justify-center">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={isOpen}
        autoHideDuration={10000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={isSuccess ? "success" : "error"}>
          {responseMsg}
        </Alert>
      </Snackbar>
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
                onChange={(e) => setEmail(e.target.value)}
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
