import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";

function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      //commented method was questionable from the very beginning, now it doesn't work at all;
      /*if (!userId) {
        const {history} = this.props;
        history.push("/login");
      }*/
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileInfo,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getProfile, getStatus, updateStatus })
  //withAuthRedirect
)(ProfileContainer);
