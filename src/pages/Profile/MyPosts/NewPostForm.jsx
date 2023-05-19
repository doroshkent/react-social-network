import Textarea from "style/common/Textarea";
import Button from "style/common/Button";
import React from "react";
import { useForm } from "react-hook-form";

function NewPostForm({ addPost }) {
  const { register, handleSubmit, reset } = useForm();

  const onAddPost = (data) => {
    addPost(data.newPost);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onAddPost)}>
      <Textarea
        placeholder={"New post"}
        {...register("newPost", { required: true })}
      />
      <Button>Add post</Button>
    </form>
  );
}

export default NewPostForm;
