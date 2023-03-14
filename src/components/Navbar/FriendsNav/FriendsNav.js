import React from "react";
import style from './FriendsNav.module.css'
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

const FriendsNav = ({friends}) => {
    const pickedFriends = [...friends].sort( () => 0.5 - Math.random()).slice(0,3);

    return (
        <nav>
            <ul className={style.friendsNavList}>
                <li>
                    { pickedFriends.map( friend => (
                        <Friend friend={friend}/>
                    ))}
                </li>
            </ul>
        </nav>
    )
}

FriendsNav.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendsNav;
