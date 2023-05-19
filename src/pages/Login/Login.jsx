import React from "react";
import { useForm } from "react-hook-form";
import Input from "style/common/Input";
import Button from "style/common/Button";
import * as Styled from "style/Login/StyledLogin";
import Textarea from "../../style/common/Textarea";

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
        {...register("Email", { required: true })}
      />
      <Textarea
        placeholder={"Password"}
        {...register("Password", { required: true })}
      />
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
