import React from "react";
import PropTypes from "prop-types";
import FriendSidebar from "style/Navbar/FriendsNav/Friend/FriendSidebar";

function Friend({ friend: { name, ava } }) {
  return (
    <FriendSidebar>
      <img width="50px" src={ava} />
      {name}
    </FriendSidebar>
  );
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    ava: PropTypes.node,
  }),
};

export default Friend;
