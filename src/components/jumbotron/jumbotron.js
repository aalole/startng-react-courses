import React from 'react';
import './jumbotron.css';

const Jumbotron = () =>{
    return (
        <>
            <section className="my-5">
                <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <div className="bg">
                        <h3 className="mb-5 text-white">Break into the tech industry like a Pro.</h3>
                        <a href="./enrollment.html" className=" custom-btn text-decoration-none" type="button">Enroll Today</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Jumbotron;
