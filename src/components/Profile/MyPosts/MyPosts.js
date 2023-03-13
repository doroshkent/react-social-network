import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = ({profile: {posts, newPostText}, dispatch}) => {
    const addPost = () => {
        dispatch(addPostActionCreator());
    }

    const onPostChange = (e) => {
        const text = e.target.value;
        dispatch( updatePostTextActionCreator(text) );
    }

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={ onPostChange } value={newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                { posts.map( post => <Post post={post}/>)}
            </div>
        </div>
    )
}

export default MyPosts;
