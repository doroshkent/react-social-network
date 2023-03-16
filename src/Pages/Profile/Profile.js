import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";

const Profile = ({profile: {myPosts}, dispatch}) => (
    <div>
        <ProfileInfo/>
        <MyPosts myPosts={myPosts}
                 dispatch={dispatch}/>
    </div>
)

Profile.propTypes = {
    profile: PropTypes.shape({
        myPosts: PropTypes.object
    }),
    dispatch: PropTypes.func
}

export default Profile;
