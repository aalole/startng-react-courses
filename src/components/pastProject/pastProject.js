import React from 'react';
import './pastProject.css';
import pastproject from './image/pastproject.png'

const PastProject = () => {

    return(
        <div>
            <div>
                <div className="container pastprojectintro-full">
                    <div>
                        <div className="project-intro">
                            <div className="pastprojectintro-text">
                                <h3 className="pt-3">STARTNG 2.0 PROJECTS</h3>
                                <p>The sixth edition of the Start Internship commenced on the 5th of Feburary, 2020 and was
                                    concluded on the 30th of March, 2020. It was a well-planned, coordinated event where
                                    young
                                    talented folks from across the globe participated remotely and were involved in learning
                                    key
                                    skills needed to become the best globally in Programming, Product Design, Machine
                                    Learning,
                                    Digital Marketing and more. The Internship comprised of 10 stages where participants
                                    were
                                    assigned tasks on a weekly basis with deadlines for submission.
                                </p>
                            </div>
                            <div className="intro-img">
                                <img src={pastproject} alt="project-rep"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background ">

                    <div className="container project-banner">
                        <div className="project-list-title">
                            <h3 className="pt-3">PROJECT LIST</h3>
                            <p>Here is the list of projects that will be developed in the training</p>
                        </div>
                        <p className="enroll-now"><button>enroll today</button></p>
                    </div>
                    <div className="container">
                        <div className="projects row pb-3">
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3>FGexpenseNG</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.fgexpenseNG.com">www.fgexpenseNG.com</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3>TalentPool</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.talentpool.com"> www.talentpool.com</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                <h3>MyCustomer App</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="#">www.play.google.com/store/mycustomer</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3> FundMyLaptop</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.fundmylaptop.com">www.fundmylaptop.com</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3>Lucid Blog</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.lucidblog.com">www.lucidblog.com</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3>FGexpenseNG</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.fgexpenseNG.com">www.fgexpenseNG.com</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3>FGexpenseNG</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.fgexpenseNG.com">www.fgexpenseNG.com</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3>FGexpenseNG</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.fgexpenseNG.com">www.fgexpenseNG.com</a>
                            </div>
                            <div className="project col-md-4 mb-4">
                                <div className="project-caption">
                                    <h3>FGexpenseNG</h3>
                                    <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel</p>
                                </div>
                                <a href="www.fgexpenseNG.com">www.fgexpenseNG.com</a>
                            </div>
                        </div>
                    </div>
                    <section class="mt-5 enroll pb-3">
                        <div class="container mb-5 enroll-child">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="bg">
                                        <h3 class="mb-5 text-white">Break into the tech industry like a Pro</h3>
                                        <a href="./enrollment.html" class=" custom-btn text-decoration-none" type="button">Enroll Today</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default PastProject;