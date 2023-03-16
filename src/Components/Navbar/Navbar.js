import PropTypes from "prop-types";
import FriendsNav from "./FriendsNav/FriendsNav";
import Nav from "style/Navbar/Nav";
import NavList from "style/Navbar/NavList";
import NavbarNavLink from "style/Navbar/NavbarNavLink";
import NavListItem from "style/Navbar/NavListItem";

const Navbar = ({sidebar: {friends}}) => (
    <Nav>
        <NavList>
            <NavListItem>
                <NavbarNavLink to='/profile'>Profile</NavbarNavLink>
            </NavListItem>
            <NavListItem>
                <NavbarNavLink to='/dialogues'>Messages</NavbarNavLink>
            </NavListItem>
            <NavListItem>
                <NavbarNavLink to='/news'>News</NavbarNavLink>
            </NavListItem>
            <NavListItem>
                <NavbarNavLink to='/music'>Music</NavbarNavLink>
            </NavListItem>
            <NavListItem>
                <NavbarNavLink to='/settings'>Settings</NavbarNavLink>
            </NavListItem>
            <NavListItem>
                <NavbarNavLink to='/friends'>Friends</NavbarNavLink>
                <FriendsNav friends={friends}/>
            </NavListItem>
        </NavList>
    </Nav>
)

Navbar.propTypes = {
    sidebar: PropTypes.shape({
        friends: PropTypes.array
    })
}

export default Navbar;
