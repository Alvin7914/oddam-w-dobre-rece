import React from "react";
import HomeHeader from "./HomeHeader.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeSimpleSteps from "./HomeSimpleSteps.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";
import HomeWhoWeHelp from "./HomeWhoWeHelp.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const Home = () => {

    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;