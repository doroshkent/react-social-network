import React from "react";
import PropTypes from "prop-types";
import ava from "img/ava.png";
import StyledPost from "style/Profile/MyPosts/Post/StyledPost";
import PostPhoto from "style/Profile/MyPosts/Post/PostPhoto";

function Post({ post: { message, likesCount } }) {
  return (
    <StyledPost>
      <PostPhoto src={ava} />
      {message}
      <div>
        <span>{likesCount} likes</span>
      </div>
    </StyledPost>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    message: PropTypes.string,
    likesCount: PropTypes.number,
  }),
};

export default Post;
