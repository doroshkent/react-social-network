import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "redux/profileReducer";
import { useParams } from "react-router-dom";
import { profileApi } from "api/api";

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
    profileApi.getUserProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileInfo,
});

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
