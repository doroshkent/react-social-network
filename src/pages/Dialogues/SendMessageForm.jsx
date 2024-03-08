import Button from "style/common/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "style/common/ErrorMessage";
import { Textarea } from "style/common/CommonInputStyles";

function SendMessageForm({ sendMessage }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSendMessage = (data) => {
    sendMessage(data.newMessage);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSendMessage)}>
      <Textarea
        placeholder={"Type your message"}
        {...register("newMessage", {
          required: "You should type something to send",
          validate: { maxLength: (v) => v.length < 50 || "Max length is 50" },
        })}
      />
      {errors?.newMessage?.type === "required" && (
        <ErrorMessage>{errors.newMessage.message}</ErrorMessage>
      )}
      {errors?.newMessage?.type === "maxLength" && (
        <ErrorMessage>{errors.newMessage.message}</ErrorMessage>
      )}
      <Button>Send message</Button>
    </form>
  );
}

export default SendMessageForm;
