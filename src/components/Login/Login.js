import React, { useState } from "react";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isEmailValidated, setEmailValidated] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const history = useHistory();

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
    } else setEmailValidated(true);
  }

  const login = (e) => {
    e.preventDefault();
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
        <Alert onClose={handleClose} severity={"error"}>
          Invalid Email or Password. Please try again.
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
            <div class="mb-3">
              <input
                type="email"
                placeholder="Email address"
                className={`form-control lgn-inpts ${
                  !isEmailValidated && "is-invalid"
                }`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              {!isEmailValidated && (
                <div
                  className="invalid-feedback"
                  style={{ margin: "auto", width: "527px" }}
                >
                  Invalid email address
                </div>
              )}
            </div>
            <div class="mb-3 lgn-btn-head">
              <input
                type="password"
                placeholder="Password"
                class="form-control lgn-inpts"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to={"/forgetpassword"}>
                <p className="forget-pswrd">Forget password?</p>
              </Link>
            </div>

            <div className="btn-login-and-text">
              <button class="lgn-btn" type="submit" disabled={disabled}>
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
