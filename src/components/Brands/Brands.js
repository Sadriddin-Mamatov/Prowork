import React from 'react';
import "./Brands.css"
import Ferrari from "../../img/ferrari.png";
import Microsoft from "../../img/microsoft-gray.png";
import National from "../../img/nat-geo.png";
import Deloitto from "../../img/Deloitte-gray.png"
import Google from "../../img/5c7120fa2d05cec571969c2d_google-logo-export-v1 1.png";
import SubscribeImage from "../../img/Mail Illustration.png";
import RightImage from "../../img/boob-ri.png";
import {CgArrowRightR} from "react-icons/cg";


function Brands() {
    return (
        <div>
                <div className="brands-box">
                    <img src={Ferrari} alt="Ferrari" className="ferrari la"/>
                    <img src={Microsoft} alt="Mikrosoft" className="microsoft la"/>
                    <img src={National} alt="National" className="national la"/>
                    <img src={Deloitto} alt="deloitto" className="deliotto la"/>
                    <img src={Google} alt="Google" className="google la"/>
                </div>
                <div className="subscribe-box">
                    <div className="subscribe-left">
                        <img src={SubscribeImage} alt="Subscribe" className="subscribe"/>
                    </div>
                    <div className="subscribe-right">
                        <h1>Subscribe To Our Blog</h1>
                        <p>A newsletter is a tool used to communicate regularly with your subscribers, delivering the information</p>
                        <input placeholder="Type Your Email Address" type="email" id="address" className="input"/>
                        <button htmlFor="address" className="start-button mx-5 send">Send now <CgArrowRightR/></button>

                    </div>
                    <img src={RightImage} alt="boolb" className="right-img"/>

                </div>
        </div>
     
    )
}

export default Brands
