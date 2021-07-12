import React from 'react'
import {CgArrowRightR} from "react-icons/cg";
import "./teamwork.css"
import IllustrationImage from "../../img/Illustration.png";
import ImgR from "../../img/boob-ri.png"

function Teamwork() {
    return (
        <div className="teamwork-box">
            <img src={ImgR} alt="rightb" className="right-b"/>
            <div className="teamwork-left">
                <h4 className="red-design">Our Teamwork</h4>
                <h1 className="design-header ha">We Believe Success Lies On Teamwork</h1>
                <p className="design-p">Good teamwork means a synergistic way of working with each person committed and working towards a shared goal. ... It is therefore a necessity that leaders facilitate and build the teamwork skills of their people if they are</p>
                <button className="start-button mx-5">Learn more <CgArrowRightR/></button>


            </div>
            <div className="teamwork-right">
              <img src={IllustrationImage} alt="illustration" className="illus"/>
            </div>

        
        </div>
    )
}

export default Teamwork;
