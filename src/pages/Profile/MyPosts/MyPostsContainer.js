import { addPost, updatePostText } from "redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
  myPosts: state.profilePage.myPosts,
});

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updatePostText,
})(MyPosts);

export default MyPostsContainer;
