import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersCount,
  toggleIsFetching,
  unfollow,
} from "redux/usersReducer";
import React from "react";
import axios from "axios";
import Preloader from "Components/common/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            userCount={this.props.userCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
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
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer);
