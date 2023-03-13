import style from './MessageItem.module.css';

const Message = ({message: {messageText, isSent}}) => {

    const setMessageClass = () => {
        let messageClass = isSent ? style.messageSent : style.messageReceived;
        return `${style.message} ${messageClass}`
    }

    return (
        <div className={setMessageClass()}>
            {messageText}
        </div>
    )
}

export default Message;
