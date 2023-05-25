import React from "react";
import StyledHeader from "style/Header/StyledHeader";
import HeaderLogo from "style/Header/HeaderLogo";
import logo from "assets/img/logo.png";
import LoginLink from "style/Header/LoginLink";
import Button from "style/common/Button";

function Header({isAuth, login, id, logout}) {
  return (
    <StyledHeader>
      <HeaderLogo src={logo}/>
      {isAuth ? (
        <>
          <LoginLink to={`/profile/${id}`}>
            {login}{" "}
          </LoginLink>
          <Button
            onClick={logout}
            style={{
              backgroundColor: "white",
              color: "cornflowerblue",
              display: "inline",
            }}
          >
            Log out
          </Button>
        </>
      ) : (
        <LoginLink to="/login">Sign in</LoginLink>
      )}
    </StyledHeader>
  );
}

export default Header;
