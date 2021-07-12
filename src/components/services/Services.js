import React from 'react';
import "./services.css";
import {BiRightArrow} from "react-icons/bi"
import Imagebloob from "../../img/Bloobs.png";
import AOS from 'aos'

const Advantage=()=> {
   AOS.init();

    return (
        <div className="services">
           <img src={Imagebloob} alt="blooob" className="bloob"/>
            <h4 className="red-services">Our services</h4>
            <h1 className="services-header">Why People Choose Us</h1>
            <div className="services-main-box">
                  <div className="first-box" data-aos="zoom-in-down" data-aos-duration="800">
                     <i className="far fa-cubes serv-icon"></i>
                     <h4>Design</h4>
                     <p className="boxes-content">a plan or drawing produced to show the look and function</p> 
                     <p className="learn-more">Learn more <BiRightArrow/></p>
                  </div>
                  <div className="first-box" data-aos="zoom-in-down" data-aos-duration="800" >
                     <i className="fal fa-cube serv-icon"></i>
                     <h4>Development</h4>
                     <p className="boxes-content">Development is defined as the process of growth or new </p> 
                     <p className="learn-more">Learn more <BiRightArrow/></p>
                  </div>
                  <div className="first-box" data-aos="zoom-in-down" data-aos-duration="800" >
                     <i className="far fa-briefcase serv-icon"></i>
                     <h4>Branding</h4>
                     <p className="boxes-content">The marketing practice of creating a name, symbol or </p> 
                     <p className="learn-more">Learn more <BiRightArrow/></p>
                  </div>
                  <div className="first-box" data-aos="zoom-in-down" data-aos-duration="800">
                  <i className="far fa-layer-group serv-icon"></i>
                     <h4>Illustration</h4>
                     <p className="boxes-content">An illustration is a decoration, interpretation or visual</p> 
                     <p className="learn-more">Learn more <BiRightArrow/></p>
                  </div>
            </div>
              
            
        </div>
    )
}
export  default Advantage;
