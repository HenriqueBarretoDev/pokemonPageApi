import React from "react";

import Header from '../../Components/Header';
import ContentHomePage from "../../Components/ContentHomePage";
import Footer from "../../Components/Footer";
import Home from '../Home'

const LadingPageHome = () => {
    return (
        <div className="LadingPageHome">
            <Header/>
            <ContentHomePage/>
            <Footer/>
        </div>
    )
}
export default LadingPageHome
