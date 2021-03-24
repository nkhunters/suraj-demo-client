import React, { useState } from "react";
import "./styles.css";
import Graphics from "../../Assets/Graphics.png";
import lady from "../../Assets/lady.png";
import mobile from "../../Assets/mobile.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "../../axios";

const RegistrationAndVerification = () => {
  const [isOpen, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const resendEmail = () => {
    setDisabled(true);
    axios
      .post("resendEmail", {
        email: localStorage.getItem("email"),
        userId: localStorage.getItem("userId"),
      })
      .then((response) => {
        setDisabled(false);
        setOpen(true);
      })
      .catch((err) => {
        setDisabled(false);
      });
  };

  return (
    <div className="container-fluid lgn-cntnr-fld justify-center verify-all">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={"success"}>
          Email verification link sent successfully.
        </Alert>
      </Snackbar>
      <div className="row login-rw1 justify-center">
        <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
          <h6 className="login-rw1-col-1-gsnow text-center cngrts-text">
            <CheckCircleIcon />
            <br />
            Congratulations,{" "}
            {localStorage.getItem("name").includes(" ")
              ? localStorage.getItem("name").split(" ")[0]
              : localStorage.getItem("name")}
            !
            <br />
            <span className="gsnow-span-text">
              <small>You have registered successfully</small>
            </span>
            <br />
            <div className="line1"></div>
          </h6>
          <div className="verify-desc">
            <h4>Verify your email</h4>
            <h6>We have sent an email to {localStorage.getItem("email")}</h6>
            <p>
              <small>
                You need to verify your email to continue. If you have <br />{" "}
                not received the verification email, please click on <br />{" "}
                Resend email button below.
              </small>
            </p>
          </div>
          <div
            className="btn-login-and-text btn-cnt-lgn"
            onClick={() => resendEmail()}
          >
            <button
              className="lgn-btn frgt-pswrd-btn verify-resend-btn"
              disabled={disabled}
            >
              Resend email
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
          <img className="designed-img" src={Graphics} alt="" />
          <img className="mobile-img" src={mobile} alt="" />
          <img className="lady-img" src={lady} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationAndVerification;
