import React, { useState, useEffect } from "react";
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";
import googlelogo from "../../Assets/googlelogo.png";
import Linkdin from "../../Assets/Linkdin.png";
import office365 from "../../Assets/office365.png";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link } from "react-router-dom";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import axios from "../../axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("investor");
  const [disabled, setDisabled] = useState(false);
  const [isEmailValidated, setEmailValidated] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  const history = useHistory();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    if (isSuccess) history.push("/login");
  };

  function validateEmail(value) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      setEmailValidated(false);
      return false;
    } else {
      setEmailValidated(true);
      return true;
    }
  }

  const signup = (e) => {
    e.preventDefault();

    let errs = errors;

    if (name === "") {
      errs = { ...errs, name: "Please enter your Full Name." };
    } else {
      errs = { ...errs, name: null };
    }
    if (email === "") {
      errs = { ...errs, email: "Please enter your Email." };
    } else if (!isEmailValidated && email.length > 0)
      errs = { ...errs, email: "Please enter a valid Email." };
    else {
      errs = { ...errs, email: null };
    }

    if (password === "")
      errs = { ...errs, password: "Please enter a Password." };
    else {
      errs = { ...errs, password: null };
    }

    setErrors(errs);

    if (name === "" || email === "" || password === "" || !isEmailValidated)
      return;

    setDisabled(true);
    axios
      .post("signup", { name, email, password, type })
      .then((response) => {
        setDisabled(false);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("email", response.data.user.email);

        history.push("/verify");

        /*setSuccess(true);
        setResponseMsg(
          "Account created successfully. An email verification link has been sent to your email, please verify your email and login."
        );
        setOpen(true); */
      })
      .catch((err) => {
        setDisabled(false);
        setSuccess(false);
        setResponseMsg("Someone's already using this email.");
        setOpen(true);
        console.log(err);
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
            Get started now!
            <br />
            <span className="gsnow-span-text">
              Enter your details below to sign up
            </span>
            <br />
            <div className="line1"></div>
          </h6>
          <form className="form-inpts-login" onSubmit={(e) => signup(e)}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Full Name"
                className={`form-control lgn-inpts ${
                  errors.name && "is-invalid"
                }`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="name"
                value={name}
                onChange={(e) => {
                  e.target.value.length > 0
                    ? setErrors({ ...errors, name: null })
                    : setErrors({
                        ...errors,
                        name: "Please enter your Full Name",
                      });
                  setName(e.target.value);
                }}
              />
              {errors.name && (
                <div
                  className="invalid-feedback"
                  style={{ margin: "auto", width: "527px" }}
                >
                  {errors.name}
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email address"
                className={`form-control lgn-inpts ${
                  errors.email && "is-invalid"
                }`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={(e) => {
                  e.target.value.length > 0 ? setErrors({...errors, email: null}) :
                  setErrors({...errors, email: "Please enter your Email"});
                  validateEmail(e.target.value) ? setErrors({...errors, email: null}) :
                  setErrors({...errors, email: "Please enter a valid Email"}); ;
                  setEmail(e.target.value);
                  
                }}
              />
              {errors.email && (
                <div
                  className="invalid-feedback"
                  style={{ margin: "auto", width: "527px" }}
                >
                  {errors.email}
                </div>
              )}
            </div>
            <div className="mb-3 lgn-btn-head">
              <input
                type="password"
                placeholder="Password"
                className={`form-control lgn-inpts ${
                  errors.password && "is-invalid"
                }`}
                id="exampleInputPassword1"
                value={password}
                onChange={(e) =>{
                  e.target.value.length > 0
                    ? setErrors({ ...errors, password: null })
                    : setErrors({
                        ...errors,
                        password: "Please enter a Password",
                      });
                      setPassword(e.target.value)}
                } 
              />
              {errors.password && (
                <div
                  className="invalid-feedback"
                  style={{ margin: "auto", width: "527px" }}
                >
                  {errors.password}
                </div>
              )}
            </div>
            <div className="mb-3 lgn-btn-head">
              <PasswordStrengthBar
                password={password}
                style={{ width: "527px", margin: "auto" }}
              />
            </div>

            <div
              component="fieldset"
              className="radio-btns-text mb-3 lgn-btn-head"
            >
              <RadioGroup
                className="radio-btns-text"
                row
                aria-label="gender"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <FormControlLabel
                  value="investor"
                  control={<Radio color="primary" />}
                  label="I am an investor"
                />
                <FormControlLabel
                  value="founder"
                  control={<Radio color="primary" />}
                  label="I am a founder"
                />
              </RadioGroup>
            </div>

            <p className="sgnup-agree-text">
              By singing up, you agree to the DueDash's Privacy Policy and Terms
              and Conditions.
            </p>

            <div className="btn-login-and-text">
              <button className="lgn-btn" disabled={disabled} type="submit">
                Create new account
              </button>
              <p className="p-or-text">Or sign up with</p>
            </div>
            <div className="logo-icons-lgn">
              <img className="logo-icons-lgn-all" src={googlelogo} alt="logo" />
              <img className="logo-icons-lgn-all" src={Linkdin} alt="logo" />
              <img
                className="logo-icons-lgn-all logo-icons-lgn-offc"
                src={office365}
                alt="logo"
              />
            </div>
          </form>
          <div className="lng-btm">
            <p>
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="lng-btm-span-text">Login</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
          <img className="designed-img" src={DesignImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
