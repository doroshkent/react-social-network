import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profileState.posts}
                     addPost={props.addPost}
                     newPostText={props.profileState.newPostText}
                     updatePostText={props.updatePostText} />
        </div>
    )
}

export default Profile;
