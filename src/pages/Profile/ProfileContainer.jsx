import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "redux/profileReducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "hoc/withAuthRedirect";
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
      userId = 28658;
      //userId = 2;
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
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getProfile, getStatus, updateStatus })
  //withAuthRedirect
)(ProfileContainer);
