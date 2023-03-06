import style from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={style.friend}>
            <img className={style.friendAva} src={props.ava}/>
            <span className={style.name}>{props.name}</span>
        </div>
    )
}

export default FriendItem;