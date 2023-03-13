import React from 'react';
import style from './Post.module.css'

const Post = ({post: {message, likesCount}}) => {
    return (
        <div className={style.item}>
            <img src={require('../../../../img/ava.png')} />
            {message}
            <div>
                <span>{likesCount} likes</span>
            </div>
        </div>
    )
}

export default Post;
