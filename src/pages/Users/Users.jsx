import React from "react";
import PropTypes from "prop-types";
import Paginator from "Components/common/Paginator";
import User from "./User";

function Users({
  userCount,
  pageSize,
  currentPage,
  onPageChange,
  users,
  follow,
  unfollow,
  followingInProgress,
}) {
  return (
    <div>
      <Paginator
        itemsCount={userCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
        />
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
