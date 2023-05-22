import React from "react";
import { useForm } from "react-hook-form";
import Input from "style/common/Input";
import Button from "style/common/Button";
import * as Styled from "style/Login/StyledLogin";
import Textarea from "style/common/Textarea";
import { Error } from "style/common/ErrorMessage";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        placeholder={"Email"}
        {...register("Email", {
          required: "Email is required",
          validate: {
            matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
          },
        })}
      />
      {errors.Email && <Error>{errors.Email.message}</Error>}
      <Textarea
        placeholder={"Password"}
        {...register("Password", { required: "Password is required" })}
      />
      {errors?.Password?.message && <Error>{errors.Password.message}</Error>}
      <Input
        type="checkbox"
        placeholder="Remember me"
        {...register("Remember me", {})}
      />
      Remember me <br />
      <Button>Login</Button>
    </form>
  );
}

function Login() {
  return (
    <Styled.Login>
      <h1>Login</h1>
      <LoginForm />
    </Styled.Login>
  );
}

export default Login;
