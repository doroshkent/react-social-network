import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  myPosts: state.profilePage.myPosts,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostActionCreator()),
  updateNewPostText: (text) => dispatch(updatePostTextActionCreator(text)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
