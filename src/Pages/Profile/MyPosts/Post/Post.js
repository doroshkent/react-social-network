import PropTypes from "prop-types";
import StyledPost from "style/Profile/MyPosts/Post/StyledPost";
import PostPhoto from "style/Profile/MyPosts/Post/PostPhoto";

const Post = ({post: {message, likesCount}}) => (
    <StyledPost>
        <PostPhoto src={require('img/ava.png')}/>
        {message}
        <div>
            <span>{likesCount} likes</span>
        </div>
    </StyledPost>
)

Post.propTypes = {
    post: PropTypes.shape({
        message: PropTypes.string,
        likesCount: PropTypes.number
    })
}

export default Post;
