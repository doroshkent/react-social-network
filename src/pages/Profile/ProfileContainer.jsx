import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";

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
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileInfo,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getProfile })(
  withRouter(ProfileContainer)
);
