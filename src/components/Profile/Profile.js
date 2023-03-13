import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profile={profile}
                     dispatch={dispatch} />
        </div>
    )
}

export default Profile;
