import React from "react";
import PropTypes from "prop-types";

const Friends = ({users, follow, unfollow, setUsers}) => {
    if (users.length === 0) {
        setUsers([
            {
              id: 1,
              followed: true,
              fullName: "Nikita",
              status: "Birds watching",
              ava: require("../img/Nikita.png"),
              location: {
                city: "Poznan",
                country: "Poland",
              },
            },
            {
              id: 2,
              followed: true,
              fullName: "Masha",
              status: "Saving people",
              ava: require("../img/Masha.png"),
              location: {
                city: "Minsk",
                country: "Belarus",
              },
            },
            {
              id: 3,
              followed: true,
              fullName: "Yuli",
              status: "Enjoying my life",
              ava: require("../img/Yuli.png"),
              location: {
                city: "Tbilisi",
                country: "Georgia",
              },
            },
            {
              id: 4,
              followed: true,
              fullName: "Olga",
              status: "Looking for good wine",
              ava: require("../img/Olga.png"),
              location: {
                city: "Minsk",
                country: "Belarus",
              },
            },
            {
              id: 5,
              followed: true,
              fullName: "Pan",
              status: "Waiting for vacation",
              ava: require("../img/Pan.png"),
              location: {
                city: "Ayia Napa",
                country: "Cyprus",
              },
            },
        ])
    }

    return <div>
        { users.map( user => <div key={user.id}>

        </div>
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
