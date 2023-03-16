import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavbarNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  
  &.active {
    color: #324a59;
  }
`

export default NavbarNavLink
