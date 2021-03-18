import React from 'react'
import "./styles.css";
import LogoImage from "../../Assets/titlelogo.png";
import BoxesImg from "../../Assets/boxes.png";
import CloseIcon from '@material-ui/icons/Close';

const OnboardCompanyDetails = () => {
    return (
       <div className="container-fluid">
           <div className="row">
               <div className="col-lg-4 col-md-12 col-sm-12 fo-rw1-col-1 ocd-col-1">
                <img className="img-logo" src={LogoImage} alt=""/>
                <h6>Welcome to DueDash, Kevin!</h6>
                <div className="ocd-set ocd-set-1">
              <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">1</div>
              <p style={{ color: "white", marginTop: "1rem"}}>Company Details</p>                    
              </div>
              <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
              </div>
              </div>

              <div className="ocd-set ocd-set-1">
              <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">2</div>
              <p style={{ color: "white", marginTop: "1rem"}}>Problem & Solution</p>                    
              </div>
              <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
              </div>
              </div>

              <div className="ocd-set ocd-set-1">
              <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">3</div>
              <p style={{ color: "white", marginTop: "1rem"}}>Team</p>                    
              </div>
              <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
              </div>
              </div>

              <div className="ocd-set ocd-set-1">
              <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">4</div>
              <p style={{ color: "white", marginTop: "1rem"}}>Market & Competition</p>                    
              </div>
              <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
              </div>
              </div>

              <div className="ocd-set ocd-set-1">
              <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">5</div>
              <p style={{ color: "white", marginTop: "1rem"}}>Finances </p>                    
              </div>
              <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
              </div>
              </div>

              <div className="ocd-set ocd-set-1">
              <div className="ocd-circle-text">
              <div className="fo-circle ocd-circle">6</div>
              <p style={{ color: "white", marginTop: "1rem"}}>KPI</p>                    
              </div>
              <div className="ocd-slider-text">
              <div className="ocd-slider"></div>
              <p>0%</p>
              </div>
              </div>            
               <p style={{color: "#ffff", marginTop: "1rem"}}>Have a question?<b>Get Help</b> </p>                      
               </div>

               <div className="col-lg-8 col-md-12 col-sm-12 justify-center ocd-rw1-col-2">
               <div className="title-box">
               <img src={BoxesImg} alt=""/>
               <h4>Company Details</h4>
               </div>           
               <p style={{color: "#ADB9CA", textAlign: "center", marginTop: "2rem"}}>Basic Information Part 1</p>
               <form className="form-inpts-login ocd-form">
                    <div class="mb-3">
                            <label style={{marginLeft: "10rem", fontSize: "12px", color: "#8493A8"}}>Company Name*</label>
                            <input type="text" placeholder="Mobile Technology" class="form-control ocd-form-inputs lgn-inpts" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                        <label style={{marginLeft: "10rem", fontSize: "12px", color: "#8493A8"}}>What is your sector?*</label>
                            <input type="email" placeholder="Banking" class="form-control ocd-form-inputs lgn-inpts" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3 lgn-btn-head">
                        <label style={{marginLeft: "10rem", fontSize: "12px", color: "#8493A8"}}>What is your specialization?*</label>
                            <input type="password"  placeholder="Select" class="form-control ocd-form-inputs lgn-inpts" id="exampleInputPassword1"/>  
                        </div>

                        <div class="mb-3 lgn-btn-head ocd-label-text">
                        <label style={{marginLeft: "10rem", fontSize: "12px", color: "#8493A8"}}>What is your technology*</label>
                        <div className="text-area-ocd"> 
                        <div className="ocd-btns">
                        <button><CloseIcon/>Ecommerce</button>
                        <button> <CloseIcon/>E-Commerce tool</button>
                        <button><CloseIcon/>Retail</button>
                        <button><CloseIcon/>Social Commerce</button>
                        <button><CloseIcon/>Social Media</button>
                        </div>
                        </div>
                        </div>

                        <div class="mb-3 lgn-btn-head">
                        <label style={{marginLeft: "10rem", fontSize: "12px", color: "#8493A8"}}>Business model*</label>
                            <input type="password"  placeholder="Select" class="form-control ocd-form-inputs lgn-inpts" id="exampleInputPassword1"/>  
                        </div>
                        <div className="divider-line">                          
                        </div>                         
            </form>

<div className="btn btn-outline-primary oct-btm-btn-1">
Skip
</div>
<div className="btn btn-outline-primary oct-btm-btn-2">
Step Back
</div>
<div className="btn btn-outline-primary oct-btm-btn-3">
Next Step
</div>
            </div>
           </div>
       </div>
    )
}

export default OnboardCompanyDetails;
