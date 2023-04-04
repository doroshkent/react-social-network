import React from "react";
import Nav from "style/Navbar/Nav";
import NavList from "style/Navbar/NavList";
import NavbarNavLink from "style/Navbar/NavbarNavLink";
import NavListItem from "style/Navbar/NavListItem";
import FriendsNavContainer from "./FriendsNav/FriendsNavContainer";

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavbarNavLink to="/profile">Profile</NavbarNavLink>
        </NavListItem>
        <NavListItem>
          <NavbarNavLink to="/dialogues">Messages</NavbarNavLink>
        </NavListItem>
        <NavListItem>
          <NavbarNavLink to="/news">News</NavbarNavLink>
        </NavListItem>
        <NavListItem>
          <NavbarNavLink to="/music">Music</NavbarNavLink>
        </NavListItem>
        <NavListItem>
          <NavbarNavLink to="/friends">Friends</NavbarNavLink>
          <FriendsNavContainer />
        </NavListItem>
        <NavListItem>
          <NavbarNavLink to="/settings">Settings</NavbarNavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
