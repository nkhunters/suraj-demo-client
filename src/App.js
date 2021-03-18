import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ConfirmationCode from "./components/ConfirmationCode/ConfirmationCode";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import SuccessfullyReset from "./components/SuccessfullyReset/SuccessfullyReset";
import FounderOnboarding from "./components/FounderOnboarding/FounderOnboarding";
import OnboardCompanyDetails from "./components/OnboardCompanyDetails/OnboardCompanyDetails";
import OnboardCompanyDetails2 from "./components/OnboardCompanyDetails2/OnboardCompanyDetails2";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* ############# On Boarding ################# */}

          {/* ############# Login Pages#################   */}
          <Route path="/resetpassword/:token" component={ResetPassword} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/resetsuccessfully"
            component={SuccessfullyReset}
          />
          <Route exact path="/confirmationcode" component={ConfirmationCode} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
          <Route
            exact
            path="/onboardcompanydetails2"
            component={OnboardCompanyDetails2}
          />
          <Route
            exact
            path="/onboardcompanydetails"
            component={OnboardCompanyDetails}
          />
          <Route exact path="/founderonboard" component={FounderOnboarding} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
