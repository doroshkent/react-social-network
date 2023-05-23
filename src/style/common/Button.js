import styled from "styled-components";

const Button = styled.button`
  display: block;
  background-color: cornflowerblue;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  color: white;
  font-size: 17px;
  font-weight: 400;
  line-height: 130%;
  margin: 5px;
  padding: 8px;
  text-align: center;

  &:hover {
    background-color: steelblue;
    color: white;
    cursor: pointer;
  }
`;

export default Button;
