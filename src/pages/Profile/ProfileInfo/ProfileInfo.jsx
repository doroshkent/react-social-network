import React, { useState } from "react";
import ProfileDescription from "style/Profile/ProfileInfo/ProfileDescription";
import Preloader from "Components/common/Preloader";
import UserStatus from "style/Users/UserStatus";
import ProfilePhoto from "style/Profile/ProfileInfo/ProfilePhoto";
import UserContacts from "style/Profile/ProfileInfo/UserContacts";
import Status from "./Status";
import userAva from "assets/img/user.png";
import ChangePhotoLabel from "style/Profile/ProfileInfo/ChangePhotoLabel";
import Button from "style/common/Button";
import ProfileMainInfo from "style/Profile/ProfileInfo/ProfileMainInfo";
import FullName from "style/Profile/ProfileInfo/FullName";
import ProfileDataForm from "./ProfileDataForm";
import SMLink from "style/Profile/ProfileInfo/SMLink";
import isAbsoluteURL from "utils/isAbsoluteURL";

function ProfileInfo({
  profile,
  status,
  updateStatus,
  isOwner,
  updatePhoto,
  saveProfile,
}) {
  const [showChangePhoto, setShowChangePhoto] = useState(false);
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onPhotoChange = (e) => {
    if (e.target.files.length > 0) {
      updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <ProfileDescription>
        <ProfileMainInfo onMouseLeave={() => setShowChangePhoto(false)}>
          <ProfilePhoto
            src={profile.photos.large || userAva}
            onMouseEnter={() => setShowChangePhoto(true)}
          />
          <FullName>{profile.fullName}</FullName>
          {isOwner && showChangePhoto && (
            <div style={{ gridArea: "changePhoto" }}>
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
        </ProfileMainInfo>
        {editMode ? (
          <ProfileDataForm
            deactivateEditMode={() => setEditMode(false)}
            saveProfile={saveProfile}
            profile={profile}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            activateEditMode={() => setEditMode(true)}
          />
        )}
      </ProfileDescription>
    </div>
  );
}

function ProfileData({ profile, isOwner, activateEditMode }) {
  const filteredContacts = Object.entries(profile.contacts).filter(
    ([, value]) => value
  );

  return (
    <>
      {isOwner && (
        <Button onClick={activateEditMode}>Change profile description</Button>
      )}
      {profile.aboutMe && (
        <>
          <h2>About me:</h2>
          <UserStatus>{profile.aboutMe}</UserStatus>
        </>
      )}
      {profile.lookingForAJob && (
        <>
          <h2>Looking for a job:</h2>
          <UserStatus>{profile.lookingForAJobDescription}</UserStatus>
        </>
      )}
      {filteredContacts.length > 0 && (
        <>
          <h2>Contacts:</h2>
          <UserContacts>
            {filteredContacts.map(([socialMedia, link]) => (
              <li key={socialMedia}>
                {socialMedia}:{" "}
                <SMLink
                  href={isAbsoluteURL(link) ? link : `https://${link}`}
                  target="_blank"
                >
                  {link}
                </SMLink>
              </li>
            ))}
          </UserContacts>
        </>
      )}
    </>
  );
}

export default ProfileInfo;
