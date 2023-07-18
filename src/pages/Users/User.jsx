import React from "react";
import UserProfileCard from "style/Users/UserProfileCard";
import UserPhotoContainer from "style/Users/UserPhotoContainer";
import UserPhoto from "style/Users/UserPhoto";
import userImg from "assets/img/user.png";
import { FollowButton } from "style/common/Button";
import UserCardDetailsContainer from "style/Users/UserCardDetailsContainer";
import UserFullName from "style/Users/UserFullName";
import UserStatus from "style/Users/UserStatus";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function User({ user, follow, unfollow, followingInProgress }) {
  return (
    <div>
      <UserProfileCard>
        <UserPhotoContainer>
          <NavLink to={`/profile/${user.id}`}>
            <UserPhoto src={user.photos.small || userImg} />
          </NavLink>
        </UserPhotoContainer>
        <UserCardDetailsContainer>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/profile/${user.id}`}
          >
            <UserFullName>{user.name}</UserFullName>
          </NavLink>
          <UserStatus>{user.status}</UserStatus>
          {user.followed ? (
            <FollowButton
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => unfollow(user.id)}
            >
              Unfollow
            </FollowButton>
          ) : (
            <FollowButton
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => follow(user.id)}
            >
              Follow
            </FollowButton>
          )}
        </UserCardDetailsContainer>
      </UserProfileCard>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
};

export default User;
