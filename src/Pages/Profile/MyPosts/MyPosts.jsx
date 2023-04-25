import React from "react";
import Button from "style/common/Button";
import PropTypes from "prop-types";
import Textarea from "style/common/Textarea";
import PostsBlock from "style/Profile/MyPosts/PostsBlock";
import Post from "./Post/Post";

function MyPosts({
  myPosts: { posts, newPostText },
  updatePostText,
  addPost,
}) {
  const onAddPost = () => {
    addPost();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    updatePostText(text);
  };

  return (
    <PostsBlock>
      <h2>My posts</h2>
      <div>
        <div>
          <Textarea onChange={onPostChange} value={newPostText} />
        </div>
        <div>
          <Button onClick={onAddPost} disabled={!newPostText}>
            Add post
          </Button>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <Post post={post} />
        )).reverse()}
      </div>
    </PostsBlock>
  );
}

MyPosts.propTypes = {
  myPosts: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object),
    newPostText: PropTypes.string,
  }),
  updateNewPostText: PropTypes.func,
  addPost: PropTypes.func,
};

export default MyPosts;
