import React from "react";
import PropTypes from "prop-types";
import FriendsSidebar from "style/Navbar/FriendsNav/FriendsSidebar";
import Friend from "./Friend/Friend";

function FriendsNav({ friends }) {
  const pickedFriends = [...friends]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <FriendsSidebar>
      <li>
        {pickedFriends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </li>
    </FriendsSidebar>
  );
}

FriendsNav.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendsNav;
