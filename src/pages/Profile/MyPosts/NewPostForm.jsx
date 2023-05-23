import Textarea from "style/common/Textarea";
import Button from "style/common/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { Error } from "../../../style/common/ErrorMessage";

function NewPostForm({ addPost }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onAddPost = (data) => {
    addPost(data.newPost);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onAddPost)}>
      <Textarea
        placeholder={"New post"}
        {...register("newPost", {
          required: true,
          validate: { maxLength: (v) => v.length < 40 },
        })}
      />
      {errors?.newPost?.type === "required" && <Error>Type the text</Error>}
      {errors?.newPost?.type === "maxLength" && <Error>Max length is 40</Error>}
      <Button>Add post</Button>
    </form>
  );
}

export default NewPostForm;
