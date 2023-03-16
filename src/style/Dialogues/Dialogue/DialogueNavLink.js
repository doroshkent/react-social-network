import styled from "styled-components";
import {NavLink} from "react-router-dom";

const DialogueNavLink = styled(NavLink)`
  color: dodgerblue;
  text-decoration: none;
  &.active {
    color: #324a59;
  }
`

export default DialogueNavLink
