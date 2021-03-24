import React, { useState, useEffect } from "react";
import "./styles.css";
import LogoImage from "../../Assets/titlelogo.png";
import BoxesImg from "../../Assets/boxes.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { saveCompanyDetails } from "../../store/actions/CompanyDetails";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import axios from "../../axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  option: {
    width: "527px",
    fontSize: 15,
    background: "white",
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
}));

const OnboardCompanyDetails = (props) => {
  const classes = useStyles();

  const [companyName, setCompanyName] = useState("");
  const [dbaName, setDbaName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [sector, setSector] = useState(sectors[0]);
  const [specialization, setSpecialization] = useState(specializations[0]);
  const [businessModel, setBusinessModel] = useState([]);
  const [revenueStream, setRevenueStreams] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const disabledColor = "#827BDD";

  const history = useHistory();

  useEffect(() => {
    axios
      .post("getCompanyDetails", {
        userId: localStorage.getItem("userId"),
      })
      .then((response) => {
        if (response.data.companyDetails) {
          setCompanyName(
            response.data.companyDetails.companyName
              ? response.data.companyDetails.companyName
              : ""
          );
          setDbaName(
            response.data.companyDetails.dbaName
              ? response.data.companyDetails.dbaName
              : ""
          );
          setWebsiteUrl(
            response.data.companyDetails.websiteUrl
              ? response.data.companyDetails.websiteUrl
              : ""
          );
          setSector(
            response.data.companyDetails.sector
              ? response.data.companyDetails.sector
              : sectors[0]
          );
          setSpecialization(
            response.data.companyDetails.specialization
              ? response.data.companyDetails.specialization
              : specializations[0]
          );
          setBusinessModel(
            response.data.companyDetails.businessModel
              ? response.data.companyDetails.businessModel
              : []
          );
          setRevenueStreams(
            response.data.companyDetails.revenueStream
              ? response.data.companyDetails.revenueStream
              : []
          );
        }

        if (response.data.companyDetails.companyName) setPercentage(50);
        if (response.data.companyDetails.companyRegNo) setPercentage(100);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const saveDetails = (e) => {
    e.preventDefault();
    const data = {
      companyName,
      dbaName,
      websiteUrl,
      sector,
      specialization,
      businessModel,
      revenueStream,
    };

    console.log(data);

    axios
      .post("updateCompanyDetails", {
        ...data,
        userId: localStorage.getItem("userId"),
      })
      .then((response) => {
        history.push("/onboardcompanydetails2");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 fo-rw1-col-1 ocd-col-1">
          <img className="img-logo" src={LogoImage} alt="" />
          <button
            className="btn btn-primary oct-btm-btn-3 float-right"
            onClick={() => {
              history.push("/login");
            }}
          >
            Logout
          </button>
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
              <div className={percentage === 0 ? "ocd-slider" : percentage === 50 ? "ocd-slider-50" : "ocd-slider-100"}></div>
              <p>{percentage}%</p>
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
                placeholder="Company Name"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
                DBA (doing business as) name*
              </label>
              <input
                type="text"
                placeholder="DBA (doing business as) name"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={dbaName}
                onChange={(e) => setDbaName(e.target.value)}
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
                Website URL
              </label>
              <input
                type="text"
                placeholder="Website URL"
                className="form-control ocd-form-inputs lgn-inpts"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                style={{
                  marginLeft: "10rem",
                  marginBottom: "0.5rem",
                  fontSize: "12px",
                  color: "#8493A8",
                }}
              >
                What is your sector?*
              </label>

              <Autocomplete
                id="sector-autocomplete"
                options={sectors}
                value={sector}
                onChange={(event, newValue) => {
                  setSector(newValue);
                }}
                className="lgn-inpts"
                style={{ border: "none", outline: "none" }}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option}
                renderOption={(option) => (
                  <React.Fragment>{option}</React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth={true}
                    placeholder="Sector"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </div>

            <div className="mb-3">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  marginBottom: "0.5rem",
                  color: "#8493A8",
                }}
              >
                What is your specialization?*
              </label>
              <Autocomplete
                id="sector-autocomplete"
                options={specializations}
                value={specialization}
                onChange={(event, newValue) => {
                  setSpecialization(newValue);
                }}
                className="lgn-inpts"
                style={{ border: "none", outline: "none" }}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option}
                renderOption={(option) => (
                  <React.Fragment>{option}</React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth={true}
                    placeholder="Specialization"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </div>

            <div className="mb-3">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                  marginBottom: "0.5rem",
                }}
              >
                Business model*
              </label>

              <Autocomplete
                id="business-model-autocomplete"
                options={businessModels}
                value={businessModel}
                multiple
                required
                onChange={(event, newValue) => {
                  setBusinessModel(newValue);
                }}
                className="lgn-inpts"
                style={{ border: "none", outline: "none" }}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth={true}
                    placeholder="Business Model"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </div>

            <div className="mb-3">
              <label
                style={{
                  marginLeft: "10rem",
                  fontSize: "12px",
                  color: "#8493A8",
                  marginBottom: "0.5rem",
                }}
              >
                Revenue Streams*
              </label>

              <Autocomplete
                id="revenue-streams-autocomplete"
                options={revenueStreams}
                value={revenueStream}
                multiple
                required
                onChange={(event, newValue) => {
                  setRevenueStreams(newValue);
                }}
                className="lgn-inpts"
                style={{ border: "none", outline: "none" }}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth={true}
                    placeholder="Revenue Streams"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
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

const sectors = [
  "3D Printing",
  "Advertising",
  "AgTech",
  "AI",
  "Analytics",
  "AR/VR",
  "BeautyTech",
  "Biotech",
  "Blockchain",
  "Autonomous Vehicles",
  "Chemicals",
  "CleanTech & Environment",
  "Cloud Infrastructure",
  "Consumer Health & Fitness",
  "Consumer Products",
  "Cosmetics",
  "Cryptocurrency",
  "Data Services",
  "Branding & Design",
  "Developer Tools",
  "Distributed Workforce",
  "E-Commerce",
  "Education",
  "Engineering",
  "Tech Enterprise",
  "Entertainment & Sports",
  "IT",
];

const specializations = [
  "2 Factor Authentication (2FA)",
  "3D Animation",
  "3D Audio Technology",
  "3D Bio Printers",
  "Accelerators & Incubators",
  "Account Based Marketing",
  "Accounts Payable Automation",
  "Ad Exchange Platforms",
  "Aerospace Tech",
  "AI in Advertising and Marketing",
  "AI in Agriculture",
  "B2B E-Commerce",
  "B2B Packaged Foods E-Commerce",
  "Banking Tech",
  "Big Data Analytics",
  "Cloud Application Development Platforms",
  "DevOps",
  "Digital Media Groups",
  "Digital Publishing Platforms",
  "Distributed Commerce",
  "E-Commerce Logistics",
  "E-Commerce Marketing",
  "E-Commerce Payment Solutions",
  "Education",
  "Electric Cars",
  "Electric Motorcycles",
  "Email Marketing",
  "Embedded Systems for IoT",
];

const businessModels = ["B2B", "B2B2C", "B2C", "B2D", "B2G", "Other"];

const revenueStreams = [
  "Advertising",
  "E-commerce",
  "Enterprise",
  "Hardware",
  "Marketplace",
  "Services",
  "Subscription",
  "Transactional",
  "Usage-based",
];
