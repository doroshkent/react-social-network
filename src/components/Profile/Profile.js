import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profileState={props.profileState}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText} />
        </div>
    )
}

export default Profile;
