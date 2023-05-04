import { connect } from "react-redux";
import { follow, getUsers, unfollow } from "redux/usersReducer";
import React from "react";
import Preloader from "Components/common/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} onPageChange={this.onPageChange} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  userCount: state.usersPage.userCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers,
})(UsersContainer);
