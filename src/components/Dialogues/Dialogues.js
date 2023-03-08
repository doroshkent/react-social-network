import React from "react";
import style from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogues = (props) => {
    let dialogueItems = props.dialoguesState.dialogues.map( dialogue => {
        return <DialogueItem name={dialogue.name} id={dialogue.id} ava={dialogue.ava}/>
    })

    let messageItems = props.dialoguesState.messages.map( message => {
        return <MessageItem message={message.messageText} isSent={message.isSent}/>
    })

    let messageText = React.createRef();

    let sendMessage = () => {
        let message = messageText.current.value;
        alert(message);
    }

    return (
        <div className={style.dialogues}>
            <div className={style.dialogueList}>
                { dialogueItems }
            </div>
            <div className={style.messageList}>
                { messageItems }
                <textarea ref = { messageText } className={style.messageTextarea}></textarea>
                <button onClick={ sendMessage } className={style.sendMessageButton}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogues;
