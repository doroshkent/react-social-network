import styled from "styled-components";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import React from "react";

const ErrorMessage = styled.p`
  color: red;
`;

export const Error = ({ children }) => {
  return (
    <ErrorMessage>
      <AiOutlineExclamationCircle style={{ verticalAlign: "middle" }} />
      {children}
    </ErrorMessage>
  );
};
