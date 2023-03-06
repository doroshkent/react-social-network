import style from './FriendsNav.module.css'
import FriendItem from "./FriendItem/FriendItem";

const FriendsNav = (props) => {
    const friends = Array.from(props.friends);

    const shuffledFriends = friends.sort( () => 0.5 - Math.random());

    const selectedFriends = shuffledFriends.slice(0, 3);

    const friendsItems = selectedFriends.map( friend => {
        return <FriendItem name={friend.name} id={friend.id} ava={friend.ava}/>
    })

    return (
        <nav className={style.friendsNav}>
            <ul className={style.friendsNavList}>
                <li>
                    { friendsItems }
                </li>
            </ul>
        </nav>
    )
}

export default FriendsNav;