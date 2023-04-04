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
import axios from "axios";
import userImg from "img/user.png";

class Users extends React.Component {

  componentDidMount() {
    axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <FriendProfileCard key={user.id}>
            <FriendPhotoContainer>
              <FriendPhoto
                src={user.photos.small ? user.photos.small : userImg}
              />
              {user.followed ? (
                <Button onClick={() => this.props.unfollow(user.id)}>
                  Unfollow
                </Button>
              ) : (
                <Button onClick={() => this.props.follow(user.id)}>
                  Follow
                </Button>
              )}
            </FriendPhotoContainer>
            <FriendCardDetailsContainer>
              <FriendFullName>{user.name}</FriendFullName>
              <FriendStatus>{user.status}</FriendStatus>
            </FriendCardDetailsContainer>
            <div>
              <FriendLocation>
                'user.location.city', 'user.location.country'
              </FriendLocation>
            </div>
          </FriendProfileCard>
        ))}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  setUsers: PropTypes.func,
};

export default Users;
