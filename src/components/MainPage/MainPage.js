import React from 'react';
import {CgArrowRightR} from 'react-icons/cg';
import ImageMain from "../../img/Hero Image.png";
import NavbarImage from "../../img/navbar.png";
import "./MainPage.css";


const MainPage =()=>{
    return (
        <div className="main-page">
            <img src={NavbarImage} alt="nvbar" className="Navbar-img"/>
           <div className="left-box">
                       <h3 className="red-header">___Creative Agency</h3>
                        <h1 className="main-head">We Deliver The Best Product for You</h1>
                        <p className="main-text">Design is the creation of a plan or convention for the construction of an object or a system as in architectural blueprints, engineering drawings, business processes,</p>
                        <button className="start-button">Get Started <CgArrowRightR/></button>
           </div>
           <div className="right-box">
               <img src={ImageMain} alt="hero" className="hero-img"/>

           </div>
          

        
        </div>
    )
}


export default MainPage;