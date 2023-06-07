import { connect } from "react-redux";
import { follow, requestUsers, unfollow } from "redux/usersReducer";
import React from "react";
import Preloader from "Components/common/Preloader";
import Users from "./Users";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getUserCount,
  getUsers,
} from "redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
  users: getUsers(state),
  userCount: getUserCount(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
  }),
  withAuthRedirect
)(UsersContainer);
