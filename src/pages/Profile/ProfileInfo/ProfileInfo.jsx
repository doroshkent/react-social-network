import React from "react";
import ProfileDescription from "style/Profile/ProfileInfo/ProfileDescription";
import Preloader from "Components/common/Preloader";
import UserStatus from "style/Users/UserStatus";
import ProfilePhoto from "style/Profile/ProfileInfo/ProfilePhoto";
import jobImage from "assets/img/job.png";
import UserContacts from "style/Profile/ProfileInfo/UserContacts";
import Status from "./Status";
import userAva from "assets/img/user.png";
import ChangePhotoLabel from "style/Profile/ProfileInfo/ChangePhotoLabel";

function ProfileInfo({ profile, status, updateStatus, isOwner, updatePhoto }) {
  if (!profile) {
    return <Preloader />;
  }

  const filteredContacts = Object.entries(profile.contacts).filter(
    ([, value]) => value !== null
  );

  const onPhotoChange = (e) => {
    if (e.target.files.length > 0) {
      updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <ProfileDescription>
        <h1>
          <ProfilePhoto src={profile.photos.large || userAva} />
          {profile.fullName}
        </h1>
        {isOwner && (
          <div>
            <ChangePhotoLabel htmlFor="filePicker">
              Change photo
            </ChangePhotoLabel>
            <input
              id="filePicker"
              style={{ visibility: "hidden" }}
              type="file"
              onChange={onPhotoChange}
            />
          </div>
        )}
        <Status profileStatus={status} updateStatus={updateStatus} />
        {profile.lookingForAJob && (
          <>
            <UserStatus display={"inline"}>
              <img src={jobImage} height="60px" />
              {profile.lookingForAJobDescription}
            </UserStatus>
          </>
        )}
        {filteredContacts.length > 0 && (
          <>
            <h2>Contacts:</h2>
            <UserContacts>
              {filteredContacts.map(([socialMedia, link]) => (
                <li>
                  {socialMedia}: {link}
                </li>
              ))}
            </UserContacts>
          </>
        )}
      </ProfileDescription>
    </div>
  );
}

export default ProfileInfo;
