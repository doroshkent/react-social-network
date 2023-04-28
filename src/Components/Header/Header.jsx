import React from "react";
import StyledHeader from "style/Header/StyledHeader";
import HeaderLogo from "style/Header/HeaderLogo";
import logo from "assets/img/logo.png";
import LoginLink from "style/Header/LoginLink";

function Header({ isAuth, login, id }) {
  return (
    <StyledHeader>
      <HeaderLogo src={logo} />
      {isAuth ? (
        <LoginLink to={`/profile/${id}`}>{login}</LoginLink>
      ) : (
        <LoginLink to="/login">Sign in</LoginLink>
      )}
    </StyledHeader>
  );
}

export default Header;
