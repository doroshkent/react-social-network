import React from "react";
import Button from "style/Button";
import PropTypes from "prop-types";
import Textarea from "style/Textarea";
import StyledDialogues from "style/Dialogues/StyledDialogues";
import DialogueList from "style/Dialogues/DialogueList";
import MessageList from "style/Dialogues/MessageList";
import Message from "./Message/Message";
import Dialogue from "./Dialogue/Dialogue";

function Dialogues({
  dialogues: { dialoguesList, messages, newMessageText },
  sendMessage,
  updateMessageText,
}) {
  const onSendMessageClick = () => {
    sendMessage();
  };

  const onMessageChange = (e) => {
    const message = e.target.value;
    updateMessageText(message);
  };

  return (
    <StyledDialogues>
      <DialogueList>
        {dialoguesList.map((dialogue) => (
          <Dialogue dialogue={dialogue} />
        ))}
      </DialogueList>
      <MessageList>
        {messages.map((message) => (
          <Message message={message} />
        ))}
        <Textarea onChange={onMessageChange} value={newMessageText} />
        <Button onClick={onSendMessageClick} disabled={!newMessageText}>
          Send message
        </Button>
      </MessageList>
    </StyledDialogues>
  );
}

Dialogues.propTypes = {
  dialogues: PropTypes.shape({
    dialoguesList: PropTypes.arrayOf(PropTypes.object),
    messages: PropTypes.arrayOf(PropTypes.object),
    newMessageText: PropTypes.string,
  }),
  sendMessage: PropTypes.func,
  updateMessageText: PropTypes.func,
};

export default Dialogues;
