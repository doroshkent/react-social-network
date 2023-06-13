import { addPost, deletePost } from "redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
  myPosts: state.profilePage.myPosts,
});

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  deletePost,
})(MyPosts);

export default MyPostsContainer;
