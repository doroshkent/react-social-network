import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  setUsersCountAC,
  unfollowAC,
} from "redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => this.props.setUsers(response.data.items));
  };

  render() {
    return (
      <Users
        userCount={this.props.userCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  userCount: state.usersPage.userCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(followAC(userId)),
  unfollow: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
  setUsersCount: (count) => dispatch(setUsersCountAC(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
