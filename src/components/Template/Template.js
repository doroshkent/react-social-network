import React from 'react'
import PropTypes from 'prop-types';
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

Template.propTypes = {
    sidebar: PropTypes.object,
}

export default Template
