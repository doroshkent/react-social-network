import React from "react";
import PropTypes from "prop-types";
import StyledDialogues from "style/Dialogues/StyledDialogues";
import DialogueList from "style/Dialogues/DialogueList";
import MessageList from "style/Dialogues/MessageList";
import Message from "./Message/Message";
import Dialogue from "./Dialogue/Dialogue";
import SendMessageForm from "./SendMessageForm";

function Dialogues({ dialogues: { dialoguesList, messages }, sendMessage }) {
  return (
    <StyledDialogues>
      <DialogueList>
        {dialoguesList.map((dialogue) => (
          <Dialogue key={dialogue.id} dialogue={dialogue} />
        ))}
      </DialogueList>
      <MessageList>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <SendMessageForm sendMessage={sendMessage} />
      </MessageList>
    </StyledDialogues>
  );
}

Dialogues.propTypes = {
  dialogues: PropTypes.shape({
    dialoguesList: PropTypes.arrayOf(PropTypes.object),
    messages: PropTypes.arrayOf(PropTypes.object),
  }),
  sendMessage: PropTypes.func,
};

export default Dialogues;
