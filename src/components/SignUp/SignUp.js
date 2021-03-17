import React, { useState } from 'react';
import "./styles.css";
import DesignImg from '../../Assets/designimg.jpg';
import googlelogo from '../../Assets/googlelogo.png';
import Linkdin from '../../Assets/Linkdin.png';
import office365 from '../../Assets/office365.png';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from "react-router-dom";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("investor");

    return (
        <div className="container-fluid lgn-cntnr-fld justify-center">
            <div className="row login-rw1 justify-center">
                <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <h6 className="login-rw1-col-1-gsnow text-center">Get started now!<br />
                        <span className="gsnow-span-text">Enter your details below to sign up</span><br />
                        <div className="line1"></div>
                    </h6>
                    <form className="form-inpts-login">
                        <div class="mb-3">
                            <input type="text" placeholder="Full Name" class="form-control lgn-inpts" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <input type="email" placeholder="Email address" class="form-control lgn-inpts" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3 lgn-btn-head">
                            <input type="password" placeholder="Password" class="form-control lgn-inpts" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div class="mb-3 lgn-btn-head">

                            <PasswordStrengthBar password={password} style={{ width: "527px", margin: 'auto' }} />
                        </div>

                        <div component="fieldset" className="radio-btns-text mb-3 lgn-btn-head">
                            <RadioGroup className="radio-btns-text" row aria-label="gender" name="type" value={type} onChange={e => setType(e.target.value)}>
                                <FormControlLabel value="investor" control={<Radio />} label="i am an investor" />
                                <FormControlLabel value="founder" control={<Radio />} label="i am a founder" />
                            </RadioGroup>
                        </div>


                        <p className="sgnup-agree-text">By singing up, you agree to the DueDash's Privacy Policy and Terms and Conditions.</p>
                    </form>
                    <div className="btn-login-and-text">
                        <button class="lgn-btn">Create new account</button>
                        <p className="p-or-text">Or sign up with</p>
                    </div>
                    <div className="logo-icons-lgn">
                        <img className="logo-icons-lgn-all" src={googlelogo} alt="logo" />
                        <img className="logo-icons-lgn-all" src={Linkdin} alt="logo" />
                        <img className="logo-icons-lgn-all logo-icons-lgn-offc" src={office365} alt="logo" />
                    </div>
                    <div className="lng-btm">
                        <p>Already have an account?<Link to={"/login"}><span className="lng-btm-span-text">Login</span></Link></p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <img className="designed-img" src={DesignImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SignUp;
