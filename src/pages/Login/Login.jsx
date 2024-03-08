import React from "react";
import { useForm } from "react-hook-form";
import Button from "style/common/Button";
import * as Styled from "style/Login/StyledLogin";
import { ErrorMessage } from "style/common/ErrorMessage";
import { connect, useSelector } from "react-redux";
import { login } from "redux/authReducer";
import { Navigate } from "react-router-dom";
import { CheckboxInput, Input, Textarea } from "style/common/CommonInputStyles";

function LoginForm({ login, captchaUrl }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm();
  const { isAuth } = useSelector((state) => ({
    isAuth: state.auth.isAuth,
  }));
  if (isAuth) return <Navigate to={"/profile"} />;

  const onSubmit = async ({ email, password, rememberMe, captcha }) => {
    try {
      await login(email, password, rememberMe, captcha);
    } catch (e) {
      setError("server", { message: e.message });
    }
  };

  const handleInput = (fieldName) => {
    clearErrors("server");
    trigger(fieldName);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <small>For demo: <br/>
        email free@samuraijs.com <br/>
        password free </small>
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
        onChange={() => handleInput("Email")}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <Input
        placeholder={"Password"}
        type={"password"}
        {...register("password", { required: "Password is required" })}
        onChange={() => handleInput("Password")}
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <CheckboxInput
        type="checkbox"
        placeholder="Remember me"
        {...register("rememberMe", {})}
      />
      Remember me <br />
      {errors.server && <ErrorMessage>{errors.server.message}</ErrorMessage>}
      {captchaUrl && (
        <>
          <img src={captchaUrl} />
          <Input
            {...register("captcha", { required: "Captcha is required" })}
          />
        </>
      )}
      {errors.captcha && (
        <ErrorMessage>{errors.captcha.message}</ErrorMessage>
      )}
      <Button>Login</Button>
    </form>
  );
}

function Login({ isAuth, login, captchaUrl }) {
  if (isAuth) return <Navigate to={"/profile"} />;

  return (
    <Styled.Login>
      <h1>Login</h1>
      <LoginForm login={login} captchaUrl={captchaUrl} />
    </Styled.Login>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, { login })(Login);
