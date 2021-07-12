import React from 'react';
import "./Footer.css";
import {FaInstagram, FaTwitter,FaFacebook,FaPlay,FaCopyright} from "react-icons/fa";
import WebImage from "../../img/Web.png";
import FooterMir from "../../img/Logo.png";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-one foot">
                    <img src={FooterMir}  alt="footer"/> 
                    <p>560 N Riverview D Ste 658</p>
                    <p>North Carolina DA 598745 USA</p>
                    <div className="icons">
                        <p>Follow us on</p>
                        <FaInstagram className="ins"/>
                        <FaTwitter className="ins tw"/>
                        <FaPlay className="ins"/>
                        <FaFacebook className="ins"/>
                    </div>
                </div>
                <div className="footer-two foot">
                    <h4>Resouces</h4>
                    <p>Revisions</p>
                    <p>Sheets</p>
                    <p>Quiz</p>
                    <p>Drill</p>
                </div>
                <div className="footer-three foot">
                    <h4>About</h4>
                    <p>About us</p>
                    <p>Parners</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                </div>
                <div className="footer-four foot">
                    <h4>Helpful link</h4>
                    <p>Mirage</p>
                    <p>Solution</p>
                    <p>Industries</p>
                    <p>Services</p>

                </div>
                </div>
                <div className="bottom">
                    <p><FaCopyright/>All Rights Reserved By Mirage 2021</p>
                    <div>
                        <img src={WebImage} alt="web" className="WebImage"/>
                        <select>
                            <option>Eng</option>
                            <option>Rus</option>
                            <option>Uzb</option>
                        </select>
                    </div>
            </div>

        </div>
        
    )
}

export default Footer
