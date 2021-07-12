import React from 'react'
import Navbar from './Navbar/navbar';
import MainPage from "./MainPage/MainPage"; 
import Services from "./services/Services";
import DesingThings from "./Design/Design";
import OurTeamwork from "./Teamwork/Teamwork";
import Testimonial from "./Testimonial/Testimonial";
import Brands from "./Brands/Brands";
import Footer from "./Footer/Footer";
const LandingPage=()=> {
    
    return (
        <div>
            <Navbar/>
            <MainPage/>
            <Services/>
            <DesingThings/>
            <OurTeamwork/>
            <Testimonial/>
            <Brands/>
            <Footer/>
        </div>
    )
}
export default LandingPage;
