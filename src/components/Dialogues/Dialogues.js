import React from "react";
import style from './Dialogues.module.css'
import Dialogue from "./Dialogue/Dialogue";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialoguesReducer"
import Button from "../../style/Button";
import PropTypes from "prop-types";

const Dialogues = ({dialogues: {dialoguesList, messages, newMessageText}, dispatch}) => {
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
                { dialoguesList.map( dialogue => <Dialogue dialogue={dialogue}/>) }
            </div>
            <div className={style.messageList}>
                { messages.map( message => <Message message={message}/>) }
                <textarea className={style.messageTextarea}
                          onChange={ onMessageChange }
                          value={ newMessageText } ></textarea>
                <Button onClick={ onSendMessageClick } className={style.sendMessageButton}>Send message</Button>
            </div>
        </div>
    )
}

Dialogues.propTypes = {
    dialogues: PropTypes.shape({
        dialoguesList: PropTypes.arrayOf(PropTypes.object),
        messages: PropTypes.arrayOf(PropTypes.object),
        newMessageText: PropTypes.string
    }),
    dispatch: PropTypes.func
}

export default Dialogues;
