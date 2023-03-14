import React from 'react';
import PropTypes, {array} from 'prop-types';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsNav from "./FriendsNav/FriendsNav";

const setNavCLass = ({isActive}) => {
    return isActive ? style.active : style.item;
}


const Navbar = ({sidebar: {friends}}) => {
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li>
                    <NavLink to='/profile' className = {setNavCLass}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogues' className = {setNavCLass}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className = {setNavCLass}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music' className = {setNavCLass}>Music</NavLink>
                </li>
                <li className={style.settingItem}>
                    <NavLink to='/settings' className = {setNavCLass}>Settings</NavLink>
                </li>
                <li className={style.friendsItem}>
                    <NavLink to='/friends' className={setNavCLass}>Friends</NavLink>
                    <FriendsNav friends={friends}/>
                </li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    sidebar: PropTypes.shape({
        friends: array
    })
}

export default Navbar;
