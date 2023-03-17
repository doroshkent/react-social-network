import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => (
    <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
)

/*Profile.propTypes = {
    store: PropTypes.object
}*/

export default Profile;
