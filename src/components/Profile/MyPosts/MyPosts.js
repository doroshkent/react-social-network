import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postItems = props.profileState.posts.map( post => {
        return <Post message={post.message} likeCount={post.likesCount}/>
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={ newPostElement } onChange={ onPostChange } value={props.profileState.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                { postItems }
            </div>
        </div>
    )
}

export default MyPosts;
