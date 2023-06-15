import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "hoc/withAuthRedirect";

function ProfileContainer({
  authorizedUserId,
  profile,
  status,
  getProfile,
  getStatus,
  updateStatus,
}) {
  const { userId } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      const id = userId || authorizedUserId;
      await getProfile(id);
      await getStatus(id);
    };

    fetchProfileData();
  }, [userId, authorizedUserId, getProfile, getStatus]);

  return (
    <Profile profile={profile} status={status} updateStatus={updateStatus} />
  );
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profileInfo,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);
