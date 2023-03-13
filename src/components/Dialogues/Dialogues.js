import React from "react";
import style from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/store"

const Dialogues = ({dialogues: {dialogues, messages, newMessageText}, dispatch}) => {
    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let message = e.target.value;
        dispatch(updateMessageTextActionCreator(message))
    }

    return (
        <div className={style.dialogues}>
            <div className={style.dialogueList}>
                { dialogues.map( dialogue => <Dialogue dialogue={dialogue}/>) }
            </div>
            <div className={style.messageList}>
                { messages.map( message => <Message message={message}/>) }
                <textarea className={style.messageTextarea}
                          onChange={ onMessageChange }
                          value={ newMessageText } ></textarea>
                <button onClick={ onSendMessageClick } className={style.sendMessageButton}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogues;
