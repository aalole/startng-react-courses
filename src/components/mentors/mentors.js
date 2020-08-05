import React, {useEffect} from 'react';
import amakaMentor from '../../assets/images/mentors/amaka.jpg';
import austinMentor from '../../assets/images/mentors/austin.jpg';
import codedgiftMentor from '../../assets/images/mentors/codedgift.jpg';
import ebukaMentor from '../../assets/images/mentors/ebuka.jpg';
import jeffMentor from '../../assets/images/mentors/jeff.jpg';
import kingabeshMentor from '../../assets/images/mentors/kingabesh.jpeg';
import motunMentor from '../../assets/images/mentors/motun.jpg';
import patMentor from '../../assets/images/mentors/pat.jpg';
import phavvyMentor from '../../assets/images/mentors/phavvy.jpg';
import phileoMentor from '../../assets/images/mentors/phileo.jpeg';
import professorMentor from '../../assets/images/mentors/professor.jpeg';
import tomiMentor from '../../assets/images/mentors/tomi.jpg';
import Jumbotron from '../../components/jumbotron/jumbotron';


import './mentors.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mentors = () => {
useEffect(() => {
        AOS.init();
    })
    return(
        <div className="mentors-page">

<div class="text-center heading-title">
      <p class="d-block  headerP ">MENTORS</p>
      <p class="d-block headerP2">Our mentors have vast experience in the technology area of their choice and previously graduate of HNG internship they are well
        skilled and expert in their field</p>
    </div>

            <div id="mentor-gallery">
    <div class="container">
      <div class="row ">
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={phavvyMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-left">
              <p class="mentor-name">Favour Chibueze</p>
              <p class="mentor-track">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={professorMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-right">
              <p class="mentor-name">Alexander Garuba</p>
              <p class="mentor-track">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={motunMentor} alt="mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="zoom-in">
              <p class="mentor-name">Motunrayo Da-Costa</p>
              <p class="mentor-track">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={kingabeshMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-right">
              <p class="mentor-name">Abasifreke Ekwere</p>
              <p class="mentor-track">Backend Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={phileoMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-left">
              <p class="mentor-name">Emmanuel Owojori
              </p>
              <p class="mentor-track">Mobile Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={codedgiftMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-right">
              <p class="mentor-name">Amah Gift</p>
              <p class="mentor-track">UI/UX Design</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={jeffMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="zoom-in">
              <p class="mentor-name">Jeff Ogah</p>
              <p class="mentor-track">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={tomiMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-right">
              <p class="mentor-name">Tomisin Lalude</p>
              <p class="mentor-track">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={ebukaMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-left">
              <p class="mentor-name">Obinna Okoh</p>
              <p class="mentor-track">UI/UX Design</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={patMentor} alt="Mentor image" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-right">
              <p class="mentor-name">Patrick Aziken</p>
              <p class="mentor-track">UI/UX Design</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail" >
            <div class="mentor-image px-0">
              <img src={austinMentor} alt="Motun" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="zoom-in">
              <p class="mentor-name">Asoluka Austin</p>
              <p class="mentor-track">Backend Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="mentor-detail">
            <div class="mentor-image px-0">
              <img src={amakaMentor} alt="Motun" class="img-fluid w-100" />
            </div>
            <div class="mentor-info" data-aos="fade-right">
              <p class="mentor-name">Chiamaka Osumgba</p>
              <p class="mentor-track">Backend Developer</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

<Jumbotron/>
        </div>

    )
}

export default Mentors;
