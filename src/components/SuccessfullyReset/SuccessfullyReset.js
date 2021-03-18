import React from "react";
import "./styles.css";
import DesignImg from "../../Assets/designimg.jpg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";

const SuccessfullyReset = () => {
    return (
        <div className="container-fluid lgn-cntnr-fld justify-center">
            <div className="row login-rw1 justify-center">
                <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <h6 className="login-rw1-col-1-gsnow text-center cngrts-text">
                        <CheckCircleIcon />
                        <br />
            Congratulations
            <br />
                        <span className="gsnow-span-text">
                            Your password has been changed successfully
            </span>
                        <br />
                        <div className="line1"></div>
                    </h6>
                    <div className="btn-login-and-text btn-cnt-lgn">
                        <Link to={"/login"}>
                            <button class="lgn-btn frgt-pswrd-btn">Continue to login</button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 login-rw1-col-1">
                    <img className="designed-img" src={DesignImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SuccessfullyReset;
