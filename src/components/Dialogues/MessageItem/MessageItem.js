import style from './MessageItem.module.css';

const MessageItem = (props) => {
    const setMessageClass = (props) => {
        let messageClass = props.isSent ? style.messageSent : style.messageReceived;
        return `${style.message} ${messageClass}`
    }

    return (
        <div className={setMessageClass(props)}>
            {props.message}
        </div>
    )
}

export default MessageItem;
