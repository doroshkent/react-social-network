import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "redux/profileReducer";
import Button from "style/Button";
import PropTypes from "prop-types";
import Textarea from "style/Textarea";
import PostsBlock from "style/Profile/MyPosts/PostsBlock";

const MyPosts = ({myPosts: {posts, newPostText}, dispatch}) => {
    const addPost = () => {
        dispatch(addPostActionCreator());
    }

    const onPostChange = (e) => {
        const text = e.target.value;
        dispatch( updatePostTextActionCreator(text) );
    }

    return (
        <PostsBlock>
            <h2>My posts</h2>
            <div>
                <div>
                    <Textarea onChange={ onPostChange } value={newPostText} />
                </div>
                <div>
                    <Button onClick={ addPost }>Add post</Button>
                </div>
            </div>
            <div>
                { posts.map( post => <Post post={post}/>)}
            </div>
        </PostsBlock>
    )
}

MyPosts.propTypes = {
    myPosts: PropTypes.shape({
        posts: PropTypes.arrayOf(PropTypes.object),
        newPostText: PropTypes.string
    }),
    dispatch: PropTypes.func
}


export default MyPosts;
