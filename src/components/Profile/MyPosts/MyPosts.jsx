import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postItems = props.posts.map( post => {
        return <Post message={post.message} likeCount={post.likesCount}/>
    })

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                { postItems }
            </div>
        </div>
    )
}

export default MyPosts;