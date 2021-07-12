import React from 'react'
import "./Testimonial.css";
import TestimonialImage from "../../img/Image Section.png";
import BoolbImg from "../../img/Bloobs.png"

function Testimonial() {
    return (
        <div className="testimonial">
            <img src={BoolbImg} alt="left-boolb" className="testimon"/>
            <div className="test-left">
                <img src={TestimonialImage} alt="testimonial" className="testimonial-img"/>
            </div>
            <div className="test-right">
                <h4 className="red-design">Testimonial</h4>
                <h1 className="design-header ">Thats What Our Client Says About Us</h1>
                <p className="design-p">“ Heartiest congratulations to the team for Future projects. I extend thankful wishes and wish the team best of luck for the future assignments to come. Your effort is gladly ”</p>
                <h3>Jorge Morrison</h3>
                <p>North California,USA</p>
            </div>
            
     
        </div>
    )
}

export default Testimonial
