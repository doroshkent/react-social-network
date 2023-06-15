import React from "react";
import UserProfileCard from "style/Users/UserProfileCard";
import UserPhotoContainer from "style/Users/UserPhotoContainer";
import UserPhoto from "style/Users/UserPhoto";
import userImg from "assets/img/user.png";
import Button from "style/common/Button";
import UserCardDetailsContainer from "style/Users/UserCardDetailsContainer";
import UserFullName from "style/Users/UserFullName";
import UserStatus from "style/Users/UserStatus";
import UserLocation from "style/Users/UserLocation";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function User({ user, follow, unfollow, followingInProgress }) {
  return (
    <div>
      <UserProfileCard>
        <UserPhotoContainer>
          <NavLink to={`/profile/${user.id}`}>
            <UserPhoto src={user.photos.small ? user.photos.small : userImg} />
          </NavLink>
          {user.followed ? (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => unfollow(user.id)}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => follow(user.id)}
            >
              Follow
            </Button>
          )}
        </UserPhotoContainer>
        <UserCardDetailsContainer>
          <UserFullName>{user.name}</UserFullName>
          <UserStatus>{user.status}</UserStatus>
        </UserCardDetailsContainer>
        <div>
          <UserLocation>
            'user.location.city', 'user.location.country'
          </UserLocation>
        </div>
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
