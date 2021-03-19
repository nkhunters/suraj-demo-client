import React from "react";
import "./styles.css";
import DesignImg2 from "../../Assets/designimg2.png";
import SmallIcon1 from "../../Assets/smallicon1.png";
import SmallIcon2 from "../../Assets/smallicon2.png";
import SmallIcon3 from "../../Assets/smallicon3.png";
import { Link } from "react-router-dom";

const FounderOnboarding = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 fo-rw1-col-1">
          <img className="fo-designimg img-fluid" src={DesignImg2} alt="" />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 fo-rw1-col-2">
          <h2>
            Welcome to DueDash,{" "}
            {localStorage.getItem("name").includes(" ")
              ? localStorage.getItem("name").split(" ")[0]
              : localStorage.getItem("name")}
            !
          </h2>
          <p>How does it work?</p>
          <div className="row fo-srw1">
            <div className="col fo-srw1-col-1">
              <div className="fo-circle">1</div>
              <div className="fo-1st-disc">
                <img className="fo-p-logos" src={SmallIcon1} alt="logo" />
                <p>
                  Add your company details and get <br /> personalized feedback
                </p>
              </div>
            </div>
          </div>
          <div className="row fo-srw2">
            <div className="col fo-srw1-col-1 srw2-col">
              <div className="fo-circle">2</div>
              <div className="fo-1st-disc">
                <img className="fo-p-logos" src={SmallIcon2} alt="logo" />
                <p>
                  Guidance and frameworks to
                  <br /> make your company investable
                </p>
              </div>
            </div>
          </div>
          <div className="row fo-sw3">
            <div className="col fo-srw1-col-1 srw3-col">
              <div className="fo-circle">3</div>
              <div className="fo-1st-disc">
                <img className="fo-p-logos" src={SmallIcon3} alt="logo" />
                <p>Find investors and get investments</p>
              </div>
            </div>
          </div>
          <Link to={"/onboardcompanydetails"}>
            <button className="fo-btn-getstrtd">Let's get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FounderOnboarding;
