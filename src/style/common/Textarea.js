import styled from "styled-components";
import AutosizeTextArea from 'textarea-autosize-reactjs';

const Textarea = styled(AutosizeTextArea)`
  display: block;
  width: 100%;
  max-width: 450px;
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: none;
  color: #24292e;
  font-family: "Comfortaa";
  font-size: 16px;
  line-height: 20px;
  height: 25px;
  padding: 8px 12px;
  resize: none;
  vertical-align: middle;
  margin: 10px 0;
`;

export default Textarea;
