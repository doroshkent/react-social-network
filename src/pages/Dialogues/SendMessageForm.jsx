import Textarea from "../../style/common/Textarea";
import Button from "../../style/common/Button";
import React from "react";
import { useForm } from "react-hook-form";

function SendMessageForm({ sendMessage }) {
  const { register, handleSubmit, reset } = useForm();

  const onSendMessage = (data) => {
    sendMessage(data.newMessage);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSendMessage)}>
      <Textarea
        placeholder={"Type your message"}
        {...register("newMessage", { required: true })}
      />
      <Button>Send message</Button>
    </form>
  );
}

export default SendMessageForm;
