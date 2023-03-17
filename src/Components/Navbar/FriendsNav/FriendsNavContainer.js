import {connect} from "react-redux";
import FriendsNav from "./FriendsNav";

const mapStateToProps = (state) => ({
    friends: state.sidebar.friends
})

const FriendsNavContainer = connect(mapStateToProps)(FriendsNav)

export default FriendsNavContainer;
