import Button from "style/common/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMesssage } from "style/common/ErrorMessage";
import { Textarea } from "style/common/CommonInputStyles";

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
      {errors?.newPost?.type === "required" && (
        <ErrorMesssage>Type the text</ErrorMesssage>
      )}
      {errors?.newPost?.type === "maxLength" && (
        <ErrorMesssage>Max length is 40</ErrorMesssage>
      )}
      <Button>Add post</Button>
    </form>
  );
}

export default NewPostForm;
