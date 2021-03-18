import React from "react";
import "./styles.css";
import LogoImage from "../../Assets/titlelogo.png";
import BoxesImg from "../../Assets/boxes.png";

const OnboardCompanyDetails2 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 fo-rw1-col-1 ocd-col-1">
          <img className="img-logo" src={LogoImage} alt="" />
          <h6>Welcome to DueDash, Kevin!</h6>
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

          {/* ######INPUT Group############### */}
          <label
            style={{ marginLeft: "10rem", fontSize: "12px", color: "#8493A8" }}
          >
            Country*
          </label>
          <div class="input-group mb-3 ocd2-inputs-head">
            <input
              type="text"
              placeholder="Country"
              class="form-control ocd2-inputs"
              aria-label="Text input with dropdown button"
            />
          </div>
          <label
            style={{ marginLeft: "10rem", fontSize: "12px", color: "#8493A8" }}
          >
            State*
          </label>
          <div class="input-group mb-3 ocd2-inputs-head">
            <input
              type="text"
              placeholder="State"
              class="form-control ocd2-inputs"
              aria-label="Text input with dropdown button"
            />
          </div>

          <div class="mb-3">
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
              class="form-control ocd-form-inputs lgn-inpts"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
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
              type="text"
              placeholder="73301"
              class="form-control ocd-form-inputs lgn-inpts"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 ocd2-btm">
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
              class="form-control ocd-form-inputs lgn-inpts"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div className="divider-line"></div>
            <button className="btn btn-outline-primary oct-btm-btn-3 oct2-btm-btn-nxt">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardCompanyDetails2;
