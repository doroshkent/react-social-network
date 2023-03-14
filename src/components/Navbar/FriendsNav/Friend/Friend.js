import style from './FriendItem.module.css'
import PropTypes from "prop-types";

const Friend = ({friend: {name, ava}}) => {
    return (
        <div className={style.friend}>
            <img className={style.friendAva} src={ava}/>
            <span className={style.name}>{name}</span>
        </div>
    )
}

Friend.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        ava: PropTypes.node
    })
}

export default Friend;
