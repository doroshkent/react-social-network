import React from "react";
import StyledHeader from "style/Header/StyledHeader";
import HeaderLogo from "style/Header/HeaderLogo";

function Header() {
  return (
    <StyledHeader>
      <HeaderLogo src={require("img/logo.png")} />
    </StyledHeader>
  );
}

export default Header;
