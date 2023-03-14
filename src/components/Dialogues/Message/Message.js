import style from './MessageItem.module.css';
import PropTypes from "prop-types";

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

Message.propTypes = {
    message: PropTypes.shape({
        messageText: PropTypes.string,
        isSent: PropTypes.bool
    })
}

export default Message;
