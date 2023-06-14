import React, {useEffect} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "redux/profileReducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

function withRouter(Children) {
  return (props) => {
    const match = {params: useParams()};
    return <Children {...props} match={match}/>;
  };
}

function ProfileContainer({match, authorizedUserId, getProfile, getStatus, ...props}) {
  useEffect(() => {
    let userId = match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
    }
    getProfile(userId);
    getStatus(userId);
  }, [authorizedUserId, match.params.userId || []]);

  return <Profile {...props} />;
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileInfo,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {getProfile, getStatus, updateStatus})
  //withAuthRedirect
)(ProfileContainer);
