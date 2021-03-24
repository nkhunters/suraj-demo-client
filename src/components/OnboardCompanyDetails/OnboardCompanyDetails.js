import React, { useState } from "react";
import "./styles.css";
import LogoImage from "../../Assets/titlelogo.png";
import BoxesImg from "../../Assets/boxes.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { saveCompanyDetails } from "../../store/actions/CompanyDetails";

const OnboardCompanyDetails = (props) => {
  const [company, setCompany] = useState(props?.companyDetails?.company);
  const [sector, setSector] = useState(props?.companyDetails?.sector);
  const [specialization, setSpecialization] = useState(
    props?.companyDetails?.specialization
  );
  const [technology, setTechnology] = useState(
    props?.companyDetails?.technology
  );
  const [businessModel, setBusinessModel] = useState(
    props?.companyDetails?.businessModel
  );

  const disabledColor = "#827BDD";

  const history = useHistory();

  const saveDetails = (e) => {
    e.preventDefault();
    const details = {
      company,
      sector,
      specialization,
      technology,
      businessModel,
    };
    props.saveDetails(details);
    history.push("/onboardcompanydetails2");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 fo-rw1-col-1 ocd-col-1">
          <img className="img-logo" src={LogoImage} alt="" />
          <h6>
            Welcome to DueDash,{" "}
            {localStorage.getItem("name").includes(" ")
              ? localStorage.getItem("name").split(" ")[0]
              : localStorage.getItem("name")}
            !
          </h6>
          <div className="ocd-set ocd-set-1">
            <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">1</div>
              <p style={{ color: "white", marginTop: "1rem" }}>
                Company Details
              </p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1" style={{ color: disabledColor }}>
            <div className="ocd-circle-text">
              <div className="fo-circle-disabled ocd-circle-disabled">2</div>
              <p style={{ marginTop: "1rem" }}>Problem & Solution</p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1" style={{ color: disabledColor }}>
            <div className="ocd-circle-text">
              <div className="fo-circle-disabled ocd-circle-disabled">3</div>
              <p style={{ marginTop: "1rem" }}>Team</p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1" style={{ color: disabledColor }}>
            <div className="ocd-circle-text">
              <div className="fo-circle-disabled ocd-circle-disabled">4</div>
              <p style={{ marginTop: "1rem" }}>Market & Competition</p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1" style={{ color: disabledColor }}>
            <div className="ocd-circle-text">
              <div className="fo-circle-disabled ocd-circle-disabled">5</div>
              <p style={{ marginTop: "1rem" }}>Finances </p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1" style={{ color: disabledColor }}>
            <div className="ocd-circle-text">
              <div className="fo-circle-disabled ocd-circle-disabled">6</div>
              <p style={{ marginTop: "1rem" }}>KPI</p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>
          <p style={{ color: "#ffff", marginTop: "1rem" }}>
            Have a question?<b>Get Help</b>{" "}
          </p>
        </div>

        <div className="col-lg-8 col-md-12 col-sm-12 justify-center ocd-rw1-col-2">
          <div className="title-box">
            <img src={BoxesImg} alt="" />
            <h4>Company Details</h4>
          </div>
          <p
            style={{ color: "#ADB9CA", textAlign: "center", marginTop: "2rem" }}
          >
            Basic Information Part 1
          </p>
          <form
            className="form-inpts-login ocd-form"
            onSubmit={(e) => saveDetails(e)}
          >
            <div className="mb-3">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                }}
              >
                Company Name*
              </label>
              <input
                type="text"
                placeholder="Mobile Technology"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                }}
              >
                What is your sector?*
              </label>
              <input
                type="text"
                placeholder="Banking"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 lgn-btn-head">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                }}
              >
                What is your specialization?*
              </label>
              <input
                type="text"
                placeholder="Select"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputPassword1"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 lgn-btn-head ocd-label-text">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                }}
              >
                What is your technology*
              </label>
              <input
                type="text"
                placeholder="ECommerce, Social Media, Retail"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputPassword1"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 lgn-btn-head">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                }}
              >
                Business model*
              </label>
              <input
                type="text"
                placeholder="Select"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputPassword1"
                value={businessModel}
                onChange={(e) => setBusinessModel(e.target.value)}
                required
              />
            </div>
            <div className="divider-line"></div>

            <button
              className="btn btn-primary oct-btm-btn-3 float-right"
              type="submit"
            >
              Next Step
            </button>
          </form>
          <button className="btn btn-primary oct-btm-btn-2 float-right">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    companyDetails: state.companyDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveDetails: (details) => dispatch(saveCompanyDetails(details)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnboardCompanyDetails);
