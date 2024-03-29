import React from "react";
import PropTypes from "prop-types";
import PostsBlock from "style/Profile/MyPosts/PostsBlock";
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm";

function MyPosts({ myPosts: { posts }, addPost, deletePost }) {
  return (
    <PostsBlock>
      <h2>My posts</h2>
      <NewPostForm addPost={addPost} />
      <div>
        {[...posts].reverse().map((post) => (
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))}
      </div>
    </PostsBlock>
  );
}

MyPosts.propTypes = {
  myPosts: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object),
  }),
  addPost: PropTypes.func,
};

export default MyPosts;
