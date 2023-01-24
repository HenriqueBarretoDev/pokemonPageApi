import React from "react";

import ContentHomePage from "../../Components/ContentHomePage";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import MainHomePageInfo from "../../Components/MainHomePageInfo";

const LadingPageHome = () => {
    return (
        <div className="LadingPageHome">
            <Header/>
            <ContentHomePage/>
            <MainHomePageInfo/>
            <Footer/>
        </div>
    )
}
export default LadingPageHome
