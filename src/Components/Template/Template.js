import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "style/Main";

const Template = ({children}) => (
    <>
        <Header/>
        <Navbar />
        <Main>
            {children}
        </Main>
    </>
)

export default Template
