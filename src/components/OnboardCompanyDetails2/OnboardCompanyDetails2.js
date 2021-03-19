import React, { useState } from "react";
import "./styles.css";
import LogoImage from "../../Assets/titlelogo.png";
import BoxesImg from "../../Assets/boxes.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { saveCompanyDetails } from "../../store/actions/CompanyDetails";
import axios from "../../axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const OnboardCompanyDetails2 = (props) => {
  const [country, setCountry] = useState(props?.companyDetails?.country);
  const [state, setState] = useState(props?.companyDetails?.state);
  const [city, setCity] = useState(props?.companyDetails?.city);
  const [pincode, setPincode] = useState(props?.companyDetails?.pincode);
  const [contactPerson, setContactPerson] = useState(
    props?.companyDetails?.contactPerson
  );
  const [disabled, setDisabled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const history = useHistory();

  const saveDetails = (e) => {
    e.preventDefault();
    setDisabled(true);
    const details = {
      country,
      state,
      city,
      pincode,
      contactPerson,
    };
    props.saveDetails(details);
    const userId = localStorage.getItem("userId");
    axios
      .post("updateCompanyDetails", {
        ...props.companyDetails,
        ...details,
        userId,
      })
      .then((response) => {
        setDisabled(false);
        setOpen(true);
      })
      .catch((err) => {
        setDisabled(false);
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={"success"}>
          Details Saved Successfully.
        </Alert>
      </Snackbar>
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

          <div className="ocd-set ocd-set-1">
            <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">2</div>
              <p style={{ color: "white", marginTop: "1rem" }}>
                Problem & Solution
              </p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1">
            <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">3</div>
              <p style={{ color: "white", marginTop: "1rem" }}>Team</p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1">
            <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">4</div>
              <p style={{ color: "white", marginTop: "1rem" }}>
                Market & Competition
              </p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1">
            <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">5</div>
              <p style={{ color: "white", marginTop: "1rem" }}>Finances </p>
            </div>
            <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
            </div>
          </div>

          <div className="ocd-set ocd-set-1">
            <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">6</div>
              <p style={{ color: "white", marginTop: "1rem" }}>KPI</p>
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
            Basic Information Part 2
          </p>
          <form onSubmit={(e) => saveDetails(e)}>
            {/* ######INPUT Group############### */}
            <label
              style={{
                marginLeft: "10rem",
                fontSize: "12px",
                color: "#8493A8",
              }}
            >
              Country*
            </label>
            <div className="input-group mb-3 ocd2-inputs-head">
              <input
                type="text"
                placeholder="Country"
                className="form-control ocd2-inputs"
                aria-label="Text input with dropdown button"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <label
              style={{
                marginLeft: "10rem",
                fontSize: "12px",
                color: "#8493A8",
              }}
            >
              State*
            </label>
            <div className="input-group mb-3 ocd2-inputs-head">
              <input
                type="text"
                placeholder="State"
                className="form-control ocd2-inputs"
                aria-label="Text input with dropdown button"
                value={state}
                onChange={(e) => setState(e.target.value)}
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
                City*
              </label>
              <input
                type="text"
                placeholder="Los Angeles"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                Zip or Postal Code*
              </label>
              <input
                type="number"
                placeholder="73301"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 ocd2-btm">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                }}
              >
                Contact Person Name*
              </label>
              <input
                type="text"
                placeholder="James Thomas"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                required
              />
            </div>
            <div className="divider-line"></div>

            <button
              className="btn btn-primary oct-btm-btn-3"
              disabled={disabled}
              type="submit"
            >
              Submit
            </button>
          </form>
          <button
            className="btn btn-primary oct-btm-btn-2"
            onClick={() => history.goBack()}
          >
            Step Back
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
)(OnboardCompanyDetails2);
