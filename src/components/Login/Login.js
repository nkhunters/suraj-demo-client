import React, { useState, useEffect } from "react";
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";
import googlelogo from "../../Assets/googlelogo.png";
import Linkdin from "../../Assets/Linkdin.png";
import office365 from "../../Assets/office365.png";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import queryString from "query-string";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isEmailValidated, setEmailValidated] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });
  const [isSuccess, setSuccess] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const history = useHistory();

  
  useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    if (parsed?.redirect === "confirm") {
      setSuccess(true);
      setResponseMsg("Email verified successfully.");
      setOpen(true);
    }
  }, [])

  

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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

  const login = (e) => {
    e.preventDefault();

    let errs = errors;

    if (email === "") {
      errs = { ...errs, email: "Please enter your Email." };
    } else if (!isEmailValidated && email.length > 0)
      errs = { ...errs, email: "Please enter a valid Email." };
    else {
      errs = { ...errs, email: null };
    }
    if (password === "")
      errs = { ...errs, password: "Please enter your Password." };
    else {
      errs = { ...errs, password: null };
    }

    setErrors(errs);

    if (email === "" || password === "" || !isEmailValidated) return;

    setDisabled(true);
    axios
      .post("login", { email, password })
      .then((response) => {
        setDisabled(false);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("name", response.data.user.name);

        history.push("/founderonboard");
      })
      .catch((err) => {
        setDisabled(false);
        setSuccess(false);
        setResponseMsg("Invalid Email or Password. Please try again.");
        setOpen(true);
      });
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
            Get started now!
            <br />
            <span className="gsnow-span-text">Enter your details to login</span>
            <br />
            <div className="line1"></div>
          </h6>
          <form className="form-inpts-login" onSubmit={(e) => login(e)}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email address"
                className={`form-control lgn-inpts ${
                  errors.email && "is-invalid"
                }`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  e.target.value.length > 0
                    ? setErrors({ ...errors, email: null })
                    : setErrors({
                        ...errors,
                        email: "Please enter your Email",
                      });
                  validateEmail(e.target.value)
                    ? setErrors({ ...errors, email: null })
                    : setErrors({
                        ...errors,
                        email: "Please enter a valid Email",
                      });
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
                onChange={(e) => {
                  e.target.value.length > 0
                    ? setErrors({ ...errors, password: null })
                    : setErrors({
                        ...errors,
                        password: "Please enter your Password",
                      });
                  setPassword(e.target.value);
                }}
              />
              {errors.password && (
                <div
                  className="invalid-feedback"
                  style={{ margin: "auto", width: "527px" }}
                >
                  {errors.password}
                </div>
              )}
              <Link to={"/forgetpassword"}>
                <p className="forget-pswrd">Forgot password?</p>
              </Link>
            </div>

            <div className="btn-login-and-text">
              <button className="lgn-btn" type="submit" disabled={disabled}>
                Login
              </button>

              <p className="p-or-text">Or login with</p>
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
              Don't have an account?{" "}
              <Link to={"/signup"}>
                <span className="lng-btm-span-text">Sign Up</span>
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

export default Login;
