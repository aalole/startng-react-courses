import React from 'react';
import twitterIcon from '../../../assets/images/Contact-form/twitter.png';
import facebookIcon from  '../../../assets/images/Contact-form/facebook.png';
import logoIcon from '../../../assets/images/Contact-form/logo.png';
import './footer.css'
const Footer = () => {

    return(
        <div>
           {/* footer for desktop */}
      <footer className="footer mt-5 d-none d-md-block">
        <div className="container footerContainer">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <div className="logo">
                  <a className="logo" href="/">
                    <img src={logoIcon} alt="logo" />
                  </a>
                </div>
                <div className=" ">
                  <h5 className="font-weight-bold">Quick links</h5>
                  <div className="d-flex justify-content-end">
                    <ul className="nav nav-pills flex-column mr-5   mt-3">
                      <li className="nav-item">
                        <a className="nav-link p-0 " href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 " href="/">About us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 " href="/">Courses</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="/">Curriculum</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="/">Mentors</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="/">Request Certificates</a>
                      </li>
                    </ul>
                    <ul className="nav nav-pills flex-column   mt-3">
                      <li className="nav-item">
                        <a className="nav-link p-0 " href="/">FAQ</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 " href="/">Previous Techies</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 " href="/">Past Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="/">Forum</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="/">Privacy Policy</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="/">Terms and Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div >
                  <h5 className="font-weight-bold">Contact us</h5>
                  <p className=" mt-3">
                    <a href="/" className="text-dark">Hello@start.ng</a>
                  </p>
                </div>
                <div>
                  <h5 className="font-weight-bold">Office Address</h5>
                  <p className=" mt-3">
                    92, Wolverine Avenue, Ikeja.<br />
                    Lagos State, Nigeria
                  </p>
                </div>
                <div >
                  <h5 className="font-weight-bold">Follow us</h5>
                  <div className="mt-3">
                    <a href="/" className="text-decoration-none inline-block mr-3">
                      <img src={facebookIcon} alt="facebook-icon" />
                    </a>
                    <a href="/" className="text-decoration-none inline-block ">
                      <img src={twitterIcon} alt="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="section-bottom">
                <div className="col-12 py-2 text-center">
                  <p className="footer-copyright">
                    © 2020 StartNG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

              {/* footer for mobile */}
      <footer className="d-md-none d-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row mobile-footer">
                <div className="col-6">
                  <h5 className="font-weight-bold">Quick links</h5>
                  <ul className="nav nav-pills flex-column mr-5   mt-3">
                    <li className="nav-item">
                      <a className="nav-link p-0 " href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 " href="about-us.html">About us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 " href="courses.html">Courses</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="curriculumn-v1.html">Curriculum</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="mentors.html">Mentors</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="certificate.html">Request Certificates</a>
                    </li>
                  </ul>
                  <ul className="nav nav-pills flex-column   mt-3">
                    <li className="nav-item">
                      <a className="nav-link p-0 " href="FAQ.html">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 " href="pastTechies.html">Previous Techies</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 " href="past_project.html">Past Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="forum.html">Forum</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="policy.html">Privacy Policy</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href="Terms&Conditions.html">Terms and Conditions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <div>
                    <h5 className="font-weight-bold">Contact us</h5>
                    <p>
                      <a href="/" className="text-dark">Hello@start.ng</a>
                    </p>
                  </div>
                  <div>
                    <h5 className="font-weight-bold">Office Address</h5>
                    <p>
                      92, Wolverine Avenue, Ikeja.<br />
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <a className=" logo" href="/">
                    <img src={logoIcon} alt="logo" />
                  </a>
                </div>
                <div className="col-6">
                  <h5 className="font-weight-bold">Follow us</h5>
                  <a href="/" className="text-decoration-none inline-block mr-3">
                    <img src={facebookIcon} alt="facebook-logo" />
                  </a>
                  <a href="/" className="text-decoration-none inline-block ">
                    <img src={twitterIcon} alt="twitter-logo" />
                  </a>
                </div>
              </div>
              <hr />
              <div className="section-bottom">
                <div className="col-12 py-2 text-center">
                  <p className="footer-copyright">
                    © 2020 StartNG. All Right Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )

}

export default Footer;


