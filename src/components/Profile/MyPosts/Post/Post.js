import React from 'react';
import style from './Post.module.css'
import PropTypes from "prop-types";

const Post = ({post: {message, likesCount}}) => (
        <div className={style.item}>
            <img src={require('../../../../img/ava.png')} />
            {message}
            <div>
                <span>{likesCount} likes</span>
            </div>
        </div>
    )

Post.propTypes = {
    post: PropTypes.shape({
        message: PropTypes.string,
        likesCount: PropTypes.number
    })
}

export default Post;
