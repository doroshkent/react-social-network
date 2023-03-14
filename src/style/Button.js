import styled from "styled-components";

const Button = styled.button`
  background-color: cornflowerblue;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: 'Tilt Neon', cursive;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.15385;
  margin-top: 5px;
  margin-bottom: 5px;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  
  &:hover {
    background-color: steelblue;
    color: white;
  }
  
  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`

export default Button;
