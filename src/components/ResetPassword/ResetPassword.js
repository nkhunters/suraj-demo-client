import React, { useState, useEffect } from "react";
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";
import axios from "../../axios";
import { useParams, useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isTokenValid, setTokenValid] = useState(false);
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
    if (!isTokenValid) history.push("/");
  };

  let { token } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get("reset", {
        params: {
          resetPasswordToken: token,
        },
      })
      .then((response) => {
        if (response.data.message === "Password reset link is ok") {
          setUserId(response.data.userId);
          setTokenValid(true);
        } else {
          setTokenValid(false);

          setSuccess(false);
          setResponseMsg("Password reset link is invalid or has expired.");
          setOpen(true);
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  const resetPassword = () => {
    if (password !== confirmPassword) {
      setSuccess(false);
      setResponseMsg("Password and Confirm Password didn't matched.");
      setOpen(true);
    } else {
      setButtonDisabled(true);
      axios
        .put("updatePasswordViaEmail", { userId, password })
        .then((response) => {
          console.log(response.data);
          setButtonDisabled(false);
          if (response.data === "Password updated") {
            history.push("/resetsuccessfully");
          } else {
            setSuccess(false);
            setResponseMsg("Something went wrong. Please try again.");
            setOpen(true);
          }
        })
        .catch((error) => {
          setButtonDisabled(false);
          setSuccess(false);
          setResponseMsg("Something went wrong. Please try again.");
          setOpen(true);
          console.log(error.data);
        });
    }
  };

  return (
    <div className="container-fluid lgn-cntnr-fld justify-center">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={isSuccess ? "success" : "error"}>
          {responseMsg}
        </Alert>
      </Snackbar>
      <div className="row login-rw1 justify-center">
        <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
          <h6 className="login-rw1-col-1-gsnow text-center">
            Reset Password
            <br />
            <span className="gsnow-span-text">
              Enter your new password to continue
            </span>
            <br />
            <div className="line1"></div>
          </h6>
          <form className="form-inpts-login">
            <div class="mb-3">
              <input
                type="password"
                placeholder="Password"
                class="form-control lgn-inpts rst-pswrd-inpt"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="mb-3 lgn-btn-head">
              <input
                type="password"
                placeholder="Confirm password"
                class="form-control lgn-inpts rst-pswrd-inpt"
                id="exampleInputPassword1"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="btn-login-and-text">
            <button
              class="lgn-btn frgt-pswrd-btn"
              disabled={buttonDisabled || !isTokenValid}
              onClick={() => resetPassword()}
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

export default ResetPassword;
