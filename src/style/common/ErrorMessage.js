import styled from "styled-components";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import React from "react";

const Error = styled.p`
  color: red;
`;

export const ErrorMessage = ({ children }) => {
  return (
    <Error>
      <AiOutlineExclamationCircle style={{ verticalAlign: "middle" }} />
      {children}
    </Error>
  );
};
