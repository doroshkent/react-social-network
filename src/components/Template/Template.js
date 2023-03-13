import React from 'react'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Template = ({sidebar, children}) => (
    <>
        <Header/>
        <Navbar sidebar={sidebar}/>
        <div>
            {children}
        </div>
    </>
)

export default Template
