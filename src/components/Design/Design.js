import React from 'react'
import "./Design.css"
import {CgArrowRightR} from "react-icons/cg";
import DesignImage from "../../img/pluto-artist-workspace.png";



function Design() {
    return (
        <div className="designthings">
            <div className="design-left-box">
             <img src={DesignImage} alt="design" className="design-image"/>
            </div>
            <div className="design-right-box">
                    <h4 className="red-design">Design Things </h4>
                <h1 className="design-header">We Loves To Design Your Creative Ideas</h1>
                <p className="design-p">A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages </p>
                <button className="start-button mx-5">Learn more <CgArrowRightR/></button>
            </div>
          

        </div>
    )
}

export default Design
