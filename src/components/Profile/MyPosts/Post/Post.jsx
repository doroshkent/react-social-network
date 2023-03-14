import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={require('../../../../img/ava.png')} />
            {props.message}
            <div>
                <span>{props.likeCount} likes</span>
            </div>
        </div>
    )
}

export default Post;