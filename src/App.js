import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ApplyJobPage from "./pages/AppyJobPage";
import CommunityGuideLinePage from "./pages/CommunityGuideLinePage";
import AnyUserPage from './pages/AnyUserPage'
import CompaniesPage from "./pages/CompaniesPage";
import CompanyProfilPage from "./pages/CompanyProfilPage";
import ErrorPage from "./pages/ErrorPage";
import JobsPage from "./pages/JobsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SignInPage from "./pages/SignIn";
import UserProfilPage from "./pages/UserProfilPage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Switch>
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/companies" component={CompaniesPage} />
          <Route exact path="/companies/:{someparams}" component={CompanyProfilPage}/>
          <Route exact path="/users" component={UsersPage}/>
          <Route exact path="/user" component={AnyUserPage}/>
          <Route exact path="/jobs" component={JobsPage} />
          <Route exact path="/apply-job/:{someparams}" component={ApplyJobPage}/>
          <Route exact path="/my-profile" component={UserProfilPage}/>
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route exact path="/community-guide-line" component={CommunityGuideLinePage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
