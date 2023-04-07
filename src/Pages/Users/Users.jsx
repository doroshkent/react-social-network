import React from "react";
import Pagination from "style/Users/Pagination/Pagination";
import ActivePageNumber from "style/Users/Pagination/ActivePageNumber";
import PageNumber from "style/Users/Pagination/PageNumber";
import UserProfileCard from "style/Users/UserProfileCard";
import UserPhotoContainer from "style/Users/UserPhotoContainer";
import UserPhoto from "style/Users/UserPhoto";
import userImg from "img/user.png";
import Button from "style/Template/Button";
import UserCardDetailsContainer from "style/Users/UserCardDetailsContainer";
import UserFullName from "style/Users/UserFullName";
import UserStatus from "style/Users/UserStatus";
import UserLocation from "style/Users/UserLocation";
import PropTypes from "prop-types";

function Users({
  userCount,
  pageSize,
  currentPage,
  onPageChange,
  users,
  follow,
  unfollow,
}) {
  const pagesCount = Math.ceil(userCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const currentPages =
    currentPage > 2
      ? pages.slice(currentPage - 3, currentPage + 2)
      : pages.slice(0, 5);

  return (
    <div>
      <Pagination>
        {currentPages.map((page) => {
          if (page === currentPage) {
            return <ActivePageNumber>{page}</ActivePageNumber>;
          }
          return (
            <PageNumber
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </PageNumber>
          );
        })}
      </Pagination>
      {users.map((user) => (
        <UserProfileCard key={user.id}>
          <UserPhotoContainer>
            <UserPhoto src={user.photos.small ? user.photos.small : userImg} />
            {user.followed ? (
              <Button onClick={() => unfollow(user.id)}>Unfollow</Button>
            ) : (
              <Button onClick={() => follow(user.id)}>Follow</Button>
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
      ))}
    </div>
  );
}

Users.propTypes = {
  userCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
  follow: PropTypes.func,
  unfollow: PropTypes.func,
};

export default Users;
