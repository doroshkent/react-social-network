import React from "react";
import PropTypes from "prop-types";
import StyledMessage from "style/Dialogues/Message/StyledMessage";

const Message = ({ message: { messageText, isSent } }) => (
  <StyledMessage isSent={isSent}>{messageText}</StyledMessage>
);

Message.propTypes = {
  message: PropTypes.shape({
    messageText: PropTypes.string,
    isSent: PropTypes.bool,
  }),
};

export default Message;
