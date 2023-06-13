import React from "react";
import PropTypes from "prop-types";
import ava from "assets/img/ava.png";
import StyledPost from "style/Profile/MyPosts/Post/StyledPost";
import PostPhoto from "style/Profile/MyPosts/Post/PostPhoto";
import { MdOutlineDelete } from "react-icons/md";

function Post({ post: { message, likesCount, id }, deletePost }) {
  return (
    <StyledPost>
      <PostPhoto src={ava} />
      {message}
      <div>
        <span>{likesCount} likes </span>
        <MdOutlineDelete onClick={() => deletePost(id)} />
      </div>
    </StyledPost>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    message: PropTypes.string,
    likesCount: PropTypes.number,
  }),
};

export default Post;
