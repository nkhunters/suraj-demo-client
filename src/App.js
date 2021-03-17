import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import PageNotFound from './PageNotFound/PageNotFound';
import SignUp from './components/SignUp/SignUp';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ConfirmationCode from './components/ConfirmationCode/ConfirmationCode';
import ResetPassword from './components/ResetPassword/ResetPassword';
import SuccessfullyReset from './components/SuccessfullyReset/SuccessfullyReset';


function App() {  
  return (
    <div className="app">
      <Router>
        <Switch> 
          {/* ############# On Boarding ################# */}


          {/* ############# Login Pages#################   */}
          
          <Route exact path="/resetsuccessfully" component={SuccessfullyReset}/>
          <Route exact path="/resetpassword" component={ResetPassword}/>
          <Route exact path="/confirmationcode" component={ConfirmationCode}/>
          <Route exact path="/forgetpassword" component={ForgetPassword}/>
          <Route exact path="/login" component={Login}/>

          <Route exact path="/signup" component={SignUp}/>
          <Route component={PageNotFound}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
