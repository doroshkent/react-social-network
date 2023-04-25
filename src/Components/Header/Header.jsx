import React from "react";
import StyledHeader from "style/Header/StyledHeader";
import HeaderLogo from "style/Header/HeaderLogo";
import logo from "assets/img/logo.png";

function Header() {
  return (
    <StyledHeader>
      <HeaderLogo src={logo} />
    </StyledHeader>
  );
}

export default Header;
