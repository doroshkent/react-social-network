import React from "react";
import Main from "style/Template/Main";
import Navbar from "../Navbar/Navbar";
import HeaderContainer from "../Header/HeaderContainer";

function Template({ children }) {
  return (
    <>
      <HeaderContainer />
      <Navbar />
      <Main>{children}</Main>
    </>
  );
}

export default Template;
