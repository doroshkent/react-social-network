import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "redux/profileReducer";
import { useParams } from "react-router-dom";

function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileInfo,
});

export default connect(mapStateToProps, { getProfile })(
  withRouter(ProfileContainer)
);
