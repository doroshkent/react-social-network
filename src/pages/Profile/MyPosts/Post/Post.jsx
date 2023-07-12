import React from "react";
import PropTypes from "prop-types";
import ava from "assets/img/ava.png";
import StyledPost from "style/Profile/MyPosts/Post/StyledPost";
import PostPhoto from "style/Profile/MyPosts/Post/PostPhoto";
import { MdOutlineDelete } from "react-icons/md";
import Button from "style/common/Button";

function Post({ post: { message, likesCount, id }, deletePost }) {
  return (
    <StyledPost>
      <PostPhoto src={ava} />
      {message}{" "}
      <Button>
        <MdOutlineDelete onClick={() => deletePost(id)} />
      </Button>
      <div>
        <span>{likesCount} likes </span>
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
