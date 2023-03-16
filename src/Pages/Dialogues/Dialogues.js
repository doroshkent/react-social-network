import Dialogue from "./Dialogue/Dialogue";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "redux/dialoguesReducer"
import Button from "style/Button";
import PropTypes from "prop-types";
import Textarea from "style/Textarea";
import StyledDialogues from "style/Dialogues/StyledDialogues";
import DialogueList from "style/Dialogues/DialogueList";
import MessageList from "style/Dialogues/MessageList";

const Dialogues = ({dialogues: {dialoguesList, messages, newMessageText}, dispatch}) => {
    const onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    }

    const onMessageChange = (e) => {
        let message = e.target.value;
        dispatch(updateMessageTextActionCreator(message))
    }

    return (
        <StyledDialogues>
            <DialogueList>
                { dialoguesList.map( dialogue => <Dialogue dialogue={dialogue}/>) }
            </DialogueList>
            <MessageList>
                { messages.map( message => <Message message={message}/>) }
                <Textarea onChange={ onMessageChange }
                          value={ newMessageText } />
                <Button onClick={ onSendMessageClick } disabled={!newMessageText}>Send message</Button>
            </MessageList>
        </StyledDialogues>
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
