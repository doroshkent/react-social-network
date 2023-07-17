import React, {useState} from "react";
import ProfileDescription from "style/Profile/ProfileInfo/ProfileDescription";
import Preloader from "Components/common/Preloader";
import UserStatus from "style/Users/UserStatus";
import ProfilePhoto from "style/Profile/ProfileInfo/ProfilePhoto";
import jobImage from "assets/img/job.png";
import UserContacts from "style/Profile/ProfileInfo/UserContacts";
import Status from "./Status";
import userAva from "assets/img/user.png";
import ChangePhotoLabel from "style/Profile/ProfileInfo/ChangePhotoLabel";
import Button from "style/common/Button";
import ProfileMainInfo from "style/Profile/ProfileInfo/ProfileMainInfo";
import FullName from "style/Profile/ProfileInfo/FullName";

function ProfileInfo({profile, status, updateStatus, isOwner, updatePhoto}) {
  const [showChangePhoto, setShowChangePhoto] = useState(false);

  if (!profile) {
    return <Preloader/>;
  }

  const onPhotoChange = (e) => {
    if (e.target.files.length > 0) {
      updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <ProfileDescription>
        <ProfileMainInfo onMouseLeave={()=> setShowChangePhoto(false)}>
          <ProfilePhoto src={profile.photos.large || userAva} onMouseEnter={() => setShowChangePhoto(true)}/>
          <FullName>
            {profile.fullName}
          </FullName>
          {isOwner && showChangePhoto && (
            <div style={{gridArea: "changePhoto"}}>
              <ChangePhotoLabel htmlFor="filePicker">
                Change photo
              </ChangePhotoLabel>
              <input
                id="filePicker"
                style={{visibility: "hidden"}}
                type="file"
                onChange={onPhotoChange}
              />
            </div>
          )}
          <Status profileStatus={status} updateStatus={updateStatus}/>
        </ProfileMainInfo>
        <ProfileData profile={profile} isOwner={isOwner}/>
      </ProfileDescription>
    </div>
  );
}

function ProfileData({profile, isOwner}) {
  const filteredContacts = Object.entries(profile.contacts).filter(
    ([, value]) => value !== null
  );

  return (
    <>
      {isOwner && <Button>Change profile description</Button>}
      {profile.lookingForAJob && (
        <>
          <UserStatus display={"inline"}>
            <img src={jobImage} height="60px"/>
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
    </>
  )
}

export default ProfileInfo;
