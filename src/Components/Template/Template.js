import React from 'react'
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "style/Main";

const Template = ({sidebar, children}) => (
    <>
        <Header/>
        <Navbar sidebar={sidebar}/>
        <Main>
            {children}
        </Main>
    </>
)

Template.propTypes = {
    sidebar: PropTypes.object,
}

export default Template
