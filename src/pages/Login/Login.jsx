import React from "react";
import { useForm } from "react-hook-form";
import Input from "style/common/Input";
import Button from "style/common/Button";
import * as Styled from "style/Login/StyledLogin";
import Textarea from "style/common/Textarea";
import { Error } from "style/common/ErrorMessage";
import { connect } from "react-redux";
import { login } from "redux/authReducer";
import { Navigate } from "react-router-dom";

function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        placeholder={"Email"}
        {...register("email", {
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
        type={"password"}
        {...register("password", { required: "Password is required" })}
      />
      {errors?.Password?.message && <Error>{errors.Password.message}</Error>}
      <Input
        type="checkbox"
        placeholder="Remember me"
        {...register("rememberMe", {})}
      />
      Remember me
      <Button>Login</Button>
    </form>
  );
}

function Login({ isAuth, login }) {
  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe);
  };

  if (isAuth) return <Navigate to={"/profile"} />;

  return (
    <Styled.Login>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </Styled.Login>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
