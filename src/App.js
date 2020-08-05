import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sample from "./components/sample/sample";
import HomePage from "./components/homePage/homePage";
import Footer from "./components/navigation/Footer/footer";
// import Contact from "./components/contact/contact";
// import Forum from "./components/forum/forum";
// import Enrollment from "./components/enrollment/enrollment";
import PrivacyPolicy from "./components/privacyPolicy/privacyPolicy";
import Courses from "./components/courses/courses";
// import TermsConditions from "./components/termsConditions/termsConditions";
// import About from "./components/about/about";
// import Curriculum from "./components/curriculum/curriculum";
// import singleCurriculum from "./components/singleCurriculum/singleCurriculum";
import Mentors from "./components/mentors/mentors";
// import RequestCertificate from "./components/requestCertificate/requestCertificate";
import PastProject from "./components/pastProject/pastProject";

import { pageurl } from "./utils/constants";
import Navbar from "./components/navigation/Nav/nav";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={pageurl.HOMEPAGE} component={HomePage} />
        <Route exact path={pageurl.SAMPLE} component={Sample} />
        <Route exact path={pageurl.PRIVACYPOLICY} component={PrivacyPolicy} />
        {/* <Route exact path={pageurl.CURRICULUM} component={Curriculum} /> */}
        {/* <Route exact path={pageurl.SINGLECURRICULUM} component={singleCurriculum} /> */}
        <Route exact path={pageurl.MENTORS} component={Mentors} />
        <Route exact path={pageurl.PASTPROJECT} component={PastProject} />
        {/* <Route exact path={pageurl.REQUESTCERTIFICATE} component={RequestCertificate}/> */}
        {/* <Route exact path={pageurl.CONTACT} component={Contact} /> */}
        {/* <Route exact path={pageurl.FORUM} component={Forum} /> */}
        {/* <Route exact path={pageurl.ENROLLMENT} component={Enrollment} /> */}
        <Route exact path={pageurl.COURSES} component={Courses} />
        {/* <Route
          exact
          path={pageurl.TERMSCONDITIONS}
          component={TermsConditions}
        /> */}
        {/* <Route exact path={pageurl.ABOUT} component={About} /> */}
        {/* <Route exact path={pageurl.CERTIFICATE} component={Certificate} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
