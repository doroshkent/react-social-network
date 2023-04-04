import React from "react";
import Main from "style/Main";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function Template({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <Main>{children}</Main>
    </>
  );
}

export default Template;
