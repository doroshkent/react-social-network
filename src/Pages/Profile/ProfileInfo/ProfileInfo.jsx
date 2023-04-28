import React from "react";
import ProfileDescription from "style/Profile/ProfileInfo/ProfileDescription";
import ProfileCoverPhoto from "style/Profile/ProfileInfo/ProfileCoverPhoto";
import Preloader from "Components/common/Preloader";
import UserStatus from "style/Users/UserStatus";
import ProfilePhoto from "style/Profile/ProfileInfo/ProfilePhoto";
import jobImage from "assets/img/job.png";
import UserContacts from "style/Profile/ProfileInfo/UserContacts";

function ProfileInfo({ profile }) {
  if (!profile) {
    return <Preloader />;
  }

  const filteredContacts = Object.entries(profile.contacts).filter(
    ([, value]) => value !== null
  );

  return (
    <div>
      <div>
        <ProfileCoverPhoto src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <ProfileDescription>
        <h1>
          {profile.photos.large && <ProfilePhoto src={profile.photos.large} />}
          {profile.fullName}
        </h1>
        {profile.aboutMe && (
          <UserStatus display={"inline"}>{profile.aboutMe}</UserStatus>
        )}
        {profile.lookingForAJob && (
          <>
            <img src={jobImage} height="60px" />
            <UserStatus display={"inline"}>
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
