import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "style/common/Input";
import Button from "style/common/Button";
import * as Styled from "style/Login/StyledLogin";
import Textarea from "style/common/Textarea";
import { Error } from "style/common/ErrorMessage";
import { connect } from "react-redux";
import { login } from "redux/authReducer";
import { Navigate } from "react-router-dom";

function LoginForm({ login }) {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe);
    if (Error) {
      setServerError("Incorrect Email or Password");
    }
  };

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
      {errors.email && <Error>{errors.email.message}</Error>}
      <Textarea
        placeholder={"Password"}
        type={"password"}
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <Error>{errors.password.message}</Error>}
      <Input
        type="checkbox"
        placeholder="Remember me"
        {...register("rememberMe", {})}
      />
      Remember me
      {serverError && <Error>{serverError}</Error>}
      <Button>Login</Button>
    </form>
  );
}

function Login({ isAuth, login }) {
  if (isAuth) return <Navigate to={"/profile"} />;

  return (
    <Styled.Login>
      <h1>Login</h1>
      <LoginForm login={login} />
    </Styled.Login>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
