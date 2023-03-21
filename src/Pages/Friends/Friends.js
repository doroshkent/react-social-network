import React from "react";
import PropTypes from "prop-types";
import FriendProfileCard from "style/Friends/FriendProfileCard";
import FriendPhotoContainer from "style/Friends/FriendPhotoContainer";
import Button from "style/Button";
import FriendCardDetailsContainer from "style/Friends/FriendCardDetailsContainer";
import FriendFullName from "style/Friends/FriendFullName";
import FriendStatus from "style/Friends/FriendStatus";
import FriendLocation from "style/Friends/FriendLocation";
import FriendPhoto from "style/Friends/FriendPhoto";

const Friends = ({users, follow, unfollow, setUsers}) => {
    if (users.length === 0) {
        setUsers([
            {
              id: 1,
              followed: true,
              fullName: "Nikita",
              status: "Birds are soooo interesting",
              ava: require("img/Nikita.png"),
              location: {
                city: "Poznan",
                country: "Poland",
              },
            },
            {
              id: 2,
              followed: true,
              fullName: "Masha",
              status: "Saving people, too busy",
              ava: require("img/Masha.png"),
              location: {
                city: "Minsk",
                country: "Belarus",
              },
            },
            {
              id: 3,
              followed: true,
              fullName: "Yuli",
              status: "Enjoying the life. But steel want to move from Georgia",
              ava: require("img/Yuli.png"),
              location: {
                city: "Tbilisi",
                country: "Georgia",
              },
            },
            {
              id: 4,
              followed: true,
              fullName: "Olga",
              status: "Any advice for good wine?",
              ava: require("img/Olga.png"),
              location: {
                city: "Minsk",
                country: "Belarus",
              },
            },
            {
              id: 5,
              followed: true,
              fullName: "Pan",
              status: "Feel like everyone forgot me",
              ava: require("img/Pan.png"),
              location: {
                city: "Ayia Napa",
                country: "Cyprus",
              },
            },
        ])
    }

    return <div>
        { users.map( user => <FriendProfileCard key={user.id}>
            <FriendPhotoContainer>
                <FriendPhoto src={user.ava} />
                {user.followed
                    ? <Button onClick={() => unfollow(user.id)}>Unfollow</Button>
                    : <Button onClick={() => follow(user.id)}>Follow</Button>}
            </FriendPhotoContainer>
            <FriendCardDetailsContainer>
                <FriendFullName>{user.fullName}</FriendFullName>
                <FriendStatus>{user.status}</FriendStatus>
            </FriendCardDetailsContainer>
            <div>
                <FriendLocation>{user.location.city}, {user.location.country}</FriendLocation>
            </div>
        </FriendProfileCard>
        )}
    </div>
}

Friends.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    follow: PropTypes.func,
    unfollow: PropTypes.func,
    setUsers: PropTypes.func
}

export default Friends
