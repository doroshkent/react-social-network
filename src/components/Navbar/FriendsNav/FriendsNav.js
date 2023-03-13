import React from "react";
import style from './FriendsNav.module.css'
import FriendItem from "./FriendItem/FriendItem";

const FriendsNav = ({friends}) => {
    const pickedFriends = [...friends].sort( () => 0.5 - Math.random()).slice(0,3);

    return (
        <nav>
            <ul className={style.friendsNavList}>
                <li>
                    { pickedFriends.map( friend => (
                        <FriendItem name={friend.name} id={friend.id} ava={friend.ava}/>
                    ))}
                </li>
            </ul>
        </nav>
    )
}

export default FriendsNav;
