import React, { useState, useEffect } from "react";
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";
import axios from "../../axios";
import { useParams, useHistory } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isTokenValid, setTokenValid] = useState(false);

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
          alert("Password reset link is invalid or has expired");
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  const resetPassword = () => {
    if (password !== confirmPassword)
      alert("Password and Confirm Password didn't matched");
    else {
      setButtonDisabled(true);
      axios
        .put("updatePasswordViaEmail", { userId, password })
        .then((response) => {
          console.log(response.data);
          setButtonDisabled(false);
          if (response.data === "Password updated") {
            history.push("/resetsuccessfully");
          } else {
            alert("Something went wrong. Please try again");
          }
        })
        .catch((error) => {
          setButtonDisabled(false);
          alert("Something went wrong. Please try again");
          console.log(error.data);
        });
    }
  };

  return (
    <div className="container-fluid lgn-cntnr-fld justify-center">
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
