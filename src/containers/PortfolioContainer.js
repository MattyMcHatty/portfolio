import React from "react";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Links from "../components/Links";
import ProjectOne from "../components/ProjectOne";
import ProjectThree from "../components/ProjectThree";
import ProjectTwo from "../components/ProjectTwo";

const PortfolioContainer = () => {

    return(
        <>
        <Header />
        <Links />
        <Introduction />
        <ProjectThree />
        <ProjectTwo />
        <ProjectOne />

        </>
    )

}

export default PortfolioContainer;