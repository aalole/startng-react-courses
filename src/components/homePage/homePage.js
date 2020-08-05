import React, {useEffect} from 'react';
import './homePage.css';
import homepage1 from '../../assets/images/homepage/1.jpg'
import homepage2 from '../../assets/images/homepage/2.jpg'
import homepage3 from '../../assets/images/homepage/3.jpg'
import homepage4 from '../../assets/images/homepage/4.jpg'
import homepage5 from '../../assets/images/homepage/5.jpg'
import homepage6 from '../../assets/images/homepage/6.jpg'
import vector2 from '../../assets/images/homepage/Vector (2).png'
import vector3 from '../../assets/images/homepage/Vector (3).png'
import vector4 from '../../assets/images/homepage/Vector (4).png'
import iwaRemote from '../../assets/images/homepage/iwwa_remote-control-o.png'
import clarityBriefcase from '../../assets/images/homepage/clarity_briefcase-line.png'
import carbonNetwork from '../../assets/images/homepage/carbon_network-1.png'
import clarityAtom from '../../assets/images/homepage/clarity_atom-line.png'
import clarityUser from '../../assets/images/homepage/clarity_user-line.png'
import clarityOutline from '../../assets/images/homepage/clarity_users-outline-alerted.png'
import professor from '../../assets/images/homepage/professor.jpeg'
import phavvy from '../../assets/images/homepage/phavvy.jpg'
import kingabesh from '../../assets/images/homepage/kingabesh.jpeg'
import pat from '../../assets/images/homepage/pat.jpg'
import vector1 from '../../assets/images/homepage/Vector 1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="home-page">
            <section className="headerBg">
            <div className="container">
                <div className="row">
                    <div id="centered" className=" col-md-5">
                        <h4 className=" headerH4">Gain enough knowledge to help scale through the
                        tech industry for free.</h4>
                        <p className="pt-3 pb-5 header">I should be incapable of drawing a single stroke at the 
                        present moment; and yet I feel that I never was a greater artist than now.</p>
                        <div className>
                            <button type="button" name="button" className="rounded-0 pl-3 headerBtn pr-3 pt-2 pb-2 border-0"><a className="headerTag" href="./enrollment.html">Enroll
                    Today</a></button>
                        </div>
                    </div>
                    <div className="col-md-6 pt-5 ml-5 d-flex justify-content-end aos-init aos-animate">
                        <div id="none" className="col custom-col-6 pt-5">
                            <img src={homepage1} className="flyin-topleft img-fluid" alt='homepage1'/>
                            <img src={homepage2} className="flyin-left img-fluid" alt='homepage2'/>
                            <img src={homepage3} className="flyin-bottom img-fluid" alt='homepage3'/>
                        </div>
                        <div id="none" className="col custom-col-6">
                            <img src={homepage4} className="flyin-top img-fluid" alt='homepage4'/>
                            <img src={homepage5} className="flyin-right img-fluid" alt='homepage5'/>
                            <img src={homepage6} className="flyin-bottomright img-fluid" alt='homepage6'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-xs-4 d-flex justify-content-center pl-1 pt-4">
                        <a href="#"><img width="80%" src={vector4} alt="vector4" /></a>
                    </div>
                    <div className="col-xs-4 d-flex justify-content-center pt-4">
                        <a href="#"><img width="80%" src={vector2}  alt="vector2" /></a>
                    </div>
                    <div className="col-xs-4 d-flex justify-content-center pt-4">
                        <a href="#"><img width="80%" src={vector3}  alt="vector3" /></a>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-md-6">
                            <p style={{ fontSize: '14px' }} className="pt-5 pb-2 red">WHY STARTNG</p>
                            <h5 className="pb-2 pp">At startNG, you gain access to enough knowledge to
                            introduce and aid
                  your success in the tech industry.</h5>
                            <p style={{ fontSize: '16px', color: '#514949' }}>I should be incapable of drawing a single stroke at the present
                  moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems </p>
                        </div>
                    </div>
                    {/* ======================================= This only appear on mobile screens====================================== */}
                    <div id="carouselExampleIndicators" className="carousel slide mobile" data-ride="carousel" data-aos="fade-up" data-aos-duration={2000}>
                        <div>
                            <div className="main-carousel" data-flickity="{ &quot;center-left&quot;: true ,&quot;autoPlay&quot;:true, &quot;contain&quot;: true, &quot;groupCells&quot;: true  }">
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20em', backgroundColor: '#F2EBE9' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="10%" src={iwaRemote} alt="iwaRemote" />
                                            <div className="card-body ">
                                                <p className="card-title">Fully Remote</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20em', backgroundColor: '#F2EBE9' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="10%" src={clarityBriefcase} alt="clarityBriefcase" />
                                            <div className="card-body ">
                                                <p className="card-title">Hands-on Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20em', backgroundColor: '#DCF4F8' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="10%" src={carbonNetwork} alt="carbonNetwork" />
                                            <div className="card-body ">
                                                <p className="card-title">Collaborative Learning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20em', backgroundColor: '#FFE3E1' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="10%" src={clarityAtom} alt="clarityAtom" />
                                            <div className="card-body ">
                                                <p className="card-title">Real-life Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20em', backgroundColor: '#F0DCF8' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="10%" src={clarityUser} alt="clarityUser" />
                                            <div className="card-body ">
                                                <p className="card-title">Beginner Friendly</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20em', backgroundColor: '#EFFFF4' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="10%" src={clarityOutline} alt="clarityOutline" />
                                            <div className="card-body ">
                                                <p className="card-title">Mentorship</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5 pl-3 pr-3 mobile">
                        <button type="button" name="button" className="rounded-0 carouselBtn pl-3 pr-3 pt-2 pb-2 border-0"><a className="headerTag" href="./curriculumn-v1.html">View
                  Curriculum</a></button>
                    </div>
                    {/* ========================The end of the mobile slide========================== */}
                    {/* =====================This only appears 0n desktop and tablet screen============================ */}
                    <div className="container">
                        <div className="row">
                            <div id="desktop" className="row pt-5 pb-5" data-aos="fade-down" data-aos-duration={2000}>
                                <div className="col-md-4 pt-2 card-container">
                                    <div className="card jg">
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="20%" src={iwaRemote} alt="iwaRemote2" /></div>
                                        <div className="card-body ">
                                            <p className="card-title">Fully <br />Remote</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pt-2 card-container">
                                    <div className="card" style={{ width: '100%', backgroundColor: '#F2EBE9' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="20%" src={clarityBriefcase} alt="clarityBriefcase2" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title">Hands-on Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pt-2 card-container">
                                    <div className="card" style={{ width: '100%', backgroundColor: '#DCF4F8' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="20%" src={carbonNetwork} alt="carbonNetwork2" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title">Collaborative Learning</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pt-2 card-container">
                                    <div className="card" style={{ width: '100%', backgroundColor: '#FFE3E1' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="20%" src={clarityAtom} alt="clarityAtom2" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title">Real-life <br />Projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pt-2 card-container">
                                    <div className="card" style={{ width: '100%', backgroundColor: '#F0DCF8' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="20%" src={clarityUser} alt="clarityUser2" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title">For <br />Beginners </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pt-2 card-container">
                                    <div className="card" style={{ width: '100%', backgroundColor: '#EFFFF4' }}>
                                        <div className="pt-4 pl-3 pb-5">
                                            <img width="20%" src={clarityOutline} alt="clarityOutline2" />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title pb-4">Mentorship</p>
                                        </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="container pt-5 pl-3 pr-3">
                                        <button type="button" name="button" className="rounded-0 carouselBtn pl-3 pr-3 pt-2 pb-2 border-0"><a className="headerTag" href="#">View
                          Curriculum</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ====================================The upper codes only appear only desktop screens========================================= */}
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: '#F2EBE9' }}>
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-md-12 pb-3">
                                <p className="pt-5 red">SCOPE OF PROGRAM</p>
                            </div>
                            <div className="col-md-6">
                                <p className="sectP pp">Here is the list of
                                areas that will be explored in
                    <br /> training.</p>
                            </div>
                            <div className="col-md-6">
                                <div id="desktop3">
                                    <div className="container d-flex justify-content-end p-0">
                                        <button type="button" name="button" className="rounded-0 sectBtn pl-3 pr-3 pt-2 pb-2 border-0"><a href="./enrollment.html" className="sectTag">Enroll
                          Today</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ===========================================This appears only on mobile screens=========================================== */}
                        <div id="carouselExampleIndicators" className="carousel slide mobile" data-ride="carousel" data-aos="fade-up" data-aos-duration={2000}>
                            <div className="main-carousel" data-flickity="{ &quot;center-left&quot;: true ,&quot;autoPlay&quot;:true, &quot;contain&quot;: true, &quot;groupCells&quot;: true  }">
                                <div className="carousel-cell active">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <div className="card-body">
                                            <h5 style={{ fontFamily: 'Averta-Bold' }} className="card-title">Frontend Development</h5>
                                            <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                                yet I feel</p>
                                            <img width="100%" src={vector1} alt="vector-1" />
                                            <p className="pt-2 cardpfontsize">HTML | CSS3 | Javascript | Bootstrap | JQuery</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Backend Development</h5>
                                            <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                                yet I feel</p>
                                            <img width="100%" src={vector1} alt="vector-2" />
                                            <p className="pt-2 cardpfontsize">NodeJS | PHP | Python | C# | Golang</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">UX/UI Design</h5>
                                            <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                                yet I feel</p>
                                            <img width="100%" src={vector1} alt="vector-3" />
                                            <p className="pt-2 cardpfontsize">Figma | Adobe XD | Adobe illustrator</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell">
                                    <div className="card" style={{ width: '20rem' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Mobile Development</h5>
                                            <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                                yet I feel</p>
                                            <img width="100%" src={vector1} alt="vector-4" />
                                            <p className="pt-2 cardpfontsize"> Java | Flutter | Kotlin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile">
                            <div className="container pt-5 pl-3 pr-3 d-flex justify-content-center">
                                <button type="button" name="button" className="rounded-0 carouselBtn pl-3 pr-3 pt-2 pb-2 border-0"><a href="#">View Curriculum</a></button>
                            </div>
                        </div>
                        {/*==================================== This code above appears only on mobile screens=============================================== */}
                        {/* ====================================The code below appears only on desktop screens=============================================== */}
                        <div className="row pb-5" id="desktop2">
                            <div className="col-md-4 pt-5 d-flex justify-content-center">
                                <div className="card" style={{ width: '100%' }}>
                                    <div className="card-body">
                                        <h5 style={{ fontSize: '18px' }} className="card-title">Frontend Development</h5>
                                        <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                            yet I feel</p>
                                        <img width="100%" src={vector1} alt="vector-11" />
                                        <p className="pt-2 cardpfontsize">HTML | CSS3 | Javascript | Bootstrap | JQuery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pt-5 d-flex justify-content-center">
                                <div className="card" style={{ width: '100%' }}>
                                    <div className="card-body">
                                        <h5 style={{ fontSize: '18px' }} className="card-title">Backend Development</h5>
                                        <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                            yet I feel</p>
                                        <img width="100%" src={vector1} alt="vector-22" />
                                        <p className="pt-2 cardpfontsize">NodeJS | PHP | Python | C# | Golang</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pt-5 d-flex justify-content-center">
                                <div className="card" style={{ width: '100%' }}>
                                    <div className="card-body">
                                        <h5 style={{ fontSize: '18px' }} className="card-title">UX/UI Design</h5>
                                        <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                            yet I feel</p>
                                        <img width="100%" src={vector1} alt="vector-33" />
                                        <p className="pt-2 cardpfontsize">Figma | Adobe XD | Adobe illustrator</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pt-5 d-flex justify-content-center">
                                <div className="card" style={{ width: '100%' }}>
                                    <div className="card-body">
                                        <h5 style={{ fontSize: '18px' }} className="card-title">Mobile Development</h5>
                                        <p className="card-text pt-3">I should be incapable of drawing a single stroke at the present moment; and
                                            yet I feel</p>
                                        <img width="100%" src={vector1} alt="vector-44" />
                                        <p className="pt-2 cardpfontsize"> Java | Flutter | Kotlin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-2 pt-3">
                            <p className="pt-5 pb-3 d-flex justify-content-center red">OUR MENTORS</p>
                            <p className="d-flex list justify-content-center mentorparg">Here is the list of startNG
                  mentors</p>
                        </div>
                        <div className="col-md-3 pt-2" data-aos="flip-left" data-aos-duration={1000}>
                            <img width="100%" src={professor} alt="professor" />
                            <p className="pt-2" style={{ fontWeight: 'bold', color: '#514949' }}>Alexander Garuba</p>
                            <p className="mentorspargfont">Frontend Developer</p>
                        </div>
                        <div className="col-md-3 pt-2" data-aos="flip-left" data-aos-duration={2000}>
                            <img width="100%" src={phavvy} alt="phavvy" />
                            <p className="pt-2" style={{ fontWeight: 'bold', color: '#514949' }}>Favour Chibueze</p>
                            <p className="mentorspargfont">Frontend Developer</p>
                        </div>
                        <div className="col-md-3 pt-2" data-aos="flip-left" data-aos-duration={2500}>
                            <img width="100%" src={kingabesh} alt="kingabesh" />
                            <p className="pt-2" style={{ fontWeight: 'bold', color: '#514949' }}>Abasifreke Ekwere</p>
                            <p className="mentorspargfont">Backend Developer</p>
                        </div>
                        <div className="col-md-3 pt-2" data-aos="flip-left" data-aos-duration={3000}>
                            <img width="100%" src={pat} alt="pat" />
                            <p className="pt-2" style={{ fontWeight: 'bold', color: '#514949' }}>Patrick Aziken</p>
                            <p className="mentorspargfont">UI/UX Designer</p>
                        </div>
                    </div>
                </div>

                <section className="mt-5 enroll">
                    <div className="container mb-5 enroll-child">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="bg">
                                    <h3 className="mb-5 text-white">Break into the tech industry like a Pro</h3>
                                    <a href="./enrollment.html" className=" custom-btn text-decoration-none" type="button">Enroll Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default HomePage;