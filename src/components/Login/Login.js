import React, {useState} from 'react';
import "./styles.css";
import DesignImg from '../../Assets/designimg.jpg';
import googlelogo from '../../Assets/googlelogo.png';
import Linkdin from '../../Assets/Linkdin.png';
import office365 from '../../Assets/office365.png';
import {Link} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container-fluid lgn-cntnr-fld justify-center">
            <div className="row login-rw1 justify-center">
                <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <h6 className="login-rw1-col-1-gsnow text-center">Get started now!<br />
                        <span className="gsnow-span-text">Enter your details to login</span><br />
                        <div className="line1"></div>
                    </h6>
                    <form className="form-inpts-login">
                        <div class="mb-3">
                            <input type="email" placeholder="Email address" class="form-control lgn-inpts" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3 lgn-btn-head">
                            <input type="password" placeholder="Password" class="form-control lgn-inpts" id="exampleInputPassword1" value={password} onChange={e => setPassword(e.target.value)} />
                            <p className="forget-pswrd">Forget password?</p>
                        </div>
                    </form>
                    <div className="btn-login-and-text">
                        <button class="lgn-btn">Login</button>
                        <p className="p-or-text">Or login with</p>
                    </div>
                    <div className="logo-icons-lgn">
                        <img className="logo-icons-lgn-all" src={googlelogo} alt="logo" />
                        <img className="logo-icons-lgn-all" src={Linkdin} alt="logo" />
                        <img className="logo-icons-lgn-all logo-icons-lgn-offc" src={office365} alt="logo" />
                    </div>
                    <div className="lng-btm">
                        <p>Don't have an account? <Link to={"/signup"}><span className="lng-btm-span-text">Sign Up</span></Link></p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <img className="designed-img" src={DesignImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login

