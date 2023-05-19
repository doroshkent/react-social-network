import styled from "styled-components";

const Input = styled.input`
  display: ${(props) => (props.type === "checkbox" ? "inline" : "block")};
  padding: 5px;
  margin: 7px;
`;

export default Input;
